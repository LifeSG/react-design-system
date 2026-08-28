# Icons

Icons come from `@lifesg/react-icons` — a separate package. Each icon is its own named export.

## Import pattern

Icon names follow `{name}` → component name is `{PascalCase}Icon`:

```tsx
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { PersonIcon } from "@lifesg/react-icons/person";
```

Pattern: `kebab-case` name → import path `@lifesg/react-icons/{name}` → component `{PascalCase}Icon`

## Props

| Prop        | Type     | Default  | Description                      |
| ----------- | -------- | -------- | -------------------------------- |
| `size`      | `number` | `24`     | Icon size in px                  |
| `color`     | `string` | inherits | CSS colour value or token string |
| `className` | `string` | —        | CSS class                        |

## Available icons

Icons come in two variants: outline (default) and filled (`-fill` suffix).

### Arrows & Navigation

`arrow-up` `arrow-down` `arrow-left` `arrow-right`
`arrow-up-circle` `arrow-up-circle-fill` `arrow-down-circle` `arrow-down-circle-fill`
`arrow-left-circle` `arrow-left-circle-fill` `arrow-right-circle` `arrow-right-circle-fill`
`arrow-left-up` `arrow-left-down` `arrow-right-up` `arrow-right-down`
`chevron-up` `chevron-down` `chevron-left` `chevron-right`
`chevron-2-left` `chevron-2-right`
`chevron-line-left` `chevron-line-right`
`caret-up` `caret-down` `caret-left` `caret-right`
`multi-chevron-up-down` `multi-chevron-down-up`
`navigation` `navigation-fill`
`external` `return`

### Actions

`plus` `plus-circle` `plus-circle-fill`
`minus` `minus-circle` `minus-circle-fill` `minus-square` `minus-square-fill`
`cross` `cross-circle` `cross-circle-fill`
`tick` `tick-circle` `tick-circle-fill`
`pencil` `pencil-fill` `pencil-stroke` `pencil-stroke-fill`
`bin` `bin-fill`
`copy` `copy-fill`
`download` `upload`
`share` `link`
`login` `logout`
`refresh` `replay` `retry`
`drag-handle`
`filter`
`sort-ascending` `sort-descending`
`fullscreen-open` `fullscreen-close`
`read-more`
`eraser`

### Status & Feedback

`tick-circle` `tick-circle-fill`
`cross-circle` `cross-circle-fill`
`exclamation-circle` `exclamation-circle-fill`
`exclamation-triangle` `exclamation-triangle-fill`
`i-circle` `i-circle-fill`
`questionmark-circle` `questionmark-circle-fill`
`thumb-up` `thumb-up-fill`
`star` `star-fill` `star-half`

### People & Identity

`person` `person-fill`
`person-2` `person-2-fill`
`person-group` `person-group-fill`
`person-plus` `person-plus-fill`
`person-minus` `person-minus-fill`
`person-2-plus` `person-2-plus-fill`
`person-2-minus` `person-2-minus-fill`
`person-gear` `person-gear-fill`
`person-off` `person-off-fill`
`id-card` `id-card-fill`

### Communication

`envelope` `envelope-fill`
`envelope-open` `envelope-open-fill`
`bell` `bell-fill`
`phone` `phone-fill`
`inbox` `inbox-fill`
`speaker` `speaker-fill`

### Files & Documents

`doc` `doc-fill`
`doc-pencil` `doc-pencil-fill`
`album` `album-fill`
`box` `box-fill`
`index`
`text` `text-fill`

### Calendar & Time

`calendar` `calendar-fill`
`calendar-event` `calendar-event-fill`
`calendar-plus` `calendar-plus-fill`
`calendar-cross` `calendar-cross-fill`
`calendar-dot` `calendar-dot-fill`
`calendar-pencil` `calendar-pencil-fill`
`calendar-tick` `calendar-tick-fill`
`clock` `clock-fill`
`recurring` `non-recurring`

### Location & Maps

`map` `map-fill`
`pin` `pin-fill`
`point`
`navigation` `navigation-fill`
`globe`
`house` `house-fill`
`building`
`floor-plan` `floor-plan-fill`

### Devices & Media

`camera` `camera-fill`
`tablet` `tablet-fill`
`phone` `phone-fill`
`cloud` `cloud-fill`
`cloud-arrow-up` `cloud-arrow-up-fill`
`cloud-arrow-down` `cloud-arrow-down-fill`
`cloud-tick` `cloud-tick-fill`
`qr`

### UI & Layout

`menu`
`ellipsis-horizontal` `ellipsis-vertical`
`gear` `gear-fill`
`lock` `lock-fill`
`eye` `eye-fill`
`eye-slash` `eye-slash-fill`
`list`
`square` `square-fill`
`square-2x2` `square-2x2-fill`
`square-tick` `square-tick-fill`
`circle` `circle-dot`
`toggle-on` `toggle-on-fill`
`toggle-off` `toggle-off-fill`
`magnifier` `magnifier-plus` `magnifier-minus`

### Misc

`bookmark` `bookmark-fill`
`chart` `chart-fill`
`car`
`dollar`
`printer` `printer-fill`
`lightbulb` `lightbulb-fill`
`language`
`ticket` `ticket-fill`
`triangle-forward` `triangle-forward-fill`
`align-left` `align-center` `align-right` `align-justify`
`placeholder` `placeholder-image`

## Rules

-   Never guess an icon name — verify it exists in the list above before importing.
-   `-fill` variants are the solid/filled version; the base name is outline.
-   Fallback: if no suitable icon exists in `@lifesg/react-icons`, use `@mui/icons-material` as a secondary source.
-   For `IconButton`, always set `aria-label` — the icon alone is not accessible.
