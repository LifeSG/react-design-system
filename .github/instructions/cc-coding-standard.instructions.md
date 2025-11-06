# Coding Standards

-   Write clean code that follows DRY (Don't Repeat Yourself) principles, is well-structured, and adheres to best practices.
-   Confirm assumptions before proceeding with implementation.
-   Use meaningful variable and function names that clearly describe their purpose.
-   Use comments to explain complex logic or important decisions, but avoid obvious comments.
-   Use consistent formatting and indentation throughout the codebase.
-   Use tabs for indentation, and end lines with a semicolon.
-   Use early returns whenever possible to make the code more readable.
-   Avoid using magic numbers or strings; define constants for such values.
-   Write unit tests for new features and ensure existing tests pass before submitting code.

-   Leave no TODOs or unfinished code in the codebase that you add.
-   Focus on easy to understand and readable code, over being performant.
-   Fully implement all requested functionality.
-   Leave an empty line at the end of each file.
-   Do not hardcode values that should be configurable, environment-specific, or are sensitive.
-   Use existing utility functions and constants where possible.
-   Prefer existing patterns and conventions used in this repository.
-   If you think there might not be a correct answer, you say so.
-   If you do not know the answer, say so, instead of guessing.

# Security

-   Ensure that sensitive information (like API keys, passwords, etc.) is not hardcoded in the codebase.
-   Use environment variables for configuration and sensitive data.
-   Follow best practices for securing APIs and user data.
-   Follow secure coding practices to prevent common vulnerabilities such as SQL injection, XSS, and CSRF.

# Accessibility

-   Ensure that all UI components are accessible.
-   Use semantic HTML elements and ARIA attributes where necessary.

# Documentation

-   Document all public APIs, including functions, classes, and modules.
-   In TypeScript files, use JSDoc comments to provide clear descriptions, parameter types, and return types for important functions and classes.
-   Update documentation whenever code changes to ensure it remains accurate and helpful.
-   Use README files to provide an overview of the project, setup instructions, and usage examples.
-   Use Markdown for general documentation files.

<!-- This is copy of the master file in the ccube-lib-ai-config repo. Update the files there. -->
