import { css } from "@linaria/core";
import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { Layout } from "src/layout";

const column = css`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 100vh;
    font-size: 12px;
    padding: 4px;
`;

const background = css`
    background: #fdddd7;
`;

export const GridDisplay = () => {
    const [gridColumnCount, setGridColumnCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useResizeDetector({
        targetRef: ref,
        handleWidth: true,
        handleHeight: false,
        onResize() {
            if (ref.current) {
                const gridComputedStyle = globalThis.getComputedStyle(
                    ref.current
                );

                const count = gridComputedStyle
                    .getPropertyValue("grid-template-columns")
                    .split(" ").length;

                setGridColumnCount(count);
            }
        },
    });

    return (
        <div className={background}>
            <Layout.Container
                type="grid"
                ref={ref}
                style={{ alignItems: "center" }}
            >
                {new Array(gridColumnCount).fill(null).map((_, i) => (
                    <div className={column} key={i + 1}>
                        {i + 1}
                    </div>
                ))}
            </Layout.Container>
        </div>
    );
};
