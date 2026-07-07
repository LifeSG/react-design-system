import { css } from "@linaria/core";
import { Colour } from "src/theme";

const customCounterLabel = css`
    text-align: right;
    color: ${Colour["text"]};
    font-size: 14px;
    font-weight: 600;
`;

export const renderCustomCounter = (
    maxLength: number,
    currentValueLength: number
): JSX.Element => {
    return (
        <p className={customCounterLabel} data-testid={"counter-label"}>
            {currentValueLength}/{maxLength}
        </p>
    );
};
