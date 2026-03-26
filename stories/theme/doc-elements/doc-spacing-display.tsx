import { getSpace } from "src/theme/spacing/theme-helper";
import { SpacingSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";

interface SpacingDisplayProps {
    theme: ThemeSpec;
}

export const SpacingDisplay = ({ theme }: SpacingDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </HeaderRow>
                <SpacingCollection token="spacing-0" />
                <SpacingCollection token="spacing-4" />
                <SpacingCollection token="spacing-8" />
                <SpacingCollection token="spacing-12" />
                <SpacingCollection token="spacing-16" />
                <SpacingCollection token="spacing-20" />
                <SpacingCollection token="spacing-24" />
                <SpacingCollection token="spacing-32" />
                <SpacingCollection token="spacing-40" />
                <SpacingCollection token="spacing-48" />
                <SpacingCollection token="spacing-64" />
                <SpacingCollection token="spacing-72" />
                <Divider />
                <SpacingCollection token="layout-xs" />
                <SpacingCollection token="layout-sm" />
                <SpacingCollection token="layout-md" />
                <SpacingCollection token="layout-lg" />
                <SpacingCollection token="layout-xl" />
                <SpacingCollection token="layout-xxl" />
                <SpacingCollection token="layout-xxxl" />
            </Display>
        </ThemeProvider>
    );
};

export const LayoutDisplay = ({ theme }: SpacingDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </HeaderRow>
            </Display>
        </ThemeProvider>
    );
};

interface SpacingCollectionProps {
    token: keyof SpacingSet;
}

const SpacingCollection = ({ token }: SpacingCollectionProps) => {
    const theme = useTheme();
    const value = getSpace(token)({ theme });

    return (
        <Row key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <Box $size={value} />
            </div>
        </Row>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface BoxProps {
    $size: string;
}

// =============================================================================
// STYLING
// =============================================================================
const Display = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(max-content, 1fr));
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
    align-items: center;
    gap: 0 3rem;
    margin-bottom: 2rem;
`;

const HeaderRow = styled(Row)`
    margin-bottom: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #dde1e2;
`;

const Box = styled.div<BoxProps>`
    background: tomato;
    height: 24px;
    width: ${(props) => props.$size};
`;

const Divider = styled.div`
    grid-column: 1 / -1;
    height: 1px;
    background: #dde1e2;
    margin-bottom: 2rem;
`;
