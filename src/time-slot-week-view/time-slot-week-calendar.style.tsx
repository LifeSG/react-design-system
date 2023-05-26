import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { IconButton } from "../icon-button";
import { MediaQuery } from "../media/media";
import { TextStyleHelper } from "../text/helper";

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 1.5rem 1.25rem;
    display: flex;
    padding: 0rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0 1.25rem;
    }
`;

const iconStyle = css`
    color: ${Color.Neutral[3]};
    height: 1rem;
    width: 1rem;
`;

export const ArrowLeft = styled(ChevronLeftIcon)`
    ${iconStyle}
`;

export const ArrowRight = styled(ChevronRightIcon)`
    ${iconStyle}
`;

export const ContentBody = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

interface DropdownButtonStyleProps {
    $expandedDisplay: boolean;
    $visible?: boolean;
}

export const DropdownButton = styled.button<DropdownButtonStyleProps>`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${() => {
        return css`
            ${IconChevronDown} {
                width: 1.125rem;
                height: 1.125rem;
            }
        `;
    }}

    ${(props) => {
        if (props.$visible === false) {
            return css`
                display: none;
            `;
        }

        if (props.$expandedDisplay) {
            return css`
                ${IconChevronDown} {
                    transform: rotate(180deg);
                }
            `;
        }
    }}
`;

export const DropdownText = styled.p`
    ${TextStyleHelper.getTextStyle("H5", "regular")}
`;

export const HeaderArrowButton = styled(IconButton)`
    background: transparent;
    margin: auto 0;
    padding: 0.5rem;

    :focus,
    :active {
        background: transparent;
    }
    :disabled {
        cursor: not-allowed;
    }
`;

export const HeaderArrows = styled.div`
    display: flex;
`;

export const HeaderInputDropdown = styled.div`
    display: flex;
`;

export const IconChevronDown = styled(ChevronDownIcon)`
    ${iconStyle}
    transition: transform 250ms ease-in-out;
    margin-left: 0.625rem;
`;

export const ToggleZone = styled.div`
    display: flex;
    flex: 1;
    position: relative;
`;
