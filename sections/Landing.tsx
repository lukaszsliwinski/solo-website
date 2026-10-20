"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SvgIcon from "@/components/SvgIcon";
import { TITLE, MENU_ITEMS } from '@/lib/constants';

export default function Landing() {
  return (
    <section className="h-screen" id="landing">
      <motion.div
        className="flex justify-center items-center w-screen h-[90vh] bg-[url('/images/landing_mobile.webp')] sm:bg-[url('/images/landing.webp')] max-sm:bg-center bg-cover bg-no-repeat bg-fixed elliptical-bottom"
        initial={{ filter: "brightness(0)" }}
        animate={{ filter: "brightness(1)" }}
        transition={{
          duration: 2.5,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center gap-8 bg-theme-dark/80 lg:bg-theme-dark/80 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition = {{ 
            duration: 0.01,
            delay: 0.3
          }}
        >
          <SvgIcon src="/icons/logo.svg" className="size-44 stroke-1" />
          <motion.hgroup
            className="flex flex-col max-w-2xl text-center uppercase tracking-[0.2em] gap-4 border-t border-b border-theme-light mx-2 sm:mx-0 overflow-y-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "circOut",
            }}
          >
            <h1 className="text-3xl sm:text-4xl mt-8">ŁUKASZ ŚLIWIŃSKI</h1>
            <h2 className="text-[13px] sm:text-sm sm:leading-7 mb-8 px-2">{TITLE}</h2>
          </motion.hgroup>
          <div className="flex gap-4 mb-8">
            {MENU_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="w-20 sm:w-24 border border-theme-light py-1 sm:py-2 text-[13px] sm:text-sm text-center rounded  hover:bg-theme-main/20">{item.label}</Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
