'use client';

import { useState, useEffect } from 'react';

type SvgIconProps = {
  src: string;
  className: string,
}

// Inlined because an SVG in <img> cannot inherit `currentColor` or Tailwind classes.
// Sources are limited to files from public/.
export default function SvgIcon({ src, className }: SvgIconProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`Cannot fetch SVG: ${res.statusText}`);
        let svgText = await res.text();

        // Add className to <svg> and set fill/stroke to currentColor
        svgText = svgText.replace(
          /<svg([^>]*)>/,
          `<svg$1 class="${className}" fill="currentColor" stroke="currentColor">`
        );

        setSvgContent(svgText);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSvg();
  }, [src, className]);
  
  if (!svgContent) return null;
  return <span dangerouslySetInnerHTML={{ __html: svgContent }} />;
}