import React from "react";
import styled from "styled-components";
import { BaseColorSet } from "../../src/spec/color-spec/base-color-set";

// =============================================================================
// COLOR PALETTE
// =============================================================================
interface ColorPaletteProps {
    set: Record<string, string> | string | any;
    category?: string;
}

export const ColorPalette = ({ set, category }: ColorPaletteProps) => {
    if (typeof set === "string") {
        return (
            <Palette>
                <PaletteItem>
                    <Swatch $bg={set as string} />
                    <SwatchLabel>{category}</SwatchLabel>
                    <PaletteItemLabel>{set}</PaletteItemLabel>
                </PaletteItem>
            </Palette>
        );
    }

    return (
        <Palette>
            {Object.values(set).map((color, index) => {
                return (
                    <PaletteItem key={index}>
                        <Swatch $bg={color as string} />
                        <SwatchLabel>
                            {category
                                ? `${category}.${Object.keys(set)[index]}`
                                : Object.keys(set)[index]}
                        </SwatchLabel>
                        <PaletteItemLabel>{color}</PaletteItemLabel>
                    </PaletteItem>
                );
            })}
        </Palette>
    );
};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface SwatchProps {
    $bg: string;
}

// =============================================================================
// STYLING
// =============================================================================
const Palette = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0 0.5rem;
`;

const PaletteItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;

    &:not(:last-child) {
        margin-right: 0.5rem;
    }
`;

const PaletteItemLabel = styled.span`
    font-size: 0.8rem;
    line-height: 0.75rem;
`;

const Swatch = styled.div<SwatchProps>`
    position: relative;
    height: 2.5rem;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: ${(props) => props.$bg};
`;

const SwatchLabel = styled.span`
    margin: 0.5rem 0 0.25rem;
    font-size: 0.9rem;
    line-height: 1.25rem;
    font-weight: bolder;
`;
