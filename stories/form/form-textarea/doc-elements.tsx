import { Text } from "../../../src/text/text";
import styled from "styled-components";
import React from "react";

export const renderCustomCounter = (
    maxLength: number,
    currentValueLength: number
): JSX.Element => {
    const CustomCounterLabel = styled(Text.H6)`
        text-align: right;
        color: #a4a4a4 !important;
        font-size: 14px;
    `;
    return (
        <CustomCounterLabel data-testid={"counter-label"} weight="semibold">
            {currentValueLength}/{maxLength}
        </CustomCounterLabel>
    );
};
