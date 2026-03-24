import React from "react";

import { Button } from "../button/button";
import type { ButtonWithIconProps, ButtonWithIconRef } from "./types";

const DefaultComponent = (
    props: ButtonWithIconProps,
    ref: ButtonWithIconRef
) => {
    return <Button {...props} size="default" ref={ref} />;
};
DefaultComponent.displayName = "ButtonWithIcon.Default";

const SmallComponent = (props: ButtonWithIconProps, ref: ButtonWithIconRef) => {
    return <Button {...props} size="small" ref={ref} />;
};
SmallComponent.displayName = "ButtonWithIcon.Small";

export const ButtonWithIcon = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
};
