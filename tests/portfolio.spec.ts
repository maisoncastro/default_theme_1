import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("navigation leads to real sections and the skip link works", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  for (const label of ["About", "Services", "Projects"]) {
    await page.getByRole("navigation").getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${label.toLowerCase()}$`));
    await expect(page.locator(`#${label.toLowerCase()}`)).toBeInViewport();
  }
  await page.getByRole("navigation").getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page.locator("#contact")).toBeInViewport();
});

test("mobile navigation supports keyboard, selection, outside click, and resize", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  const panel = page.locator("#mobile-navigation");
  await expect(panel).toBeHidden();
  await trigger.click();
  await expect(panel).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await panel.getByRole("link", { name: "Services", exact: true }).click();
  await expect(panel).toBeHidden();
  await expect(page).toHaveURL(/#services$/);
  await trigger.click();
  await page.locator("#services-title").click();
  await expect(panel).toBeHidden();
  await trigger.click();
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(panel).toBeHidden();
});

test("email copying reports success and clipboard failure", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status")).toHaveText("Email copied.");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("nazimsesen@gmail.com");
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", { value: () => Promise.reject(new Error("Clipboard denied")) });
  });
  await page.getByRole("button", { name: "Email address copied" }).click();
  await expect(page.getByRole("status")).toContainText("Couldn't copy.");
  await expect(page.locator(".email-link")).toHaveAttribute("href", "mailto:nazimsesen@gmail.com");
});

test("assets load and content fits phone, tablet, and desktop widths", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const width of [320, 390, 767, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect.poll(() => page.evaluate(() => Array.from(document.images).every((img) => img.complete && img.naturalWidth > 0))).toBe(true);
    const dimensions = await page.evaluate(() => ({ actual: document.documentElement.scrollWidth, viewport: window.innerWidth }));
    expect(dimensions.actual, `Horizontal overflow at ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
    expect(await page.evaluate(() => document.fonts.check('500 24px "Manrope Variable"'))).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("the desktop and open mobile menu have no WCAG AA axe violations", async ({ page }) => {
  await page.goto("/");
  const desktop = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).options({ rules: { "label-content-name-mismatch": { enabled: true } } }).analyze();
  expect(desktop.violations).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  const mobile = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).options({ rules: { "label-content-name-mismatch": { enabled: true } } }).analyze();
  expect(mobile.violations).toEqual([]);
});

test("reduced motion leaves all content visible without entrance animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(await page.locator(".hero-copy").evaluate((element) => getComputedStyle(element).animationName)).toBe("none");
  expect(await page.locator(".hero-work").evaluate((element) => getComputedStyle(element).animationName)).toBe("none");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
