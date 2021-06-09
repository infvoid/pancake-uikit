import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface IconProps extends SvgProps {
  isDark?: boolean;
}

const Icon: React.FC<IconProps> = ({ isDark, ...props }) => {
    const textColor = isDark ? "#A28BD4" : "#000000";
    return (
        <Svg viewBox="0 0 28 28" {...props}>
            <g transform="translate(2 1)">
                <g transform="translate(0 0.538)">
                    <path d="M16.986,6H10.9c-2.034,0-4.226,0-6.469,0-.9,0-1.807-.018-2.688-.033L.786,5.945a2.237,2.237,0,0,1-.234-.021C.488,5.916.422,5.908.357,5.9.179,5.9.074,5.789.025,5.561a.37.37,0,0,0-.017-.049L0,5.491V5.21a.584.584,0,0,1,.3-.328L.371,4.84A4,4,0,0,1,.75,4.651C2.07,4.1,3.412,3.535,4.71,2.993l.017-.007c1.416-.589,2.894-1.2,4.2-1.741l1.23-.509Q10.682.517,11.21.3l.007,0,.731-.3h.078l.307.128.486.2,2.654,1.1.038.016,2.616,1.08.38.157c.885.366,1.8.745,2.7,1.128.484.205.974.42,1.448.628l.012.005q.486.213.972.424A.541.541,0,0,1,24,5.241v.281a.458.458,0,0,1-.5.4c-.432.008-.871.018-1.3.028H22.2c-.692.016-1.407.033-2.11.038C18.98,6,17.9,6,16.986,6ZM12.015,1.289a.339.339,0,0,0-.123.022c-.856.334-1.606.634-2.294.917-1.549.636-3.065,1.264-4.745,1.96-.266.11-.533.227-.792.34l-.01,0-.343.149,0,.03,0,.022H20.4l-.03-.014-.03-.014L19.02,4.158l-.009,0-1.452-.6c-1.7-.705-3.526-1.463-5.4-2.232A.389.389,0,0,0,12.015,1.289Z" transform="translate(0 0.462)" />
                </g>
                <path d="M4.126,6.767a1.851,1.851,0,0,1-1.22,1.9c-.008,0-.017.013-.025.013-.251.018-.28.187-.287.39a4.9,4.9,0,0,1-.059.689.5.5,0,0,1-.575.409.491.491,0,0,1-.475-.47c-.02-.264-.031-.53-.034-.795A.192.192,0,0,0,1.3,8.694,1.86,1.86,0,0,1,.008,6.81.507.507,0,0,1,.48,6.282a.5.5,0,0,1,.557.378,1.939,1.939,0,0,1,.075.307.724.724,0,0,0,.651.686,2.289,2.289,0,0,0,.63,0,.766.766,0,0,0,.654-.795.777.777,0,0,0-.408-.786c-.45-.269-.9-.535-1.35-.81a6.54,6.54,0,0,1-.648-.433A1.673,1.673,0,0,1,.014,3.626,1.932,1.932,0,0,1,1.3,1.465a.186.186,0,0,0,.14-.19c0-.246.009-.492.011-.738A.615.615,0,0,1,1.929.006.475.475,0,0,1,2.522.4a5.413,5.413,0,0,1,.07.858c0,.1.034.144.13.165a1.888,1.888,0,0,1,1.4,1.965.523.523,0,0,1-.46.5A.5.5,0,0,1,3.1,3.556a3.589,3.589,0,0,1-.108-.431.734.734,0,0,0-.777-.649A3.692,3.692,0,0,0,1.8,2.49a.747.747,0,0,0-.673.624.764.764,0,0,0,.289.9c.36.239.735.459,1.1.686.246.151.5.293.738.453a1.7,1.7,0,0,1,.871,1.614" transform="translate(9.442 8.236)" />
                <path fill="none" stroke={textColor} strokeMiterlimit="10" d="M2.293,11.242H.475A.475.475,0,0,1,0,10.766V.476A.477.477,0,0,1,.475,0H2.293a.477.477,0,0,1,.476.476v10.29A.476.476,0,0,1,2.293,11.242Z" transform="translate(3.355 8.235)" />
                <path fill="none" stroke={textColor} strokeMiterlimit="10" d="M2.293,11.242H.475A.475.475,0,0,1,0,10.766V.476A.477.477,0,0,1,.475,0H2.293a.477.477,0,0,1,.476.476v10.29A.476.476,0,0,1,2.293,11.242Z" transform="translate(17.009 8.235)" />
            </g>
            <rect fill="none" stroke={textColor} strokeMiterlimit="10" width="22" height="2.75" rx="0.4" transform="translate(3 22)" />
        </Svg>
    );
};

export default React.memo(Icon, (prev, next) => prev.isDark === next.isDark);
