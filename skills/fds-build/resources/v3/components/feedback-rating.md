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

| Prop                | Type                      | Default                | Description                                                                                                                                                               |
| ------------------- | ------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgSrc`            | `string`                  | —                      | URL of the banner image displayed above the star rating. Falls back to the default Life SG feedback banner when omitted. Hidden automatically if the image fails to load. |
| `description`       | `string`                  | "Rate your experience" | Heading text displayed above the star rating.                                                                                                                             |
| `buttonLabel`       | `string`                  | "Submit"               | Label for the submit button.                                                                                                                                              |
| `className`         | `string`                  | —                      | —                                                                                                                                                                         |
| `id`                | `string`                  | —                      | —                                                                                                                                                                         |
| `rating` \*         | `number`                  | —                      | The currently selected star rating (1–5).                                                                                                                                 |
| `onRatingChange` \* | `(value: number) => void` | —                      | Called when the user selects a star.                                                                                                                                      |
| `onSubmit` \*       | `() => void`              | —                      | Called when the user clicks the submit button.                                                                                                                            |

## Props

| Prop                | Type                      | Default                | Description                                                                                                                                                               |
| ------------------- | ------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgSrc`            | `string`                  | —                      | URL of the banner image displayed above the star rating. Falls back to the default Life SG feedback banner when omitted. Hidden automatically if the image fails to load. |
| `description`       | `string`                  | "Rate your experience" | Heading text displayed above the star rating.                                                                                                                             |
| `buttonLabel`       | `string`                  | "Submit"               | Label for the submit button.                                                                                                                                              |
| `className`         | `string`                  | —                      | —                                                                                                                                                                         |
| `id`                | `string`                  | —                      | —                                                                                                                                                                         |
| `rating` \*         | `number`                  | —                      | The currently selected star rating (1–5).                                                                                                                                 |
| `onRatingChange` \* | `(value: number) => void` | —                      | Called when the user selects a star.                                                                                                                                      |
| `onSubmit` \*       | `() => void`              | —                      | Called when the user clicks the submit button.                                                                                                                            |

## Props

| Prop                | Type                      | Default                | Description                                                                                                                                                               |
| ------------------- | ------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgSrc`            | `string`                  | —                      | URL of the banner image displayed above the star rating. Falls back to the default Life SG feedback banner when omitted. Hidden automatically if the image fails to load. |
| `description`       | `string`                  | "Rate your experience" | Heading text displayed above the star rating.                                                                                                                             |
| `buttonLabel`       | `string`                  | "Submit"               | Label for the submit button.                                                                                                                                              |
| `className`         | `string`                  | —                      | —                                                                                                                                                                         |
| `id`                | `string`                  | —                      | —                                                                                                                                                                         |
| `rating` \*         | `number`                  | —                      | The currently selected star rating (1–5).                                                                                                                                 |
| `onRatingChange` \* | `(value: number) => void` | —                      | Called when the user selects a star.                                                                                                                                      |
| `onSubmit` \*       | `() => void`              | —                      | Called when the user clicks the submit button.                                                                                                                            |

## Props

| Prop                | Type                      | Default                | Description                                                                                                                                                               |
| ------------------- | ------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgSrc`            | `string`                  | —                      | URL of the banner image displayed above the star rating. Falls back to the default Life SG feedback banner when omitted. Hidden automatically if the image fails to load. |
| `description`       | `string`                  | "Rate your experience" | Heading text displayed above the star rating.                                                                                                                             |
| `buttonLabel`       | `string`                  | "Submit"               | Label for the submit button.                                                                                                                                              |
| `className`         | `string`                  | —                      | —                                                                                                                                                                         |
| `id`                | `string`                  | —                      | —                                                                                                                                                                         |
| `rating` \*         | `number`                  | —                      | The currently selected star rating (1–5).                                                                                                                                 |
| `onRatingChange` \* | `(value: number) => void` | —                      | Called when the user selects a star.                                                                                                                                      |
| `onSubmit` \*       | `() => void`              | —                      | Called when the user clicks the submit button.                                                                                                                            |

## Props

| Prop                | Type                      | Default                | Description                                                                                                                                                               |
| ------------------- | ------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgSrc`            | `string`                  | —                      | URL of the banner image displayed above the star rating. Falls back to the default Life SG feedback banner when omitted. Hidden automatically if the image fails to load. |
| `description`       | `string`                  | "Rate your experience" | Heading text displayed above the star rating.                                                                                                                             |
| `buttonLabel`       | `string`                  | "Submit"               | Label for the submit button.                                                                                                                                              |
| `className`         | `string`                  | —                      | —                                                                                                                                                                         |
| `id`                | `string`                  | —                      | —                                                                                                                                                                         |
| `rating` \*         | `number`                  | —                      | The currently selected star rating (1–5).                                                                                                                                 |
| `onRatingChange` \* | `(value: number) => void` | —                      | Called when the user selects a star.                                                                                                                                      |
| `onSubmit` \*       | `() => void`              | —                      | Called when the user clicks the submit button.                                                                                                                            |

## Props

| Prop                | Type                      | Default                | Description                                                                                                                                                               |
| ------------------- | ------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `imgSrc`            | `string`                  | —                      | URL of the banner image displayed above the star rating. Falls back to the default Life SG feedback banner when omitted. Hidden automatically if the image fails to load. |
| `description`       | `string`                  | "Rate your experience" | Heading text displayed above the star rating.                                                                                                                             |
| `buttonLabel`       | `string`                  | "Submit"               | Label for the submit button.                                                                                                                                              |
| `className`         | `string`                  | —                      | —                                                                                                                                                                         |
| `id`                | `string`                  | —                      | —                                                                                                                                                                         |
| `rating` \*         | `number`                  | —                      | The currently selected star rating (1–5).                                                                                                                                 |
| `onRatingChange` \* | `(value: number) => void` | —                      | Called when the user selects a star.                                                                                                                                      |
| `onSubmit` \*       | `() => void`              | —                      | Called when the user clicks the submit button.                                                                                                                            |

## Rules

-   All three props — `rating`, `onRatingChange`, `onSubmit` — are required.
-   `onSubmit` does **not** receive the rating value. Track the rating separately via `onRatingChange` state and read it inside `onSubmit`.
-   `rating` must be controlled state; the component does not manage selection internally.

## Anti-patterns

-   Do not try to read the rating from inside `onSubmit`'s arguments — it receives none. Always use the state value set by `onRatingChange`.
