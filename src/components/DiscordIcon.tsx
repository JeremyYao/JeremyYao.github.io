import { SvgIcon, SvgIconClasses, SxProps, Theme } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";

import { ReactComponent as discord } from "../images/discord.svg";

export const DISCORD_BLUE_HEX_CODE: `#${string}` = `#7289DA`;

export function DiscordIcon(
  props: JSX.IntrinsicAttributes & {
    children?: ReactNode;
    classes?: Partial<SvgIconClasses> | undefined;
    color?:
      | "inherit"
      | "disabled"
      | "action"
      | "primary"
      | "secondary"
      | "error"
      | "info"
      | "success"
      | "warning"
      | undefined;
    fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
    htmlColor?: string | undefined;
    inheritViewBox?: boolean | undefined;
    shapeRendering?: string | undefined;
    sx?: SxProps<Theme> | undefined;
    titleAccess?: string | undefined;
    viewBox?: string | undefined;
  } & CommonProps &
    Omit<
      any,
      | keyof CommonProps
      | "children"
      | "color"
      | "fontSize"
      | "htmlColor"
      | "inheritViewBox"
      | "shapeRendering"
      | "sx"
      | "titleAccess"
      | "viewBox"
    >
) {
  return <SvgIcon component={discord} {...props} inheritViewBox />;
}

export default DiscordIcon;
