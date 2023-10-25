// import { useEffect, useRef } from "react";

function Services() {
  // const rightGridRef = useRef(null);

  // useEffect(() => {
  //   const rightGridElement = rightGridRef.current;
  //   const cards = Array.from(
  //     rightGridElement.getElementsByClassName("services-card")
  //   );

  //   const handleScroll = () => {
  //     cards.forEach((card, index) => {
  //       const cardPosition = card.getBoundingClientRect().top;
  //       if (cardPosition < window.innerHeight / 2) {
  //         card.classList.add("stacked");
  //       } else {
  //         card.classList.remove("stacked");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const services = [
    {
      id: 1,
      icon: "/icon-2.svg/",
      title: "Web Development",
      description:
        "Navigate the digital realm with ease through our comprehensive web development services. We offer reliable hosting solutions, intuitive Content Management Systems (CMS) to empower you with control over your content, and domain management to establish your unique online identity. Our seamless service ensures your website remains accessible, manageable, and distinctive.",
    },
    {
      id: 2,
      icon: "/icon-1.svg/",
      title: "UX/UI Design",
      description:
        "Transform your ideas into intuitive and visually compelling digital experiences with our UX/UI Design services. We focus on creating user-centric designs that are not only aesthetically pleasing but also enhance usability and user satisfaction. From wireframes to interactive prototypes, we ensure every design element resonates with your brand while providing a seamless user journey across all digital touchpoints.",
    },
    {
      id: 3,
      icon: "/icon-3.svg/",
      title: "Branding",
      description:
        "Carve out a distinct identity in the digital landscape with our branding services. We meticulously craft a coherent and resonant brand narrative that sets you apart from the competition. From logo design to brand guidelines, we ensure consistency across all touchpoints to build a recognizable and trustworthy brand persona. Engage and connect with your audience through a brand that reflects your vision and values.",
    },
  ];

  return (
    <>
      <div className="page-padding">
        <div className="main-services-container">
          <div className="services-grid">
            <div className="services-grid-left">
              <div className="services-grid-left-content">
                <h4>What we offer</h4>
                <h2>
                  Your next
                  <br /> creative leap.
                </h2>
                <div className="description">
                  Embark on a transformative journey with our blend of
                  creativity and technical expertise, nurturing your next
                  innovation. We redefine the achievable, crafting digital
                  experiences that engage your audience and drive growth.
                </div>
              </div>
            </div>
            <div
              className="services-grid-right"
              // ref={rightGridRef}
            >
              {services.map((service) => (
                <div className="services-card">
                  <div key={service.id} className="service-item">
                    <img src={service.icon} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
