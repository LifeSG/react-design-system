# Migrating from react-lifesg-design-system-v6

## Imports

Subdirectory imports are now supported. Hence it is advised to use it for importing instead.

```tsx
import { Button } from "@lifesg/react-design-system/button";
```

### Typings

Types are also now exported along with the same component folder as opposed to the types file

```tsx
// v6
import { ButtonProps } from "react-lifesg-design-system/types";

// New
import { ButtonProps } from "@lifesg/react-design-system/button";
```

### Styling

```tsx
// v6
import { Color, MediaQuery, TextStyleHelper } from "react-lifesg-design-system";

// New
import { Color } from "@lifesg/react-design-system/color";
import { MediaQuery } from "@lifesg/react-design-system/media";
import { TextStyleHelper } from "@lifesg/react-design-system/text";
```

<br />

## Component changes

-   [Accordion](#accordion)
-   [Alert](#alert)
-   [Form](#form)
-   [InputGroup](#input-group)
-   [Layout](#layout)
-   [LinkList](#link-list)
-   [Modal](#modal)
-   [Navbar](#navbar)
-   [NotificationBanner](#notif-banner)

<br />

<br />

<a id="accordion"></a>

### Accordion

-   `Accordion.Base` has been replaced with just `Accordion`
-   `Accordion.Item` still remains

You may refer to the storybook documentation for more details.

<br />

<a id="alert"></a>

### Alert

-   `AlertBox` has been renamed as `Alert` in terms of terminology
-   `AlertBox.Base` has been renamed to `Alert`
-   `AlertBox.Description` has been deprecated to have the style applied to `<p>` instead

You may refer to the storybook documentation for more details.

<br />

<a id="footer"></a>

### Footer

-   The footer props have been amended for clarity
    -   `addon` has been deprecated and replaced with `showDownloadAddon`
    -   Introduced `copyrightInfo` and `logoSrc` to allow customisation of the copyright text and logo respectively
    -   `options` in `FooterLinkProps` has been replaced with `data-options`
    -   `lastUpdated` has been made optional. Defaults to today's date if it is not specified

Refer to the storybook documentation for more details

<br />

<a id="form"></a>

### Form

-   `Form.Field` has been replaced to `Form.Input` to be more in sync with the base component
-   `Form.FieldGroup` has been replaced to `Form.InputGroup` to be more in sync with the base component

The corresponding type names have also been changed.

| component    | old                   | new                   |
| ------------ | --------------------- | --------------------- |
| `Field`      | `FormFieldProps`      | `FormInputProps`      |
| `FieldGroup` | `FormFieldGroupProps` | `FormInputGroupProps` |

<br />

<a id="input-group"></a>

### InputGroup

-   `InputGroupProps.addon` has been amended for clarity

```tsx
// Old
export interface AddonProps<T> extends DropdownListProps<T> {
    type?: InputGroupAddonType;
    value?: T;
    children?: JSX.Element;
    position?: "left" | "right";
    placeholder?: string;
    displayValueExtractor?: (item: T) => any; // format function to derive display value upon selected
    onShowOptions?: () => void;
    onHideOptions?: () => void;
    selectorTestId?: string;
}

// New
export interface AddonProps<T, V> {
    type?: InputGroupAddonType | undefined;
    attributes: ListAddon<T, V> | LabelAddon | CustomAddon;
    position?: "left" | "right" | undefined;
}

// Refer to the storybook docs for the full list of new props
```

<br />

<a id="layout"></a>

### Layout

-   `Layout.GridContent` has been deprecated and merged with `Layout.Content`. You can switch to use flex or grid
    using the `type` prop
-   `Layout.GridContainer` has been deprecated and merged with `Layout.Container`. You can switch to use flex or grid
    using the `type` prop

<br />

<a id="link-list"></a>

### LinkList

-   `onDefaultClickHandler` has been deprecated and replaced by `onItemClick`. Previously `onItemClick`
    did not return the `event` object in its params. It now does.

<br />

<a id="modal"></a>

### Modal

-   `Modal.Base` has been renamed to just `Modal` for simplicity
-   `Modal.Box` still remains the same

<br />

<a id="navbar"></a>

### Navbar

-   All Navbar prop types have been renamed to remove their prefix

Here is the full list of changes

| Previous                      | New                          |
| ----------------------------- | ---------------------------- |
| `INavItem`                    | `NavItemProps`               |
| `INavbarItems`                | `NavItemsProps`              |
| `INavResources`               | `NavbarResourcesProps`       |
| `INavbarButtonComponentProps` | `NavbarButtonComponentProps` |
| `INavbarActionButtons`        | `NavbarActionButtonsProps`   |
| `INavbarButton`               | `NavbarButtonProps`          |
| `TDrawerDismissalMethod`      | `DrawerDismissalMethod`      |
| `INavbarProps`                | `NavbarProps`                |

-   `blockDrawerDismissalMethods` in `NavbarProps` has been renamed to `drawerDismissalExclusions` for clarity

You can refer to the Storybook documentation for the amended names of the types

<br />

<a id="notif-banner"></a>

### NotificationBanner

-   `NotificationBanner.Base` has been simplified to be just `NotificationBanner`
-   `NotificationBanner.Label` has been deprecated and the style has been integrated into the main component. You may
    just specify the content plainly
