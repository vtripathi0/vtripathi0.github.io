"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Headline stagger animation
      gsap.from(".headline span", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
      });

      // Stats stagger animation
      gsap.from(".stat", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.6,
        ease: "power2.out",
      });

      // Scroll-driven animation
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -200,
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const text = "WELCOME ITZFIZZ".split("");

  return (
    <section
      ref={heroRef}
      className="h-screen relative flex flex-col justify-center items-center text-center bg-black text-white overflow-hidden"
    >
      <h1 className="headline text-5xl md:text-7xl tracking-[1rem] font-light mb-10">
        {text.map((char, i) => (
          <span key={i} className="inline-block">
            {char}
          </span>
        ))}
      </h1>

      <div className="flex gap-12 mb-16">
        <div className="stat text-center">
          <h2 className="text-4xl font-semibold">85%</h2>
          <p className="text-gray-400">User Engagement</p>
        </div>
        <div className="stat text-center">
          <h2 className="text-4xl font-semibold">120K</h2>
          <p className="text-gray-400">Active Users</p>
        </div>
        <div className="stat text-center">
          <h2 className="text-4xl font-semibold">4.9</h2>
          <p className="text-gray-400">App Rating</p>
        </div>
      </div>

      <img
        ref={imageRef}
        src="/car.png"
        alt="Car"
        className="absolute bottom-0 w-[600px] object-contain will-change-transform"
      />
    </section>
  );
}