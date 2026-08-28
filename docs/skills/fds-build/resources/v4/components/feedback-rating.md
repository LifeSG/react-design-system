# FeedbackRating

Import: `import { FeedbackRating } from "@lifesg/react-design-system/feedback-rating"`

## When to use

Use at the end of a flow or session to collect a star rating and an optional submission action from the user.

## Usage

### Complete controlled pattern

```tsx
import { useState } from "react";
import { FeedbackRating } from "@lifesg/react-design-system/feedback-rating";

const RatingWidget = () => {
    // Track rating separately — onSubmit does NOT receive it
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        // Read from state, not from onSubmit arguments (there are none)
        submitFeedback({ stars: rating });
    };

    return (
        <FeedbackRating
            rating={rating}
            onRatingChange={(value) => setRating(value)}
            onSubmit={handleSubmit}
            description="How was your experience?"
            buttonLabel="Send feedback"
        />
    );
};
```

**Key gotcha:** `onSubmit` has the signature `() => void` — it carries no payload. The rating value is only available through the `rating` state you control via `onRatingChange`.

## Props

| Prop                | Type                      | Default                  | Description                                        |
| ------------------- | ------------------------- | ------------------------ | -------------------------------------------------- |
| `rating` \*         | `number`                  | —                        | Current selected rating state                      |
| `onRatingChange` \* | `(value: number) => void` | —                        | Called when a star is clicked                      |
| `onSubmit` \*       | `() => void`              | —                        | Called when the submit button is clicked           |
| `imgSrc`            | `string`                  | Default banner image     | Banner image src; pass empty string to hide banner |
| `description`       | `string`                  | `"Rate your experience"` | Description text displayed above the stars         |
| `buttonLabel`       | `string`                  | `"Submit"`               | Submit button label                                |
| `id`                | `string`                  | —                        | Unique id of the component                         |
| `className`         | `string`                  | —                        | Class selector of the component                    |
| `data-testid`       | `string`                  | —                        | Test identifier of the component                   |

`*` = required

## Rules

-   All three props — `rating`, `onRatingChange`, `onSubmit` — are required.
-   `onSubmit` does **not** receive the rating value. Track the rating separately via `onRatingChange` state and read it inside `onSubmit`.
-   `rating` must be controlled state; the component does not manage selection internally.

## Anti-patterns

-   Do not try to read the rating from inside `onSubmit`'s arguments — it receives none. Always use the state value set by `onRatingChange`.
