import { MagnifierIcon } from "@lifesg/react-icons";
import { css } from "@linaria/core";
import { Colour } from "src/theme";

const container = css`
    color: ${Colour["text"]};
`;

export const Icon = () => {
    return (
        <div className={container}>
            <MagnifierIcon />
        </div>
    );
};
