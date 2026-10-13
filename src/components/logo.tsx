import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Logo = () => {
  const diagonalRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const linePosition = {
        first: -600,
        second: -400,
        third: -300,
        fourth: -200,
        fifth: -100,
        sixth: 0,
      };

      gsap.set(".text-animation", { opacity: 0, xPercent: 100 });
      const tl = gsap.timeline();

      tl.to([".first", ".second", ".third", ".fourth", ".fifth", ".sixth"], {
        marginLeft: 10,
        duration: 0.25,
      })
        .to(diagonalRef.current, {
          yPercent: -400,
          rotation: -40,
          duration: 0.25,
        })
        .to(".first", {
          yPercent: linePosition.first,
          xPercent: -0,
          duration: 0.25,
        })
        .to(".second", {
          yPercent: linePosition.second,
          xPercent: -40,
          duration: 0.25,
        })
        .to(".third", {
          yPercent: linePosition.third,
          xPercent: -80,
          duration: 0.25,
        })
        .to(".fourth", {
          yPercent: linePosition.fourth,
          xPercent: -120,
          duration: 0.25,
        })
        .to(".fifth", {
          yPercent: linePosition.fifth,
          xPercent: -160,
          duration: 0.25,
        })
        .to(".sixth", {
          yPercent: linePosition.sixth,
          xPercent: -200,
          duration: 0.25,
        })
        .to(diagonalRef.current, {
          yPercent: -650,
          rotation: -70,
          duration: 0.25,
        })
        .to(
          ".first",
          {
            yPercent: -980,
            xPercent: -80,
            duration: 0.25,
          },
          "<",
        )
        .to(
          ".second",
          {
            yPercent: -780,
            xPercent: -180,
            duration: 0.25,
          },
          "<",
        )
        .to(
          ".third",
          {
            yPercent: -600,
            xPercent: -280,
            duration: 0.25,
          },
          "<",
        )
        .to(
          ".fourth",
          {
            yPercent: -420,
            xPercent: -380,
            duration: 0.25,
          },
          "<",
        )
        .to(
          ".fifth",
          {
            yPercent: -230,
            xPercent: -480,
            duration: 0.25,
          },
          "<",
        )
        .to(
          ".sixth",
          {
            yPercent: -30,
            xPercent: -580,
            duration: 0.25,
          },
          "<",
        )
        .to(".text-animation", { opacity: 1, xPercent: -200, duration: 0.5 })
        .to(
          [diagonalRef.current],
          {
            xPercent: 100,
            duration: 0.25,
          },
          "<",
        )
        .to(
          [".container"],
          {
            xPercent: 30,
            duration: 0.25,
          },
          "<",
        );
    },
    { scope: logoRef },
  );

  return (
    <div ref={logoRef} className="flex w-fit items-end">
      <div className="flex h-fit">
        <div ref={diagonalRef} className="w-60 h-3 bg-white" />
        <div className="container flex">
          <div className="first w-20 h-4 bg-white" />
          <div className="second w-20 h-4 bg-white" />
          <div className="third w-20 h-4 bg-white" />
          <div className="fourth w-20 h-4 bg-white" />
          <div className="fifth w-20 h-4 bg-white" />
          <div className="sixth w-20 h-4 bg-white" />
        </div>
      </div>
      <h1 className="text-animation uppercase flex flex-col gap-4 text-5xl text-white">
        THE <span className="">AFTER</span> <span className="">CLASS</span>
      </h1>
    </div>
  );
};

export default Logo;
