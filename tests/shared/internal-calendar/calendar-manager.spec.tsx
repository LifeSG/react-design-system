import { fireEvent, render, screen } from "@testing-library/react";
import { CalendarManager } from "src/shared/internal-calendar/calendar-manager";

describe("CalendarManager", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should toggle inert on default view when month options are shown and hidden", () => {
        render(
            <CalendarManager initialCalendarDate="2026-03-12">
                <div data-testid="calendar-default-view">Default view</div>
            </CalendarManager>
        );

        const defaultViewContent = screen.getByTestId("calendar-default-view");

        expect(defaultViewContent.closest("[inert]")).toBeNull();

        fireEvent.click(screen.getByRole("button", { name: /Select month$/i }));
        expect(defaultViewContent.closest("[inert]")).toBeInTheDocument();

        fireEvent.click(
            screen.getByRole("button", { name: /Close month selection$/i })
        );
        expect(defaultViewContent.closest("[inert]")).toBeNull();
    });
});
