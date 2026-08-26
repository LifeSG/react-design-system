# Flagship Component Catalogue

One-liner per component. Read `./resources/v3/components/{key}.md` for full props and usage rules before writing code.

---

## Buttons & Actions

| Component        | Key                | Also known as                                     | Pairs with               | Description                                                                                                                                 | Key props                              |
| ---------------- | ------------------ | ------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `Button`         | `button`           | CTA, action button, submit button, primary button | `Form`, `Modal`, `Alert` | Text button. Variants: `Button.Default` (standard), `Button.Small`, `Button.Large`. Style types: default/secondary/light/link + danger flag | `styleType` (req), `loading`, `danger` |
| `IconButton`     | `icon-button`      | icon action, icon-only button                     | `Navbar`                 | Icon-only button — `aria-label` always required. **v3 only — not available in v4**                                                          | `icon` (req), `aria-label` (req)       |
| `ButtonWithIcon` | `button-with-icon` | labeled icon button, button with icon             | `Form`, `Modal`          | Text + icon button. Icon position: left (default) or right. **v3 only — not available in v4**                                               | `icon` (req), `iconPosition`           |

---

## Form — Inputs

All `Form.*` components import from `@lifesg/react-design-system/form`. `label` is required on every field.

| Component                  | Key                          | Also known as                                                      | Pairs with             | Description                                          | Key props                                                      |
| -------------------------- | ---------------------------- | ------------------------------------------------------------------ | ---------------------- | ---------------------------------------------------- | -------------------------------------------------------------- |
| `Form.Input`               | `form-input`                 | text field, labeled input, form field, input box                   | `Alert`, `Button`      | Standard labeled text input with error state         | `label` (req), `value`, `onChange`, `errorMessage`             |
| `Form.Textarea`            | `form-textarea`              | multiline, long text, text area, comments box                      | `Alert`, `Button`      | Multi-line text input                                | `label` (req), `value`, `onChange`, `rows`                     |
| `Form.Select`              | `form-select`                | dropdown, select, single select, picker                            | `Form.Input`, `Button` | Single-option dropdown                               | `label` (req), `options`, `selectedOption`, `onSelectOption`   |
| `Form.MultiSelect`         | `form-multi-select`          | multi-select, multi-choice dropdown, multi-pick                    | `Form.Input`, `Button` | Multi-option dropdown                                | `label` (req), `options`, `selectedOptions`, `onSelectOptions` |
| `Form.NestedSelect`        | `form-nested-select`         | hierarchical select, tree select, nested dropdown, category select | —                      | Parent–child option dropdown                         | `label` (req), `options` (nested tree)                         |
| `Form.NestedMultiSelect`   | `form-nested-multi-select`   | hierarchical multi-select, nested multi-choice                     | —                      | Multi-select variant of nested dropdown              | `label` (req), `options` (nested tree), `selectedOptions`      |
| `Form.PredictiveTextInput` | `form-predictive-text-input` | autocomplete, typeahead, search with suggestions, live search      | —                      | Text input with async suggestion fetch               | `label` (req), `fetchOptions` (async fn), `onSelectOption`     |
| `Form.MaskedInput`         | `form-masked-input`          | masked field, NRIC field, redacted input, hidden value             | —                      | Partially masked value with reveal toggle            | `label` (req), `maskRange`, `value`, `onChange`                |
| `Form.OtpVerification`     | `form-otp-verification`      | OTP, one-time password, verification code, 2FA                     | —                      | Full OTP send-and-verify flow                        | `label` (req), `length`, `onComplete`                          |
| `Form.ESignature`          | `form-e-signature`           | signature pad, e-signature, digital signature, sign                | —                      | Signature capture canvas — returns base64            | `label` (req), `onResult`                                      |
| `Input`                    | `input`                      | standalone input, bare input                                       | —                      | Text input without label — use `Form.Input` in forms | `value`, `onChange`                                            |

---

## Form — Numbers & Units

