import styled, { css } from "styled-components";
import { ColorPalette } from "../../../styles";
import { TextInputProps } from "./types";

const getTextInputStyleForErrorOrParagraph = (
  error?: string,
  paragraph?: string
) => {
  if (error) {
    return css`
      border-color: ${ColorPalette["red-200"]};
    `;
  }

  if (paragraph) {
    return;
  }
};

const getSubTextStyleForErrorOrParagraph = (
  error?: string,
  paragraph?: string
) => {
  if (error) {
    return css`
      color: ${ColorPalette["red-400"]};
    `;
  }

  if (paragraph) {
    return css`
      color: ${ColorPalette["platinum-200"]};
    `;
  }
};

export const Styles = {
  Container: styled.div<{ isTextarea?: boolean; removeBottomMargin?: boolean }>`
    // Used for making button fill parent horizontally.
    margin-bottom: ${({ removeBottomMargin }) =>
      removeBottomMargin ? undefined : "1.5rem"};
    // Without this, text-area's height will be expanded slightly.
    // I don't know why yet :(
    line-height: ${({ isTextarea }) => (isTextarea ? 0 : undefined)};
  `,
  TextInput: styled.input<TextInputProps & { isTextarea?: boolean }>`
    width: 100%;
    height: ${({ isTextarea }) => (isTextarea ? undefined : "3rem")};
    margin: 0;
    padding: ${({ isTextarea }) =>
      isTextarea ? "0.75rem 0.75rem" : "0 0.75rem"};
    background-color: ${ColorPalette["white"]};
    border: 1px solid ${ColorPalette["gray-100"]};
    border-radius: 0.5rem;

    ${({ readOnly }) => {
      if (!readOnly) {
        return css`
          :focus-visible {
            border-color: ${ColorPalette["blue-400"]};
          }
        `;
      }
    }}

    // Remove normalized css properties
    outline: none;

    font-size: 1rem;
    line-height: 110%;
    font-weight: 400;
    letter-spacing: -0.1px;
    color: ${ColorPalette["black"]};

    ${({ error, paragraph }) =>
      getTextInputStyleForErrorOrParagraph(error, paragraph)}
  `,
  Label: styled.div`
    margin-bottom: 0.5rem;

    font-weight: 600;
    font-size: 0.875rem;
    line-height: 110%;
    color: ${ColorPalette["platinum-300"]};
  `,
  SubText: styled.div<Pick<TextInputProps, "error" | "paragraph">>`
    position: absolute;

    top: 4px;
    left: 6px;

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 110%;
    letter-spacing: 0.3px;

    ${({ error, paragraph }) =>
      getSubTextStyleForErrorOrParagraph(error, paragraph)}
  `,
};