import { BreakpointSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { getBreakpoint } from "src/theme/breakpoint/theme-helper";

interface BreakpointDisplayProps {
    theme: ThemeSpec;
}

export const BreakpointDisplay = ({ theme }: BreakpointDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Screen width</div>
                    <div>Range</div>
                    <div>Column number</div>
                    <div>Column gutter</div>
                    <div>Horizontal inset</div>
                </HeaderRow>
                <BreakpointCollection size="xxs" />
                <BreakpointCollection size="xs" />
                <BreakpointCollection size="sm" />
                <BreakpointCollection size="md" />
                <BreakpointCollection size="lg" />
                <BreakpointCollection size="xl" />
                <BreakpointCollection size="xxl" />
            </Display>
        </ThemeProvider>
    );
};

interface BreakpointCollectionProps {
    size: string;
}

const BreakpointCollection = ({ size }: BreakpointCollectionProps) => {
    const theme = useTheme();
    const minToken = (size + "-min") as keyof BreakpointSet;
    const maxToken = (size + "-max") as keyof BreakpointSet;
    const columnNumberToken = (size + "-column") as keyof BreakpointSet;
    const columnSpacingToken = (size + "-gutter") as keyof BreakpointSet;
    const insetToken = (size + "-margin") as keyof BreakpointSet;

    const minValue = getBreakpoint(minToken)({ theme });
    const maxValue = getBreakpoint(maxToken)({ theme });
    const columnNumberValue = getBreakpoint(columnNumberToken)({ theme });
    const columnSpacingValue = getBreakpoint(columnSpacingToken)({ theme });
    const insetValue = getBreakpoint(insetToken)({ theme });

    return (
        <Row key={size}>
            <div>
                <code>{size}</code>
            </div>
            {maxValue ? (
                <div>
                    {minValue} - {maxValue}px
                </div>
            ) : (
                <div>&gt;= {minValue}px</div>
            )}
            <div>{columnNumberValue}</div>
            <div>{columnSpacingValue}px</div>
            <div>{insetValue}px</div>
        </Row>
    );
};

// =============================================================================
// STYLING
// =============================================================================
const Display = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(max-content, 1fr));
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
