"use client";

import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY: any = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateStar: any = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={sectionRef}
      id="join"
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="section-wrapper relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.img
            src={starImage.src}
            alt="star image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY, rotate: rotateStar }}
          />
          <motion.img
            src={springImage.src}
            alt="spring image"
            width={360}
            height={360}
            className="absolute -right-[330px] -top-[19px]"
            style={{ translateY }}
          />

          <div className="flex gap-1 items-center mt-[30px]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-primary"
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
      </div>
    </section>
  );
};

export default CallToAction;
