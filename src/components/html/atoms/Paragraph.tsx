interface iParagraph {
  children?: React.ReactNode;
  theme?: Theme;
  paragraphType?: ParagraphType;
  className?: string;
  style?: React.CSSProperties;
}

const paragraphTypes = {
  example: {
    sizes: "",
    font: "",
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
