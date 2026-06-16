import { css } from "@linaria/core";
import clsx from "clsx";
import type { ThemeType } from "src/theme";
import {
    Breakpoint,
    ThemeProvider,
    useDesignToken,
    useResolvedBreakpointToken,
} from "src/theme";

interface BreakpointDisplayProps {
    theme: ThemeType;
}

export const BreakpointDisplay = ({ theme }: BreakpointDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <div className={display}>
                <div className={clsx(row, headerRow)}>
                    <div>Screen width</div>
                    <div>Range</div>
                    <div>Column number</div>
                    <div>Column gutter</div>
                    <div>Horizontal inset</div>
                </div>
                <BreakpointCollection size="xxs" />
                <BreakpointCollection size="xs" />
                <BreakpointCollection size="sm" />
                <BreakpointCollection size="md" />
                <BreakpointCollection size="lg" />
                <BreakpointCollection size="xl" />
                <BreakpointCollection size="xxl" />
            </div>
        </ThemeProvider>
    );
};

interface BreakpointCollectionProps {
    size: string;
}

const BreakpointCollection = ({ size }: BreakpointCollectionProps) => {
    const minToken = (size + "-min") as keyof typeof Breakpoint;
    const maxToken = (size + "-max") as keyof typeof Breakpoint;
    const columnNumberToken = (size + "-column") as keyof typeof Breakpoint;
    const columnSpacingToken = (size + "-gutter") as keyof typeof Breakpoint;
    const insetToken = (size + "-margin") as keyof typeof Breakpoint;

    // @ts-expect-error - minToken/maxToken are dynamic strings but guaranteed to be valid width breakpoint tokens
    const minValue = useResolvedBreakpointToken(Breakpoint[minToken]);
    // @ts-expect-error - minToken/maxToken are dynamic strings but guaranteed to be valid width breakpoint tokens
    const maxValue = useResolvedBreakpointToken(Breakpoint[maxToken]);
    const columnNumberValue = useDesignToken(Breakpoint[columnNumberToken]);
    const columnSpacingValue = useDesignToken(Breakpoint[columnSpacingToken]);
    const insetValue = useDesignToken(Breakpoint[insetToken]);

    return (
        <div className={row} key={size}>
            <div>
                <code>{size}</code>
            </div>
            {maxValue ? (
                <div>
                    {minValue} - {maxValue}
                </div>
            ) : (
                <div>&gt;= {minValue}</div>
            )}
            <div>{columnNumberValue}</div>
            <div>{columnSpacingValue}</div>
            <div>{insetValue}</div>
        </div>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const display = css`
    display: grid;
    grid-template-columns: repeat(5, minmax(max-content, 1fr));
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
