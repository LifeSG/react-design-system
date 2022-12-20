export interface FeedbackRatingProps {
    imgSrc?: string | undefined;
    description?: string | undefined;
    buttonLabel?: string | undefined;
    className?: string | undefined;
    rating: number;
    onRatingChange: (value: number) => void;
    onSubmit: () => void;
}

export interface FeedbackRatingStarsContainerProps {
    rating: number;
    onRatingChange: (value: number) => void;
}
