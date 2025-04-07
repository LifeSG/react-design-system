import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";
import { SHARED_FORM_PROPS_DATA } from "../shared-props-data";

const DATA: ApiTableSectionProps[] = [
    {
        name: "Textarea specific props",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLTextareaElement
                        </a>
                    </>
                ),
            },
            {
                name: "error",
                description: (
                    <>
                        Indicates if an error display is to be set&nbsp; (Not
                        needed if you indicated <code>errorMessage</code>)
                    </>
                ),
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "renderCustomCounter",
                description:
                    "Function to render a custom counter label component",
                propTypes: [
                    "(maxLength: number,currentValueLength: number) => JSX.Element",
                ],
            },
            {
                name: "transformValue",
                description: "Function to transform value",
                propTypes: ["(value: string) => string"],
            },
            {
                name: "prefix",
                description: "The prefix to be displayed",
                propTypes: ["string"],
            },
        ],
    },
    ...SHARED_FORM_PROPS_DATA,
];

export const PropsTable = () => <ApiTable sections={DATA} />;
