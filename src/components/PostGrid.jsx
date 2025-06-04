import React from "react";
import "/src/index.css"; // If you have styles, import them

// STEP 1: Card Data
const cardsData = [
  {
    image: "/src/assets/Images/Mask group-5.png",
    title: "Val Thorens",
    liked: false,
  },
  {
    image: "/src/assets/Images/Mask group-2.png",
    title: "Restaurant-terrace",
    liked: false,
  },
  {
    image: "/src/assets/Images/Mask group-3.png",
    title: "An outdoor cafe",
    liked: false,
  },
  {
    image: "/src/assets/Images/Mask group.png",
    title: "A very long bridge over the forest...",
    liked: false,
  },
  {
    image: "/src/assets/Images/Mask group-1.png",
    title: "Tunnel with morning light",
    liked: false,
  },
  {
    image: "/src/assets/Images/Mask group-4.png",
    title: "Mountain house",
    liked: false,
  },
];

// STEP 2: Card Component
const Card = ({ image, title }) => {
  return (
    <div className="each-card">
      <div className="cardImg-div">
        <img src={image} alt={title} className="card-img" />
      </div>
      <div className="text-icon">
        <p>{title}</p>
        <svg
          className="heart-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          viewBox="0 0 256 256"
        >
          <path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05L114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z" />
        </svg>
      </div>
    </div>
  );
};

// STEP 3: Main PostGrid Component
const PostGrid = () => {
  return (
    <>
      <section className="section-grid" id="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </section>
      <hr />
    </>
  );
};

export default PostGrid;
