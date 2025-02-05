import { testimonialsData } from "@/constants/testimonialsData";
import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

interface Props {
  columnData: typeof testimonialsData;
  className?: string;
  duration?: number;
}

const TestimonialsColumn = ({ columnData, className, duration }: Props) => {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6  pb-6 -translate-y-1/2"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {columnData.map((testimonial) => (
              <div key={testimonial.name} className="card bg-white">
                <div>{testimonial.text}</div>
                <div className="flex items-center gap-2 text-left mt-5">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />

                  <div className="flex flex-col">
                    <span className="font-medium tracking-tight leading-5">
                      {testimonial.name}
                    </span>
                    <span className="leading-5 tracking-tight text-neutral-500">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
