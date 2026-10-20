"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import { LINKS } from "@/lib/constants";

type GuitarPickProps = {
  label: string;
  href: string;
  icon: IconDefinition;
  hoverColor: string;
};

function GuitarPick({ label, href, icon, hoverColor }: GuitarPickProps) {
  const pickAppearance = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 12,
      },
    },
  } satisfies Variants;

  return (
    <motion.div variants={pickAppearance}>
      <Link
        href={href}
        className={cn("flex justify-center items-center size-22 border border-white rounded-tl-[60%] rounded-tr-[50%_100%] rounded-br-[7px] rounded-bl-[100%_50%] rotate-45 hover:text-inherit", hoverColor)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="flex flex-col justify-center items-center rotate-315 ml-1">
          <span className="text-[8px] sm:text-[9px] tracking-[.1rem] font-normal">{label}</span>
          <FontAwesomeIcon className="mr-0.5 size-6 sm:size-8" icon={icon} />
        </div>
      </Link>
    </motion.div>
  );
}

export default function Links() {
  const currentYear = new Date().getFullYear();

  const picksContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      className="flex flex-col h-screen"
      id="links"
    >
      <div className="flex justify-center items-center h-1/2">
        <SectionHeader variant="dark" icon="/icons/links_icon.svg" text="LINKI" iconClassName="size-20"
        />
      </div>

      <footer
        className="relative w-screen flex justify-center h-3/4 sm:h-2/3 bg-[url('/images/footer.webp')] bg-cover bg-center bg-no-repeat bg-fixed elliptical-top"
      >
        <div className="flex justify-center items-center h-full bg-theme-dark/92 w-full backdrop-blur-[1px]">
          <motion.div
            className="flex justify-center items-center flex-wrap gap-x-6 gap-y-10 w-full mx-auto px-4 max-sm:max-w-sm"
            variants={picksContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            {LINKS.map((item) => (
              <GuitarPick
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                hoverColor={item.hoverColor}
              />
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-5 font-extralight tracking-widest text-sm">
          &copy; 2024 - {currentYear} ŁUKASZ ŚLIWIŃSKI
        </div>
      </footer>
    </section>
  );
}
