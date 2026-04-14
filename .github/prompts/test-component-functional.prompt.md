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

Do this one at a time until the user indicates they are done.

### Structure of the test file

-   Use the `AbstractStoryPage` pattern for the story page object model
-   Initialise the story in a `test.beforeEach()` hook within an anonymous `test.describe()` block
-   `test.describe("xxx")` will add a "folder" level to the tests. Avoid unnecessary nesting of describe blocks. Use this to group together related tests only if the file has many test cases
-   Based on the description provided by the user, derive a succinct test title for `test("xxx")`. Avoid using dashes as it will be used as part of the screenshot file name
-   Use `test.step()` if the test involves multiple steps. Avoid unnecessary nesting of steps.
-   You can use `compareScreenshot` for visual regression testing, and `toMatchAriaSnapshot` for accessibility testing. Use other Playwright assertions as needed for functional testing.
-   If you are using `compareScreenshot`, consider the different options for capturing the screenshot (e.g. full page, specific locator, etc.) and choose the most appropriate one based on the test scenario.
-   Minimise visibility assertions if they do not add value to the test case, e.g. if the screenshot already captures the relevant state of the component, there is no need to also assert on visibility of specific elements unless it is critical to the test scenario.

```ts
class StoryPage extends AbstractStoryPage {
    protected readonly component = "example";

    public readonly locators: {
        // common locators for elements within the component
        component: {
            dropdownList: Locator;
            clearButton: Locator;
        };
        example: Locator;
        exampleDisabled: Locator;
    };

    constructor(page: Page) {
        super(page);

        this.locators = {
            component: {
                dropdownList: page.getByTestId("..."),
                clearButton: page.getByRole("..."),
            },
            example: page.getByTestId("..."),
            exampleDisabled: page.getByTestId("..."),
        };
    }

    helperMethod() {
        // shared helpers e.g. repeated steps for selecting a dropdown item
    }
}

const test = base.extend<{ story: StoryPage }>({
    story: async ({ page }, use) => {
        const story = new StoryPage(page);
        await use(story);
    },
});

test.describe("Example", () => {
    // use an anonymous describe block here
    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("story-name");
        });

        test("All variants", async ({ story }) => {
            await compareScreenshot(story, "mount");
            await compareScreenshot(story, "mount", { fullscreen: true });
            await compareScreenshot(story, "mount", {
                locator: story.page.locator.example,
            });
        });
    });

    test.describe(() => {
        test.beforeEach(async ({ story }) => {
            await story.init("story-name", { mode: "dark" });
        });

        test("All variants (dark mode)", async ({ story }) => {
            // remaining test code
        });
    });
});
```

### Structure of the story file

-   Keep the story markup as simple as possible
-   Reuse `story-row-container` and/or `story-column-container` classes from `global.css` for layout if needed
-   No additional padding is need as the main container of the story already applies spacing to create some spacing from the edges of the viewport

```tsx
"use client";
import { Example } from "@lifesg/react-design-system/example";

export default function Story() {
    return (
        <div className="story-row-container">
            <Example data-testid="image-button-default">
                Default
            </ImageButton>
        </div>
    );
}
```

### Best practices

-   Prefer using `getByRole` for selecting elements
-   Use `getByTestId` if there is no suitable role, and add a `data-testid` attribute to the relevant element in the story
