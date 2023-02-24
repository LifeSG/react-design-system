import { Color } from "../color";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { View } from "./calendar";
import { CalendarType } from "./types";
import { MonthPickerContainer } from "./calendar-month.style";
import { YearPickerContainer } from "./calendar-year.style";
import { IconButton } from "../icon-button";

interface ContainerStyleProps {
    $type: CalendarType;
}

interface CommonStyleProps {
    $view: View;
}

interface HeaderDropdownProps {
    $view: View;
}

interface CalendarViewProps {
    $view: View;
}

interface ArrowButtonProps {
    $type: "header" | "content";
}

interface SideArrowButtonStyleProps {
    $direction: "left" | "right";
}

interface DropdownButtonStyleProps {
    $expandedDisplay: boolean;
    $visible?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------

export const Container = styled.div<ContainerStyleProps>`
    position: relative;
    display: flex;
    min-width: 28rem;
    max-width: 41rem;
    padding: 2rem 0.25rem;
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 12px;

    ${(props) => {
        const { $type } = props;

        switch ($type) {
            // control standalone calender style
            // element style itself that use in input calendar
            case "standalone":
                return css`
                    width: 41rem;

                    ${ArrowLeft},
                    ${ArrowRight} {
                        width: 1.5rem;
                        height: 1.5rem;
                    }

                    ${IconChevronDown} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }

                    ${MonthPickerContainer} {
                        gap: 0.5rem 2.5rem;
                    }

                    ${YearPickerContainer} {
                        gap: 0.5rem 2rem;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const ContentBody = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const HeaderDropdown = styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
`;

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

// const DropdownMonthYearBase = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
// `;

// export const DropdownMonth = styled(DropdownMonthYearBase)`
//     margin-right: 1rem;
// `;
// export const DropdownYear = styled(DropdownMonthYearBase)``;

// export const ContentBody = styled.div`
//     display: flex;
//     padding: 0 1.25rem;
//     border: 1px solid green;
// `;

export const Views = styled.div<CalendarViewProps>`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 19rem;

    ${(props) => {
        const _VIEWS = ["default", "month-options", "year-options"] as View[];

        return _VIEWS.map(
            (view, i) => `
            > div:nth-child(${i + 1}) {
                display: ${props.$view === view ? "grid" : "none"}
            }
        `
        );
    }}
`;

const ViewSectionBase = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: minmax(20.5rem, 33.5rem);
    height: 100%;
`;

export const DayView = styled(ViewSectionBase)``;
export const MonthView = styled(ViewSectionBase)``;
export const YearView = styled(ViewSectionBase)``;

export const TopArrowButton = styled(IconButton)`
    padding: 0.625rem;
    background: transparent;

    :focus,
    :active {
        background: transparent;
    }
`;

export const SideArrowButton = styled(IconButton)<SideArrowButtonStyleProps>`
    padding: 1rem;
    background: transparent;
    margin: auto 0;

    :focus,
    :active {
        background: transparent;
    }

    ${(props) => {
        switch (props.$direction) {
            case "left":
                return css`
                    margin: auto 0.625rem auto 0; // to counter the padding
                `;
            case "right":
            default:
                return css`
                    margin: auto 0 auto 0.625rem; // to counter the padding
                `;
        }
    }}
`;

// -----------------------------------------------------------------------------
// ICONS
// -----------------------------------------------------------------------------
const DirectionalIconBase = css`
    color: ${Color.Neutral[3]};
`;

export const ArrowLeft = styled(ChevronLeftIcon)`
    ${DirectionalIconBase}
`;

export const ArrowRight = styled(ChevronRightIcon)`
    ${DirectionalIconBase}
`;

export const IconChevronDown = styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    transition: transform 250ms ease-in-out;
    margin-left: 0.625rem;
`;
