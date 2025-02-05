"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { useScroll, useTransform } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY: any = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="pt-8 pb-20 md:pt-20 lg:pt-10 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip"
    >
      <div className="container mx-auto px-5">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 w-fit">
              Pathway to Productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get for free
              </motion.button>
              <button className="btn btn-text flex items-center gap-1 group">
                <span>Learn more</span>
                <Image
                  src={ArrowRight}
                  alt="arrow"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:w-1/2 relative">
            <motion.img
              src={cogImage.src}
              alt=""
              className="md:absolute md:h-full md:w-auto md:max-w-none lg:left-0 lg:right-10"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt=""
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY: translateY }}
            />
            <motion.img
              src={noodleImage.src}
              alt=""
              width={220}
              height={220}
              className="hidden lg:block top-[524px] left-[530px] md:absolute rotate-[30deg]"
              style={{ translateY: translateY, rotate: 30 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
