"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      ref={sectionRef}
      id="product"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center">
          <div className="section-wrapper">
            <div className="tag w-fit">Boost your productivity</div>
            <h2 className="section-title md:text-5xl py-2">
              A more effective way to track progress
            </h2>
            <p className="section-description">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
          </div>

          <div className="relative mt-6">
            <Image src={productImage} alt="product image" />
            <motion.img
              src={pyramidImage.src}
              alt="pyramid image"
              width={262}
              height={262}
              className="hidden md:block absolute -right-36 -top-32"
              style={{ translateY }}
            />
            <motion.img
              src={tubeImage.src}
              alt="tube image"
              width={248}
              height={248}
              className="hidden md:block absolute bottom-24 -left-36"
              style={{ translateY, rotate }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
