interface FeedbackRatingStarsContainerProps {
    ariaLabelledBy: string;
    ariaDescribedBy: string;
    rating: number;
    onRatingChange: (value: number) => void;
}
export declare const FeedbackRatingStarsContainer: (props: FeedbackRatingStarsContainerProps) => JSX.Element;
export {};
