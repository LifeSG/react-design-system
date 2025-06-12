import { ApiTable } from "../storybook-common/api-table";
import { ApiTableSectionProps } from "../storybook-common/api-table/types";

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "",
                description: (
                    <>
                        This component also inherits props from&nbsp;
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement"
                            rel="noreferrer"
                            target="_blank"
                        >
                            HTMLButtonElement
                        </a>
                    </>
                ),
            },
            {
                name: "styleType",
                mandatory: true,
                description: (
                    <>
                        The style of the <code>Singpass Button</code>
                    </>
                ),
                propTypes: [`"red-filled"`, `"white-filled"`],
                defaultValue: `"white-filled"`,
            },
            {
                name: "singpassLogoStyleOverride",
                mandatory: true,
                description: (
                    <>Use this prop to finely place the singpass logo</>
                ),
                propTypes: [
                    `{
    height?: number;
    translateY?: number;
    paddingLeft?: number;
}`,
                ],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
