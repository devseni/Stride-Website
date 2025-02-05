"use client";

import { pricingTiers } from "@/constants/pricingTiers";
import checkIcon from "@/assets/check.svg";
import Image from "next/image";
import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-5 text-center">
        <div className="section-wrapper">
          <h2 className="section-title md:text-5xl py-2 mx-auto">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex gap-10 mt-14 items-start justify-center flex-wrap">
          {pricingTiers.map((tier: (typeof pricingTiers)[0], index) => (
            <div
              key={index}
              className={cn(
                "card w-full",
                tier.inverse && "bg-black border-black text-white"
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-neutral-400">
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      className="bg-[linear-gradient(to_right,#DD7DDf,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-7">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${tier.monthlyPrice}
                </span>
                <span className="tracking-tight font-medium text-neutral-500">
                  /month
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "btn btn-primary w-full mt-7",
                  tier.inverse && "bg-white text-black"
                )}
              >
                {tier.buttonText}
              </motion.button>

              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex text-sm items-center gap-4">
                    <Image
                      src={checkIcon}
                      alt="check"
                      className={cn(tier.inverse && "invert")}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
