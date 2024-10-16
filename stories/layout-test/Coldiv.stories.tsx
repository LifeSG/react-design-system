import { ThemeProvider } from "styled-components";
import { ColDiv } from "../../src/layout/col-div";
import { Content } from "../../src/layout/content";
import { mockTheme } from "./mock-theme";
import { Layout } from "../../src/layout";

export default {
    title: "Layout-Test/ColDiv",
    component: ColDiv,
};

// Default view span 1 column
export const Default = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <ColDiv style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>
                Default ColDiv
            </ColDiv>
        </Content>
    </ThemeProvider>
);

// Mobile config: spans across 3 columns in mobile view
export const MobileColsOnly = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <ColDiv smCols={8}>Mobile: Span 3 columns</ColDiv>
        </Content>
    </ThemeProvider>
);

// Tablet config: spans across 6 columns in tablet view
export const TabletColsOnly = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <ColDiv
                xxlCols={6}
                style={{ backgroundColor: "#c8e6c9", padding: "1rem" }}
            >
                Tablet: Span 6 columns
            </ColDiv>
        </Content>
    </ThemeProvider>
);

// Desktop config: spans across 8 columns in desktop view
export const DesktopColsOnly = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <ColDiv
                xlCols={8}
                style={{ backgroundColor: "#ffe0b2", padding: "1rem" }}
            >
                Desktop: Span 8 columns
            </ColDiv>
        </Content>
    </ThemeProvider>
);

// Mixed config: spans across different columns in mobile, tablet, and desktop view
export const MixedCols = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <ColDiv
                smCols={8}
                lgCols={4}
                xlCols={6}
                style={{ backgroundColor: "#d1c4e9", padding: "1rem" }}
            >
                Mobile: Span 2 columns, Tablet: Span 4 columns, Desktop: Span 6
                columns
            </ColDiv>
        </Content>
    </ThemeProvider>
);

// Using start and span values: spans across a specific range of columns
export const StartAndSpan = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <Layout.ColDiv
                smCols={[1, 5]}
                lgCols={[3, 6]}
                xxlCols={[1, 12]}
                xlCols={[4, 10]}
                style={{ backgroundColor: "#ffccbc", padding: "1rem" }}
            >
                Mobile: Takes up span 4 columns starting from 1 | Tablet: Takes
                up span 3 columns starting from 3 | Desktop: Takes up span 6
                columns starting from 4
            </Layout.ColDiv>
        </Content>
    </ThemeProvider>
);
