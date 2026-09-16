import { fireEvent, render, screen } from "@testing-library/react";
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

    it("should call onDismiss when dismiss button is clicked", () => {
        const mockOnDismiss = jest.fn();

        render(
            <NotificationBanner
                data-testid="notification-banner"
                onDismiss={mockOnDismiss}
            >
                {DEFAULT_TEXT}
            </NotificationBanner>
        );

        const dismissButton = screen.getByTestId(
            "notification-banner-dismiss-button"
        );
        fireEvent.click(dismissButton);

        expect(mockOnDismiss).toHaveBeenCalledTimes(1);
    });

    it("should call onClick when banner is clicked", () => {
        const mockOnClick = jest.fn();

        render(
            <NotificationBanner
                data-testid="notification-banner"
                onClick={mockOnClick}
            >
                {DEFAULT_TEXT}
            </NotificationBanner>
        );

        const banner = screen.getByTestId("notification-banner");
        fireEvent.click(banner);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it("should strip javascript: href from link otherAttributes", () => {
        const HOCElement = withNotificationBanner([
            {
                type: "link",
                content: "malicious link",
                otherAttributes: {
                    href: "javascript:alert(document.cookie)",
                },
            },
        ]);
        render(<HOCElement data-testid="notification-banner" />);

        const anchor = document.querySelector("a");
        expect(anchor).toBeInTheDocument();
        expect(anchor).not.toHaveAttribute("href");
    });

    it("should strip data: href from link otherAttributes", () => {
        const HOCElement = withNotificationBanner([
            {
                type: "link",
                content: "data link",
                otherAttributes: {
                    href: "data:text/html,<script>alert(1)</script>",
                },
            },
        ]);
        render(<HOCElement data-testid="notification-banner" />);

        const anchor = document.querySelector("a");
        expect(anchor).toBeInTheDocument();
        expect(anchor).not.toHaveAttribute("href");
    });

    it("should preserve safe href schemes in link otherAttributes", () => {
        const HOCElement = withNotificationBanner([
            {
                type: "link",
                content: "safe link",
                otherAttributes: {
                    href: "https://www.example.com",
                },
            },
        ]);
        render(<HOCElement data-testid="notification-banner" />);

        const anchor = document.querySelector("a");
        expect(anchor).toBeInTheDocument();
        expect(anchor).toHaveAttribute("href", "https://www.example.com");
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
