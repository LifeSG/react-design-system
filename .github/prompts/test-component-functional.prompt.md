---
name: "test-component-functional"
description: "Creates functional test specs for the specified component"
---

You are tasked with writing functional test specs for a design system component.

## Input Requirements

The user must provide:

1. **Component**, specified as
    - Path to the component folder, OR
    - Main folder of the current open file

## Your Responsibilities

Create isolated component examples (stories) and write Playwright test cases that run against each story.

The story should be added to `e2e/nextjs-app/components/<component>/<story>.e2e.tsx` and should include the necessary props and state to demonstrate the component's functionality. Each story should test 1 specific scenario or use case.

Write the test in `e2e/tests/components/<component>/<component>.e2e.spec.ts`, following the existing test structure and patterns.

Functional tests should include scenarios that cannot be covered by unit tests, such as:

-   User interactions (e.g. clicks, hovers, focus, etc.)
-   Accessibility (e.g. keyboard navigation, screen reader support, etc.)
-   Visual regressions (e.g. screenshot testing)

First, suggest a list of possible test specs for the component, e.g.

-   "All size and style variants (no danger)"
-   "Disabled state"
-   "Keyboard navigation"

Next, prompt the user to provide a description of a test spec, and based on the input, create the functional test for the component using the existing Playwright setup.

Leave the intermediate `test.describe` anonymous as it is only used to set up `test.beforeEach`. The test title should be directly specified in the `test` block.

Do this one at a time until the user indicates they are done.
