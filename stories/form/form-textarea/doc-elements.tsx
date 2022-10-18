import { Text } from "../../../src/text/text";
import styled from "styled-components";
import React from "react";

const CustomCounterLabel = styled(Text.H6)`
    text-align: right;
    color: #a4a4a4 !important;
    font-size: 14px;
`;

export const renderCustomCounter = (
    maxLength: number,
    currentValueLength: number
): JSX.Element => {
    return (
        <CustomCounterLabel data-testid={"counter-label"} weight="semibold">
            {currentValueLength}/{maxLength}
        </CustomCounterLabel>
    );
};
