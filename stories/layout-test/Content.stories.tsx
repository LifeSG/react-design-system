import { ThemeProvider } from "styled-components";
import { Content } from "../../src/layout/content";
import { mockTheme } from "./mock-theme";

export default {
    title: "Layout-Test/Content",
    component: Content,
};

export const DefaultContent = () => (
    <ThemeProvider theme={mockTheme}>
        <Content>
            <h1>Header Test</h1>
            <p style={{ marginLeft: "1rem" }}>
                This is some testing text in the paragraph tag.
            </p>
            <img
                style={{ marginLeft: "1rem" }}
                src="https://via.placeholder.com/150"
                alt="Placeholder"
            />
            <button style={{ marginLeft: "1rem" }}>Click Me</button>
        </Content>
    </ThemeProvider>
);

export const FlexContent = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="flex-column">
            <h1>Header Test</h1>
            <p style={{ marginTop: "1rem" }}>
                This is some testing text in the paragraph tag.
            </p>
            <img
                style={{ marginTop: "1rem" }}
                src="https://via.placeholder.com/150"
                alt="Placeholder"
            />
            <button style={{ marginTop: "1rem" }}>Click Me</button>
        </Content>
    </ThemeProvider>
);

export const GridNormalContent = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <h1>Header Test</h1>
            <p>This is some testing text in the paragraph tag.</p>
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <button style={{ marginLeft: "1rem" }}>Click Me</button>
        </Content>
    </ThemeProvider>
);

export const GridContentWithSpan = () => (
    <ThemeProvider theme={mockTheme}>
        <Content type="grid">
            <h1 style={{ gridColumn: "span 12" }}>Header Test</h1>
            <p style={{ gridColumn: "span 8" }}>
                This is some testing text in the paragraph tag.
            </p>
            <img
                style={{ gridColumn: "span 4" }}
                src="https://via.placeholder.com/150"
                alt="Placeholder"
            />
            <button style={{ gridColumn: "span 2", marginLeft: "2rem" }}>
                Click Me
            </button>
        </Content>
    </ThemeProvider>
);

export const StretchContent = () => (
    <ThemeProvider theme={mockTheme}>
        <Content stretch>
            <h1>Header Test</h1>
            <p style={{ marginLeft: "1rem" }}>
                This is some testing text in the paragraph tag.
            </p>
            <img
                style={{ marginLeft: "1rem" }}
                src="https://via.placeholder.com/150"
                alt="Placeholder"
            />
            <button style={{ marginLeft: "1rem" }}>Click Me</button>
        </Content>
    </ThemeProvider>
);
