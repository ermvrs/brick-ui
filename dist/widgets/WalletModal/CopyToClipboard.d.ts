import React from "react";
import { TextProps } from "../../components/Text";
interface Props extends TextProps {
    toCopy: string;
}
declare const CopyToClipboard: React.FC<Props>;
export default CopyToClipboard;
