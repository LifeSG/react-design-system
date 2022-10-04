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

## Component name changes

Several components have had their names amended for ease of use.

| component    | old                    | new                            |
| ------------ | ---------------------- | ------------------------------ |
| `Accordion`  | `Accordion.Base`       | `Accordion`                    |
| `Modal`      | `Modal.Base`           | `Modal`                        |
| `Field`      | `Form.Field`           | `Form.Input`                   |
| `FieldGroup` | `Form.FieldGroup`      | `Form.InputGroup`              |
| `AlertBox`   | `AlertBox.Base`        | `Alert`                        |
| `AlertBox`   | `AlertBox.Description` | deprecated (use `<p>` instead) |

<br />

## Typing changes

### Type name changes

All props previously with I or E prefixes have been removed for standardisation.

| component    | old                   | new                   |
| ------------ | --------------------- | --------------------- |
| `Navbar`     | `INavbarProps`        | `NavbarProps`         |
| `Field`      | `FormFieldProps`      | `FormInputProps`      |
| `FieldGroup` | `FormFieldGroupProps` | `FormInputGroupProps` |

### Type structure changes

`InputGroup`

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

`LinkList`

-   `onDefaultClickHandler` has been deprecated and replaced by `onItemClick`. Previously `onItemClick`
    did not return the `event` object in its params.
