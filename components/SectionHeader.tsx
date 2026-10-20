"use client";

import { motion } from "motion/react"; 
import SvgIcon from "./SvgIcon";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  variant: 'light' | 'dark';
  icon: string;
  text: string;
  iconClassName: string;
}

export default function SectionHeader({ variant, icon, text, iconClassName }: SectionHeaderProps) {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };
  
  return (
    <motion.div
      className={cn("flex flex-col items-center", variant === 'dark' ? 'text-theme-dark' : '')}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
    >
      <SvgIcon src={icon} className={cn("mb-4", iconClassName)}/>
      <h3 className="text-[32px] text-center tracking-[.3rem]">{text}</h3>
      <div className="h-0.75 w-8 mt-3 rounded-full gradient"></div>
    </motion.div>
  );
}