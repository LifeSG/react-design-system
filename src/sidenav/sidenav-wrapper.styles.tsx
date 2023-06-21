import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { Color } from "../color";
import { MediaQuery } from "../media";

interface StyleProps {
    $showDrawer: boolean;
}

export const Wrapper = styled.div`
    display: flex;
`;

const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${Color.Neutral[5]};
    background-color: ${Color.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`;

export const DesktopContainer = styled(Container)`
    left: 0;
    top: 0;
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileContainer = styled(Container)`
    display: none;
    visibility: hidden;
    ${MediaQuery.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;

export const DesktopDrawer = styled(animated.ul)<StyleProps>`
    flex-direction: column;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0;
    background-color: ${Color.Accent.Light[6]};
    border-radius: 0 8px 8px 0;

    ${(props) =>
        props.$showDrawer &&
        css`
            border: 1px solid ${Color.Neutral[5]};
            border-left: none;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        `}
`;
