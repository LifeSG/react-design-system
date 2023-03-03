export type ActionType =
    | "hover"
    | "unhover"
    | "selected"
    | "confirmed"
    | "reset"
    | any;

interface Action {
    type: ActionType;
    value?: string;
}

interface State {
    hover: string;
    selected: string;
    confirmed: string;
    calendar: string;
    input: string;
    currentType: ActionType;
}

export const dateInputReducer = (
    state: State = INITIAL_INPUT_VALUES,
    action: Action
): State => {
    const { type, value } = action;

    const confirmedValue = state.selected.length
        ? state.selected
        : state.confirmed;

    switch (type) {
        case "hover":
            return {
                ...state,
                hover: value,
                input: value,
                currentType: "hover",
            };
        case "unhover":
            return {
                ...state,
                hover: "",
                input: state.selected,
                currentType: "unhover",
            };
        case "selected":
            return {
                ...state,
                hover: "",
                selected: value,
                calendar: value,
                input: value,
                currentType: "selected",
            };
        case "confirmed":
            // value use for initial load value if exist
            return {
                ...state,
                selected: value.length ? value : confirmedValue,
                confirmed: value.length ? value : confirmedValue,
                calendar: value.length ? value : confirmedValue,
                input: value.length ? value : confirmedValue,
                currentType: "confirmed",
            };
        case "reset":
            return {
                ...state,
                selected: "",
                confirmed: state.confirmed,
                calendar: state.confirmed,
                input: state.confirmed,
                currentType: "reset",
            };
        default:
            return {
                ...state,
                selected: value.length ? value : confirmedValue,
                confirmed: value.length ? value : confirmedValue,
                calendar: value.length ? value : confirmedValue,
                input: value.length ? value : confirmedValue,
                currentType: "confirmed",
            };
    }
};

// =============================================================================
// CONSTANTS
// =============================================================================
export const INITIAL_INPUT_VALUES = {
    hover: "",
    selected: "",
    confirmed: "",
    calendar: "",
    input: "",
    currentType: "confirmed",
};
