interface iParagraph {
  children?: React.ReactNode;
  theme?: Theme;
  paragraphType?: ParagraphType;
  className?: string;
  style?: React.CSSProperties;
}

const paragraphTypes = {
  smallstandfirst: {
    sizes: "text-md md:text-xl",
    font: "font-salt font-displaySatoReg pb-8",
  },
  standfirst: {
    sizes: "text-md md:text-xl lg:text-2xl",
    font: "font-salt font-displaySatoReg pb-8",
  },
  standfirstSemi: {
    sizes: "text-xl md:text-3xl",
    font: "font-salt font-displaySatoSemi pb-8",
  },
  quoteSmall: {
    sizes: "text-xl md:text-2xl lg:text-3xl highlight-text pb-6",
    font: "font-salt font-displaySatoSemi",
  },
  quoteMedium: {
    sizes: "text-xl md:text-3xl lg:text-4xl highlight-text pb-7",
    font: "font-salt font-displaySatoSemi",
  },
  quoteLarge: {
    sizes: "text-2xl md:text-4xl lg:text-5xl highlight-text pb-8",
    font: "font-salt font-displaySatoSemi",
  },
  tag: {
    sizes: "text-base md:text-lg",
    font: "font-salt font-displaySatoSemi",
  },
};

/**
 * Basic list element \<p>.
 *
 * This component is used in the CMSText on the component function so prismic can plot richtext directly
 *
 * @param {React.ReactNode} children - Text from prismic - this come with predefined style.
 * @param {Theme} theme - Visual theme; currently supports 3 color themes >> "primary" | "secondary" | "white".
 * @param {ParagraphType} paragraphType - Different size styles and font >> "body" | "standfirst" | "quote" | "tag".
 * @param {string} className - Additional classes for styling overrides.
 * @param {React.CSSProperties} style - Inline style just in case.
 *
 * @returns {JSX.Element} A paragraph element with style depending on ParagraphType / ParagraphTheme.
 *
 * @example
 * <Paragraph
 *   theme={"primary"}
 *   paragraphType={"tag"}
 *   className={"m-2"}
 * >
 *   {children}
 * </Paragraph>
 */

//TODO - React node may need to be changed to prismic rich text
export default function Paragraph({
  children,
  theme,
  paragraphType,
  className,
  style,
}: iParagraph) {
  const defaultClasses = "text-sm md:text-base font-body pb-5";
  let font, size;
  if (
    paragraphType !== undefined &&
    paragraphType !== null &&
    paragraphTypes[paragraphType as keyof typeof paragraphTypes] !== undefined
  ) {
    font = paragraphTypes[paragraphType as keyof typeof paragraphTypes].font;
    size = paragraphTypes[paragraphType as keyof typeof paragraphTypes].sizes;
  }
  return (
    <p
      data-theme={theme}
      style={style}
      className={`text-ink1 last:!pb-0 pb-3 ${paragraphType == "body" || !paragraphType ? defaultClasses : ""} ${font ? font : ""} ${size ? size : ""} ${className !== undefined ? className : ""}`}
    >
      {children}
    </p>
  );
}
