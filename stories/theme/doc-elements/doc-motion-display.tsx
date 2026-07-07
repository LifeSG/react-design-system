import { css } from "@linaria/core";
import clsx from "clsx";
import type { ThemeType } from "src/theme";
import { Motion, ThemeProvider, useDesignToken } from "src/theme";

interface MotionDisplayProps {
    theme: ThemeType;
}

export const MotionDisplay = ({ theme }: MotionDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Token</div>
                    <div>Value</div>
                    <div>Usage</div>
                </div>
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
            </div>
        </ThemeProvider>
    );
};

interface MotionCollectionProps {
    token: keyof typeof Motion;
    children: React.ReactNode;
}

const DurationCollection = ({ token, children }: MotionCollectionProps) => {
    const value = useDesignToken(Motion[token]) as string;

    return (
        <div className={row} key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>{children}</div>
        </div>
    );
};

const TimingCollection = ({ token, children }: MotionCollectionProps) => {
    const value = useDesignToken(Motion[token]) as string;

    return (
        <div className={row} key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <div>{children}</div>
                <div className={motionContainer}>
                    <div
                        className={motionCircle}
                        style={{ animationTimingFunction: value }}
                    />
                </div>
            </div>
        </div>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const display = css`
    display: grid;
    grid-template-columns: max-content max-content minmax(250px, 1fr);
    flex-wrap: wrap;

    margin-bottom: 2.5rem;

    &:last-child {
        margin-bottom: 1rem;
    }

    overflow-x: auto;
`;

const row = css`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 0 3rem;
    margin-bottom: 2rem;
`;

const headerRow = css`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const motionContainer = css`
    position: relative;
    margin-top: 1rem;
    height: 1rem;
    max-width: 500px;
`;

const motionCircle = css`
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: tomato;
    top: 50%;
    transform: translateY(-50%);

    animation-name: storybook-motion-slide-animation;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: normal;

    @keyframes storybook-motion-slide-animation {
        0% {
            left: 0;
        }
        100% {
            left: calc(100% - 1rem);
        }
    }
`;
