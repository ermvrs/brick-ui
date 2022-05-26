import { SVGAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";
export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
    theme?: DefaultTheme;
    spin?: boolean;
}
export interface ImageIconProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
    theme?: DefaultTheme;
    spin?: boolean;
    src?: string;
}
