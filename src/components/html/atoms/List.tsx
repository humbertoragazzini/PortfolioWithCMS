interface iList {
  children?: React.ReactNode;
  theme?: Theme;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Basic \<ul> element ready for ListItem components.
 *
 * This component is used in the CMSText on the component function so prismic can plot richtext directly
 *
 * @param {string} children - ListItem - this come with predefined style.
 * @param {Theme} theme - Visual theme; currently supports 3 color themes >> "primary" | "secondary" | "white".
 * @param {string} className - Additional classes for styling overrides.
 * @param {React.CSSProperties} style - Inline style just in case.
 *
 * @returns {JSX.Element} Unorder list.
 *
 * @example
 * <List
 *   className={"m-2"}
 *   theme={"primary"}
 * >
 *   <ListItem></ListItem>
 * </List>
 */

export default function List({ children, theme, className, style }: iList) {
  return (
    <ul
      className={`ml-2 mb-4 list-outside list-image-diamond ${className}`}
      style={style}
      data-theme={theme}
    >
      {children}
    </ul>
  );
}
