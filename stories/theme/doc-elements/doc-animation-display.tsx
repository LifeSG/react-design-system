import { AnimationSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, keyframes, useTheme } from "styled-components";
import { getAnimation } from "../../../src/theme/animation/theme-helper";

interface AnimationDisplayProps {
    theme: ThemeSpec;
}

export const AnimationDisplay = ({ theme }: AnimationDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Value</div>
                    <div>Usage</div>
                </HeaderRow>
                <DurationCollection token="duration-150">
                    For very small and short interactions.
                    <br />
                    <small>e.g. check boxes, toggles, radio buttons</small>
                </DurationCollection>
                <DurationCollection token="duration-250">
                    For small interactions.
                    <br />
                    <small>e.g. buttons, fades</small>
                </DurationCollection>
                <DurationCollection token="duration-350">
                    For small expansion or short distance movements.
                    <br />
                    <small>e.g. micro-interactions, icons</small>
                </DurationCollection>
                <DurationCollection token="duration-500">
                    For elements that traverse a medium area of the screen.
                    <br />
                    <small>e.g. expansion, search bar, toast</small>{" "}
                </DurationCollection>
                <DurationCollection token="duration-800">
                    For larger expansion that fills up a big part of the screen.
                    <br />
                    <small>e.g. important system notifications, cards</small>
                </DurationCollection>
                <DurationCollection token="duration-1000">
                    For large scale elements or transitions.
                    <br />
                    <small>e.g. background dimming</small>{" "}
                </DurationCollection>
                <TimingCollection token="ease-default">
                    For “non-moving” elements.
                    <br />
                    <small>e.g. opacity, colour transition</small>
                </TimingCollection>
                <TimingCollection token="ease-standard">
                    For elements that are visible throughout the motion.
                    <br />
                    <small>e.g. dropdown, error motion, progress bar</small>
                </TimingCollection>
                <TimingCollection token="ease-entrance">
                    When an element is introduced into view.
                    <br />
                    <small>e.g. modal, toast</small>
                </TimingCollection>
                <TimingCollection token="ease-exit">
                    When an element is removed from view.
                    <br />
                    <small>e.g. closing a modal</small>
                </TimingCollection>
            </Display>
        </ThemeProvider>
    );
};

interface AnimationCollectionProps {
    token: keyof AnimationSet;
    children: React.ReactNode;
}

const DurationCollection = ({ token, children }: AnimationCollectionProps) => {
    const theme = useTheme();
    const value = getAnimation(token)({ theme });

    return (
        <Row key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>{children}</div>
        </Row>
    );
};

const TimingCollection = ({ token, children }: AnimationCollectionProps) => {
    const theme = useTheme();
    const value = getAnimation(token)({ theme });

    return (
        <Row key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <div>{children}</div>
                <AnimationContainer>
                    <AnimationCircle $timing={value} />
                </AnimationContainer>
            </div>
        </Row>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface AnimationProps {
    $timing: string;
}

// =============================================================================
// STYLING
// =============================================================================
const Display = styled.div`
    display: grid;
    grid-template-columns: max-content max-content minmax(250px, 1fr);
    flex-wrap: wrap;

    margin-bottom: 2.5rem;

    &:last-child {
        margin-bottom: 1rem;
    }

    overflow-x: auto;
`;

const Row = styled.div`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 0 3rem;
    margin-bottom: 2rem;
`;

const HeaderRow = styled(Row)`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const AnimationContainer = styled.div`
    position: relative;
    margin-top: 1rem;
    height: 1rem;
    max-width: 500px;
`;

const slideAnimation = keyframes`
    0% { left: 0; }
    100% { left: calc(100% - 1rem); }
`;

const AnimationCircle = styled.div<AnimationProps>`
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: tomato;
    top: 50%;
    transform: translateY(-50%);

    animation-name: ${slideAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ${(props) => props.$timing};
    animation-direction: normal;
`;
