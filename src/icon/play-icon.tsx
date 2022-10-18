import { SVG } from "./shared.style";
import { IconSvgProps } from "./types";

export const PlayIcon = (props: IconSvgProps): JSX.Element => {
    return (
        <SVG
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 64 64"
            id="play-icon"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="nonzero"
                d="M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"
            />
        </SVG>
    );
};
