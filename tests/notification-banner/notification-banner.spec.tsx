import { render, screen } from "@testing-library/react";
import {
    NotificationBanner,
    withNotificationBanner,
} from "src/notification-banner";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("NotificationBanner", () => {
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
            <NotificationBanner data-testid="notification-banner">
                {DEFAULT_TEXT}
            </NotificationBanner>
        );

        expect(screen.getByText(DEFAULT_TEXT)).toBeInTheDocument();
        expect(
            screen.getByTestId("notification-banner-dismiss-button")
        ).toBeInTheDocument();
    });

    it("should not render the dismiss button when dismissible=false", () => {
        render(
            <NotificationBanner
                data-testid="notification-banner"
                dismissible={false}
            >
                {DEFAULT_TEXT}
            </NotificationBanner>
        );

        expect(
            screen.queryByTestId("notification-banner-dismiss-button")
        ).not.toBeInTheDocument();
    });

    it("should sanitise the content", () => {
        const HOCElement = withNotificationBanner([
            {
                type: "text",
                content:
                    "This is rendered using the HOC, and it contains a&nbsp;",
            },
            {
                type: "link",
                content: "hyperlink",
                otherAttributes: {
                    href: "https://www.google.com",
                    external: true,
                    target: "_blank",
                },
            },
            {
                type: "text",
                content:
                    "&nbsp;and text with styles like <strong>bold</strong> and <em>italics</em>.",
            },
            {
                type: "text",
                content:
                    "<script>alert('This should be sanitised and not executed');</script>",
            },
        ]);
        render(<HOCElement data-testid="notification-banner" />);

        expect(document.querySelector("a")).toBeInTheDocument();
        expect(document.querySelector("strong")).toBeInTheDocument();
        expect(document.querySelector("em")).toBeInTheDocument();
        expect(document.querySelector("script")).not.toBeInTheDocument();
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_TEXT = "default text";
