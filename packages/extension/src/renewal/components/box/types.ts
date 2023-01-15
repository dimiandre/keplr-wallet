import { CSSProperties } from "react";

export type BoxAlignX = "left" | "right" | "center";
export type BoxAlignY = "top" | "bottom" | "center";

export interface BoxProps {
  position?: "relative" | "absolute";
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  paddingX?: string;
  paddingY?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  margin?: string;
  marginX?: string;
  marginY?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;

  alignX?: BoxAlignX;
  alignY?: BoxAlignY;

  className?: string;
  style?: CSSProperties;
}