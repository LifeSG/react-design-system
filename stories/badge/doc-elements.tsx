import { MagnifierIcon } from "@lifesg/react-icons";
import { Colour } from "src/theme";
import styled from "styled-components";

const Container = styled.div`
    color: ${Colour["text"]};
`;

export const Icon = () => {
    return (
        <Container>
            <MagnifierIcon />
        </Container>
    );
};
