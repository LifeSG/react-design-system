import React, { useState } from "react";
import styled from "styled-components";
import { Toggle } from "../../src/toggle";
import { V2_Text } from "../../src/v2_text";

const Container = styled.div<{ $height: Height }>`
    #table-wrapper {
        ${(props) => {
            switch (props.$height) {
                case "fixed":
                    return "height: 50vh";
                case "max-height":
                    return "max-height: 50vh";
            }
        }}
    }
`;

const ToggleContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    flex-wrap: wrap;
`;

type Height = "default" | "fixed" | "max-height";

interface Props {
    rowCount: number;
    onRowCountChange?: (count: number) => void;
    children: React.ReactNode;
}

export const DataTableWithCustomHeight = ({
    rowCount,
    onRowCountChange,
    children,
}: Props) => {
    const [height, setHeight] = useState<Height>("default");
    return (
        <Container $height={height} key={height}>
            <div>
                <div>Modify the options to view the scroll behaviour</div>
                <V2_Text.H6>Number of rows</V2_Text.H6>
                <div>
                    <input
                        type="range"
                        value={rowCount}
                        min={1}
                        max={15}
                        onChange={(e) => {
                            const count = parseInt(e.target.value);
                            onRowCountChange?.(count);
                        }}
                    />
                </div>
                <V2_Text.H6>Table height</V2_Text.H6>
                <ToggleContainer>
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
                </ToggleContainer>
            </div>
            {children}
        </Container>
    );
};
