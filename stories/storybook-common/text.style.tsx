import { LinkIcon as DSLinkIcon } from "@lifesg/react-icons/link";
import { Unstyled } from "@storybook/blocks";
import React from "react";
import styled from "styled-components";
import { Color } from "../../src/color";
import { Text, TextProps, TextStyleHelper } from "../../src/text";

interface HeadingProps {
    children: string;
}

// =============================================================================
// HOC
// =============================================================================
const withLink =
    (Component: React.ComponentType<TextProps>) =>
    // eslint-disable-next-line react/display-name
    ({ children }: HeadingProps): JSX.Element => {
        const linkId = convertToLinkId(children);

        return (
            <Unstyled>
                <Component id={linkId}>
                    <Link
                        aria-hidden="true"
                        href={`#${linkId}`}
                        tabIndex={-1}
                        target="_self"
                    >
                        <LinkIcon />
                    </Link>
                    {children}
                </Component>
            </Unstyled>
        );
    };

// =============================================================================
// STYLING
// =============================================================================
const Link = styled.a`
    opacity: 0;
    font-weight: normal;
    font-size: 1.5rem;
    margin-left: -1.5rem;
    padding-right: 0.5rem;
    color: ${Color.Neutral[4]};

    &:hover {
        color: ${Color.Neutral[4]};
    }
`;

const LinkIcon = styled(DSLinkIcon)`
    margin-left: 0.25rem;
    margin-right: -0.375rem;
    height: 1rem;
    width: 1rem;
    vertical-align: baseline;
    color: ${Color.Primary};
    transform: rotate(-45deg);
`;

const StyledTitle = styled(Text.D1)`
    margin: 0 0 3rem;
    font-weight: bold;

    &:hover {
        ${Link} {
            opacity: 1;
        }
    }
`;

const StyledSecondary = styled(Text.H1)`
    margin: 1rem 0 1.5rem;
    &:hover {
        ${Link} {
            opacity: 1;
        }
    }
`;

const StyledTertiary = styled(Text.H2)`
    ${TextStyleHelper.getFontFamily("H2", "semibold")}
    margin: 1rem 0 1.5rem;
    &:hover {
        ${Link} {
            opacity: 1;
        }
    }
`;

const StyledQuaternary = styled(Text.H4)`
    margin: 1.5rem 0;
    &:hover {
        ${Link} {
            opacity: 1;
        }
    }
`;

// =============================================================================
// EXPORTABLES
// =============================================================================

export const Title = withLink(StyledTitle);
export const Secondary = withLink(StyledSecondary);
export const Heading3 = withLink(StyledTertiary);
export const Heading4 = withLink(StyledQuaternary);

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const convertToLinkId = (value: string): string => {
    return value.toLowerCase().replace(" ", "-");
};
