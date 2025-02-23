"use client"; // 👈 Add this at the top
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });
  const [mounted, setMounted] = useState(false); // Add a state to track mounting

  useEffect(() => {
    // This will run only after the component is mounted on the client
    setMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.015;
      const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.015;
      setOffset({ offsetX, offsetY });
    }
  }, [mousePosition]);

  // Array of logo sources
  const logos = [
    "/bear.png",
    "/kamm.png",
    "/oranges.png",
    "/tacos.png",
    "/bear.png",
    "/kamm.png",
    "/oranges.png",
    "/tacos.png",
  ];

  if (!mounted) {
    // If the component is not mounted yet, render a fallback or the initial state
    return (
      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        {/* Static placeholder content while loading */}
        <div className="relative text-white text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Club</h1>
          <p className="mt-2 text-lg md:text-xl">Experience our pop-up food</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Floating Illustrations */}
      {logos.map((logo, index) => {
        // Generate random position for each logo
        const positionX = Math.random() * 100;
        const positionY = Math.random() * 100;

        return (
          <div
            key={index}
            className="absolute transform transition-all duration-500 ease-out"
            style={{
              left: `${positionX}%`,
              top: `${positionY}%`,
              transform: `translate(-50%, -50%) translate(${offset.offsetX}px, ${offset.offsetY}px)`,
            }}
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="w-32 h-32" />
          </div>
        );
      })}

      {/* Text Content */}
      <div className="relative text-white text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to the Club</h1>
        <p className="mt-2 text-lg md:text-xl">Experience our pop-up food</p>
      </div>
    </section>
  );
}
