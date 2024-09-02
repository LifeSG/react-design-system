import styled, { css } from "styled-components";
import { Color } from "../color";
import { PopoverTrigger } from "../popover-v2";
import { Text } from "../text";

interface BlockStyleProps {
    $width: number;
    $status: string;
    $bgColour: string;
    $clickableEmptyCell: boolean;
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
    height: 62px;
`;

export const Gap = styled.div`
    width: 2px;
    height: 100%;
`;

export const Block = styled.div<BlockStyleProps>`
    height: 100%;
    width: ${({ $width }) => `${$width}px`};
    font-size: 11px;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    ${({ $status, $bgColour, $clickableEmptyCell }) => {
        switch ($status) {
            case "DISABLED":
                return css`
                    background: repeating-linear-gradient(
                        135deg,
                        #e0e4e5 0px 6px,
                        #ecefef 6px 12px
                    );
                    &:hover {
                        cursor: not-allowed;
                    }
                `;
            case "OCCUPIED":
                return css`
                    background: ${$bgColour};
                    &:hover {
                        cursor: pointer;
                    }
                `;
            default:
                return css`
                    &:hover {
                        cursor: ${$clickableEmptyCell ? "pointer" : "default"};
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
    color: #686868;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const StyledPopoverTrigger = styled(PopoverTrigger)`
    padding: 0;
    max-height: 62px;
    &:hover {
        cursor: pointer;
    }
`;
