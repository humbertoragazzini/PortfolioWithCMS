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

  type GradientBackgroundColor =
    | "Transparent"
    | "PurplePink"
    | "OrangePink"
    | "YellowPink"
    | "TurquoiseDeepwater"
    | "TurquoiseLightGreen"
    | "TurquoiseLightBlue"
    | "YellowOrange"
    | "YellowTurquoise"
    | "CherryRed"
    | "Grey";

  type ColsFLPosition =
    | "left"
    | "left-50"
    | "left-25"
    | "left-10"
    | "center"
    | "right-10"
    | "right-25"
    | "right-50"
    | "right";

  type Composition =
    | "First"
    | "First"
    | "Second"
    | "Second"
    | "Third"
    | "Third"
    | "Fourth"
    | "Fourth"
    | "Fifth"
    | "Fifth"
    | "Sixth"
    | "Sixth"
    | "Seventh"
    | "Seventh"
    | "Square";

  type Orientation = "Left" | "Right";

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

  type ColsFLType =
    | "type-col-6-even"
    | "type-col-6-odd"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "12";

  type Spacing = "large" | "medium" | "small" | "none";

  type Level = 1 | 2 | 3 | 4 | 5 | 6;

  type Speeds = {
    small: number;
    medium: number;
    big: number;
  };

  type AnimatedHeader = {
    type?: string;
    fadeIn?: boolean;
    speeds: Speeds;
    scrollContainerRef: RefObject<HTMLDivElement>;
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
