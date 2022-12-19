export interface FeedbackRatingProp {
    imgSrc?: string;
    description?: string;
    buttonLabel?: string;
    ratings: number;
    onRatingsChange: (value: number) => void;
    onSubmit: () => void;
}

export interface StarsContainerProp {
    ratings: number;
    onRatingsChange: (rating: number) => void;
}
