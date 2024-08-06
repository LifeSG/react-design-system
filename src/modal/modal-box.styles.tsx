import styled from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_MediaQuery } from "../v2_media";
import { ClickableIcon } from "../shared/clickable-icon";

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${V2_Color.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${V2_MediaQuery.MaxWidth.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`;

export const CloseButton = styled(ClickableIcon)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${V2_Color.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${V2_Color.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        right: 1.25rem;
    }
`;
