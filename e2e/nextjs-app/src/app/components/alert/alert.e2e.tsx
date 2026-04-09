"use client";

import { Alert } from "@lifesg/react-design-system/alert";

// =============================================================================
// STORY: All type variants
// =============================================================================
export const AlertTypeVariants = () => (
    <div className="alert-story-container">
        <Alert type="success">This is a success alert.</Alert>
        <Alert type="warning">This is a warning alert.</Alert>
        <Alert type="error">This is an error alert.</Alert>
        <Alert type="info">This is an info alert.</Alert>
        <Alert type="description">This is a description alert.</Alert>
    </div>
);

// =============================================================================
// STORY: With icons
// =============================================================================
export const AlertWithIcons = () => (
    <div className="alert-story-container">
        <Alert type="success" showIcon>
            This is a success alert with icon.
        </Alert>
        <Alert type="warning" showIcon>
            This is a warning alert with icon.
        </Alert>
        <Alert type="error" showIcon>
            This is an error alert with icon.
        </Alert>
        <Alert type="info" showIcon>
            This is an info alert with icon.
        </Alert>
        <Alert type="description" showIcon>
            This is a description alert with icon.
        </Alert>
    </div>
);

// =============================================================================
// STORY: Size variants
// =============================================================================
export const AlertSizeVariants = () => (
    <div className="alert-story-container">
        <Alert type="info" showIcon sizeType="default">
            Default size alert.
        </Alert>
        <Alert type="info" showIcon sizeType="small">
            Small size alert.
        </Alert>
    </div>
);

// =============================================================================
// STORY: With action link
// =============================================================================
export const AlertWithActionLink = () => (
    <Alert
        type="info"
        actionLink={{
            href: "#",
            children: "Learn more",
        }}
    >
        This alert has an action link.
    </Alert>
);

// =============================================================================
// STORY: Show more / show less (collapsed)
// =============================================================================
export const AlertWithShowMore = () => (
    <Alert type="info" maxCollapsedHeight={60}>
        <p>Line one of a long alert content.</p>
        <p>Line two of a long alert content.</p>
        <p>Line three of a long alert content.</p>
        <p>Line four of a long alert content.</p>
        <p>Line five of a long alert content.</p>
    </Alert>
);

// =============================================================================
// STORY: Keyboard navigation
// =============================================================================
export const AlertKeyboardNav = () => (
    <div className="alert-keyboard-nav-container">
        <button data-testid="before-alert">Before alert</button>
        <Alert
            type="info"
            maxCollapsedHeight={60}
            actionLink={{ href: "#", children: "Learn more" }}
        >
            <p>Line one of a long alert content.</p>
            <p>Line two of a long alert content.</p>
            <p>Line three of a long alert content.</p>
        </Alert>
        <button data-testid="after-alert">After alert</button>
    </div>
);
