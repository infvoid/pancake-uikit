import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 28 28" {...props}>
            <g id="Group_9" data-name="Group 9" transform="translate(2 2)">
                <path id="Stroke_1" data-name="Stroke 1" fill="none" stroke="#000000" strokeMiterlimit="10" strokeLinejoin="round" d="M24,8,21.07,0H2.929L0,8Z" transform="translate(0.5 9.286)" />
                <path id="Fill_3" data-name="Fill 3" fill="#ffffff" d="M0,12.671H9.249l3.94-10.1L4.732,0Z" transform="translate(6.824 0.615)" />
                <path id="Stroke_4" data-name="Stroke 4" fill="none" stroke="#000000" strokeMiterlimit="10" d="M9.25,12.671l3.939-10.1L4.732,0,0,12.671Z" transform="translate(6.823 0.615)" />
                <path id="Stroke_6" data-name="Stroke 6" fill="none" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" d="M0,.5H15.009" transform="translate(5.004 12.786)" />
                <path id="Stroke_7" data-name="Stroke 7" fill="none" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" d="M0,5H24V0H0Z" transform="translate(0.5 17.286)" />
            </g>
        </Svg>
    );
};

export default Icon;
