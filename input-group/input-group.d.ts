import React from "react";
import type { InputGroupProps } from "./types";
/**
 * A single-line text input optionally paired with a static label, a custom element, or a
 * dropdown list selector.
 *
 * Use `InputGroup` when the input needs contextual decoration such as a unit label,
 * a country-code dropdown, or a fully custom slot.
 * @keywords field, form, input, prefix, suffix
 */
export declare const InputGroup: <T, V>(props: InputGroupProps<T, V> & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
