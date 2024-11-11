"use client";

import { useState } from "react";
import styles from "./HomeSlider.module.css";
import Container from "../basic/container/Container";
import ArrowLeftHome from "../../../public/assets/svg/ArrowLeft";
import ArrowRightHome from "../../../public/assets/svg/ArrowRight";
import EgyptLandscape from "../../../public/assets/png/egyptLandscape.png";
import SecondImage from "../../../public/assets/png/bg.png";
import Discover from "../discover/Discover";

export default function HomeSlider() {
  const slides: { id: string; content: string; background: string }[] = [
    {
      id: "slide_1",
      content: "It’s Time To Explore The World",
      background: EgyptLandscape.src,
    },
    {
      id: "slide_2",
      content: "It’s Time To Explore The Worlddd",
      background: SecondImage.src,
    },
    {
      id: "slide_3",
      content: "It’s Time To Explore The World",
      background: EgyptLandscape.src,
    },
    {
      id: "slide_4",
      content: "It’s Time To Explore The World",
      background: EgyptLandscape.src,
    },
    {
      id: "slide_5",
      content: "It’s Time To Explore The World",
      background: EgyptLandscape.src,
    },
    {
      id: "slide_6",
      content: "It’s Time To Explore The World",
      background: EgyptLandscape.src,
    },
    {
      id: "slide_7",
      content: "It’s Time To Explore The World",
      background: EgyptLandscape.src,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (direction: "next" | "prev") => {
    if (isTransitioning) return; 

    setIsTransitioning(true); 

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;
      if (direction === "next") {
        newIndex = (prevIndex + 1) % slides.length;
      } else {
        newIndex = (prevIndex - 1 + slides.length) % slides.length;
      }
      return newIndex;
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const nextSlide = () => handleSlideChange("next");
  const prevSlide = () => handleSlideChange("prev");

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={styles.slider}
      style={{
        backgroundImage: `url(${currentSlide.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease", // Smooth background transition
      }}
    >
<div className={styles.slides}>
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={styles.slide}
      style={{
        display: index === currentIndex ? "block" : "none", // Показываем только активный слайд
        zIndex: index === currentIndex ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      <p>{slide.content}</p>
    </div>
  ))}
</div>

      <Container>
        <div className={styles.slideDiv}>
          <div className={styles.arrows}>
            <div
              className={styles.prev}
              onClick={prevSlide}
              style={{
                pointerEvents: isTransitioning ? "none" : "auto", // Disable arrow during transition
              }}
            >
              <ArrowLeftHome className={styles.arrow} />
            </div>
            <div
              className={styles.next}
              onClick={nextSlide}
              style={{
                pointerEvents: isTransitioning ? "none" : "auto", // Disable arrow during transition
              }}
            >
              <ArrowRightHome className={styles.arrow} />
            </div>
          </div>
          <div className={styles.line}></div>
          <h2>{(currentIndex + 1).toString().padStart(2, "0")}</h2>
        </div>
        <div className={styles.discover}>
          <Discover />
        </div>
      </Container>
    </div>
  );
}
