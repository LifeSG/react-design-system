# Sidenav

Import: `import { Sidenav } from "@lifesg/react-design-system/sidenav"`

## When to use

Use for section-level navigation in admin dashboards or portals. The Sidenav sits fixed to the left and fills the full viewport height below the Navbar, which is always present at the top.

Do not use for:

-   Consumer-facing pages (use Navbar nav items or LocalNav instead)
-   Simple single-section apps

## Sub-components

```
Sidenav                          ← fixed sidebar container
├── Sidenav.Group                ← logical section (optional separator)
│   ├── Sidenav.Item             ← top-level nav link (no children)
│   ├── Sidenav.DrawerItem       ← expandable item with sub-links
│   │   ├── Sidenav.DrawerSubitem
│   │   └── Sidenav.DrawerSubitem
│   └── Sidenav.Item
└── Sidenav.Group
    └── Sidenav.Item
```

`Sidenav.Group` is the only valid direct child of `Sidenav`. Use `Sidenav.Item` for leaf links, `Sidenav.DrawerItem` when a nav entry has sub-items. `Sidenav.DrawerSubitem` can only nest inside `Sidenav.DrawerItem`.

## Variants

| Depth    | Components used                              |
| -------- | -------------------------------------------- |
| 1 level  | `Sidenav` → `Sidenav.Group` → `Sidenav.Item` |
| 2 levels | + `Sidenav.DrawerItem`                       |
| 3 levels | + `Sidenav.DrawerSubitem`                    |

## Usage

### 2-group, 3-item nav with full nesting

```tsx
import { CalendarIcon } from "@lifesg/react-icons/calendar";
import { DocIcon } from "@lifesg/react-icons/doc";
import { Square2x2Icon } from "@lifesg/react-icons/square-2x2";
import { useState } from "react";
import { Sidenav } from "@lifesg/react-design-system/sidenav";

const AdminSidenav = () => {
    const [selectedId, setSelectedId] = useState("dashboard");

    return (
        <Sidenav>
            {/* Group 1 — top-level items with no sub-items: onClick fires */}
            <Sidenav.Group separator>
                <Sidenav.Item
                    id="dashboard"
                    title="Dashboard"
                    icon={<Square2x2Icon />}
                    selected={selectedId === "dashboard"}
                    onClick={(id) => setSelectedId(id)}
                />
            </Sidenav.Group>

            {/* Group 2 — Reports has sub-items so onClick is omitted;
                clicking it opens the drawer instead */}
            <Sidenav.Group>
                <Sidenav.Item
                    id="reports"
                    title="Reports"
                    icon={<DocIcon />}
                    selected={
                        selectedId === "monthly-reports" ||
                        selectedId === "annual-reports"
                    }
                >
                    {/* DrawerItem with no children: onClick fires */}
                    <Sidenav.DrawerItem
                        id="monthly-reports"
                        title="Monthly reports"
                        onClick={(id) => setSelectedId(id)}
                    />
                    {/* DrawerItem with children: onClick is omitted */}
                    <Sidenav.DrawerItem
                        id="annual-reports"
                        title="Annual reports"
                        selected={selectedId === "annual-reports"}
                    >
                        <Sidenav.DrawerSubitem
                            id="annual-summary"
                            title="Summary"
                            onClick={(id) => setSelectedId(id)}
                        />
                        <Sidenav.DrawerSubitem
                            id="annual-detail"
                            title="Detailed breakdown"
                            onClick={(id) => setSelectedId(id)}
                        />
                    </Sidenav.DrawerItem>
                </Sidenav.Item>
                <Sidenav.Item
                    id="bookings"
                    title="Bookings"
                    icon={<CalendarIcon />}
                    selected={selectedId === "bookings"}
                    onClick={(id) => setSelectedId(id)}
                />
            </Sidenav.Group>
        </Sidenav>
    );
};
```

Key wiring notes:

