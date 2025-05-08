import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "We believe that strong communities are the foundation of lasting change. Through our community development efforts, we empower individuals, families, and local leaders to create solutions that uplift everyone. By focusing on education, health, and economic growth, we help build resilient, thriving communities where everyone has the opportunity to flourish."
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "We believe that trust is built on honesty and openness. That’s why we are fully committed to transparency in everything we do — from how we use donations to how we measure impact. Our supporters and donors can feel confident knowing that their contributions are making a real difference, every step of the way.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "We believe that every effort counts — and we make sure to measure it. By tracking the outcomes of our programs and initiatives, we ensure that every donation and volunteer hour creates real, meaningful change. Through regular reporting and data-driven insights, we stay focused on what works, so we can continuously improve and maximize our impact.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;