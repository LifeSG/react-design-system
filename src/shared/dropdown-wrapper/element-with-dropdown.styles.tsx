import styled from "styled-components";

// hack to force child to respect max-height of parent
// even though parent does not have explicit height
export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
