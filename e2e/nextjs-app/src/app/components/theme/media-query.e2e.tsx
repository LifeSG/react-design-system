"use client";

import {
    useMaxWidthMediaQuery,
    useMediaQuery,
    useMinWidthMediaQuery,
    Breakpoint,
} from "@lifesg/react-design-system/theme";
import { useEffect, useState } from "react";

const boolToText = (value: boolean) => String(value);

export default function Story() {
    const [dimensions, setDimensions] = useState("0 x 0");

    const minXs = useMinWidthMediaQuery("xs");
    const minSm = useMinWidthMediaQuery("sm");
    const minMd = useMinWidthMediaQuery("md");
    const minLg = useMinWidthMediaQuery("lg");
    const minXxl = useMinWidthMediaQuery("xxl");

    const maxXxs = useMaxWidthMediaQuery("xxs");
    const maxSm = useMaxWidthMediaQuery("sm");
    const maxMd = useMaxWidthMediaQuery("md");
    const maxLg = useMaxWidthMediaQuery("lg");
    const maxXl = useMaxWidthMediaQuery("xl");

    const tokenDirectMinMd = useMediaQuery({ minWidth: Breakpoint["md-min"] });
    const tokenDirectMaxSm = useMediaQuery({ maxWidth: Breakpoint["sm-max"] });

    useEffect(() => {
        const onResize = () => {
            setDimensions(`${window.innerWidth} x ${window.innerHeight}`);
        };

        onResize();
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div className="story-column-container" data-testid="media-query-root">
            <h2>Media query hook checks</h2>

            <p data-testid="viewport-dimensions">{dimensions}</p>

            <div>
                <h3>Min width</h3>
                <p data-testid="min-width-xs-status">{boolToText(minXs)}</p>
                <p data-testid="min-width-sm-status">{boolToText(minSm)}</p>
                <p data-testid="min-width-md-status">{boolToText(minMd)}</p>
                <p data-testid="min-width-lg-status">{boolToText(minLg)}</p>
                <p data-testid="min-width-xxl-status">{boolToText(minXxl)}</p>
            </div>

            <div>
                <h3>Max width</h3>
                <p data-testid="max-width-xxs-status">{boolToText(maxXxs)}</p>
                <p data-testid="max-width-sm-status">{boolToText(maxSm)}</p>
                <p data-testid="max-width-md-status">{boolToText(maxMd)}</p>
                <p data-testid="max-width-lg-status">{boolToText(maxLg)}</p>
                <p data-testid="max-width-xl-status">{boolToText(maxXl)}</p>
            </div>

            <div>
                <h3>Token resolution</h3>
                <p data-testid="token-direct-min-md-status">
                    {boolToText(tokenDirectMinMd)}
                </p>
                <p data-testid="token-direct-max-sm-status">
                    {boolToText(tokenDirectMaxSm)}
                </p>
            </div>
        </div>
    );
}
