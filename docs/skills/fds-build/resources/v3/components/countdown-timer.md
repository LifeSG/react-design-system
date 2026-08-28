# CountdownTimer

Import: `import { CountdownTimer } from "@lifesg/react-design-system/countdown-timer"`

## Props

| Prop               | Type                                            | Default        | Description                                                                          |
| ------------------ | ----------------------------------------------- | -------------- | ------------------------------------------------------------------------------------ |
| `show` \*          | `boolean`                                       | —              | Starts the countdown timer when true                                                 |
| `timer` \*         | `number`                                        | —              | Countdown duration in seconds                                                        |
| `timestamp`        | `number`                                        | —              | Unix timestamp (ms) at which the countdown ends; required if `timer` is not provided |
| `notifyTimer`      | `number`                                        | —              | Notification threshold in seconds                                                    |
| `offset`           | `{ top: number; left: number; right: number; }` | `{ top: 168 }` | Sticky position on desktop/tablet (px)                                               |
| `mobileOffset`     | `{ top: number; }`                              | `{ top: 80 }`  | Sticky position on mobile (px)                                                       |
| `align`            | `"left" \| "right"`                             | `"right"`      | Horizontal alignment of the sticky component                                         |
| `fixed`            | `boolean`                                       | `true`         | Whether the component is sticky when scrolled out of view                            |
| `reminderInterval` | `number`                                        | `120`          | Interval in seconds for polite screen reader reminders                               |
| `onTick`           | `(seconds: number) => void`                     | —              | Called every second when value ≤ `notifyTimer` (not guaranteed to be precise)        |
| `onNotify`         | `() => void`                                    | —              | Called once when the timer value drops below `notifyTimer`                           |
| `onFinish`         | `() => void`                                    | —              | Called when the timer reaches zero                                                   |
| `className`        | `string`                                        | —              | Class selector of the component                                                      |
| `data-testid`      | `string`                                        | —              | Test identifier of the component                                                     |

`*` = required
