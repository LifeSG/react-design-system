import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import { animated } from "react-spring";
import styled from "styled-components";
import { IconButton } from "../icon-button/icon-button";
import { MediaQuery } from "../media/media";
import { Text, TextStyleHelper } from "../text";

export const FilterItemWrapper = styled.div``;

export const FilterItemBody = styled.div`
    padding: 0;
`;

export const FilterItemHeader = styled(Text.H5)`
    display: flex;
    align-items: center;
`;

export const FilterItemExpandButton = styled(IconButton)``;

export const ChevronIcon = styled(ChevronDownIcon)`
    height: 1.125rem;
    width: 1.125rem;
`;

export const FilterItemTitle = styled(Text.H4)`
    ${MediaQuery.MaxWidth.mobileL} {
        ${TextStyleHelper.getTextStyle("H5", "semibold")}
    }
`;

export const Expandable = styled(animated.div)`
    overflow: hidden;
`;
