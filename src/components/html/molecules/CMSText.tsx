"use client";
// @ts-nocheck
import { isFilled, RichTextField } from "@prismicio/client";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import Paragraph from "../atoms/Paragraph";
import Heading from "../atoms/Heading";
import ListItem from "../atoms/ListItem";
import List from "../atoms/List";

interface iCMSText {
  field: RichTextField;
  paragraphType?: ParagraphType;
  size?: Sizes;
  style?: React.CSSProperties;
  theme?: Theme;
  className?: string;
}

/**
 * This component recieve a pure richtext field from prismic and render it depending on the tag in the cms
 *
 * @param {RichTextField} field - This is the richtext field passed from cms prismic.
 * @param {ParagraphType} paragraphType - if is paragraph this set the style of them.
 * - standfirst
 * - quote
 * - tag
 * - standfirstSemi
 * @param {Sizes} size - Here are al the alternative sizes per each heading.
 * @param {React.CSSProperties} style - Inline style just in case.
 * @param {Theme} theme - Visual theme; currently supports 4 color themes "Primary" | "Secondary" | "White".
 * @param {string} className - Additional classes for styling overrides.
 *
 * @returns {JSX.Element} A text with fourleaf style.
 *
 * @example
 * <CMSText
 *   field={card.content}
 *   theme={card.theme}
 * ></CMSText>
 */

export default function CMSText({
  field,
  paragraphType,
  size,
  style,
  theme,
  className,
}: iCMSText) {
  return (
    <>
      {isFilled.richText(field) && (
        <PrismicRichText
          field={field}
          components={{
            paragraph: ({ children }: any) => (
              <Paragraph
                theme={theme}
                paragraphType={paragraphType}
                className={className}
                style={style}
              >
                {children}
              </Paragraph>
            ),
            hyperlink: ({ node, children }: any) => (
              <PrismicLink
                field={node.data}
                className={
                  className +
                  " cursor-pointer text-hyperlink font-semiBold underline hover:no-underline"
                }
                style={style}
              >
                {children}
              </PrismicLink>
            ),
            em: ({ children }: any) => (
              <em
                className={
                  "bg-highlight-text underline-effect w-fit not-italic !inline"
                }
              >
                {children}
              </em>
            ),
            list: ({ children }: any) => (
              <List theme={theme} className={className} style={style}>
                {children}
              </List>
            ),
            listItem: ({ children }: any) => (
              <ListItem theme={theme} className={className} style={style}>
                {children}
              </ListItem>
            ),
            heading1: ({ children }: any) => (
              <Heading
                theme={theme}
                level={1}
                className={className}
                size={size}
                style={style}
              >
                {children}
              </Heading>
            ),
            heading2: ({ children }: any) => (
              <Heading
                theme={theme}
                level={2}
                className={className}
                size={size}
                style={style}
              >
                {children}
              </Heading>
            ),
            heading3: ({ children }: any) => (
              <Heading
                theme={theme}
                level={3}
                className={className}
                size={size}
                style={style}
              >
                {children}
              </Heading>
            ),
            heading4: ({ children }: any) => (
              <Heading
                theme={theme}
                level={4}
                className={className}
                size={size}
                style={style}
              >
                {children}
              </Heading>
            ),
            heading5: ({ children }: any) => (
              <Heading
                theme={theme}
                level={5}
                className={className}
                size={size}
                style={style}
              >
                {children}
              </Heading>
            ),
            heading6: ({ children }: any) => (
              <Heading
                theme={theme}
                level={6}
                className={className}
                size={size}
                style={style}
              >
                {children}
              </Heading>
            ),
          }}
        ></PrismicRichText>
      )}
    </>
  );
}
