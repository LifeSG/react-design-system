import { useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { Layout } from "src/layout";
import styled from "styled-components";

const Column = styled.div`
    background: #f9b5b2;
    border: 2px dotted #f26664;
    height: 100vh;
    font-size: 12px;
    padding: 4px;
`;

const Background = styled.div`
    background: #fdddd7;
`;

export const GridDisplay = () => {
    const [gridColumnCount, setGridColumnCount] = useState(0);
    const ref = useRef();

    useResizeDetector({
        targetRef: ref,
        handleWidth: true,
        handleHeight: false,
        onResize() {
            const gridComputedStyle = window.getComputedStyle(ref.current);

            const count = gridComputedStyle
                .getPropertyValue("grid-template-columns")
                .split(" ").length;

            setGridColumnCount(count);
        },
    });

    return (
        <Background>
            <Layout.Container
                type="grid"
                ref={ref}
                style={{ alignItems: "center" }}
            >
                {Array(gridColumnCount)
                    .fill(null)
                    .map((_, i) => (
                        <Column key={i}>{i + 1}</Column>
                    ))}
            </Layout.Container>
        </Background>
    );
};
