import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { Border, Colour, MediaQuery, Radius } from "../theme";

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
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour.border};
    background-color: ${Colour["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`;

export const DesktopContainer = styled(Container)`
    height: 100vh;
    left: 0;
    top: 0;
    ${MediaQuery.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileContainer = styled(Container)`
    display: none;
    visibility: hidden;
    ${MediaQuery.MaxWidth.sm} {
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
    background-color: ${Colour["bg-primary-subtlest"]};
    border-top-right-radius: ${Radius["md"]};
    border-bottom-right-radius: ${Radius["md"]};
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour.border};

    ${(props) =>
        props.$showDrawer
            ? css`
                  box-shadow: 0 0 4px
                      rgb(from ${Colour.Primitive["neutral-20"]} r g b / 25%);
              `
            : css`
                  border: 0;
                  padding: 0;
              `};
`;
