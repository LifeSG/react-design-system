import React from "react";
import styled, { css } from "styled-components";
import { ErrorMessage } from "../form/form-basic.style";
import { Color } from "../styles/theme";
import { Text } from "../text/text";

interface Props {
    label: string;
    id?: string;
    errorMessage?: string;
    disabled?: boolean;
}

export const TextareaLabel = ({ label, id, errorMessage, disabled }: Props) => {
    const renderErrorMessage = () => (
        <ErrorMessageContainer>
            <ErrorMessageLabel
                weight="semibold"
                data-testid={id ? `${id}-error-message` : "error-message"}
            >
                {errorMessage}
            </ErrorMessageLabel>
        </ErrorMessageContainer>
    );

    const renderLabel = () => (
        <CounterLabel
            data-testid={id ? `${id}-counter-label` : "counter-label"}
            weight="semibold"
            disabled={disabled}
        >
            {label}
        </CounterLabel>
    );

    return (
        <Container>
            {errorMessage && renderErrorMessage()}
            {label !== "" && renderLabel()}
        </Container>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`;

const ErrorMessageContainer = styled.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`;

const ErrorMessageLabel = styled(ErrorMessage)`
    margin-top: 0;
`;

const CounterLabel = styled(Text.H6)<StyleProps>`
    text-align: right;

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[4](props)};
            `;
        }
    }}
`;
