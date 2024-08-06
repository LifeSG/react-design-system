import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { animated } from "react-spring";
import styled from "styled-components";
import { v2_Color } from "../../v2_color";
import { v2_MediaQuery } from "../../v2_media";
import { v2_Text, v2_TextStyleHelper } from "../../v2_text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListContainerProps {
    width?: string;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled(animated.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`;

export const List = styled.ul<ListContainerProps>`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    width: ${(props) => props.width || "100%"};
    overflow-y: auto;
    padding: 0.5rem;
    max-height: 20rem;
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${v2_Color.Neutral[4]};
        border-right: 5px solid ${v2_Color.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${v2_MediaQuery.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`;

export const ResultStateContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`;

export const ResultStateText = styled(v2_Text.Body)``;

export const LabelIcon = styled(ExclamationCircleFillIcon)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${v2_Color.Validation.Red.Icon};
`;

export const SelectAllContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0;
`;

export const DropdownCommonButton = styled.button`
    ${v2_TextStyleHelper.getTextStyle("Body", "semibold")}
    color: ${v2_Color.Primary};
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`;
