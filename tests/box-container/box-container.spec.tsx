import { render, screen } from "@testing-library/react";
import { BoxContainer, BoxContainerProps } from "../../src";
import { BaseColorSet } from "../../src/spec/color-spec/base-color-set";
import { DEFAULT_TEXT, DEFAULT_TITLE } from "../common";

const renderComponent = (props?: Partial<BoxContainerProps>) => {
    return render(
        <BoxContainer title={DEFAULT_TITLE} {...props}>
            {props?.children || <p>{DEFAULT_TEXT}</p>}
        </BoxContainer>
    );
};

const getExpandButton = (isQuery?: boolean) => {
    if (isQuery) {
        return screen.queryByRole("button");
    }
    return screen.getByRole("button");
};

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
        renderComponent();

        expect(screen.getByText(DEFAULT_TITLE)).toBeInTheDocument();
    });

    it("should not render the expand/collapse button if disabled", () => {
        renderComponent({ collapsible: false });

        expect(getExpandButton(true)).not.toBeInTheDocument();
    });

    it("should not be expanded if specified", () => {
        renderComponent({ expanded: false });

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

    describe("displayStates", () => {
        it.each`
            state        | color
            ${"default"} | ${"no"}
            ${"error"}   | ${BaseColorSet.Validation.Red.Icon}
            ${"warning"} | ${BaseColorSet.Validation.Orange.Icon}
        `(
            "should render $state state with $color color icon",
            ({ state, color }) => {
                const iconTestId = `${state}-icon`;
                renderComponent({ displayState: state });

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
        renderComponent({
            callToActionComponent: <button>{buttonLabel}</button>,
        });

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });
});
