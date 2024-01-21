import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 5 ,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const hotelCards = [
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAMZlU35YKUcwhnA5RKva1OVwbzP4v2t-ab4bofTNH0QxIwxg4rx8HPArp7mmbjVKno4&usqp=CAU",
      title: "HTML 5",
      description: "HTML is used to structure our design",
      features: ["Responsiveness", "Semantic"], 
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/CSS_text_representation_%28square%29.png",
      title: "CSS3",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      features: ["styling", ""],
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      title: "Javascript",
      description: "Javascript",

      features: ["", "", ""],
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6zDdxPqn0fHvsdndNITGtgv0uwS5dPJQ4VjImvhsPw&s",
      title: "React",
      description: "React",
      features: ["", "", "", ""],
    },
    // {
    //   imageSrc:
    //     "https://www.logo.wine/a/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.svg",
    //   title: "Redux",
    //   description: "Redux",
    //   features: ["", "", "", ""],
    // },
    // {
    //   imageSrc:
    //     "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkMzaGToE4y4Q0D7VcTJC8gEIc4Lwxf93KzLql5iDPQ&s",
    //   title: "Tailwind",
    //   description: "Tailwind",
    //   features: ["", "", "", ""],
    // },
    {
        imageSrc:
          "https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",
        title: "github",
        description: "Github",
        features: ["", "", "", ""],
      },
  ];
  

  return (
    <div className="" id="skills">
      <div className="text-4xl font-bold text pt-8">
        <span>My </span>
        <span className="text-blue-400">Skills</span>
      </div>

      <div className="content">
            <div className="controls">
            <button onClick={sliderRef?.slickPrev}>
                <FaChevronLeft />
            </button>
            <button onClick={sliderRef?.slickNext}>
                <FaChevronRight />
            </button>
            </div>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {hotelCards.map((card, index) => (
            <div key={index} className="card">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="card-image rounded-[2.5rem]"
                width="200"
                height="200"
        
              />
              <div className="text-info">
                <div className="card-header">
                  {/* <h2>{card.title}</h2>
                <span>{card.pricingText}</span> */}
                </div>
                <p>{card.description}</p>
                <ul>
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Skills;
