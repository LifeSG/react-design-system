import { act, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

import { FeedbackRating, FeedbackRatingProps } from "../../src";
import { FeedbackRatingData } from "../../src/feedback-rating/feedback-rating-data";

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("FeedbackRating", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should be able to render the component", () => {
        render(
            <FeedbackRating
                rating={0}
                onRatingChange={NO_OP}
                onSubmit={NO_OP}
            />
        );

        expect(screen.getByText(DEFAULT_DESCRIPTION)).toBeInTheDocument();
    });

    it("should be able to render custom description", () => {
        const description = "custom description";
        render(
            <FeedbackRating
                rating={0}
                description={description}
                onRatingChange={NO_OP}
                onSubmit={NO_OP}
            />
        );

        expect(screen.getByText(description)).toBeInTheDocument();
    });

    it("should be able to render custom button label", () => {
        const buttonLabel = "custom label";
        render(
            <FeedbackRating
                rating={0}
                buttonLabel={buttonLabel}
                onRatingChange={NO_OP}
                onSubmit={NO_OP}
            />
        );

        expect(
            screen.getByRole("button", { name: buttonLabel })
        ).toBeInTheDocument();
    });

    describe("rating", () => {
        it("should be able to render custom rating", () => {
            const rating = 3;
            render(
                <FeedbackRating
                    rating={rating}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            for (const label of RATING_BUTTON_ARIA_LABELS) {
                if (label.includes(rating.toString())) {
                    expect(getRatingButton(label)).toBeChecked();
                } else {
                    expect(getRatingButton(label)).not.toBeChecked();
                }
            }
        });

        it("should be able to change rating", () => {
            render(
                <FeedbackRatingWithState
                    rating={0}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const button = getRatingButton("1 star");
            act(() => {
                fireEvent.click(button);
            });

            expect(getRatingButton("1 star")).toBeChecked();
        });

        it("should be able to reduce rating after selection", () => {
            render(
                <FeedbackRatingWithState
                    rating={0}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

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
            render(
                <FeedbackRating
                    rating={0}
                    onRatingChange={spy}
                    onSubmit={NO_OP}
                />
            );

            const button = getRatingButton("1 star");
            act(() => {
                fireEvent.click(button);
            });

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("submit", () => {
        it("should be disabled if rating is not selected", () => {
            render(
                <FeedbackRating
                    rating={0}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const button = getSubmitButton();
            expect(button).toBeDisabled();
        });

        it("should not be disabled if rating is provided", () => {
            render(
                <FeedbackRating
                    rating={1}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const button = getSubmitButton();
            expect(button).not.toBeDisabled();
        });

        it("should be able to support onSubmit callback", () => {
            const spy = jest.fn();
            render(
                <FeedbackRating
                    rating={1}
                    onRatingChange={NO_OP}
                    onSubmit={spy}
                />
            );

            const button = getSubmitButton();
            act(() => {
                fireEvent.click(button);
            });

            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("imgSrc", () => {
        it("should be able to render a default banner image", () => {
            render(
                <FeedbackRating
                    rating={0}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const image = getBannerImg();
            expect(image).toHaveAttribute("src", FeedbackRatingData.IMG);
        });

        it("should be able to render custom banner images", () => {
            const alternateImg = "https://www.abc.com/image.png";
            render(
                <FeedbackRating
                    rating={0}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                    imgSrc={alternateImg}
                />
            );

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
    return screen.getByTestId("feedback-banner-image");
};

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const FeedbackRatingWithState = (props?: Partial<FeedbackRatingProps>) => {
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
