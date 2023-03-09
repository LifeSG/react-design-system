export type ActionType =
    | "confirmed"
    | "default"
    | "error"
    | "hover"
    | "invalid"
    | "reset"
    | "selected"
    | "transition"
    | "unhover"
    | any;

interface Action {
    type: ActionType;
    value?: string;
}

/**
 * State
 * 'calendar'       return back value in calendar
 * 'confirmed'      to 'reset' back the value if value been 'selected'
 * 'currentType'    return back current user action
 * 'hover'          return back current hover value
 * 'input'          return back current input element value
 * 'selected'       return back current value been selected
 * 'transition'     use to temporary store value
 */
interface State {
    calendar: string;
    confirmed: string;
    currentType: ActionType;
    hover: string;
    input: string;
    selected: string;
    transition: string;
}

export const dateInputReducer = (state: State, action: Action): State => {
    const { type, value } = action;

    // 'value' use for initial load value if exist
    // use in 'selected' value update to 'confirmed'
    const confirmedValue = value?.length
        ? value
        : state.selected.length
        ? state.selected
        : state.confirmed;

    switch (type) {
        case "default":
            return {
                ...state,
                currentType: "default",
            };
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
                transition: confirmedValue,
                currentType: "confirmed",
            };
        case "transition":
            // use in month/year calendar view
            // restore back 'confirmed' value
            return {
                ...state,
                calendar: state.confirmed,
                confirmed: state.confirmed,
                input: state.confirmed,
                selected: state.confirmed,
                transition: state.confirmed,
                currentType: "transition",
            };
            break;
        case "reset":
            return {
                ...state,
                calendar: state.confirmed,
                confirmed: state.confirmed,
                input: state.confirmed,
                selected: state.confirmed,
                currentType: "reset",
            };
        case "invalid":
            return {
                ...state,
                calendar: "",
                confirmed: state.confirmed,
                input: "",
                selected: "",
                currentType: "invalid",
            };
        default:
            return state;
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
    transition: "",
    currentType: "confirmed",
};
