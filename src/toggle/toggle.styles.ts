import styled from "styled-components";

import { Alert } from "../alert";
import { ToggleIcon } from "../shared/toggle-icon/toggle-icon";
import { TextList } from "../text-list";
import { Colour, Font, MediaQuery, Radius } from "../theme";
import { Typography } from "../typography";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $indicator?: boolean;
}

interface LabelStyleProps {
    $maxLines?: { desktop?: number; mobile?: number; tablet?: number };
}

export const tokens = {
    label: {
        desktopLineClamp: "--fds-internal-toggle-label-desktopLineClamp",
        tabletLineClamp: "--fds-internal-toggle-label-tabletLineClamp",
        mobileLineClamp: "--fds-internal-toggle-label-mobileLineClamp",
    },
} as const;

// =============================================================================
// STYLING
// =============================================================================

export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const TextContainer = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    &.toggleTextContainerDisabledSelected {
        color: ${Colour["text-selected-disabled"]};
    }

    &.toggleTextContainerDisabled {
        color: ${Colour["text-disabled"]};
    }

    &.toggleTextContainerSelected {
        color: ${Colour["text-selected"]};
    }

    &.toggleTextContainerDefault {
        color: ${Colour.text};
    }
`;

export const StyledToggleIcon = styled(ToggleIcon)`
    &.toggleStyledToggleIconDisabledSelected {
        color: ${Colour["icon-selected-disabled"]};
    }

    &.toggleStyledToggleIconDisabled {
        color: ${Colour["icon-disabled-subtle"]};
    }

    &.toggleStyledToggleIconSelected {
        color: ${Colour["icon-selected"]};
    }

    &.toggleStyledToggleIconDefault {
        color: ${Colour["icon-subtle"]};
    }
`;

export const Container = styled.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Radius["sm"]};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Colour.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 0;
    }

    &.noIndicator {
        justify-content: center;
    }

    // Container min width to fit content
    &.useContentWidth {
        min-width: unset;
    }

    &.toggleContainerNoBorderErrorDisabled {
        border-color: ${Colour["border-error"]};
    }

    &.toggleContainerNoBorderError {
        border-color: ${Colour["border-error"]};

        &:has(${HeaderContainer}:hover) {
            @media (pointer: fine) {
                background: ${Colour["bg-hover-subtle"]};
            }
        }
    }

    &.toggleContainerNoBorderDisabledSelected {
        border: none;
        background: ${Colour["bg-selected-disabled"]};
    }

    &.toggleContainerNoBorderDisabled {
        border: none;
    }

    &.toggleContainerNoBorderSelected {
        border: none;
        background: ${Colour["bg-selected"]};

        &:has(${HeaderContainer}:hover) {
            @media (pointer: fine) {
                background: ${Colour["bg-selected-hover"]};

                & ${TextContainer} {
                    color: ${Colour["text-selected-hover"]};
                }

                & ${StyledToggleIcon} {
                    color: ${Colour["icon-selected-hover"]};
                }
            }
        }
    }

    &.toggleContainerNoBorderDefault {
        border: none;

        &:has(${HeaderContainer}:hover) {
            @media (pointer: fine) {
                background: ${Colour["bg-hover-subtle"]};
            }
        }
    }

    &.toggleContainerDefaultErrorDisabled {
        border-color: ${Colour["border-error"]};
    }

    &.toggleContainerDefaultError {
        border-color: ${Colour["border-error"]};

        &:has(${HeaderContainer}:hover) {
            @media (pointer: fine) {
                background: ${Colour["bg-hover-subtle"]};
            }
        }
    }

    &.toggleContainerDefaultDisabledSelected {
        border-color: ${Colour["border-selected-disabled"]};
        background: ${Colour["bg-selected-disabled"]};
    }

    &.toggleContainerDefaultDisabled {
        border-color: ${Colour["border-disabled"]};
        background: ${Colour["bg-disabled"]};
    }

    &.toggleContainerDefaultSelected {
        border-color: ${Colour["border-selected"]};
        background: ${Colour["bg-selected"]};

        &:has(${HeaderContainer}:hover) {
            @media (pointer: fine) {
                background: ${Colour["bg-selected-hover"]};

                & ${TextContainer} {
                    color: ${Colour["text-selected-hover"]};
                }

                & ${StyledToggleIcon} {
                    color: ${Colour["icon-selected-hover"]};
                }
            }
        }
    }

    &.toggleContainerDefault {
        border-color: ${Colour.border};

        &:has(${HeaderContainer}:hover) {
            @media (pointer: fine) {
                background: ${Colour["bg-hover-subtle"]};
            }
        }
    }
`;

