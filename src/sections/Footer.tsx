import logoWhite from "@/assets/logo-main-white.png";
import socialInstagram from "@/assets/social-insta.svg";
import socialLinkedin from "@/assets/social-linkedin.svg";
import socialPin from "@/assets/social-pin.svg";
import socialX from "@/assets/social-x.svg";
import socialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#", text: "About" },
  { href: "#", text: "Features" },
  { href: "#", text: "Customers" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Help" },
  { href: "#", text: "Careers" },
];

const socialLinks = [
  { src: socialX, alt: "socialX", href: "#" },
  { src: socialInstagram, alt: "socialInstagram", href: "#" },
  { src: socialLinkedin, alt: "socialLinkedin", href: "#" },
  { src: socialPin, alt: "socialPin", href: "#" },
  { src: socialYoutube, alt: "socialYoutube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto">
        <div className="inline-flex relative before:content-[''] before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logoWhite}
            alt="logo"
            width={120}
            height={40}
            className="relative"
          />
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center gap-6 my-6">
          {socialLinks.map((social, index) => (
            <Link key={index} href={social.href}>
              <Image
                key={index}
                src={social.src}
                alt={social.alt}
                width={30}
                height={30}
                className="invert"
              />
            </Link>
          ))}
        </div>

        <p>
          © {new Date().getFullYear()} Stride Company, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
