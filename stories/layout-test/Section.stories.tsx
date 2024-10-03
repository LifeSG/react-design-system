import { ThemeProvider } from "styled-components";
import { Section } from "../../src/layout/section";
import { mockTheme } from "./mock-theme";

export default {
    title: "Layout-Test/Section",
    component: Section,
};

export const Default = () => (
    <ThemeProvider theme={mockTheme}>
        <Section>
            <p>This is a section with default props.</p>
        </Section>
    </ThemeProvider>
);

export const Stretched = () => (
    <ThemeProvider theme={mockTheme}>
        <Section stretch>
            <p>This section is stretched.</p>
        </Section>
    </ThemeProvider>
);