| Component               | Key                       | Also known as                                          | Pairs with   | Description                                       | Key props                                        |
| ----------------------- | ------------------------- | ------------------------------------------------------ | ------------ | ------------------------------------------------- | ------------------------------------------------ |
| `Form.Slider`           | `form-slider`             | slider, range input, numeric slider, range slider      | `Form.Input` | Slider for a single numeric value                 | `label` (req), `min`, `max`, `value`, `onChange` |
| `Form.PhoneNumberInput` | `form-phone-number-input` | phone input, mobile number, country code, tel          | —            | Phone number with country code selector           | `label` (req), `value`, `onChange`               |
| `Form.UnitNumberInput`  | `form-unit-number-input`  | unit number, floor unit, #floor-unit, apartment number | —            | Specialised input for Singapore floor-unit format | `label` (req), `value`, `onChange`               |

---

## Form — Dates & Times

| Component              | Key                      | Also known as                                         | Pairs with                   | Description                                                          | Key props                                           |
| ---------------------- | ------------------------ | ----------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------- | --------------------------------------------------- |
| `Form.DateInput`       | `form-date-input`        | date picker, date field, calendar input, datepicker   | `Calendar`                   | Single date with calendar picker                                     | `label` (req), `value`, `onChange`, `disabledDates` |
| `Form.DateRangeInput`  | `form-date-range-input`  | date range, start end date, date period, from to date | `Calendar`                   | Paired start/end date pickers — 3 variants: range, week, fixed-range | `label` (req), `value`, `onChange`, `variant`       |
| `Form.TimePicker`      | `form-timepicker`        | time input, time field, time picker, hour minute      | `Form.DateInput`             | Time input — 12hr or 24hr                                            | `label` (req), `value`, `onChange`, `format`        |
| `Form.TimeRangePicker` | `form-time-range-picker` | time range, start end time, from to time              | `Form.DateInput`, `Calendar` | Paired start/end time pickers                                        | `label` (req), `value`, `onChange`                  |

---

## Form — Selection & Upload

| Component     | Key            | Also known as                                                   | Pairs with            | Description                                                                    | Key props                                                    |
| ------------- | -------------- | --------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| `Toggle`      | `toggle`       | option card, checkbox card, radio card, yes/no, selectable card | `Form.Input`          | **Preferred** for checkbox/radio inputs in forms — renders as selectable card  | `indicator` (req), `title`, `checked`, `onChange`            |
| `Checkbox`    | `checkbox`     | checkmark, tick box, tick                                       | `DataTable`, `Filter` | Compact boolean — use for table row selection or filter lists, not form fields | `checked`, `onChange`                                        |
| `RadioButton` | `radio-button` | radio, single choice, radio group                               | `Filter`              | Compact single-choice — use `Toggle` for form cards                            | `value`, `checked`, `onChange`                               |
| `FileUpload`  | `file-upload`  | file input, drag and drop, attachment, upload                   | `Alert`, `Button`     | Drag-and-drop upload area — parent manages file state                          | `label` (req), `accept`, `multiple`, `fileItems`, `onUpload` |

---

## Data Display

| Component      | Key             | Also known as                                              | Pairs with                       | Description                                                                      | Key props                                            |
| -------------- | --------------- | ---------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `Card`         | `card`          | panel, content box, content card, surface                  | `Typography`, `Button`, `Layout` | Container for grouping related content                                           | `children`                                           |
| `Accordion`    | `accordion`     | collapsible, expandable, disclosure, FAQ                   | `Typography`                     | Multiple grouped collapsible panels                                              | `items` (req — `{title, content}[]`)                 |
| `BoxContainer` | `box-container` | collapsible section, collapsible panel, expandable section | `Typography`, `Alert`            | Single collapsible section — supports Edit CTA, error/warning state              | `title` (req), `collapsible`, `expanded`, `onToggle` |
| `Timeline`     | `timeline`      | step list, event history, process steps, progress list     | `Typography`                     | Vertical sequence of events or steps                                             | `items` (req)                                        |
| `LinkList`     | `link-list`     | related links, link group, resource list                   | `Card`                           | Styled list of links with descriptions and show-more toggle                      | `items` (req — `{title, href, description}[]`)       |
| `Typography`   | `typography`    | text, heading, body text, paragraph, label, caption        | `Colour` tokens                  | Text components — `HeadingXXL`→`HeadingXS`, `BodyBL`→`BodyXS`, `LinkBL`→`LinkXS` | `weight`, `as` (override element)                    |
| `Badge`        | `badge`         | count badge, notification dot, number badge, unread count  | `Navbar`, `IconButton`           | Numeric badge overlaid on another element                                        | `value` (req)                                        |
| `Avatar`       | `avatar`        | user avatar, profile picture, initials, profile icon       | `Navbar`                         | User representation — image or initials fallback                                 | `name` or `imageUrl`                                 |

