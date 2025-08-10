// @ts-nocheck
import React from "react";

interface iHeading {
  children?: React.ReactNode;
  theme?: Theme;
  level?: Level;
  size?: Sizes;
  className?: string;
  style?: React.CSSProperties;
}

const sizes = {
  1: "text-sm md:text-base pb-2",
  2: "text-base md:text-lg lg:text-xl pb-2",
  3: "text-lg md:text-xl lg:text-2xl pb-3",
  4: "text-xl lg:text-2xl pb-3",
  5: "text-xl md:text-2xl lg:text-3xl pb-3 md:pb-4",
  6: "text-2xl lg:text-3xl pb-3 md:pb-3 lg:pb-4",
  7: "text-2xl md:text-3xl lg:text-4xl pb-3 md:pb-4 lg:pb-5",
  8: "text-2xl md:text-3xl lg:text-5xl pb-4 md:pb-5 lg:pb-6",
  9: "text-2xl md:text-4xl lg:text-5xl pb-5 md:pb-6 lg:pb-7",
  10: "text-4xl md:text-5xl lg:text-6xl pb-5 md:pb-6 lg:pb-7",
};

/**
 * A heading component that is used in the CMSText, this apply sizes and render the corresponde LVL H.
 *
 *
 * @param {React.ReactNode} children - Just in case the data do not come from prismic.
 * @param {Theme} theme - Visual theme; currently supports 4 color themes "Primary" | "Secondary" | "White".
 * @param {Sizes} size - Size of the text 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10.
 * @param {Level} Level - Level of the <h>.
 * @param {string} className - Additional classes for styling overrides.
 * @param {React.CSSProperties} style - Inline style just in case.
 * @returns {JSX.Element} An <h> element.
 *
 * @example
 * <Heading
 *   theme={theme}
 *   level={1}
 *   className={className}
 *   size={size}
 * >
 *   {children}
 * </Heading>
 */

export default function Heading({
  children,
  theme,
  size,
  level = 2,
  className = "",
  style,
}: iHeading) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const defaultClasses = `text-ink1 last:!pb-0 ${size !== undefined ? sizes[size] : sizes[1]} ${className}`;
  return React.createElement(
    HeadingTag,
    { className: defaultClasses, "data-theme": theme, style },
    children
  );
}
