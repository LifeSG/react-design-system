export interface FeedbackRatingProps {
    imgSrc?: string | undefined;
    description?: string | undefined;
    buttonLabel?: string | undefined;
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    rating: number;
    onRatingChange: (value: number) => void;
    onSubmit: () => void;
}
export interface FeedbackRatingStarsContainerProps {
    description: string;
    rating: number;
    onRatingChange: (value: number) => void;
}
