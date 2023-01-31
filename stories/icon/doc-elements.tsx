import React from "react";
import styled from "styled-components";
import { Alert } from "../../src/alert";
import { Icon, IconType } from "../../src/icon";
import { MediaQuery } from "../../src/media";
import { TextStyleHelper } from "../../src/text";

// =============================================================================
// ICON SET
// =============================================================================
interface IconSetProps {
    icons: IconType[];
}
export const IconSet = ({ icons }: IconSetProps) => {
    const renderIcons = () => {
        return icons.map((icon) => {
            return (
                <Item key={icon}>
                    <StyledIcon type={icon} />
                    <Label>{icon}</Label>
                </Item>
            );
        });
    };

    return <Set>{renderIcons()}</Set>;
};

export const StyledIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
`;

const Set = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100% / 6);
    height: 8rem;
    align-items: center;
    justify-content: center;

    ${MediaQuery.MaxWidth.tablet} {
        width: calc(100% / 4);
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: calc(100% / 2);
    }
`;

const Label = styled.span`
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
    font-size: 0.9rem !important;
    margin-top: 0.75rem;
    margin-bottom: 0;
`;

export const DeprecationWarning = styled(Alert).attrs({ type: "warning" })`
    p {
        ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
        ${TextStyleHelper.getDisplayStyle(false, true)}
    }

    p:first-of-type {
        margin-top: 0;
    }
`;
