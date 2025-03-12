import { getRadius } from "src/theme/radius/theme-helper";
import { RadiusSet, ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";

interface RadiusDisplayProps {
    theme: ThemeSpec;
}

export const RadiusDisplay = ({ theme }: RadiusDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </HeaderRow>
                <RadiusCollection token="none" />
                <RadiusCollection token="xs" />
                <RadiusCollection token="sm" />
                <RadiusCollection token="md" />
                <RadiusCollection token="lg" />
                <RadiusCollection token="full" />
            </Display>
        </ThemeProvider>
    );
};

interface RadiusCollectionProps {
    token: keyof RadiusSet;
}

const RadiusCollection = ({ token }: RadiusCollectionProps) => {
    const theme = useTheme();
    const value = getRadius(token)({
        theme,
    });

    return (
        <Row key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <RadiusExample $radius={value} />
            </div>
        </Row>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface RadiusStyleProps {
    $radius: string;
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

const RadiusExample = styled.div<RadiusStyleProps>`
    height: 48px;
    width: 128px;
    background: tomato;
    border-radius: ${(props) => props.$radius};
`;
