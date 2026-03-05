import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from "../constants";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });
    gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });
    gsap.set(".entrance-message", { marginTop: "0vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section", //we want to trigger the animation when the hero section is in view
        start: "top top", //we want the animation to start when the hero section is in view
        end: "+=200%", //we want the animation to end when the user has scrolled 200% of the hero section
        scrub: 2.5, //we want the animation to be linked to the scroll position, and we want it to be smooth
        pin: true, //It will freeze the hero section in place while the animation is playing, creating a more immersive experience
      },
    });

    /*************  ✨ Windsurf Command 🌟  *************/
    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" })
      .to(".mask-wrapper", { maskSize, ease: "power1.inOut" }, "<") //we want the mask size animation to start at the same time as the fade out and scale out animation
      .to(".mask-wrapper", { opacity: 0 })
      .to(
        ".overlay-logo",
        {
          opacity: 1,
          onComplete: () => {
            gsap.to(".overlay-logo", { opacity: 0 });
          },
        },
        "<",
      ) //we want the overlay logo to fade in after the mask wrapper has faded out
      .to(
        ".entrance-message",
        {
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<",
      );
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div>
          <img src="/images/play.png" alt="play" className="w-7 ml-8" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img
          src="/images/big-hero-text.svg"
          alt="hero bottom text"
          className="overlay-logo"
        />
      </div>
      <ComingSoon />
    </section>
  );
};

export default Hero;
