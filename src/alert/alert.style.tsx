import { ArrowRightIcon, ExternalIcon } from "@lifesg/react-icons";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { BookingSGColorSet } from "../spec/color-spec/bookingsg-color-set";
import { Text, TextStyleHelper } from "../text";
import { AlertSizeType, AlertType, LinkIconType } from "./types";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $type: AlertType;
    $sizeType: AlertSizeType;
    $enableIcon?: boolean | undefined;
    $linkIconType?: LinkIconType | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div<StyleProps>`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;
    flex-direction: row;
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")};

    ${(props) => {
        let backgroundColor: string;
        let borderColor: string;
        let iconColor: string;
        switch (props.$type) {
            case "error":
                backgroundColor = Color.Validation.Red.Background(props);
                borderColor = Color.Validation.Red.Border(props);
                iconColor = Color.Validation.Red.Icon(props);
                break;
            case "success":
                backgroundColor = Color.Validation.Green.Background(props);
                borderColor = Color.Validation.Green.Border(props);
                iconColor = Color.Validation.Green.Icon(props);
                break;
            case "warning":
                backgroundColor = Color.Validation.Orange.Background(props);
                borderColor = Color.Validation.Orange.Border(props);
                iconColor = Color.Validation.Orange.Icon(props);
                break;
            case "info":
                backgroundColor = Color.Validation.Blue.Background(props);
                borderColor = Color.Validation.Blue.Border(props);
                iconColor = Color.Validation.Blue.Icon(props);
                break;
            case "description":
                backgroundColor = Color.Neutral[7](props);
                borderColor = Color.Neutral[4](props);
                iconColor = Color.Neutral[4](props);
                break;
            default:
                backgroundColor = Color.Validation.Orange.Background(props);
                borderColor = Color.Validation.Orange.Border(props);
                iconColor = Color.Validation.Orange.Icon(props);
                break;
        }

        return css`
            background: ${backgroundColor};
            border-left: 2pt solid ${borderColor};

            svg {
                color: ${iconColor};
                width: ${props.$sizeType ? "1.25rem" : "1.5rem"};
                height: 1.5rem;
                margin-right: 0.5rem;
            }
        `;
    }}

    p {
        margin: 0;
        ${(props) => {
            if (props.$sizeType === "small")
                return css`
                    ${TextStyleHelper.getTextStyle("H6", "regular")}

                    strong {
                        ${TextStyleHelper.getTextStyle("H6", "semibold")}
                    }

                    a {
                        ${TextStyleHelper.getTextStyle("H6", "semibold")}
                    }
                `;
            else {
                return css`
                    ${TextStyleHelper.getTextStyle("H5", "regular")}

                    strong {
                        ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    }

                    a {
                        ${TextStyleHelper.getTextStyle("H5", "semibold")}
                    }
                `;
            }
        }}

        a {
            color: ${Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Color.Primary};
            }
        }
    }
`;

export const ActionLinkText = styled(Text.Hyperlink.Small)<StyleProps>`
    ${(props) => {
        if (props.$sizeType === "small")
            return css`
                ${TextStyleHelper.getTextStyle("H6", "semibold")}
            `;
        else {
            return css`
                ${TextStyleHelper.getTextStyle("H5", "semibold")}
            `;
        }
    }}
    margin-top: 0.5rem;
    display: flex;
    color: ${BookingSGColorSet.Primary};

    :hover {
        color: ${BookingSGColorSet.Primary};
    }
`;

export const ArrowIcon = styled(ArrowRightIcon)`
    display: flex;
    height: 1rem;
    width: 1rem;
    margin-left: 0.25rem;
    color: ${BookingSGColorSet.Primary} !important;
`;

export const ExternalLinkIcon = styled(ExternalIcon)`
    display: flex;
    height: 1rem;
    width: 1rem;
    margin-left: 0.25rem;
    color: ${BookingSGColorSet.Primary} !important;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 2rem;
    flex: 1;
`;
