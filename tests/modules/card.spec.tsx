import { render, screen } from "@testing-library/react";
import { Card } from "../../src";
import { CardProps } from "../../src/card/types";
import { DEFAULT_TEXT } from "../common";

const renderComponent = (props?: CardProps) => {
    return render(<Card {...props}>{props?.children || DEFAULT_TEXT}</Card>);
};

describe("Card", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should render the component", () => {
        renderComponent();

        expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
    });

    it("should be able to render JSX.Element as children", () => {
        const customText = "custom element";
        renderComponent({ children: <div>{customText}</div> });

        expect(screen.getByText(customText)).toBeInTheDocument();
    });
});
