import React from "react";
import type { MaskedInputProps } from "./types";
/**
 * A text input that masks sensitive values and allows toggling visibility.
 *
 * Use `MaskedInput` when collecting or displaying sensitive data such as
 * identity numbers or passwords.
 * @keywords field, form, input, mask, password, secure, sensitive
 */
export declare const MaskedInput: (props: MaskedInputProps & React.RefAttributes<HTMLInputElement>) => React.ReactElement | null;
