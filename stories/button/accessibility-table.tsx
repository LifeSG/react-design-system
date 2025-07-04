import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const ACCESSIBILITY_DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "focusableWhenDisabled",
                description: (
                    <>
                        Allows the button to remain focusable when disabled. The
                        button will not respond to clicks when disabled.
                    </>
                ),
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];

export const AccessibilityPropsTable = () => (
    <ApiTable sections={ACCESSIBILITY_DATA} />
);
