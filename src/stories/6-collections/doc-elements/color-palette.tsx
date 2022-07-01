import React from "react";
import { BaseColorSet } from "src/components/styles/spec";
import styled from "styled-components";

interface PaletteProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: Record<string, string> | any;
}

export const ColorPalette = (args: PaletteProps) => {
    return (
        <Palette>
            {Object.values(args.set).map((color: string, index) => {
                return (
                    <PaletteItem key={index}>
                        <Swatch bg={color}>
                            <SwatchLabel>
                                {Object.keys(args.set)[index]}
                            </SwatchLabel>
                        </Swatch>
                        <PaletteItemLabel>Hex value: {color}</PaletteItemLabel>
                    </PaletteItem>
                );
            })}
        </Palette>
    );
};

interface SingleProps {
    color: string;
}

export const SingleColor = (args: SingleProps) => {
    return (
        <PaletteItem>
            <Swatch bg={args.color} />
            <PaletteItemLabel>Hex value: {args.color}</PaletteItemLabel>
        </PaletteItem>
    );
};

// =============================================================================
// STYLE TYPINGS
// =============================================================================
interface SwatchProps {
    bg: string;
}

// =============================================================================
// STYLING
// =============================================================================
const Palette = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
`;

const PaletteItem = styled.li`
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

const PaletteItemLabel = styled.span`
    font-size: 0.75rem;
    line-height: 0.75rem;
    margin: 0.75rem 0;
`;

const Swatch = styled.div<SwatchProps>`
    position: relative;
    height: 4rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${BaseColorSet.Neutral[5]};
    background: ${(props) => props.bg};
`;

const SwatchLabel = styled.span`
    padding: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    font-size: 0.85rem;
    font-weight: bold;
    line-height: 0.75rem;
    border-right: 1px solid ${BaseColorSet.Neutral[5]};
    border-bottom: 1px solid ${BaseColorSet.Neutral[5]};
`;
