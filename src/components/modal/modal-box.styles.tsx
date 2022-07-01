import styled from "styled-components";
import { IconButton } from "../button/icon-button";
import { Icon } from "../icon/icon";
import { MediaQuery } from "../styles/spec";
import { Color } from "../styles/theme";

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Color.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`;

export const CloseButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    background: transparent;
    :focus-visible,
    :focus,
    :active {
        background: transparent;
    }
    :focus-visible {
        outline: 4px solid ${Color.Accent.Light[1]};
    }
`;

export const CloseIcon = styled(Icon)`
    font-size: 2rem;
    color: ${Color.Neutral[4]};
`;
