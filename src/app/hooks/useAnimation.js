import gsap from "gsap";
import { useRef, useEffect } from "react";
export const useAnimation = () => {
  const timeline = useRef(null);
  const firstTimeline = useRef(null);
  useEffect(() => {
    gsap.set(".screen-two", { opacity: 0 });
    gsap.set(".fader", { opacity: 0 });
    gsap.set(".screen-three", { opacity: 0 });

    timeline.current = gsap.timeline();

    timeline.current
      .to(".screen-one div div", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      })
      .to(".screen-one img", {
        scale: 1.1,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      })
      .to(".screen-one", {
        duration: 1,
        onComplete: () => {
          gsap.to(".screen-one", {
            opacity: 0,
            duration: 0.5,
          });
        },
      })
      .to(".fader", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(".screen-one", {
        y: 1000,
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(".fader", {
        y: 1000,
        duration: 1.5,
        ease: "power2.inOut",
        delay: -1.5,
      })
      .to(".screen-two", {
        opacity: 1,
        duration: 0.5,
        delay: -0.5,
      });
  }, []);

  //  second and third screen animations
  useEffect(() => {
    gsap.set(".screen-three", { opacity: 0, y: 100 });
    gsap.set(".bike-image", { y: -200, opacity: 0 });
    gsap.set(".icon-power", { y: 100, opacity: 0 });
    gsap.set(".timerbox", { y: 100, opacity: 0 });
    gsap.set(".timerboxa", { y: 50, opacity: 0 });
    gsap.set(".charginbox", { x: -100, opacity: 0 });
    gsap.set(".members", { x: 100, opacity: 0 });
    gsap.set(".temperaturebox", { y: 50, opacity: 0 });

    firstTimeline.current = gsap.timeline({ paused: true });

    firstTimeline.current
      .to(".herocontent h1", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(
        ".herocontent h2",
        {
          x: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.3"
      )
      .to(
        ".herocontent p",
        {
          x: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.3"
      )
      .to(
        ".motocycle",
        {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.3"
      )
      .to(
        ".btn",
        {
          x: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.3"
      )
      .to(
        ".screen-two",
        {
          opacity: 0,
          duration: 0.3,
        },
        "-=0.2"
      )
      .to(
        ".screen-three",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.1"
      )
      .to(
        ".bike-image",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )
      .to(
        ".icon-power",
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .to(
        ".timerbox",
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        ".timerboxa",
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        ".charginbox",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        ".members",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        ".temperaturebox",
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
  }, []);

  const startFirstTimeline = () => {
    console.log("button clicked");
    if (firstTimeline.current) {
      firstTimeline.current.play();
    }
  };
  return { timeline, startFirstTimeline };
};
