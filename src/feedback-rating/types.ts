/**
 * Props for the `FeedbackRating` component.
 */
export interface FeedbackRatingProps {
    /**
     * URL of the banner image displayed above the star rating.
     * Falls back to the default Life SG feedback banner when omitted.
     * Hidden automatically if the image fails to load.
     */
    imgSrc?: string | undefined;
    /**
     * Heading text displayed above the star rating.
     *
     * @default "Rate your experience"
     */
    description?: string | undefined;
    /**
     * Label for the submit button.
     *
     * @default "Submit"
     */
    buttonLabel?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The currently selected star rating (1–5).
     */
    rating: number;
    /**
     * Called when the user selects a star.
     *
     * @param value The new rating value (1–5).
     */
    onRatingChange: (value: number) => void;
    /**
     * Called when the user clicks the submit button.
     */
    onSubmit: () => void;
}
