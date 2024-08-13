"use client";
import { useState, useEffect } from "react";
import useWindowDimensions from "../components/hooks/useWindowDimensions";
import Home from "@/components/layouts/Home";
import About from "@/components/layouts/About";
import Music from "@/components/layouts/Music";
import Links from "@/components/layouts/Links";

export default function Page() {
  const { screenHeight, screenWidth } = useWindowDimensions();

  const [verticalScreen, setVerticalScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(screenWidth ? screenWidth < 1024 : false);

  useEffect(() => {
    setVerticalScreen(screenHeight && screenWidth ? screenHeight > screenWidth : true);
    setIsMobile(screenWidth ? screenWidth < 1024 : false)
  }, [screenHeight, screenWidth]);

  return (
    <>
      <Home verticalScreen={verticalScreen} isMobile={isMobile} />
      <About />
      <Music />
      <Links verticalScreen={verticalScreen} isMobile={isMobile} />
    </>
  );
}
