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
-   [ErrorDisplay](#error-display)
-   [Footer](#footer)
-   [Form](#form)
-   [Icon](#icon)
-   [InputGroup](#input-group)
-   [Layout](#layout)
-   [LinkList](#link-list)
-   [Modal](#modal)
-   [Navbar](#navbar)
-   [NotificationBanner](#notif-banner)
-   [ToggleButton](#toggle-button)

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

<a id="error-display"></a>

### ErrorDisplay

-   The components now takes in `img` so you can configure all image attributes instead of just `imgSrc`
-   **[v1.0.0-alpha.24]** The default titles and descriptions have been replaced with placeholders. Specify the props based on your use case. Otherwise, if you were using the default messages in previous versions, refer to [this commit](https://github.com/LifeSG/react-design-system/blob/a2d707a1125b0fe3ad4f14a1585d55959c269396/src/error-display/error-display-data.tsx#L86-L237) for the original copy.

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
-   `Form.ErrorMessage` has been removed; to render error messages, pass in the `errorMessage` prop

The corresponding type names have also been changed.

| component    | old                   | new                   |
| ------------ | --------------------- | --------------------- |
| `Field`      | `FormFieldProps`      | `FormInputProps`      |
| `FieldGroup` | `FormFieldGroupProps` | `FormInputGroupProps` |

<br />

<a id="icon"></a>

### Icon

-   Icons have been moved to [@lifesg/react-icons](https://designsystem.life.gov.sg/reacticons/index.html?path=/story/getting-started--page) and each icon is now a named export

```tsx
// Old
import { Icon } from "@lifesg/icon";
<Icon type="cross" />;

// New
import { CrossIcon } from "@lifesg/react-icons/cross";
<CrossIcon />;
```

-   Use height and width with `styled(Icon)` to resize icons; `font-size` is no longer needed

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

-   The `resources` prop has been amended to support customisation of additional assets. You may specify the main brand logo via `resources.primary`.

<br />

<a id="notif-banner"></a>

### NotificationBanner

-   `NotificationBanner.Base` has been simplified to be just `NotificationBanner`
-   `NotificationBanner.Label` has been deprecated and the style has been integrated into the main component. You may
    just specify the content plainly

<br />

<a id="toggle-button"></a>

### ToggleButton

-   `ToggleButton` has been deprecated in favour of `Toggle`
-   The states of a `Toggle` has also been simplified to either checked or not checked as opposed to the previous where there was a non selected default state

---

## Other issues

### NextJS

You may encounter the following when developing with NextJS:

-   Hydration error in the console `` Warning: Prop `className` did not match. ``
-   CSS changes applied to `styled(DSComponent)` are not reflected on Fast Refresh. A manual refresh in the browser is required

So far these issues have been observed only in dev mode. You can choose to live with them.

Otherwise, a workaround is to add the following webpack config in `next.config.js`. However note that this may affect other libraries that rely on specific module resolution.

```
module.exports = {
	webpack: (config, { isServer }) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				mainFields: isServer
					? ["main", "module"]
					: ["browser", "main", "module"],
			},
		};
	},
    // rest of your config
};
```

> The root cause is webpack resolving the component's entry point from CJS on the server and from ESM on the browser. This affects the load order of `styled-components` generated styles. For more details, see [this NextJS issue](https://github.com/vercel/next.js/issues/9323).