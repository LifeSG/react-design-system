import styled, { css } from "styled-components";
import { v2_MediaQuery } from "../v2_media";
import { MasonryGridProps, MasonryTileProps } from "./types";

// =============================================================================
// STYLE INTERFACE
// =============================================================================

type GridStyleProps = Omit<MasonryGridProps, "children">;
type TileStyleProps = Omit<MasonryTileProps, "children">;

// =============================================================================
// STYLING
// =============================================================================
export const GridContainer = styled.div<GridStyleProps>`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${(props) => {
        const { numOfCols } = props;
        const colsToUse = numOfCols.lg || numOfCols.md;
        const numOfSmCols = numOfCols.sm
            ? numOfCols.sm <= 2
                ? numOfCols.sm
                : 2
            : undefined;

        const mdColsDefault = numOfCols.md || numOfCols.sm || 2;

        return css`
            grid-template-columns: repeat(${colsToUse || "auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${v2_MediaQuery.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${numOfCols.md || numOfCols.sm || "auto-fill"},
                    minmax(calc(${100 / mdColsDefault}% - 2rem), 1fr)
                );
            }

            ${v2_MediaQuery.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${numOfSmCols || "auto-fill"},
                    minmax(calc(${100 / (numOfSmCols || 1)}% - 2rem), 1fr)
                );
            }
        `;
    }}
`;

export const TileContainer = styled.div<TileStyleProps>`
    position: relative;
    ${(props) => {
        const { startLg, colsLg, startMd, colsMd, startSm, colsSm } = props;

        return css`
            grid-column: ${startLg || startMd || "auto"} / span
                ${colsLg || colsMd || 1};

            ${v2_MediaQuery.MaxWidth.tablet} {
                grid-column: ${startMd || startSm || "auto"} / span
                    ${colsMd || colsSm || 1};
            }

            ${v2_MediaQuery.MaxWidth.mobileL} {
                grid-column: ${startSm || "auto"} / span ${colsSm || 1};
            }
        `;
    }}
`;
