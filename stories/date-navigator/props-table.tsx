import { ApiTable, ApiTableSectionProps } from "stories/storybook-common";

const DATE_FORMAT = (
    <>
        string-based <code>YYYY-MM-DD</code> format
    </>
);
const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "The identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier of the component",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "The class selector of the component",
                propTypes: ["string"],
            },
            {
                name: "selectedDate",
                mandatory: true,
                description: <>The current displayed date in {DATE_FORMAT}</>,
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description: (
                    <>
                        The minimum date allowed for navigation in {DATE_FORMAT}{" "}
                        (inclusive)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description: (
                    <>
                        The maximum date allowed for navigation in {DATE_FORMAT}{" "}
                        (inclusive)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "loading",
                description: "The loading state to disable navigation buttons",
            },
            {
                name: "showDateAsShortForm",
                description: "Shows the date in short form",
            },
            {
                name: "showCurrentDateAsToday",
                description: "Shows today's system date as 'Today'",
            },
            {
                name: "onLeftArrowClick",
                mandatory: true,
                description: "Called on left arrow navigation button click",
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onRightArrowClick",
                mandatory: true,
                description: "Called on right arrow navigation button click",
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "onCalendarDateSelect",
                description: "Called on a calendar date selection",
                propTypes: ["(currentDate: string) => void"],
            },
            {
                name: "rootNode",
                description: (
                    <>
                        The root element that hosts the date navigator element.
                        Only specify this if you absolutely need to change the
                        parent of the calendar dropdown component.
                        <br />
                        <br />
                        For example, the calendar dropdown component is rendered
                        in <code>body</code> by default. This could cause scroll
                        issues if your UI only scrolls within a certain
                        container. In that case, you can specify the{" "}
                        <code>rootNode</code> prop so that they share the same
                        stacking context. However, note that this might cause
                        z-index issues since it will no longer be rendered in{" "}
                        <code>body</code>.
                    </>
                ),
                propTypes: ["RefObject<HTMLElement>"],
                defaultValue: (
                    <>
                        document<code>body</code>
                    </>
                ),
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
