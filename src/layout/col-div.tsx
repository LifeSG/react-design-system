import React from "react";
import { ColDivProps, DivRef } from "./types";
import { StyledDiv, StyledDivStyleProps } from "./col-div.style";

const Component = (props: ColDivProps, ref: DivRef): JSX.Element => {
    const { mobileCols, tabletCols, desktopCols, ...otherProps } = props;

    const getStyleProps = (): StyledDivStyleProps => {
        const desktopValues = desktopCols || tabletCols || mobileCols;
        const tabletValues = tabletCols || mobileCols;
        const mobileValues = mobileCols;

        const desktopStartSpan = extractStartAndSpan(desktopValues);
        const tabletStartSpan = extractStartAndSpan(tabletValues);
        const mobileStartSpan = extractStartAndSpan(mobileValues);

        const styles = {
            $desktopSpan: desktopStartSpan.span,
            $desktopStart: desktopStartSpan.start,
            $mobileSpan: mobileStartSpan.span,
            $mobileStart: mobileStartSpan.start,
            $tabletSpan: tabletStartSpan.span,
            $tabletStart: tabletStartSpan.start,
        };

        return styles;
    };

    return <StyledDiv ref={ref} {...getStyleProps()} {...otherProps} />;
};

export const ColDiv = React.forwardRef(Component);

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
const extractStartAndSpan = (value: number | number[] | undefined) => {
    if (Array.isArray(value) && value.length > 1) {
        const [firstVal, secondVal] = value; // Will just take the first 2

        const startVal = firstVal <= secondVal ? firstVal : secondVal;
        const endVal = firstVal <= secondVal ? secondVal : firstVal;

        let span;

        if (endVal === startVal) {
            span = 1;
        } else {
            span = endVal - startVal;
        }

        return { start: startVal, span };
    } else if (typeof value === "number") {
        return { start: undefined, span: value };
    } else {
        return { start: undefined, span: undefined };
    }
};
