import styled from "styled-components";
import { ErrorMessage } from "./form-label.style";

export const LabelContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`;

export const ErrorMessageLabel = styled(ErrorMessage)`
    margin-top: 0;
`;