export const Input = styled.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: pointer;
    top: 0;
    left: 0;

    &.toggleInputDisabled {
        cursor: not-allowed;
    }

    &.toggleInputEnabled {
        cursor: pointer;
    }

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`;
export const InputContainer = styled.div`
    display: flex;
`;

export const Label = styled.label<LabelStyleProps & { $selected?: boolean }>`
    &.toggleLabelSelected {
        ${Font["body-baseline-semibold"]}
    }

    &.toggleLabelDefault {
        ${Font["body-baseline-regular"]}
    }

    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;

    ${tokens.label.desktopLineClamp}: initial;
    ${tokens.label.tabletLineClamp}: initial;
    ${tokens.label.mobileLineClamp}: initial;

    -webkit-line-clamp: var(${tokens.label.desktopLineClamp}, none);
    ${MediaQuery.MaxWidth.lg} {
        -webkit-line-clamp: var(${tokens.label.tabletLineClamp}, none);
    }
    ${MediaQuery.MaxWidth.sm} {
        -webkit-line-clamp: var(${tokens.label.mobileLineClamp}, none);
    }
`;

export const SubLabel = styled.div`
    ${Font["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Font["body-md-semibold"]}
    }
`;

export const IndicatorLabelContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0.6875rem 1rem;

    &.indicatorLabelContainerAddPadding {
        padding: 0.6875rem 0rem 0.6875rem 1rem;
    }
`;

export const RemoveButton = styled.button`
    color: ${Colour["text-error"]};
    white-space: nowrap;
    ${Font["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;
    cursor: pointer;

    &.removeButtonDisabled {
        color: ${Colour["text-disabled"]};
        cursor: not-allowed;
    }
`;

export const ExpandButton = styled.button`
    color: ${Colour["text-primary"]};
    ${Font["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Colour.bg};
    cursor: pointer;
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: 0rem;
    width: 100%;

    &.expandButtonDisabled {
        color: ${Colour["text-disabled"]};
        cursor: not-allowed;
    }

    &.expandButtonPaddingTopRequired {
        padding-top: 0.6875rem;
    }

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`;

export const ErrorContainer = styled.div`
    width: 100%;
    color: ${Colour["text-error"]};
    border: none;
    background: ${Colour.bg};
    cursor: pointer;
    padding: 0.6875rem 1rem 0.5rem 1rem;

    &.errorContainerDisabled {
        color: ${Colour["text-disabled"]};
        cursor: not-allowed;
    }
`;

export const AlertContainer = styled(Alert)`
    width: 100%;
    user-select: none;
`;

export const Children = styled.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: 0.5rem;
    background-color: ${Colour.bg};
    color: ${Colour.text};

    &.childrenIsFinalItem {
        padding-bottom: 0.6875rem;
    }

    &.childrenDisabled {
        color: ${Colour["text-disabled"]};
    }

    &.childrenSelected {
        color: ${Colour["text-selected"]};
    }
`;

export const ErrorText = styled(Typography.BodyMD)`
    color: ${Colour["text-error"]};

    &.errorTextDisabled {
        color: ${Colour["text-disabled"]};
    }
`;

export const ErrorList = styled(TextList.Ul)`
    color: ${Colour["text-error"]};

    &.errorListDisabled {
        color: ${Colour["text-disabled"]};
    }
`;
