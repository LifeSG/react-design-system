import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { Color } from "../color";
import {
    ElementBoundary as InputSelectElemBoundary,
    Wrapper as InputSelectWrapper,
} from "../input-select/input-select.styles";
import { Text } from "../text/text";
import { TextStyle } from "../text/text-style";
import { Transition } from "../transition";
import { InputGroupAddonPosition } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    $expanded?: boolean;
    $position?: InputGroupAddonPosition;
}

interface DividerStyleProps {
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}

// =============================================================================
// STYLING
// =============================================================================
const BORDER_RADIUS = "4px";

export const Wrapper = InputSelectWrapper;
export const ElementBoundary = styled(InputSelectElemBoundary)``;

export const DisplayContainer = styled.div<StyleProps>`
    position: relative;
    display: flex;
    margin: 0 1rem;
    ${(props) => {
        if (props.$expanded) {
            return css`
                border-bottom: 1px solid ${Color.Neutral[5](props)};
            `;
        }
    }}
`;

export const Selector = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    padding: 0;
    border-radius: ${BORDER_RADIUS};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline-color: ${Color.Accent.Light[3]};
    }
`;

export const IconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${Transition.Base};
    margin: 0 0.75rem;
`;

export const StyledChevronIcon = styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    height: ${TextStyle.Body.fontSize}rem;
    width: ${TextStyle.Body.fontSize}rem;
    vertical-align: bottom;
`;

export const LabelContainer = styled.div`
    display: flex;
    flex: 1 1 auto;
`;

export const ValueLabel = styled(Text.Body)`
    text-align: left;
    line-height: 1.375rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${Color.Neutral[3]};
`;

export const Divider = styled.div`
    margin: 1rem 0;
    width: 1px;
    background: ${Color.Neutral[5]};
`;
