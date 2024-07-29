import styled from "styled-components";
import { Color } from "../color";
import { IconButton } from "../icon-button";
import { MediaQuery } from "../media";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner/component-loading-spinner";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACES
// =============================================================================

interface StyleProps {
    $loading?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const DownloadContainer = styled.div<StyleProps>`
    background: ${Color.Accent.Light[6]};
    width: 100%;
    min-width: 18.4375rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 2rem;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    cursor: ${(props) => (props.$loading ? "default" : "pointer")};

    &:hover {
        background: ${(props) =>
            props.$loading ? Color.Accent.Light[6] : Color.Accent.Light[5]};
    }
`;

export const DownloadDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const FileName = styled.div`
    width: 100%;
`;

export const FileSize = styled(Text.BodySmall)`
    white-space: nowrap;
    margin-left: 2rem;

    ${MediaQuery.MaxWidth.mobileL} {
        margin: 0.5rem 0 0 0;
    }
`;

export const IconContainer = styled.div`
    margin-left: 5.5rem;
    ${MediaQuery.MaxWidth.mobileL} {
        margin-left: 1rem;
    }
`;

export const DSIconButton = styled(IconButton)<StyleProps>`
    cursor: ${(props) => (props.$loading ? "default" : "pointer")};

    &:hover {
        box-shadow: none;
    }
`;

export const Spinner = styled(ComponentLoadingSpinner)`
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Color.Primary} transparent transparent transparent;
    }
`;
