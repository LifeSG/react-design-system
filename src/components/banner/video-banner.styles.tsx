import styled from "styled-components";
import { Color } from "../styles/theme";
import { MediaQuery } from "../styles/spec";
import { Layout } from "../layout";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface OverlayProps {
    opacity: number;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    position: relative;
    background-color: ${Color.Neutral[1]};
    width: 100%;
    height: 25rem;
    ${MediaQuery.MaxWidth.tablet} {
        height: 23rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        height: 35rem;
    }
`;

export const ImageContainer = styled.div`
    display: none;

    ${MediaQuery.MaxWidth.mobileL} {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 55%;
        background-size: cover;
        background-image: url("${({ src }: { src: string }) => src}");
        mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
        );
    }
`;

export const VideoContainerLgScreen = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`;

export const VideoPlayerLgScreen = styled.div`
    position: absolute;
    height: 230%;
    width: 100%;
    top: -50%;
    /* left: 0; */
    filter: blur(4px);

    ${MediaQuery.MaxWidth.tablet} {
        width: 150%;
    }
`;

export const VideoDarkenOverlay = styled.div<OverlayProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, ${(props) => props.opacity});

    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`;

export const VideoContainerSmScreen = styled.div`
    display: none;

    ${MediaQuery.MaxWidth.mobileL} {
        display: block;
        height: 12.2rem;
        width: 100%;
        margin: 2.5rem 0;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        height: 10rem;
    }
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

export const Section = styled(Layout.Section)`
    height: 100%;
    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`;

export const Container = styled(Layout.Container)`
    display: flex;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: column;
    }
`;

export const Inner = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    z-index: 1;

    ${MediaQuery.MaxWidth.tablet} {
        width: 70%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`;
