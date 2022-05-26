import React from "react";
import { PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps {
    brickPriceLinkUrl?: string | null;
    logoUrl?: string | null;
    isMenuList?: boolean;
    noSwitchThemes?: boolean;
}
declare const PanelFooter: React.FC<Props>;
export default PanelFooter;
