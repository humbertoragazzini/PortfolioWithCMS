interface iListItem {
  children?: React.ReactNode;
  theme?: Theme;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Basic list element \<li>.
 *
 * This component is used in the CMSText on the component function so prismic can plot richtext directly
 *
 * @param {string} children - Text from prismic - this come with predefined style.
 * @param {Theme} theme - Visual theme; currently supports 3 color themes >> "primary" | "secondary" | "white".
 * @param {string} className - Additional classes for styling overrides.
 * @param {React.CSSProperties} style - Inline style just in case.
 *
 * @returns {JSX.Element} A list item.
 *
 * @example
 * <ListItem
 *   className={"m-2"}
 *   theme={"primary"}
 * >
 *   {content from prismic}
 * </ListItem>
 */

export default function ListItem({
  children,
  theme,
  className,
  style,
}: iListItem) {
  let textColour = "";
  if (theme === "secondary") {
    textColour = "";
  } else if (theme === "white") {
    textColour = "";
  }

  return (
    <li className={`ml-2 mb-2 ${textColour} ${className}`} style={style}>
      {children}
    </li>
  );
}
