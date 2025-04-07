import styled from "styled-components";

const CustomCounterLabel = styled.p`
    text-align: right;
    color: #a4a4a4;
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
