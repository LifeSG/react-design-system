import { css } from "@linaria/core";

import { Colour } from "../../tokens";

export const root = css`
    display: flex;
    flex-direction: column;
`;

export const header = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px 8px;
`;

export const navBtn = css`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${Colour.border};
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: ${Colour["text"]};
    font-size: 16px;

    &:hover:not(:disabled) {
        background: ${Colour["bg-hover"]};
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;

export const headerLabels = css`
    display: flex;
    gap: 4px;
`;

export const headerLabel = css`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: ${Colour["text"]};
    padding: 4px 8px;
    border-radius: 4px;

    &:hover {
        background: ${Colour["bg-hover"]};
    }
`;

export const headerLabelActive = css`
    color: ${Colour["text-primary"]};
`;

export const monthGrid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 16px 8px;
`;

export const yearGrid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 16px 8px;
`;

export const gridBtn = css`
    padding: 10px 4px;
    border: 1px solid ${Colour.border};
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    font-size: 13px;
    color: ${Colour["text"]};

    &:hover:not(:disabled) {
        background: ${Colour["bg-hover"]};
    }

    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;

export const gridBtnSelected = css`
    background: ${Colour["bg-selected-strongest"]};
    color: ${Colour["text-inverse"]};
    border-color: ${Colour["bg-selected-strongest"]};
`;

export const footer = css`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 8px;
    border-top: 1px solid ${Colour.border};
`;

export const footerBtn = css`
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid ${Colour.border};
    background: transparent;
    color: ${Colour["text"]};

    &:hover {
        background: ${Colour["bg-hover"]};
    }
`;

export const footerBtnPrimary = css`
    background: ${Colour["bg-selected-strongest"]};
    color: ${Colour["text-inverse"]};
    border-color: ${Colour["bg-selected-strongest"]};

    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
