import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { Menu } from "src/menu";

describe("Menu", () => {
    describe("Menu.Content", () => {
        it("should render children", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <div>hello</div>
                </Menu.Content>
            );

            expect(screen.getByTestId("menu-content")).toBeInTheDocument();
            expect(screen.getByText("hello")).toBeInTheDocument();
        });

        it("should move focus forward with ArrowDown", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#a">A</Menu.Link>
                        <Menu.Link href="#b">B</Menu.Link>
                        <Menu.Link href="#c">C</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");
            const a = screen.getByRole("link", { name: "A" });
            const b = screen.getByRole("link", { name: "B" });
            const c = screen.getByRole("link", { name: "C" });

            a.focus();
            expect(a).toHaveFocus();

            fireEvent.keyDown(panel, { key: "ArrowDown" });
            expect(b).toHaveFocus();

            fireEvent.keyDown(panel, { key: "ArrowDown" });
            expect(c).toHaveFocus();
        });

        it("should move focus forward with ArrowRight", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#a">A</Menu.Link>
                        <Menu.Link href="#b">B</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");
            const a = screen.getByRole("link", { name: "A" });
            const b = screen.getByRole("link", { name: "B" });

            a.focus();
            fireEvent.keyDown(panel, { key: "ArrowRight" });
            expect(b).toHaveFocus();
        });

        it("should move focus backward with ArrowUp", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#a">A</Menu.Link>
                        <Menu.Link href="#b">B</Menu.Link>
                        <Menu.Link href="#c">C</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");
            const a = screen.getByRole("link", { name: "A" });
            const b = screen.getByRole("link", { name: "B" });

            b.focus();
            expect(b).toHaveFocus();

            fireEvent.keyDown(panel, { key: "ArrowUp" });
            expect(a).toHaveFocus();
        });

        it("should move focus backward with ArrowLeft", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#a">A</Menu.Link>
                        <Menu.Link href="#b">B</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");
            const a = screen.getByRole("link", { name: "A" });
            const b = screen.getByRole("link", { name: "B" });

            b.focus();
            fireEvent.keyDown(panel, { key: "ArrowLeft" });
            expect(a).toHaveFocus();
        });

        it("should wrap focus from last -> first (ArrowDown)", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#a">A</Menu.Link>
                        <Menu.Link href="#b">B</Menu.Link>
                        <Menu.Link href="#c">C</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");
            const a = screen.getByRole("link", { name: "A" });
            const c = screen.getByRole("link", { name: "C" });

            c.focus();
            expect(c).toHaveFocus();

            fireEvent.keyDown(panel, { key: "ArrowDown" });
            expect(a).toHaveFocus();
        });

        it("should wrap focus from first -> last (ArrowUp)", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#a">A</Menu.Link>
                        <Menu.Link href="#b">B</Menu.Link>
                        <Menu.Link href="#c">C</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");
            const a = screen.getByRole("link", { name: "A" });
            const c = screen.getByRole("link", { name: "C" });

            a.focus();
            expect(a).toHaveFocus();

            fireEvent.keyDown(panel, { key: "ArrowUp" });
            expect(c).toHaveFocus();
        });

        it("should do nothing if there are no focusable elements", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <div>no focusables here</div>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");

            panel.focus();
            expect(panel).toHaveFocus();

            fireEvent.keyDown(panel, { key: "ArrowDown" });

            expect(panel).toHaveFocus();
        });

        it("should not prevent default for non-arrow keys", () => {
            render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#a">A</Menu.Link>
                        <Menu.Link href="#b">B</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const panel = screen.getByTestId("menu-content");
            const a = screen.getByRole("link", { name: "A" });

            a.focus();
            expect(a).toHaveFocus();

            const event = fireEvent.keyDown(panel, { key: "Enter" });

            expect(event).toBe(true);
            expect(a).toHaveFocus();
        });
    });

    describe("Menu.Section", () => {
        it("should render label when provided", () => {
            render(
                <Menu.Section label="Section title">
                    <Menu.Link href="#a">A</Menu.Link>
                </Menu.Section>
            );

            expect(screen.getByText("Section title")).toBeInTheDocument();
            expect(screen.getByRole("link", { name: "A" })).toBeInTheDocument();
        });

        it("should render without label", () => {
            render(
                <Menu.Section>
                    <Menu.Link href="#a">A</Menu.Link>
                </Menu.Section>
            );

            expect(screen.getByRole("link", { name: "A" })).toBeInTheDocument();
        });
    });
});
