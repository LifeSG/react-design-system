import React from "react";
import { TextProps } from "../text/types";
import { DescriptionText } from "./alert-box-base.style";

export const AlertBoxDescription = (props: TextProps) => (
    <DescriptionText {...props} />
);
