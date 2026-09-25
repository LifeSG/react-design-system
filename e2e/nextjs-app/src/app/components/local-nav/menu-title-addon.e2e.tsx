"use client";

import { LocalNavMenu } from "@lifesg/react-design-system/local-nav";
import { DocIcon } from "@lifesg/react-icons/doc";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import clsx from "clsx";
import { useState } from "react";

import styles from "./title-addon.module.css";

const LeftIcon = () => <DocIcon aria-hidden className={styles["icon"]} />;
const RightIcon = () => (
    <ExclamationCircleFillIcon
        aria-label="Has errors"
        className={styles["right-icon"]}
    />
);

// One item per combination, with a wrapping title to exercise first-line
// alignment of the left addon and the selected tick. A final short-title item
// captures right-addon alignment on a single line.
const ITEMS = [
    {
        id: "section-1",
        title: "A long section title that wraps onto multiple lines",
        titleAddon: { left: <LeftIcon />, right: <RightIcon /> },
    },
    {
        id: "section-2",
        title: "A long section title that wraps onto multiple lines",
        titleAddon: { left: <LeftIcon /> },
    },
    {
        id: "section-3",
        title: "A long section title that wraps onto multiple lines",
        titleAddon: { right: <RightIcon /> },
    },
    {
        id: "section-4",
        title: "Short title",
        titleAddon: { right: <RightIcon /> },
    },
];

export default function Story() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    return (
        <div className={clsx("story-background", styles["container"])}>
            <LocalNavMenu
                data-testid="local-nav-menu"
                items={ITEMS}
                selectedItemIndex={selectedItemIndex}
                onNavItemSelect={(_e, _item, index) =>
                    setSelectedItemIndex(index)
                }
            />
        </div>
    );
}
