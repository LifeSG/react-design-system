import { render, screen } from "@testing-library/react";
import { BoxContainer, Colour, LifeSGTheme } from "../../src";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("BoxContainer", () => {
    beforeEach(() => {
        jest.resetAllMocks();

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
    });

    it("should not render the expand/collapse button if disabled", () => {
        render(
            <BoxContainer title={DEFAULT_TITLE} collapsible={false}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        expect(getExpandButton(true)).not.toBeInTheDocument();
    });

    it("should not be expanded if specified", () => {
        render(
            <BoxContainer title={DEFAULT_TITLE} expanded={false}>
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        /**
         * NOTE: Text is wrapped within two nested divs, hence requires
         * two traversals up to the div container that contains the styles
         */
        expect(
            screen.getByText(DEFAULT_TEXT).parentElement.parentElement
        ).toHaveStyle({
            height: 0,
        });
    });

    describe("Display state rendering", () => {
        it.each`
            state        | color
            ${"default"} | ${"no"}
            ${"error"}   | ${Colour["icon-error"]({ theme: LifeSGTheme })}
            ${"warning"} | ${Colour["icon-warning"]({ theme: LifeSGTheme })}
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
    });

    it("should render a custom call to action component if specified", () => {
        const buttonLabel = "custom button";

        render(
            <BoxContainer
                title={DEFAULT_TITLE}
                callToActionComponent={<button>{buttonLabel}</button>}
            >
                <p>{DEFAULT_TEXT}</p>
            </BoxContainer>
        );

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT = "default text";
const DEFAULT_TITLE = "default title";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getExpandButton = (isQuery?: boolean) => {
    if (isQuery) {
        return screen.queryByRole("button");
    }
    return screen.getByRole("button");
};
