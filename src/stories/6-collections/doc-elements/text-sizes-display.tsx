import React from "react";
import { Text } from "src/components";
import {
    ITextAttributes,
    TTextSizeType,
} from "src/components/styles/spec/types";
import styled from "styled-components";
import { FontSizeDisplay } from "./font-size-display";

interface Props {
    sizeAttributes: Record<TTextSizeType, ITextAttributes>;
}

export const TextSizes = (props: Props) => {
    const renderTextComponent = (key: TTextSizeType, children: string) => {
        switch (key) {
            case "D1":
                return <Text.D1>{children}</Text.D1>;
            case "D2":
                return <Text.D2>{children}</Text.D2>;
            case "DBody":
                return <Text.DBody>{children}</Text.DBody>;
            case "H1":
                return <Text.H1>{children}</Text.H1>;
            case "H2":
                return <Text.H2>{children}</Text.H2>;
            case "H3":
                return <Text.H3>{children}</Text.H3>;
            case "H4":
                return <Text.H4>{children}</Text.H4>;
            case "H5":
                return <Text.H5>{children}</Text.H5>;
            case "H6":
                return <Text.H6>{children}</Text.H6>;
            case "Body":
                return <Text.Body>{children}</Text.Body>;
            case "BodySmall":
                return <Text.BodySmall>{children}</Text.BodySmall>;
            case "XSmall":
                return <Text.XSmall>{children}</Text.XSmall>;
            default:
                return <Text.Body>{children}</Text.Body>;
        }
    };

    const renderSizes = () =>
        Object.keys(props.sizeAttributes).map((key) => {
            return (
                <FontSizeDisplay
                    attributes={props.sizeAttributes[key]}
                    key={key}
                >
                    {renderTextComponent(key as TTextSizeType, key)}
                </FontSizeDisplay>
            );
        });

    return <SizesContainer>{renderSizes()}</SizesContainer>;
};

// =============================================================================
// STYLING
// =============================================================================
const SizesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 2rem;
`;
