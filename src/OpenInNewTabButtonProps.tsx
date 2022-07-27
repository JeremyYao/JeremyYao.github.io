import { ButtonProps } from "@mui/material";

export const OpenInNewTabButtonProps: ButtonProps & JSX.IntrinsicAttributes = {
  rel: "noopener noreferrer",
  target: "_blank",
} as ButtonProps & JSX.IntrinsicAttributes;

export default OpenInNewTabButtonProps;
