"use client";

import { motion } from "motion/react";
import SectionHeader from "@/components/SectionHeader";
import Polaroid from "@/components/Polaroid";
import { cn } from "@/lib/utils";
import { BIO } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

type BlockProps = {
  photo: string;
  photoPos: 'left' | 'right';
  photoClass?: string;
  text: string;
}

function Block({ photo, photoPos, photoClass, text }: BlockProps) {
  const photoFadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
  };

  const textFadeUp = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    },
  };
  
  return (
    <div className="grid md:grid-cols-3 gap-4 my-6 lg:my-0">
      <motion.p
        className="md:col-span-2 flex justify-center items-center text-justify px-4 sm:px-10 mx-auto"
        variants={textFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        {text}
      </motion.p>
      <motion.div
        className={cn(
          "relative flex flex-col justify-center mx-auto mt-2 md:mt-0",
          photoPos === 'left' ? 'md:-order-1 md:-rotate-2' : 'md:rotate-2')}
        variants={photoFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
      >
        <FontAwesomeIcon icon={faThumbTack} className="absolute -top-2.5 left-[45%] -rotate-20 size-4" />
        <Polaroid photo={photo} photoClass={photoClass} />
      </motion.div>
    </div>
  );
}

export default function Bio() {
  return (
    <section className="min-h-screen py-16 text-theme-darker max-w-lg  md:max-w-2xl lg:max-w-4xl" id="bio">
      <SectionHeader variant="dark" icon="/icons/bio_icon.svg" text="O MNIE" iconClassName="size-23" />
      <div className="mt-10 md:mt-20">
        {BIO.map((item, idx) => (
          <Block
            key={idx}
            text={item.text}
            photo={item.photo}
            photoPos={idx % 2 !== 0 ? 'right' : 'left'}
            photoClass={item.photoClass}
          />
        ))}
      </div>
    </section>
  );
}