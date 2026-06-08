import { css } from "@linaria/core";
import clsx from "clsx";
import { useState } from "react";
import { Toggle } from "src/toggle";
import { Typography } from "src/typography";

const container = css`
    #table-wrapper {
        min-height: 0;
    }
`;

const fixedHeight = css`
    #table-wrapper {
        height: 50vh;
    }
`;

const maxHeight = css`
    #table-wrapper {
        max-height: 50vh;
    }
`;

const toggleContainer = css`
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    flex-wrap: wrap;
`;

type Height = "default" | "fixed" | "max-height";

interface Props {
    rowCount: number;
    onRowCountChange?: (count: number) => void;
    children: JSX.Element | JSX.Element[];
}

export const DataTableWithCustomHeight = ({
    rowCount,
    onRowCountChange,
    children,
}: Props) => {
    const [height, setHeight] = useState<Height>("default");
    const rowCountInputId = "data-table-row-count";

    return (
        <div
            className={clsx(
                container,
                height === "fixed" && fixedHeight,
                height === "max-height" && maxHeight
            )}
            key={height}
        >
            <div>
                <Typography.BodyBL>
                    Modify the options to view the scroll behaviour
                </Typography.BodyBL>
                <Typography.BodySM
                    as="label"
                    htmlFor={rowCountInputId}
                    weight="semibold"
                >
                    Number of rows
                </Typography.BodySM>
                <div>
                    <input
                        id={rowCountInputId}
                        type="range"
                        value={rowCount}
                        min={1}
                        max={15}
                        onChange={(e) => {
                            const count = Number.parseInt(e.target.value, 10);
                            onRowCountChange?.(count);
                        }}
                    />
                </div>
                <Typography.BodySM weight="semibold">
                    Table height
                </Typography.BodySM>
                <div className={toggleContainer}>
                    <Toggle
                        type="radio"
                        indicator
                        checked={height === "default"}
                        onChange={() => {
                            setHeight("default");
                        }}
                    >
                        Default (grows)
                    </Toggle>
                    <Toggle
                        type="radio"
                        indicator
                        checked={height === "max-height"}
                        onChange={() => {
                            setHeight("max-height");
                        }}
                    >
                        Max height
                    </Toggle>
                    <Toggle
                        type="radio"
                        indicator
                        checked={height === "fixed"}
                        onChange={() => {
                            setHeight("fixed");
                        }}
                    >
                        Fixed height
                    </Toggle>
                </div>
            </div>
            {children}
        </div>
    );
};
