import type { ApiTableSectionProps } from "stories/storybook-common";
import { ApiTable } from "stories/storybook-common";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "close-button-top-inset",
                description: (
                    <>
                        Distance of close button from top of{" "}
                        <code>Modal.Box</code>
                    </>
                ),
                defaultValue: 'Spacing["spacing-16"]',
            },
            {
                name: "close-button-right-inset",
                description: (
                    <>
                        Distance of close button from right of{" "}
                        <code>Modal.Box</code>
                    </>
                ),
                defaultValue: (
                    <>
                        <code>{'Spacing["spacing-16"]'}</code>
                        <br />
                        <code>{'Spacing["spacing-20"]'}</code> (≤ sm breakpoint)
                    </>
                ),
            },
        ],
    },
];

export const StyleTokensTable = () => <ApiTable sections={DATA} />;
