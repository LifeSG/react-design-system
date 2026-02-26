import { MagnifierIcon } from "@lifesg/react-icons";
import { V3_Colour } from "src/v3_theme";
import styled from "styled-components";

const Container = styled.div`
    color: ${V3_Colour["text"]};
`;

export const Icon = () => {
    return (
        <Container>
            <MagnifierIcon />
        </Container>
    );
};
