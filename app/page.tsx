"use client";
import ScrollSpy from "react-ui-scrollspy";

import Home from "@/components/layouts/Home";
import About from "@/components/layouts/About";
import Music from "@/components/layouts/Music";
import Links from "@/components/layouts/Links";

export default function Page() {
  return (
    <ScrollSpy useBoxMethod={false}>
      <Home />
      <About />
      <Music />
      <Links />
    </ScrollSpy>
  );
}
