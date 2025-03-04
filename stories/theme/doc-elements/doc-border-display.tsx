import { getBorder, getBorderWidth } from "src/theme/border/theme-helper";
import { ThemeSpec } from "src/theme/types";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Border } from "../../../src/theme";

interface BorderDisplayProps {
    theme: ThemeSpec;
}

export const BorderDisplay = ({ theme }: BorderDisplayProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Display>
                <HeaderRow>
                    <div>Token</div>
                    <div>Value</div>
                    <div></div>
                </HeaderRow>
                <BorderWidthCollection token="width-005" />
                <BorderWidthCollection token="width-010" />
                <BorderWidthCollection token="width-020" />
                <Divider />
                <BorderStyleCollection token="solid" />
                <DashedBorderStyleCollection />
            </Display>
        </ThemeProvider>
    );
};

interface BorderWidthCollectionProps {
    token: Parameters<typeof getBorderWidth>[0];
}

const BorderWidthCollection = ({ token }: BorderWidthCollectionProps) => {
    const theme = useTheme();
    const value = getBorderWidth(token)({
        theme,
    });

    return (
        <Row key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <BorderWidthExample $size={value as unknown as string} />
            </div>
        </Row>
    );
};

interface BorderStyleCollectionProps {
    token: Parameters<typeof getBorder>[0];
}

const BorderStyleCollection = ({ token }: BorderStyleCollectionProps) => {
    const theme = useTheme();
    const value = getBorder(token)({ theme });

    return (
        <Row key={token}>
            <div>
                <code>{token}</code>
            </div>
            <div>{value}</div>
            <div>
                <BorderStyleExample $style={value as unknown as string} />
            </div>
        </Row>
    );
};

const DashedBorderStyleCollection = () => {
    return (
        <Row>
            <div>
                <code>dashed-default</code>
            </div>
            <div>
                <code>{"({thickness, colour, radius}) => style"}</code>
            </div>
            <div>
                <DashedBorderExample />
            </div>
        </Row>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface BorderWidthProps {
    $size: string;
}

interface BorderStyleProps {
    $style: string;
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

const BorderWidthExample = styled.div<BorderWidthProps>`
    height: 24px;
    width: 48px;
    border: ${(props) => props.$size} solid tomato;
`;

const BorderStyleExample = styled.div<BorderStyleProps>`
    height: 24px;
    width: 48px;
    border: 1px ${(props) => props.$style} tomato;
`;

const DashedBorderExample = styled.div`
    height: 24px;
    width: 48px;
    ${Border["dashed-default"]({ colour: "tomato" })}
`;

const Divider = styled.div`
    grid-column: 1 / -1;
    height: 1px;
    background: #dde1e2;
    margin-bottom: 2rem;
`;
