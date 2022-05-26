import { BlockButtonProps, Sizes, variants } from "../BlockButton/types";
export declare type BlockButtonMenuItemProps = {
    isActive?: boolean;
    size?: Sizes;
} & BlockButtonProps;
export interface BlockButtonMenuProps {
    variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
    activeIndex?: number;
    onClick?: (index: number) => void;
    size?: Sizes;
    children: React.ReactElement[];
}
