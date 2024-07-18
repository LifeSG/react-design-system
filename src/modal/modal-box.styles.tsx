import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";

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

export const CloseButton = styled(ClickableIcon)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    border-top-right-radius: 0.75rem;
    color: ${Color.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${Color.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        right: 1.25rem;
    }
`;
