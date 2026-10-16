import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type AnimTargetProp = {
  class: string;
  first: {
    yPercent: number;
    xPercent: number;
  };
  second: {
    yPercent: number;
    xPercent: number;
  };
};

const Logo = () => {
  const diagonalRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  const animTarget: AnimTargetProp[] = [
    {
      class: ".first",
      first: { yPercent: -600, xPercent: 0 },
      second: { yPercent: -980, xPercent: -80 },
    },
    {
      class: ".second",
      first: { yPercent: -400, xPercent: -40 },
      second: { yPercent: -780, xPercent: -180 },
    },
    {
      class: ".third",
      first: { yPercent: -300, xPercent: -80 },
      second: { yPercent: -600, xPercent: -280 },
    },
    {
      class: ".fourth",
      first: { yPercent: -200, xPercent: -120 },
      second: { yPercent: -420, xPercent: -380 },
    },
    {
      class: ".fifth",
      first: { yPercent: -100, xPercent: -160 },
      second: { yPercent: -230, xPercent: -480 },
    },
    {
      class: ".sixth",
      first: { yPercent: 0, xPercent: -200 },
      second: { yPercent: -30, xPercent: -580 },
    },
  ];

  useGSAP(
    () => {
      const animDuration = { duration: 0.1 };
      gsap.set(".text-animation", { opacity: 0, xPercent: 100 });
      const tl = gsap.timeline();

      tl.to([".first", ".second", ".third", ".fourth", ".fifth", ".sixth"], {
        marginLeft: 10,
        ...animDuration,
      });
      tl.to(diagonalRef.current, {
        yPercent: -650,
        rotation: -70,
        ...animDuration,
      });
      animTarget.map((data: AnimTargetProp) =>
        tl.to(data.class, {
          yPercent: data.second.yPercent,
          xPercent: data.second.xPercent,
          ...animDuration,
        }),
      );
      tl.to(".text-animation", { opacity: 1, xPercent: -200, duration: 0.5 })
        .to(
          [diagonalRef.current],
          {
            xPercent: 100,
            ...animDuration,
          },
          "<",
        )
        .to(
          [".container"],
          {
            xPercent: 30,
            ...animDuration,
          },
          "<",
        );
    },
    { scope: logoRef },
  );

  return (
    <div
      ref={logoRef}
      className="flex w-fit items-end max-xl:scale-75 max-lg:scale-60"
    >
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
