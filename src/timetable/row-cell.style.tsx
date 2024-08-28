import styled, { css } from "styled-components";
import { Text } from "../text";
import { Color } from "../color";

interface BlockStyleProps {
    $width: number;
    $status: string;
    $bgColour: string;
}

interface BlockContainerProps {
    $isOnTheHour: boolean;
}

export const BlockContainer = styled.div<BlockContainerProps>`
    ${(props) => {
        if (props.$isOnTheHour) {
            return css`
                box-shadow: inset -1px 0px ${Color.Accent.Light[1]};
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
    ${({ $status, $bgColour }) => {
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
                        cursor: pointer;
                    }
                `;
        }
    }}
    box-sizing: border-box;
    padding: 4px;
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