---

## Notifications & Status

| Component            | Key                   | Also known as                                                     | Pairs with          | Description                                     | Key props                                                              |
| -------------------- | --------------------- | ----------------------------------------------------------------- | ------------------- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| `Alert`              | `alert`               | inline alert, callout, info box, warning box, banner message      | `Form`, `Button`    | Inline callout — info/warning/success/error     | `type` (req: `"info"/"warning"/"success"/"error"`), `children`         |
| `Toast`              | `toast`               | snackbar, flash message, notification, pop-up message             | `Button`            | Transient auto-dismissing notification          | `id`, `message` (req), `type`                                          |
| `NotificationBanner` | `notification-banner` | banner, announcement, top banner, system banner                   | `Navbar`            | Persistent banner below Navbar                  | `type` (req), `children`                                               |
| `Pill`               | `pill`                | status pill, status label, status badge, chip                     | `Card`, `DataTable` | Static status label — 1–2 words, no interaction | `color`, `children`                                                    |
| `Tag`                | `tag`                 | filter chip, category label, filter tag, keyword tag              | `Filter`, `Card`    | Category/filter label — static or interactive   | `colorType`, `removable`, `onRemove`, `children`                       |
| `ProgressIndicator`  | `progress-indicator`  | stepper, step indicator, progress steps, wizard steps, multi-step | `Button`, `Form`    | Step-by-step progress tracker                   | `steps` (req), `currentIndex` (req, 0-based), `displayExtractor` (req) |

---

## Navigation

| Component    | Key          | Also known as                                      | Pairs with                    | Description                                                   | Key props                                                                                       |
| ------------ | ------------ | -------------------------------------------------- | ----------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `Navbar`     | `navbar`     | top nav, navigation bar, header, app bar           | `Masthead`, `Footer`          | Top navigation — every page must include this                 | `resources.primary.brandName`, `items.desktop`                                                  |
| `Footer`     | `footer`     | page footer, bottom bar                            | `Navbar`                      | Page footer — `<Footer />` with no props for standard variant | _(none required)_                                                                               |
| `Breadcrumb` | `breadcrumb` | wayfinding, breadcrumb trail, crumbs               | `Navbar`                      | Hierarchical location breadcrumb                              | `items` (req — `{label, href}[]`)                                                               |
| `Sidenav`    | `sidenav`    | sidebar navigation, side menu, left nav            | `Layout`                      | Vertical sidebar navigation — 4-level nesting                 | `items` (req), `selectedId`                                                                     |
| `Tab`        | `tab`        | tabs, tabbed navigation, tab strip, tab bar        | `Filter`, `DataTable`         | Tabbed content switching                                      | `items` (req), `activeTabKey`, `onClickTab`                                                     |
| `LocalNav`   | `local-nav`  | in-page nav, anchor links, section nav, jump links | `Layout`                      | In-page section navigation                                    | `items` (req — `{id, label}[]`)                                                                 |
| `Menu`       | `menu`       | dropdown menu, context menu, action menu           | `Button`, `IconButton`        | Dropdown menu attached to a trigger                           | `items` (req), `trigger` (req)                                                                  |
| `Pagination` | `pagination` | page controls, paging, page numbers                | `DataTable`, `Filter`, `Card` | Page navigation controls — always set `showFirstAndLastNav`   | `totalItems` (req), `pageSize` (req), `activePage`, `onPageChange`, `showFirstAndLastNav` (req) |

