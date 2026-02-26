import styled from "styled-components";
import { V3_Border, V3_Colour, V3_MediaQuery } from "../v3_theme";

//=============================================================================
// STYLE INTERFACE
//=============================================================================
interface StyleProps {
    $fixed?: boolean;
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
    border: ${V3_Border["width-010"]} ${V3_Border["solid"]} ${V3_Colour.border};
    background-color: ${V3_Colour["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`;

export const DesktopContainer = styled(Container)`
    height: 100vh;
    left: 0;
    top: 0;
    ${V3_MediaQuery.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`;

export const MobileContainer = styled(Container)`
    display: none;
    visibility: hidden;
    ${V3_MediaQuery.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;