-   `onClick` on `Sidenav.Item` is only attached when the item has **no** `children` — if children are present, clicking opens the drawer instead and `onClick` is ignored.
-   The same rule applies to `Sidenav.DrawerItem`: omit `onClick` when it wraps `DrawerSubitem` children.
-   Track `selectedId` in parent state; pass `selected={selectedId === id}` down to whichever level is active.
-   `separator` on `Sidenav.Group` draws a dividing line below that group.

## Props

### Sidenav

| Prop          | Type              | Default     | Description                                         |
| ------------- | ----------------- | ----------- | --------------------------------------------------- |
| `children`    | `React.ReactNode` | —           | One or more `Sidenav.Group` elements — **required** |
| `fixed`       | `boolean`         | `true`      | Fix the sidenav to the left of the viewport         |
| `aria-label`  | `string`          | `"Sidebar"` | Accessible label for the sidenav                    |
| `id`          | `string`          | —           | Unique identifier                                   |
| `className`   | `string`          | —           | Class selector                                      |
| `data-testid` | `string`          | —           | Test identifier                                     |

### Sidenav.Group

| Prop          | Type              | Default | Description                                        |
| ------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`    | `React.ReactNode` | —       | One or more `Sidenav.Item` elements — **required** |
| `separator`   | `boolean`         | —       | Show a bottom divider below the group              |
| `aria-label`  | `string`          | —       | Accessible label describing the category of items  |
| `id`          | `string`          | —       | Unique identifier                                  |
| `className`   | `string`          | —       | Class selector                                     |
| `data-testid` | `string`          | —       | Test identifier                                    |

### Sidenav.Item

| Prop          | Type                   | Default | Description                                                  |
| ------------- | ---------------------- | ------- | ------------------------------------------------------------ |
| `title`       | `string`               | —       | Display label — **required**                                 |
| `icon`        | `React.ReactNode`      | —       | Icon displayed above the label — **required**                |
| `children`    | `React.ReactNode`      | —       | One or more `Sidenav.DrawerItem` elements                    |
| `selected`    | `boolean`              | —       | Mark this item as the active selection                       |
| `onClick`     | `(id: string) => void` | —       | Called when clicked; only fires if the item has no sub-items |
| `id`          | `string`               | —       | Unique identifier                                            |
| `className`   | `string`               | —       | Class selector                                               |
| `data-testid` | `string`               | —       | Test identifier                                              |

### Sidenav.DrawerItem

| Prop          | Type                   | Default | Description                                                  |
| ------------- | ---------------------- | ------- | ------------------------------------------------------------ |
| `title`       | `string`               | —       | Display label — **required**                                 |
| `children`    | `React.ReactNode`      | —       | One or more `Sidenav.DrawerSubitem` elements                 |
| `onClick`     | `(id: string) => void` | —       | Called when clicked; only fires if the item has no sub-items |
| `id`          | `string`               | —       | Unique identifier                                            |
| `className`   | `string`               | —       | Class selector                                               |
| `data-testid` | `string`               | —       | Test identifier                                              |

### Sidenav.DrawerSubitem

| Prop          | Type                   | Default | Description                  |
| ------------- | ---------------------- | ------- | ---------------------------- |
| `title`       | `string`               | —       | Display label — **required** |
| `onClick`     | `(id: string) => void` | —       | Called when item is clicked  |
| `id`          | `string`               | —       | Unique identifier            |
| `className`   | `string`               | —       | Class selector               |
| `data-testid` | `string`               | —       | Test identifier              |

## Rules

-   Always provide `icon` on `Sidenav.Item` — it is required for the collapsed state.
-   Maximum depth is 3 levels: `Item` → `DrawerItem` → `DrawerSubitem`.
-   Use `Sidenav.Group` with `separator` to visually separate unrelated sections.
-   `onClick` on `Sidenav.Item` and `Sidenav.DrawerItem` only fires when the item has no children — do not attach click handlers to items that have sub-items.

## Anti-patterns

-   Do not omit `icon` on `Sidenav.Item` — the component is designed around icon + label.
-   Do not nest deeper than 3 levels.
-   Do not use `Sidenav` on consumer-facing pages — it is suited to admin portals.
