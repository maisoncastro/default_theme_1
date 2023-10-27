type HamburgerIconProps = {
  onClick: () => void;
};

function HamburgerIcon({ onClick }: HamburgerIconProps) {
  return (
    <div className="hamburger-icon" onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default HamburgerIcon;
