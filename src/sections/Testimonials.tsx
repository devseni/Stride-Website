"use client";

import { testimonialsData } from "@/constants/testimonialsData";
import TestimonialsColumn from "./TestimonialsColumn";

const Testimonials = () => {
  const firstColumn = testimonialsData.slice(0, 3);
  const secondColumn = testimonialsData.slice(3, 6);
  const thirdColumn = testimonialsData.slice(6, 9);

  return (
    <section id="testimonials" className=" bg-white">
      <div className="section-wrapper container mx-auto ">
        <div className="tag w-fit">Version 2.0 is here</div>
        <h2 className="section-title md:text-5xl py-2">What our users say</h2>
        <p className="section-description">
          From intuitive design to powerful features, our app has become an
          essential tool for users around the world.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
        <TestimonialsColumn columnData={firstColumn} duration={15} />
        <TestimonialsColumn
          columnData={secondColumn}
          className="hidden md:block"
          duration={19}
        />
        <TestimonialsColumn
          columnData={thirdColumn}
          className="hidden lg:block"
          duration={17}
        />
      </div>
    </section>
  );
};

export default Testimonials;
