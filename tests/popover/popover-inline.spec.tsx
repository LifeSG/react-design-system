import { CircleIcon } from "@lifesg/react-icons";
import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PopoverInline } from "../../src/popover-v2";

const TEXT_CONTENT = "Text";
const TOOLTIP_CONTENT = "Tooltip";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("PopoverInline", () => {
    it("should render the popover text and icon", () => {
        render(
            <PopoverInline
                content={TEXT_CONTENT}
                icon={<CircleIcon />}
                popoverContent={TOOLTIP_CONTENT}
            />
        );

        const text = screen.getByText(TEXT_CONTENT);
        const icon = document.querySelector("svg")!;

        expect(text).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
        expect(
            text.compareDocumentPosition(icon) &
                Node.DOCUMENT_POSITION_FOLLOWING
        ).toBeTruthy();
        expect(screen.queryByText(TOOLTIP_CONTENT)).not.toBeInTheDocument();
    });

    describe("trigger", () => {
        it("should display the popover when clicked", async () => {
            render(
                <PopoverInline
                    content={TEXT_CONTENT}
                    popoverContent={TOOLTIP_CONTENT}
                />
            );

            userEvent.click(screen.getByText(TEXT_CONTENT));

            await waitFor(() => screen.getByText(TOOLTIP_CONTENT));
        });

        it("should display the popover when hovered", async () => {
            render(
                <PopoverInline
                    content={TEXT_CONTENT}
                    popoverContent={TOOLTIP_CONTENT}
                    trigger="hover"
                />
            );

            userEvent.hover(screen.getByText(TEXT_CONTENT));

            await waitFor(() => screen.getByText(TOOLTIP_CONTENT));

            userEvent.unhover(screen.getByText("Text"));

            await waitForElementToBeRemoved(() =>
                screen.queryByText(TOOLTIP_CONTENT)
            );
        });
    });
});
