/**
 * Props for the FeedbackRating component - star-rating survey widget.
 *
 * Renders an optional banner image, a description prompt, a row of star
 * buttons, and a submit button. Controlled via the `rating` prop.
 *
 * @example
 * ```tsx
 * <FeedbackRating
 *     rating={selectedRating}
 *     onRatingChange={(val) => setSelectedRating(val)}
 *     onSubmit={handleSubmit}
 * />
 * ```
 * @keywords star rating, review, satisfaction score, NPS, rating widget
 */
export interface FeedbackRatingProps {
    /**
     * The `src` of the banner image displayed above the rating stars.
     * Pass an empty string to hide the default banner.
     *
     * @default Default banner image
     */
    imgSrc?: string | undefined;
    /**
     * The prompt text displayed above the star buttons.
     *
     * @default "Rate your experience"
     */
    description?: string | undefined;
    /**
     * The label text for the submit button.
     *
     * @default "Submit"
     */
    buttonLabel?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** The currently selected rating value (1–5). */
    rating: number;
    /**
     * Called when the user clicks a star to change the rating.
     *
     * @param value - The newly selected rating value.
     */
    onRatingChange: (value: number) => void;
    /** Called when the user clicks the submit button. */
    onSubmit: () => void;
}
