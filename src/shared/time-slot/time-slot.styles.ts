import { css } from "@linaria/core";

import { Colour } from "../../theme";

export const tokens = {
    slot: {
        bgColor: "--fds-internal-timeSlot-slot-bgColor",
        bgColor2: "--fds-internal-timeSlot-slot-bgColor2",
        hoverBgColor: "--fds-internal-timeSlot-slot-hoverBgColor",
        hoverBgColor2: "--fds-internal-timeSlot-slot-hoverBgColor2",
        cursor: "--fds-internal-timeSlot-slot-cursor",
    },
};

export const timeSlot = css`
    ${tokens.slot.bgColor}: ${Colour["bg-stronger"]};
    ${tokens.slot.bgColor2}: ${Colour["bg-strongest"]};
    ${tokens.slot.hoverBgColor}: ${Colour["bg-stronger"]};
    ${tokens.slot.hoverBgColor2}: ${Colour["bg-strongest"]};

    cursor: var(${tokens.slot.cursor}, default);

    &[data-clickable="true"] {
        cursor: pointer;
    }

    &[data-style-type="default"] {
        background-color: var(${tokens.slot.bgColor});
    }

    &[data-style-type="default"][data-hoverable="true"] {
        &:hover {
            background-color: var(${tokens.slot.hoverBgColor});
        }
    }

    &[data-style-type="stripes"] {
        background: repeating-linear-gradient(
            135deg,
            var(${tokens.slot.bgColor2}) 0px,
            var(${tokens.slot.bgColor2}) 6px,
            var(${tokens.slot.bgColor}) 6px,
            var(${tokens.slot.bgColor}) 12px
        );
    }

    &[data-style-type="stripes"][data-hoverable="true"] {
        &:hover {
            background: repeating-linear-gradient(
                135deg,
                var(${tokens.slot.hoverBgColor2}, var(${tokens.slot.bgColor2}))
                    0px,
                var(${tokens.slot.hoverBgColor2}, var(${tokens.slot.bgColor2}))
                    6px,
                var(${tokens.slot.hoverBgColor}, var(${tokens.slot.bgColor}))
                    6px,
                var(${tokens.slot.hoverBgColor}, var(${tokens.slot.bgColor}))
                    12px
            );
        }
    }
`;
