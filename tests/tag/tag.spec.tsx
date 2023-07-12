import { fireEvent, render, screen } from "@testing-library/react";
import { Tag } from "../../src/tag";
import { PlusCircleFillIcon } from "@lifesg/react-icons";

describe("Tag", () => {
    const label = "Some label";
    it("should render the label correctly", () => {
        render(
            <Tag type="solid" data-testid="pill-component">
                {label}
            </Tag>
        );

        expect(screen.getByText(label)).toBeInTheDocument();
    });

    it("should render with an icon if specified", () => {
        render(
            <Tag
                type="outline"
                icon={<PlusCircleFillIcon data-testid="icon" />}
            >
                {label}
            </Tag>
        );

        expect(screen.getByText(label)).toBeInTheDocument();
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("should trigger onClick when click on tag", () => {
        const mockOnClick = jest.fn();
        render(
            <Tag type="solid" interactive={true} onClick={mockOnClick}>
                {label}
            </Tag>
        );

        fireEvent.click(screen.getByText(label));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
