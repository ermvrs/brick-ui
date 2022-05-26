import React from "react";
interface Props {
    isMenuList?: boolean;
    isPushed: boolean;
    isDark: boolean;
    logoUrl?: string | null;
    togglePush: () => void;
    brickPriceUsd?: number;
    brickPriceLinkUrl?: string | null;
    href: string;
    isMobile: boolean;
}
declare const Logo: React.FC<Props>;
export default Logo;
