"use client";

import { LocalNavDropdown } from "@lifesg/react-design-system/local-nav";
import { DocIcon } from "@lifesg/react-icons/doc";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
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
// alignment of the left addon and the selected tick.
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
];

export default function Story() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    return (
        <div className={`story-background ${styles["container"]}`}>
            <LocalNavDropdown
                data-testid="local-nav-dropdown"
                defaultLabel="Jump to section"
                items={ITEMS}
                selectedItemIndex={selectedItemIndex}
                stickyOffset={0}
                onNavItemSelect={(_e, _item, index) =>
                    setSelectedItemIndex(index)
                }
            />
        </div>
    );
}
