import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

        it("should move focus through grid items in DOM order with Tab", async () => {
            const { getByRole } = render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false} columns={2}>
                        <Menu.Link href="#1">Item 1</Menu.Link>
                        <Menu.Link href="#2">Item 2</Menu.Link>
                        <Menu.Link href="#3">Item 3</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            const item1 = getByRole("link", { name: "Item 1" });
            const item2 = getByRole("link", { name: "Item 2" });
            const item3 = getByRole("link", { name: "Item 3" });

            item1.focus();
            expect(item1).toHaveFocus();

            await userEvent.tab();
            expect(item2).toHaveFocus();

            await userEvent.tab();
            expect(item3).toHaveFocus();
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

        it("should clamp columns to minimum 1 to avoid invalid CSS for non-positive values", () => {
            // columns=-1 is truthy so the grid class is applied, but without the
            // Math.max(1, columns) guard gridRows would be negative (invalid CSS).
            const { getByTestId } = render(
                <Menu.Section data-testid="menu-section" columns={-1}>
                    <Menu.Link href="#1">Item 1</Menu.Link>
                    <Menu.Link href="#2">Item 2</Menu.Link>
                    <Menu.Link href="#3">Item 3</Menu.Link>
                </Menu.Section>
            );

            // Math.max(1, -1) = 1 → gridRows = Math.ceil(3 / 1) = 3, not -3
            expect(
                getByTestId("menu-section").style.getPropertyValue(
                    "--fds-menu-section-grid-rows"
                )
            ).toBe("3");
        });

        it("should set correct gridRows CSS var for normal column counts", () => {
            const { getByTestId } = render(
                <Menu.Section data-testid="menu-section" columns={3}>
                    {Array.from({ length: 7 }, (_, i) => (
                        <Menu.Link key={i} href={`#${i}`}>
                            Item {i + 1}
                        </Menu.Link>
                    ))}
                </Menu.Section>
            );

            // Math.ceil(7 / 3) = 3
            expect(
                getByTestId("menu-section").style.getPropertyValue(
                    "--fds-menu-section-grid-rows"
                )
            ).toBe("3");
        });
    });

    describe("Menu.Content (maxWidth)", () => {
        it("should set panel maxWidth CSS var for 3 columns", () => {
            // 3 columns: 3 * 383 + 2 * 8 + 2 (border) = 1167px
            const { getByTestId } = render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false} columns={3}>
                        <Menu.Link href="#1">Item 1</Menu.Link>
                        <Menu.Link href="#2">Item 2</Menu.Link>
                        <Menu.Link href="#3">Item 3</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            expect(
                getByTestId("menu-content").style.getPropertyValue(
                    "--fds-internal-menu-panel-maxWidth"
                )
            ).toBe("1167px");
        });

        it("should not set panel maxWidth CSS var when no sections have columns", () => {
            const { getByTestId } = render(
                <Menu.Content data-testid="menu-content">
                    <Menu.Section showDivider={false}>
                        <Menu.Link href="#1">Item 1</Menu.Link>
                        <Menu.Link href="#2">Item 2</Menu.Link>
                    </Menu.Section>
                </Menu.Content>
            );

            expect(
                getByTestId("menu-content").style.getPropertyValue(
                    "--fds-internal-menu-panel-maxWidth"
                )
            ).toBe("");
        });
    });
});
