import { PrismicRichTextProps } from "@prismicio/react";

export { };

declare global {
  interface IJumpLink {
    id: string;
    title: string;
  }

  type ButtonIcon =
    | "arrow-right"
    | "arrow-left"
    | "arrow-up"
    | "arrow-down"
    | "arrow-rightUp"
    | "arrow-rightDown"
    | "arrow-leftUp"
    | "arrow-leftDown"
    | "envelope"
    | "profile"
    | "tick"
    | "switch"
    | "infoIcon"
    | "UltraLowImageIcon"
    | "ultraLowVideoIcon";

  type Theme =
    | "primary"
    | "secondary"
    | "white"
    | "transparent"
    | "orange"
    | "tertiary"
    | "jump-link";

  type ParagraphType =
    | "body"
    | "smallstandfirst"
    | "standfirst"
    | "quoteSmall"
    | "quoteMedium"
    | "quoteLarge"
    | "tag"
    | "standfirstSemi";

  type Sizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

  type Level = 1 | 2 | 3 | 4 | 5 | 6;

  type Speeds = {
    small: number;
    medium: number;
    big: number;
  };

  type MyIcons = {
    stroke: string;
    strokeColor?: string;
    strokeWidth?: string;
    strokeFill?: string;
    fill: string;
    fillColor?: string;
    imageWidth?: string;
    imageHeight?: string;
    width?: string;
    height?: string;
    className?: string;
    background?: string;
  };
}
