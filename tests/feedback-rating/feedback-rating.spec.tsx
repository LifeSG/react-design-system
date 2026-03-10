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
                rating={1}
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

            const slider = getRatingSlider();
            expect(slider).toHaveAttribute("aria-valuemin", "1");
            expect(slider).toHaveAttribute("aria-valuemax", "5");
            expect(slider).toHaveAttribute("aria-valuenow", "3");
            expect(slider).toHaveAttribute("aria-valuetext", "3 stars");
        });

        it("should be able to change rating by clicking a star", () => {
            const { container } = render(
                <FeedbackRatingWithState
                    rating={0}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const firstStar = getStar(container, 0);
            act(() => {
                fireEvent.click(firstStar);
            });

            expect(getRatingSlider()).toHaveAttribute("aria-valuenow", "1");
            expect(getRatingSlider()).toHaveAttribute(
                "aria-valuetext",
                "1 star"
            );
        });

        it("should be able to reduce rating after selection", () => {
            const { container } = render(
                <FeedbackRatingWithState
                    rating={0}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const fiveStar = getStar(container, 4);
            act(() => {
                fireEvent.click(fiveStar);
            });

            expect(getRatingSlider()).toHaveAttribute("aria-valuenow", "5");
            expect(getRatingSlider()).toHaveAttribute(
                "aria-valuetext",
                "5 stars"
            );

            const oneStar = getStar(container, 0);
            act(() => {
                fireEvent.click(oneStar);
            });

            expect(getRatingSlider()).toHaveAttribute("aria-valuenow", "1");
            expect(getRatingSlider()).toHaveAttribute(
                "aria-valuetext",
                "1 star"
            );
        });

        it("should be able to support onRatingChange callback when clicking a star", () => {
            const spy = jest.fn();
            const { container } = render(
                <FeedbackRating
                    rating={0}
                    onRatingChange={spy}
                    onSubmit={NO_OP}
                />
            );

            const firstStar = getStar(container, 0);
            act(() => {
                fireEvent.click(firstStar);
            });

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(1);
        });

        it("should be able to increase rating with keyboard", () => {
            render(
                <FeedbackRatingWithState
                    rating={1}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const slider = getRatingSlider();
            act(() => {
                fireEvent.keyDown(slider, { key: "ArrowRight" });
            });

            expect(slider).toHaveAttribute("aria-valuenow", "2");
            expect(slider).toHaveAttribute("aria-valuetext", "2 stars");
        });

        it("should be able to decrease rating with keyboard", () => {
            render(
                <FeedbackRatingWithState
                    rating={3}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const slider = getRatingSlider();
            act(() => {
                fireEvent.keyDown(slider, { key: "ArrowLeft" });
            });

            expect(slider).toHaveAttribute("aria-valuenow", "2");
            expect(slider).toHaveAttribute("aria-valuetext", "2 stars");
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

            const button = getSubmitButton("Submit");
            expect(button).toHaveAttribute("aria-disabled", "true");
        });

        it("should not be disabled if rating is provided", () => {
            render(
                <FeedbackRating
                    rating={1}
                    onRatingChange={NO_OP}
                    onSubmit={NO_OP}
                />
            );

            const button = getSubmitButton("Submit");
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

            const button = getSubmitButton("Submit");
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

const NO_OP = () => {};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const getRatingSlider = (): HTMLElement => {
    return screen.getByRole("slider");
};

const getSubmitButton = (label: string): HTMLElement => {
    return screen.getByRole("button", { name: label });
};

const getBannerImg = (): HTMLElement => {
    return screen.getByTestId("feedback-banner-image");
};

const getStar = (container: HTMLElement, index: number): HTMLElement => {
    const stars = container.querySelectorAll(
        '[role="presentation"]'
    ) as NodeListOf<HTMLElement>;

    const star = stars[index];
    if (!star) {
        throw new Error(`Star at index ${index} was not found`);
    }

    return star;
};

// =============================================================================
// RENDER FUNCTIONS
// =============================================================================
const FeedbackRatingWithState = (props?: Partial<FeedbackRatingProps>) => {
    const [rating, setRating] = useState<number>(props?.rating || 0);

    const handleOnChange = (value: number) => {
        props?.onRatingChange?.(value);
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
