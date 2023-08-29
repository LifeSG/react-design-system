import styled, { keyframes } from "styled-components";

// =============================================================================
// STYLING
// =============================================================================

export const EmptyDataElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    opacity: 0;
    img {
        width: 10rem;
        height: 10rem;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    animation: fade-in 1s ease-in forwards;
    @keyframes fade-in {
        100% {
            opacity: 1;
        }
    }
`;
