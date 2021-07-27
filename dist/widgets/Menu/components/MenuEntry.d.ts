import React from "react";
import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const MenuEntry2: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../../../components/Text").TextProps & {
    color: string;
}, never>;
declare const LinkLabelMemo: React.MemoExoticComponent<import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>>;
export { MenuEntry, MenuEntry2, LinkStatus, LinkLabelMemo as LinkLabel };
