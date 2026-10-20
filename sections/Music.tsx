"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import { ALBUMS } from "@/lib/constants";

type AlbumProps = {
  cover: string,
  title: string,
  year: string,
  text: string,
  src: string,
  links: {
    name: string,
    href: string,
    color: string,
    icon: IconDefinition,
  }[],
}

function Album({ cover, title, year, text, src, links }: AlbumProps) {
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
    <div className="grid md:grid-cols-2 mb-20 md:max-lg:pr-4">
      <motion.div
        className="max-md:order-1 flex max-md:justify-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <iframe
          className="w-76 sm:w-84 h-120 shadow-lg"
          allow="autoplay"
          src={src}
        >
        </iframe>
      </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <div className="flex max-md:items-center max-md:flex-col gap-4">
          <div className="w-45 h-45 md:w-30 md:h-30">
            <Image
              src={cover}
              width={180}
              height={180}
              alt="cover"
              className="shadow-lg"
            />
          </div>
          <hgroup className="max-md:text-center font-normal tracking-[.15rem]">
            <h4 className="text-3xl mb-1">{title}</h4>
            <h5 className="text-lg">{year}</h5>
          </hgroup>
        </div>
        <p className="max-md:max-w-lg max-md:mx-auto max-sm:px-4 max-md:px-10 mt-4 text-justify">{text}</p>
        <h6 className="mt-4 text-center font-semibold tracking-[.15rem]">posłuchaj:</h6>
        <div className="flex gap-5 justify-center mt-2 max-md:mb-8">
          {links.map((link) => (
            <Link
              key={link.name}
              title={link.name}
              href={link.href}
              className={cn(link.color, "hover:opacity-75")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="size-8" icon={link.icon} />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Music() {
  return (
    <section className="w-screen min-h-screen py-16 bg-theme-dark/93" id="music">
      <SectionHeader variant="light" icon="/icons/music_icon.svg" text="MUZYKA" iconClassName="size-30" />
      <div className="mt-16 md:mt-20 max-w-3xl lg:max-w-4xl mx-auto">
        {ALBUMS.map((album) => (
          <Album
            key={album.title}
            cover={album.cover}
            year={album.year}
            title={album.title}
            text={album.text}
            src={album.src}
            links={album.links}
          />
        ))}
      </div>
    </section>
  );
}