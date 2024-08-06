import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { animated } from "react-spring";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $fixed?: boolean;
}

interface DrawerStyleProps {
    $showDrawer: boolean;
}

//=============================================================================
// STYLING
//=============================================================================
export const Wrapper = styled.div<StyleProps>`
    display: flex;
    position: ${(props) => (props.$fixed ? "fixed" : "relative")};
    width: fit-content;
`;

const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${v2_Color.Neutral[5]};
    background-color: ${v2_Color.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`;

export const DesktopContainer = styled(Container)`
    height: 100vh;
    left: 0;
    top: 0;
    ${v2_MediaQuery.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileContainer = styled(Container)`
    display: none;
    visibility: hidden;
    ${v2_MediaQuery.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;

export const DesktopDrawer = styled(animated.ul)<DrawerStyleProps>`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${v2_Color.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${v2_Color.Neutral[5]};

    ${(props) =>
        props.$showDrawer
            ? css`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `
            : css`
                  border: 0;
                  padding: 0;
              `};
`;
