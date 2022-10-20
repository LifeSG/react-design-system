import styled from "styled-components";
import { Color } from "../color";
import { IconData } from "./icon-data";
import { IconProps } from "./types";

export const Icon = ({ type, ...props }: IconProps) => {
    const iconData = IconData[type];

    if (!iconData) return null;

    const renderPaths = () => {
        if (Array.isArray(iconData)) {
            return iconData.map((data, index) => {
                return (
                    <path
                        key={`${type}-${index}`}
                        fill="currentColor"
                        {...data}
                    />
                );
            });
        } else {
            return <path fill="currentColor" {...iconData} />;
        }
    };

    return (
        <SVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
            {renderPaths()}
        </SVG>
    );
};

// =============================================================================
// STYLING
// =============================================================================
export const SVG = styled.svg`
    height: 1rem;
    width: 1rem;
    color: ${Color.Primary};
`;
