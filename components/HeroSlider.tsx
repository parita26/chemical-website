"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    text: "Advanced Chemical Solutions",
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    text: "Industrial Manufacturing",
  },
  {
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    text: "Laboratory Excellence",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="slide"
          style={{ transform: `translateX(${(i - index) * 100}%)` }}
        >
          <img src={slide.img} />
          <h1 className="hero-text">{slide.text}</h1>
        </div>
      ))}
    </div>
  );
}