"use client";

import { useState } from "react";
import styles from "./HomeSlider.module.css";
import Container from "../basic/container/Container";
import ArrowLeftHome from "../../../public/assets/svg/ArrowLeft";
import ArrowRightHome from "../../../public/assets/svg/ArrowRight";
import EgyptLandscape from "../../../public/assets/png/egyptLandscape.png";
import SecondImage from "../../../public/assets/png/bg.png"
import Discover from "../discover/Discover";
export default function HomeSlider() {
  const slides: {id: string, content: string,background: string}[] = [
    { id: "slide_1", content: "It’s Time To Explore The World", background: EgyptLandscape.src },
    { id: "slide_2", content: "It’s Time To Explore The World", background: SecondImage.src },
    { id: "slide_3", content: "It’s Time To Explore The World", background: EgyptLandscape.src},
    { id: "slide_4", content: "It’s Time To Explore The World", background: EgyptLandscape.src },
    { id: "slide_5", content: "It’s Time To Explore The World", background: EgyptLandscape.src },
    { id: "slide_6", content: "It’s Time To Explore The World", background: EgyptLandscape.src },
    { id: "slide_7", content: "It’s Time To Explore The World", background: EgyptLandscape.src },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSlideChange = (direction: "next" | "prev") => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return (prevIndex + 1) % slides.length;
        } else {
          return (prevIndex - 1 + slides.length) % slides.length;
        }
      });
      setIsFading(false);
    }, 500);
  };

  const nextSlide = () => handleSlideChange("next");
  const prevSlide = () => handleSlideChange("prev");

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={styles.slider}
      style={{
        backgroundImage: `url(${currentSlide.background})`, // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: isFading ? 0.8 : 1,
        transition: "opacity .3s ease, background-image 0.5s ease",
      }}
    >
      <div className={styles.slides}>
        {slides.map((slide: any, index: number) => (
          <div
            key={slide.id}
            className={styles.slide}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <Container>
        <div className={styles.slideDiv}>
          <div className={styles.arrows}>
            <div className={styles.prev} onClick={prevSlide}>
              <ArrowLeftHome className={styles.arrow} />
            </div>
            <div className={styles.next} onClick={nextSlide}>
              <ArrowRightHome className={styles.arrow} />
            </div>
          </div>
          <div className={styles.line}></div>
          <h2>{(currentIndex + 1).toString().padStart(2, "0")}</h2>
        </div>
        <div className={styles.discover}>
          <Discover/>
        </div>
      </Container>
    </div>
  );
}
