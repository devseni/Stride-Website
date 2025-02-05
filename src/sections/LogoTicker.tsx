"use client";

import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import quantomLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import * as motion from "motion/react-client";

const logos = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantomLogo, alt: "quantom Logo" },
  { src: echoLogo, alt: "echo Logo" },
  { src: celestialLogo, alt: "celestial Logo" },
  { src: pulseLogo, alt: "pulse Logo" },
  { src: apexLogo, alt: "apex Logo" },
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantomLogo, alt: "quantom Logo" },
  { src: echoLogo, alt: "echo Logo" },
  { src: celestialLogo, alt: "celestial Logo" },
  { src: pulseLogo, alt: "pulse Logo" },
  { src: apexLogo, alt: "apex Logo" },
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantomLogo, alt: "quantom Logo" },
  { src: echoLogo, alt: "echo Logo" },
];

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,black,transparent)]">
          <motion.div
            className="flex items-center gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
