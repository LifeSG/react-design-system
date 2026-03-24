"use client";
import {
    Breakpoint,
    Colour,
    parsePxOrRemValue,
    ThemeProvider,
    useDesignToken,
} from "@lifesg/react-design-system/theme";

const Component = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const colourValue = useDesignToken(Colour["bg-primary"]);
    const breakpointValue = parsePxOrRemValue(
        useDesignToken(Breakpoint["lg-max"]) || ""
    );

    return (
        <div {...props}>
            <div data-testid="colour">{colourValue}</div>
            <div data-testid="breakpoint">{breakpointValue}</div>
        </div>
    );
};

export default function Story() {
    return (
        <div>
            <Component data-testid="main" />
            <ThemeProvider theme="bookingsg">
                <Component data-testid="nested" />
            </ThemeProvider>
        </div>
    );
}
