"use client";

import { Badge } from "@lifesg/react-design-system/badge";
import clsx from "clsx";
import styles from "./badge.module.css";

export default function Story() {
    return (
        <div className={clsx("story-column-container", styles.wrapper)}>
            <div className={"story-row-container"}>
                <Badge
                    data-testid="badge-dot-default"
                    count={8}
                    variant="dot"
                />
                <Badge
                    data-testid="badge-dot-border-default"
                    count={8}
                    variant="dot-with-border"
                />
                <Badge
                    data-testid="badge-number-default"
                    count={8}
                    variant="number"
                />
                <Badge
                    data-testid="badge-number-border-default"
                    count={8}
                    variant="number-with-border"
                />
                <Badge
                    data-testid="badge-square-number-default"
                    count={8}
                    variant="square-number"
                />
            </div>

            <div className="story-row-container">
                <Badge
                    data-testid="badge-dot-important"
                    count={8}
                    color="important"
                    variant="dot"
                />
                <Badge
                    data-testid="badge-dot-border-important"
                    count={8}
                    color="important"
                    variant="dot-with-border"
                />
                <Badge
                    data-testid="badge-number-important"
                    count={8}
                    color="important"
                    variant="number"
                />
                <Badge
                    data-testid="badge-number-border-important"
                    count={8}
                    color="important"
                    variant="number-with-border"
                />
                <Badge
                    data-testid="badge-square-number-important"
                    count={8}
                    color="important"
                    variant="square-number"
                />
            </div>
        </div>
    );
}
