import { act, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

import { FeedbackRating, FeedbackRatingProps } from "../../src";
import { ERROR_DISPLAY_DATA } from "../../src/error-display/error-display-data";
import { FeedbackRatingData } from "../../src/feedback-rating/feedback-rating-data";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("FeedbackRating", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should be able to render the component", () => {
        renderComponent();

        expect(screen.getByText(DEFAULT_DESCRIPTION)).toBeInTheDocument();
    });

    it("should be able to render custom description", () => {
        const description = "custom description";
        renderComponent({ description });

        expect(screen.getByText(description)).toBeInTheDocument();
    });

    it("should be able to render custom button label", () => {
        const buttonLabel = "custom label";
        renderComponent({ buttonLabel });

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });

    describe("rating", () => {
        it("should be able to render custom rating", () => {
            const rating = 3;
            renderComponent({ rating });

            for (const label of RATING_BUTTON_ARIA_LABELS) {
                if (label.includes(rating.toString())) {
                    expect(getRatingButton(label)).toBeChecked();
                } else {
                    expect(getRatingButton(label)).not.toBeChecked();
                }
            }
        });

        it("should be able to change rating", () => {
            renderComponent();

            const button = getRatingButton("1 star");
            act(() => {
                fireEvent.click(button);
            });

            expect(getRatingButton("1 star")).toBeChecked();
        });

        it("should be able to reduce rating after selection", () => {
            renderComponent();

            const fiveStarButton = getRatingButton("5 stars");
            act(() => {
                fireEvent.click(fiveStarButton);
            });

            const initialRating = "5";
            for (const label of RATING_BUTTON_ARIA_LABELS) {
                if (label.includes(initialRating)) {
                    expect(getRatingButton(label)).toBeChecked();
                } else {
                    expect(getRatingButton(label)).not.toBeChecked();
                }
            }

            const oneStarButton = getRatingButton("1 star");
            act(() => {
                fireEvent.click(oneStarButton);
            });

            const finalRating = "1";
            for (const label of RATING_BUTTON_ARIA_LABELS) {
                if (label.includes(finalRating)) {
                    expect(getRatingButton(label)).toBeChecked();
                } else {
                    expect(getRatingButton(label)).not.toBeChecked();
                }
            }
        });

        it("should be able to support onRatingChange callback", () => {
            const spy = jest.fn();
            renderComponent({ onRatingChange: spy });

            const button = getRatingButton("1 star");
            act(() => {
                fireEvent.click(button);
            });

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("submit", () => {
        it("should be disabled if rating is not selected", () => {
            renderComponent();

            const button = getSubmitButton();
            expect(button).toBeDisabled();
        });

        it("should not be disabled if rating is provided", () => {
            renderComponent({ rating: 1 });

            const button = getSubmitButton();
            expect(button).not.toBeDisabled();
        });

        it("should be able to support onSubmit callback", () => {
            const spy = jest.fn();
            renderComponent({ rating: 1, onSubmit: spy });

            const button = getSubmitButton();
            act(() => {
                fireEvent.click(button);
            });

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("imgSrc", () => {
        it("should be able to render a default banner image", () => {
            renderComponent();

            const image = getBannerImg();
            expect(image).toHaveAttribute("src", FeedbackRatingData.IMG);
        });

        it("should be able to render custom banner images", () => {
            const alternateImg = ERROR_DISPLAY_DATA.get("400").imgSrc;
            renderComponent({ imgSrc: alternateImg });

            const image = getBannerImg();
            expect(image).toHaveAttribute("src", alternateImg);
        });
    });
});

// =============================================================================
// CONSTANTS
// =============================================================================
const DEFAULT_DESCRIPTION = "Rate your experience";
// eslint-disable-next-line @typescript-eslint/no-empty-function
const NO_OP = () => {};
const RATING_BUTTON_ARIA_LABELS = [
    "1 star",
    "2 stars",
    "3 stars",
    "4 stars",
    "5 stars",
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getRatingButton = (name: string): HTMLInputElement => {
    return screen.getByRole("radio", { name });
};

const getSubmitButton = (label?: string): HTMLElement => {
    return screen.getByRole("button", { name: label ? label : "Submit" });
};

const getBannerImg = (): HTMLElement => {
    return screen.getByRole("img", { name: "banner image" });
};

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const renderComponent = (props?: Partial<FeedbackRatingProps>) => {
    const Wrapper = (props?: Partial<FeedbackRatingProps>) => {
        const [rating, setRating] = useState<number>(props?.rating || 0);

        const handleOnChange = (value: number) => {
            props?.onRatingChange && props?.onRatingChange(value);
            setRating(value);
        };

        return (
            <FeedbackRating
                {...props}
                rating={rating}
                onRatingChange={handleOnChange}
                onSubmit={props?.onSubmit || NO_OP}
            />
        );
    };

    return render(<Wrapper {...props} />);
};
