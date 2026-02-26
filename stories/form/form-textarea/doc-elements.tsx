import { V3_Colour } from "src/v3_theme";
import styled from "styled-components";

const CustomCounterLabel = styled.p`
    text-align: right;
    color: ${V3_Colour["text"]};
    font-size: 14px;
    font-weight: 600;
`;

export const renderCustomCounter = (
    maxLength: number,
    currentValueLength: number
): JSX.Element => {
    return (
        <CustomCounterLabel data-testid={"counter-label"}>
            {currentValueLength}/{maxLength}
        </CustomCounterLabel>
    );
};