---

## Overlays

| Component | Key       | Also known as                                 | Pairs with             | Description                                                                                                  | Key props                                            |
| --------- | --------- | --------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `Modal`   | `modal`   | dialog, popup, lightbox, confirmation dialog  | `Button`, `Form`       | Full overlay dialog — blocks background interaction                                                          | `show` (req); nest `Modal.Box` with `onClose` inside |
| `Drawer`  | `drawer`  | side sheet, slide-in panel, tray, side drawer | `Filter`, `Sidenav`    | Slide-in panel from screen edge                                                                              | `show` (req), `onClose`                              |
| `Popover` | `popover` | anchored popup, floating panel, overlay panel | `IconButton`, `Button` | Anchored floating content panel                                                                              | `trigger` (req), `content` (req)                     |
| `Tooltip` | `tooltip` | hover tip, info tip, hint                     | `Form`                 | Short hover/focus tooltip — no interactive content. **v3 only — use `Popover` with `trigger="hover"` in v4** | `content` (req)                                      |

---

## Filters & Search

| Component | Key      | Also known as                                                | Pairs with                                                   | Description                                              | Key props                       |
| --------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------- |
| `Filter`  | `filter` | filter panel, filter sidebar, faceted search, search filters | `DataTable`, `Pagination`, `Card`, `Checkbox`, `RadioButton` | Filter UI — auto-switches desktop sidebar / mobile modal | `items` (req), `onFilterChange` |

---

## Specialist / Complex

| Component                 | Key                         | Also known as                                                                    | Pairs with                                 | Description                                                                                | Key props                                                        |
| ------------------------- | --------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `DataTable`               | `data-table`                | sortable table, data grid, table with selection                                  | `Pagination`, `Filter`, `Checkbox`, `Pill` | Sortable, configurable data table with row selection                                       | `columns` (req), `data` (req)                                    |
| `Table`                   | `table`                     | basic table, html table, simple table                                            | `Typography`                               | Basic styled table wrapper                                                                 | `children`                                                       |
| `Calendar`                | `calendar`                  | date calendar, month view, date picker calendar                                  | `Form.DateInput`, `Form.DateRangeInput`    | Full calendar month view — single or multi-select                                          | `value`, `onSelect`, `disabledDates`                             |
| `DateNavigator`           | `date-navigator`            | date stepper, prev next date, date arrow                                         | `Calendar`                                 | Prev/next date navigation control                                                          | `value` (req), `onPrev`, `onNext`                                |
| `TimeSlotBar`             | `time-slot-bar`             | time slots, booking slots, availability bar                                      | `Calendar`, `Form.DateInput`               | Horizontal time slot selection bar                                                         | `slots` (req), `selectedSlot`, `onSelectSlot`                    |
| `TimeSlotBarWeek`         | `time-slot-bar-week`        | week slots, weekly time slots                                                    | `Calendar`                                 | Week-view time slot bar                                                                    | `slots` (req), `selectedSlot`, `onSelectSlot`                    |
| `TimeSlotWeekView`        | `time-slot-week-view`       | week view, weekly calendar, weekly availability                                  | `Calendar`                                 | Full week-view time slot grid                                                              | `slots` (req), `selectedSlot`, `onSelectSlot`                    |
| `Timetable`               | `timetable`                 | schedule grid, period grid, class timetable                                      | —                                          | Timetable / period grid display                                                            | `data` (req)                                                     |
| `Schedule`                | `schedule`                  | daily schedule, time schedule, day view                                          | `Calendar`                                 | Daily schedule display                                                                     | `data` (req), `date`                                             |
| `ErrorDisplay`            | `error-display`             | error page, empty state, no results, 404, 500, maintenance page, session timeout | `Button`                                   | Full-page or section error/empty state — covers HTTP errors, empty results, session states | `type` (req: `"404"/"500"/"maintenance"/"no-results"/"timeout"`) |
| `FeedbackRating`          | `feedback-rating`           | star rating, rating widget, feedback, satisfaction survey                        | `Modal`, `Toast`                           | Rating/feedback capture widget                                                             | `rating`, `onRatingChange`                                       |
| `CountdownTimer`          | `countdown-timer`           | timer, countdown, time remaining, session timer                                  | `Alert`, `Modal`                           | Countdown display                                                                          | `targetDate` or `duration` (req)                                 |
| `FileDownload`            | `file-download`             | download link, file download, attachment download                                | `Card`                                     | File download link/button                                                                  | `filename` (req), `fileUrl` (req)                                |
| `FullscreenImageCarousel` | `fullscreen-image-carousel` | image carousel, lightbox gallery, photo gallery                                  | `Card`, `Button`                           | Fullscreen image carousel — discriminated union items                                      | `items` (req — discriminated union), `show`, `onClose`           |
| `UnEditableSection`       | `uneditable-section`        | read-only field, display field, view mode, review field                          | `Form`, `Card`                             | Read-only field display for review screens                                                 | `items` (req — `{label, value, displayWidth}[]`)                 |

