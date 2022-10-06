import { SVG } from "./shared.style";
import { IconSvgProps } from "./types";

export const ArrowRightIcon = (props: IconSvgProps): JSX.Element => {
    return (
        <SVG
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 16 16"
            {...props}
        >
            <g fill="none" fillRule="evenodd">
                <g id="path" fillRule="nonzero">
                    <g>
                        <g>
                            <g>
                                <path
                                    d="M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z"
                                    transform="translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </SVG>
    );
};
