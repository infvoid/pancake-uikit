import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 28 28" {...props}>
            <defs>
                <clipPath id="clip-path00">
                    <path id="Clip_6" data-name="Clip 6" fill="none" d="M0,22.805H23.93V0H0Z" transform="translate(0 0)" />
                </clipPath>
            </defs>
            <g id="Group_12" data-name="Group 12" transform="translate(2 3)">
                <path id="Stroke_1" data-name="Stroke 1" fill="none" stroke="#000000" strokeMiterlimit="10" d="M17.488,0s-2.94,4.883-5.019,6.81-2.72.438-5.645-.418S0,11.178,0,11.178" transform="translate(1.419 0.632)" />
                <path id="Stroke_3" data-name="Stroke 3" fill="none" stroke="#000000" strokeMiterlimit="10" d="M0,.984,3.757,0l.755,3.52" transform="translate(15.196 0.617)" />
                <path id="Clip_6-2" data-name="Clip 6" fill="none" d="M0,22.805H23.93V0H0Z" transform="translate(0 0)" />
                <g id="Group_12-2" data-name="Group 12" clipPath="url(#clip-path00)">
                    <path id="Stroke_5" data-name="Stroke 5" fill="none" stroke="#000000" strokeMiterlimit="10" d="M0,5.07H3.355V0H0Z" transform="translate(3.652 17.235)" />
                    <path id="Stroke_7" data-name="Stroke 7" fill="none" stroke="#000000" strokeMiterlimit="10" d="M0,8.16H3.355V0H0Z" transform="translate(10.849 14.145)" />
                    <path id="Stroke_8" data-name="Stroke 8" fill="none" stroke="#000000" strokeMiterlimit="10" d="M0,14.163H3.355V0H0Z" transform="translate(17.828 8.142)" />
                    <g id="Group_11" data-name="Group 11" transform="translate(0 21.805)">
                        <path id="Fill_9" data-name="Fill 9" fill="#ffffff" d="M0,.5H23.93" transform="translate(0 0)" />
                        <path id="Stroke_10" data-name="Stroke 10" fill="none" stroke="#000000" strokeMiterlimit="10" d="M0,.5H23.93" transform="translate(0 0)" />
                    </g>
                </g>
            </g>
        </Svg>
    );
};

export default Icon;
