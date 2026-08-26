# DateNavigator

Import: `import { DateNavigator } from "@lifesg/react-design-system/date-navigator"`

## Props

| Prop                     | Type                            | Default         | Description                                                            |
| ------------------------ | ------------------------------- | --------------- | ---------------------------------------------------------------------- |
| `selectedDate` \*        | `string`                        | —               | Current displayed date in `YYYY-MM-DD` format                          |
| `onLeftArrowClick` \*    | `(currentDate: string) => void` | —               | Called on left arrow navigation button click                           |
| `onRightArrowClick` \*   | `(currentDate: string) => void` | —               | Called on right arrow navigation button click                          |
| `minDate`                | `string`                        | —               | Minimum date allowed for navigation in `YYYY-MM-DD` format (inclusive) |
| `maxDate`                | `string`                        | —               | Maximum date allowed for navigation in `YYYY-MM-DD` format (inclusive) |
| `loading`                | `boolean`                       | —               | Disables navigation buttons while loading                              |
| `showDateAsShortForm`    | `boolean`                       | —               | Shows the date in short form                                           |
| `showCurrentDateAsToday` | `boolean`                       | —               | Shows today's system date as "Today"                                   |
| `onCalendarDateSelect`   | `(currentDate: string) => void` | —               | Called on a calendar date selection                                    |
| `dropdownRootNode`       | `RefObject<HTMLElement>`        | `document body` | Root element that hosts the calendar dropdown                          |
| `id`                     | `string`                        | —               | Identifier of the component                                            |
| `className`              | `string`                        | —               | Class selector of the component                                        |
| `data-testid`            | `string`                        | —               | Test identifier of the component                                       |

`*` = required

## Rules

-   Only override `dropdownRootNode` if you need the dropdown to share a stacking context with a scroll container — may cause z-index issues.
