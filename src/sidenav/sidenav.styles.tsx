import styled from "styled-components";

interface StyleProps {
    $fixed?: boolean;
}

export const Container = styled.div<StyleProps>`
    position: ${(props) => (props.$fixed ? "fixed" : "relative")};
    display: flex;
    height: 100vh;
    width: 8.5rem;
`;
