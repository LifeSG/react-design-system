import styled from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";

interface StyleProps {
    $fixed?: boolean;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    box-sizing: border-box;
    width: 8.5rem;
    height: 100%;
    background-color: ${Color.Accent.Light[6]};
    border: 1px solid ${Color.Neutral[5]};
    padding: 0.5rem 0 1.5rem 0;
`;

export const DesktopContainer = styled(Container)<StyleProps>`
    position: ${(props) => (props.$fixed ? "fixed" : "relative")};
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`;

export const MobileContainer = styled(Container)`
    display: none;
    ${MediaQuery.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`;
