import styled, { css } from "styled-components";
import { Color } from "../../color";
import { Text } from "../../text";
import { ROW_BAR_COLOR_SEQUENCE_TO_STRIPE_MAP, RowBarColors } from "../const";
import { TimeTableCellType } from "../types";

interface BlockStyleProps {
    $width: number;
    $status: TimeTableCellType;
    $bgColour: string;
    $isClickable?: boolean;
}

interface BlockContainerProps {
    $isOnTheHour: boolean;
}

export const BlockContainer = styled.div<BlockContainerProps>`
    border-bottom: 1px solid ${Color.Neutral[5]};
    ${(props) => {
        if (props.$isOnTheHour) {
            return css`
                box-shadow: inset -0.5px 0px ${Color.Accent.Light[1]};
            `;
        }
    }}
`;

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`;

export const Gap = styled.div`
    width: 2px;
    height: 100%;
`;

export const Block = styled.div<BlockStyleProps>`
    height: 100%;
    width: ${({ $width }) => `${$width}px`};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    ${({ $status, $bgColour, $isClickable }) => {
        switch ($status) {
            case "blocked":
                return css`
                    background: repeating-linear-gradient(
                        135deg,
                        #e0e4e5 0px 6px,
                        #ecefef 6px 12px
                    );
                    &:hover {
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            case "filled":
                return css`
                    background: ${$bgColour};
                    &:hover {
                        cursor: ${$isClickable ? "pointer" : "default"};
                    }
                `;
            case "disabled":
                return css`
                    background: ${Color.Neutral[6]};
                    &:hover {
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            case "pending":
                return css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${$bgColour} 0px 6px,
                        ${ROW_BAR_COLOR_SEQUENCE_TO_STRIPE_MAP[
                                $bgColour as RowBarColors
                            ]}
                            6px 12px
                    );
                    &:hover {
                        cursor: ${$isClickable ? "pointer" : "not-allowed"};
                    }
                `;
            default:
                return css`
                    &:hover {
                        background-color: ${$isClickable
                            ? Color.Accent.Light[5]
                            : ""};
                        cursor: ${$isClickable ? "pointer" : "default"};
                    }
                `;
        }
    }}
`;

export const BlockTitle = styled(Text.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const BlockDescription = styled(Text.XSmall)`
    color: ${Color.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
