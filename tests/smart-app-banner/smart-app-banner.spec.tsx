import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SmartAppBanner } from "src/smart-app-banner";

const MOCK_CONTENT = {
    title: "Life SG",
    message: "Your one-stop app",
    buttonLabel: "Get",
    numberOfStars: 4.5,
};

const MOCK_PROPS = {
    show: true,
    href: "https://example.com",
    content: MOCK_CONTENT,
    onDismiss: jest.fn(),
};

describe("SmartAppBanner", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render without errors", () => {
        render(<SmartAppBanner {...MOCK_PROPS} />);

        expect(
            screen.getByTestId("smart-app-banner-proceed-container")
        ).toBeInTheDocument();
    });

    it("should not render when show is false", () => {
        render(<SmartAppBanner {...MOCK_PROPS} show={false} />);

        expect(
            screen.queryByTestId("smart-app-banner-proceed-container")
        ).not.toBeInTheDocument();
    });

    it("should use iconAriaLabel as the img alt text when provided", () => {
        render(
            <SmartAppBanner
                {...MOCK_PROPS}
                content={{ ...MOCK_CONTENT, iconAriaLabel: "App icon" }}
            />
        );

        expect(screen.getByAltText("App icon")).toBeInTheDocument();
    });

    describe("star rating", () => {
        it.each([4.5, 0])(
            "should render the rating group when numberOfStars is %s",
            (numberOfStars) => {
                render(
                    <SmartAppBanner
                        {...MOCK_PROPS}
                        content={{ ...MOCK_CONTENT, numberOfStars }}
                    />
                );

                expect(
                    screen.getByRole("group", {
                        name: new RegExp(
                            `rating of ${numberOfStars} out of 5`,
                            "i"
                        ),
                    })
                ).toBeInTheDocument();
            }
        );

        it.each([NaN, -1])(
            "should not render the rating group when numberOfStars is %s",
            (numberOfStars) => {
                render(
                    <SmartAppBanner
                        {...MOCK_PROPS}
                        content={{ ...MOCK_CONTENT, numberOfStars }}
                    />
                );

                expect(
                    screen.queryByRole("group", { name: /rating/i })
                ).not.toBeInTheDocument();
            }
        );
    });

    describe("interactions", () => {
        it("should call onDismiss when the dismiss button is clicked", async () => {
            const user = userEvent.setup();
            const onDismiss = jest.fn();

            render(<SmartAppBanner {...MOCK_PROPS} onDismiss={onDismiss} />);

            await user.click(
                screen.getByRole("button", { name: "Close banner" })
            );

            expect(onDismiss).toHaveBeenCalledTimes(1);
        });

        it("should call onClick and open href in a new tab when the proceed area is clicked", async () => {
            const user = userEvent.setup();
            const onClick = jest.fn();
            const openSpy = jest
                .spyOn(window, "open")
                .mockImplementation(() => null);

            render(
                <SmartAppBanner
                    {...MOCK_PROPS}
                    href="https://example.com/app"
                    onClick={onClick}
                />
            );

            await user.click(
                screen.getByTestId("smart-app-banner-proceed-container")
            );

            expect(onClick).toHaveBeenCalledTimes(1);
            expect(openSpy).toHaveBeenCalledWith(
                "https://example.com/app",
                "_blank",
                "noreferrer"
            );
            openSpy.mockRestore();
        });
    });

    describe("keyboard navigation", () => {
        it("should focus the CTA button then the dismiss button in tab order", async () => {
            const user = userEvent.setup();

            render(
                <>
                    <button data-testid="focus-start">Focus start</button>
                    <SmartAppBanner {...MOCK_PROPS} />
                </>
            );

            screen.getByTestId("focus-start").focus();
            await user.tab();

            expect(screen.getByRole("button", { name: "Get" })).toHaveFocus();

            await user.tab();

            expect(
                screen.getByRole("button", { name: "Close banner" })
            ).toHaveFocus();
        });
    });
});