---

## Branding & Platform

| Component          | Key                 | Also known as                                      | Pairs with | Description                                                 | Key props                                     |
| ------------------ | ------------------- | -------------------------------------------------- | ---------- | ----------------------------------------------------------- | --------------------------------------------- |
| `SingpassButton`   | `singpass-button`   | Singpass login, Myinfo button, Singpass            | —          | Pre-built Singpass login button — do not custom style       | _(none — do not custom style)_                |
| `SmartAppBanner`   | `smart-app-banner`  | app download banner, mobile app banner, app store  | `Navbar`   | App store download prompt banner                            | `show`, `appStoreUrl`, `playStoreUrl`         |
| `Masthead`         | `masthead`          | gov.sg masthead, government masthead, sgd masthead | `Navbar`   | Official gov.sg masthead — required for government services | _(none required)_                             |
| `LanguageSwitcher` | `language-switcher` | language selector, locale switcher, bilingual      | `Navbar`   | Language/locale selection control                           | `items` (req), `selectedLanguage`, `onSelect` |

---

## Layout & Utility

| Component         | Key                | Also known as                                                               | Pairs with           | Description                                                                                                                                     | Key props                                                      |
| ----------------- | ------------------ | --------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `Layout`          | `layout`           | grid, container, column, responsive layout, col                             | `Card`, `Typography` | Responsive grid — `Layout.Container type="grid"` + `Layout.ColDiv xsCols`                                                                       | `Layout.Container type` (req), `Layout.ColDiv xsCols lgCols`   |
| `TextList`        | `text-list`        | bullet list, unordered list, ordered list, numbered list, ul, ol            | `Typography`, `Card` | Semantic lists — `TextList.Ul` (bullets) and `TextList.Ol` (numbered/lettered). Supports custom icon bullets                                    | `items` (req), `listStyleType`                                 |
| `HistogramSlider` | `histogram-slider` | range slider with histogram, price range, distribution slider, filter range | `Filter`             | Range slider with histogram chart above — for filter panels where showing value distribution aids range selection                               | `min` (req), `max` (req), `value`, `onChange`, `histogramData` |
| `Divider`         | `divider`          | horizontal rule, separator, hr, line                                        | `Card`, `Accordion`  | Visual separator between sections                                                                                                               | _(none required)_                                              |
| `ImageButton`     | `image-button`     | image CTA, image card button, clickable image                               | `Layout`             | Image with text overlay as a button                                                                                                             | `imageUrl` (req), `label`, `onClick`                           |
| `Animation`       | `animation`        | loading spinner, spinner, loading indicator, animate, transition, dots      | —                    | Loading and transition animations — `LoadingSpinner`, `LoadingDots`, `LoadingDotsSpinner`. Import from `@lifesg/react-design-system/animations` | _(none required)_                                              |
