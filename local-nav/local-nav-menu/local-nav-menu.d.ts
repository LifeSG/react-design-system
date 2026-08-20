import React from "react";
import type { LocalNavMenuProps } from "../types";
/**
 * A sidebar navigation list that highlights the currently selected section.
 *
 * Use `LocalNavMenu` for desktop in-page navigation where the list is always
 * visible.
 */
export declare const LocalNavMenu: (props: LocalNavMenuProps & React.RefAttributes<HTMLUListElement>) => React.ReactElement | null;
