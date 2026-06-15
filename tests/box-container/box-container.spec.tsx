import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BoxContainer, Colour } from "src";

jest.mock("react-resize-detector", () => ({
    useResizeDetector: () => ({
        height: 100,
        ref: jest.fn(),
    }),
}));

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("BoxContainer", () => {
    beforeEach(() => {
        jest.clearAllMocks();

        global.ResizeObserver = jest.fn().mockImplementation(() => ({
            observe: jest.fn(),
            unobserve: jest.fn(),
            disconnect: jest.fn(),
        }));
    });

    it("should render the component", () => {
        render(
            <BoxContainer title={DEFAULT_TITLE}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: DEFAULT_TITLE })
        ).toBeInTheDocument();
    });

    it("should not render the expand/collapse button if disabled", () => {
        render(
            <BoxContainer title={DEFAULT_TITLE} collapsible={false}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        expect(getExpandButton(true)).not.toBeInTheDocument();
    });

    it("should be expanded if specified", () => {
        render(
            <BoxContainer title={DEFAULT_TITLE} expanded={true}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        expectExpanded(screen.getByTestId(EXPANDABLE_CONTAINER_ID));
        expect(getExpandButton()).toHaveAttribute("aria-expanded", "true");
    });

    it("should not be expanded if specified", () => {
        render(
            <BoxContainer title={DEFAULT_TITLE} expanded={false}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        expectCollapsed(screen.getByTestId(EXPANDABLE_CONTAINER_ID));
        expect(getExpandButton()).toHaveAttribute("aria-expanded", "false");
    });

    it("should expand and collapse when clicking the expand/collapse button", async () => {
        render(
            <BoxContainer title={DEFAULT_TITLE}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        const button = getExpandButton()!;

        expectCollapsed(screen.getByTestId(EXPANDABLE_CONTAINER_ID));

        fireEvent.click(button);

        await waitFor(() => {
            expectExpanded(screen.getByTestId(EXPANDABLE_CONTAINER_ID));
        });

        fireEvent.click(button);

        await waitFor(() => {
            expectCollapsed(screen.getByTestId(EXPANDABLE_CONTAINER_ID));
        });
    });

    it("should toggle inert on child content when expanded state changes", () => {
        render(
            <BoxContainer title={DEFAULT_TITLE} expanded={false}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        const content = screen.getByText(DEFAULT_TEXT);
        expect(content.closest("[inert]")).toBeInTheDocument();

        const button = getExpandButton();
        expect(button).toBeInTheDocument();

        fireEvent.click(button!);

        expect(content.closest("[inert]")).toBeNull();
    });

    describe("Display state rendering", () => {
        it.each`
            state        | color
            ${"default"} | ${"no"}
            ${"error"}   | ${Colour["icon-error"]}
            ${"warning"} | ${Colour["icon-warning"]}
        `(
            "should render $state state with $color color icon",
            ({ state, color }) => {
                const iconTestId = `${state}-icon`;

                render(
                    <BoxContainer title={DEFAULT_TITLE} displayState={state}>
                        <p>{DEFAULT_TEXT}</p>
                    </BoxContainer>
                );

                if (color === "no") {
                    expect(
                        screen.queryByTestId(iconTestId)
                    ).not.toBeInTheDocument();
                } else {
                    expect(screen.getByTestId(iconTestId)).toHaveStyle({
                        color,
                    });
                }
            }
        );

        it("should include hidden text for non-default display states", () => {
            render(
                <BoxContainer title={DEFAULT_TITLE} displayState="warning">
                    <p>{DEFAULT_TEXT}</p>
                </BoxContainer>
            );

            expect(screen.getByText("warning")).toBeInTheDocument();
        });
    });

    it("should render a custom call to action component if specified", () => {
        const mockClickHandler = jest.fn();
        const buttonLabel = "custom button";

        render(
            <BoxContainer
                title={DEFAULT_TITLE}
                callToActionComponent={
                    <button onClick={mockClickHandler}>{buttonLabel}</button>
                }
            >
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        const customButton = screen.getByRole("button", { name: buttonLabel });
        expect(customButton).toBeInTheDocument();

        fireEvent.click(customButton);
        expect(mockClickHandler).toHaveBeenCalledTimes(1);
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT = "default text";
const DEFAULT_TITLE = "default title";
const EXPANDABLE_CONTAINER_ID = "expandable-container";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getExpandButton = (isQuery?: boolean) => {
    if (isQuery) {
        return screen.queryByRole("button");
    }
    return screen.getByRole("button");
};

const expectExpanded = (element: HTMLElement) => {
    expect(element).toHaveStyle({
        height: "100px",
    });
};

const expectCollapsed = (element: HTMLElement) => {
    expect(element).toHaveStyle({
        height: 0,
    });
};
