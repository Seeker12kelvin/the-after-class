import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

import logo from "./assets/images/THE-AFTER-CLASS-NEW-LOGO.svg";

const App = () => {
  const container = useRef<HTMLElement>(null);

  // const text = "Coming Soon...";

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".char",
  //       { opacity: 0, y: 10 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.35,
  //         stagger: 0.08,
  //         ease: "power2.out",
  //       },
  //     );
  //   },
  //   { scope: container },
  // );

  return (
    <main
      ref={container}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="The logo of THE AFTER CLASS"
        className="
          w-[70vw]
          max-w-80
          min-w-30
          object-contain
          sm:w-[40vw]
          md:w-[35vw]
          lg:w-[30vw]
        "
      />

      {/* Coming Soon */}
      {/* <p
        className="
          absolute
          bottom-[12%]
          text-center
          text-3xl
          font-medium
          tracking-wide
          text-white
          sm:bottom-[14%]
          sm:text-4xl
          md:bottom-[16%]
          md:text-5xl
          lg:text-6xl
        "
      >
        {text.split("").map((char, index) => (
          <span key={index} className="char inline-block whitespace-pre">
            {char}
          </span>
        ))}
      </p> */}
    </main>
  );
};

export default App;
