import { ThemeProvider } from "styled-components";
import { Container } from "../../src/layout/container";
import { mockTheme } from "./mock-theme";

export default {
    title: "Layout-Test/Container",
    component: Container,
};

export const Default = () => (
    <ThemeProvider theme={mockTheme}>
        <Container>
            <p>This is a container with default props.</p>
            <p>Hello world for testing!</p>
        </Container>
    </ThemeProvider>
);

export const FlexColumn = () => (
    <ThemeProvider theme={mockTheme}>
        <Container type="flex-column">
            <p>This container uses flex-column layout.</p>
            <p>Hello world for testing!</p>
        </Container>
    </ThemeProvider>
);

export const GridLayout = () => (
    <ThemeProvider theme={mockTheme}>
        <Container type="grid">
            <p>This container uses grid layout.</p>
            <p>Hello world for testing!</p>
        </Container>
    </ThemeProvider>
);

export const Stretched = () => (
    <ThemeProvider theme={mockTheme}>
        <Container stretch>
            <p>This container is stretched.</p>
            <p>Hello world for testing!</p>
        </Container>
    </ThemeProvider>
);
