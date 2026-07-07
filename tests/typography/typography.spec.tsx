import { render } from "@testing-library/react";
import { Typography } from "src/typography";

describe("Typography Components", () => {
    describe("Body Text", () => {
        it("renders BodyMD with correct text", () => {
            const { getByText } = render(
                <Typography.BodyMD weight="semibold" inline>
                    This is medium body text
                </Typography.BodyMD>
            );

            expect(getByText("This is medium body text")).toBeInTheDocument();
        });
    });

    describe("Link Components", () => {
        it("renders external LinkSM with external icon", () => {
            const { getByText, container } = render(
                <Typography.LinkSM external>
                    External Small Link
                </Typography.LinkSM>
            );

            expect(getByText("External Small Link")).toBeInTheDocument();

            const icon = container.querySelector("svg");
            expect(icon).not.toBeNull();
        });
    });

    describe("Heading Components", () => {
        it("renders HeadingXXL with correct text", () => {
            const { getByText } = render(
                <Typography.HeadingXXL weight="bold" inline>
                    Hello World
                </Typography.HeadingXXL>
            );

            expect(getByText("Hello World")).toBeInTheDocument();
        });

        it("renders HeadingSM as forwarded heading element", () => {
            const { getByText } = render(
                <Typography.HeadingSM as="h2">
                    Heading Semantics Override
                </Typography.HeadingSM>
            );

            const heading = getByText("Heading Semantics Override");
            expect(heading.tagName).toBe("H2");
        });
    });
});
