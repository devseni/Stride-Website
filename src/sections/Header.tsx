"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import mainLogo from "@/assets/logo-main.png";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#product", label: "Product" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#join", label: "Join" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 0, 0.36, 1],
      },
    },
  };

  const linksVar = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const containerVar = {
    initial: {
      transition: {
        staggerChildren: 0.9,
      },
    },
    open: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="hidden md:flex bg-black text-white  items-center justify-center py-3 gap-2">
        <Link href="#">
          <div className="flex items-center justify-center gap-1 group">
            <p>Get started for free</p>
            <Image
              src={ArrowRight}
              alt="arrow"
              className="group-hover:translate-x-1 transition-transform invert"
            />
          </div>
        </Link>
      </div>
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Image src={mainLogo} alt="logo" width={150} height={60} />
        <Image
          src={MenuIcon}
          alt="MenuIcon"
          className="md:hidden cursor-pointer"
          width={35}
          height={35}
          onClick={toggleMenu}
        />
        <nav className="hidden md:flex gap-6 text-black/60 items-center ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black text-white px-4 py-2 rounded-lg tracking-tight"
          >
            Get for free
          </motion.button>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-slate-300 origin-top w-full h-screen fixed top-0 left-0"
          >
            <div className="flex items-center justify-between p-5">
              <Image src={mainLogo} alt="logo" width={120} height={60} />
              <button onClick={toggleMenu} className="text-xl cursor-pointer">
                Close
              </button>
            </div>

            <motion.nav
              variants={linksVar}
              initial="initial"
              animate="open"
              className="flex flex-col gap-4 p-5 w-full h-[calc(100dvh-5rem)] items-center justify-center"
            >
              <motion.div
                variants={containerVar}
                initial="initial"
                animate="open"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden"
                    variants={{
                      initial: { y: 50, opacity: 0 },
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-5xl leading-8 font-dmSerif"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>{" "}
    </header>
  );
};

export default Header;
