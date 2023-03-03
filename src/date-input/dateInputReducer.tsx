export type ActionType =
    | "confirmed"
    | "hover"
    | "reset"
    | "selected"
    | "unhover"
    | any;

interface Action {
    type: ActionType;
    value?: string;
}

/**
 * 'calendar'       return back value in calendar
 * 'confirmed'      to 'reset' back the value if value been 'selected'
 * 'currentType'    return back current user action
 * 'hover'          return back current hover value
 * 'input'          return back current input element value
 * 'selected'       return back current value been selected
 */
interface State {
    calendar: string;
    confirmed: string;
    currentType: ActionType;
    hover: string;
    input: string;
    selected: string;
}

export const dateInputReducer = (state: State, action: Action): State => {
    const { type, value } = action;

    // 'value' use for initial load value if exist
    const confirmedValue = value?.length
        ? value
        : state.selected.length
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
                calendar: value,
                hover: "",
                input: value,
                selected: value,
                currentType: "selected",
            };
        case "confirmed":
            return {
                ...state,
                calendar: confirmedValue,
                confirmed: confirmedValue,
                input: confirmedValue,
                selected: confirmedValue,
                currentType: "confirmed",
            };
        case "reset":
            return {
                ...state,
                calendar: state.confirmed,
                confirmed: state.confirmed,
                input: state.confirmed,
                selected: "",
                currentType: "reset",
            };
        default:
            return {
                ...state,
                calendar: confirmedValue,
                confirmed: confirmedValue,
                input: confirmedValue,
                selected: confirmedValue,
                currentType: "confirmed",
            };
    }
};

// =============================================================================
// CONSTANTS
// =============================================================================
export const INITIAL_INPUT_VALUES = {
    calendar: "",
    confirmed: "",
    hover: "",
    input: "",
    selected: "",
    currentType: "confirmed",
};
