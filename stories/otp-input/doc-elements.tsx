import styled from "styled-components";
import { Text } from "../../src/text/text";
import { Color } from "../../src/color/color";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled(Text.H5)`
    color: ${Color.Neutral[3]};
    margin-bottom: 0.5rem;
`;
