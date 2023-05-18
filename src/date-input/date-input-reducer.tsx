import { INVALID_VALUE } from "./stand-alone-input";

export type ActionType =
    | "confirmed"
    | "default"
    | "error"
    | "hover"
    | "invalid"
    | "reset"
    | "selected"
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
 */
export interface ReducerState {
    calendar: string | undefined;
    confirmed: string;
    currentType: ActionType;
    hover: string;
    input: string;
    selected: string;
}
const calendarValue = (value: string, state: ReducerState) => {
    if (value === INVALID_VALUE) {
        return state.calendar;
    }

    if (value && value.length) {
        return value;
    }

    return undefined;
};

export const dateInputReducer = (
    state: ReducerState,
    action: Action
): ReducerState => {
    const { type, value } = action;
    let confirmedValue = "";

    // Priority of confirmed value
    // - value which is initial mounted value
    if (value && value.length) {
        confirmedValue = value;
    } else if (state.selected && state.selected.length) {
        confirmedValue = state.selected;
    } else if (state.confirmed) {
        confirmedValue = state.confirmed;
    }

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
                calendar: calendarValue(value, state),
                hover: "",
                input: value,
                selected: value,
                currentType: "selected",
            };
        case "confirmed":
            return {
                ...state,
                calendar: calendarValue(confirmedValue, state),
                confirmed: confirmedValue,
                input: confirmedValue,
                selected: confirmedValue,
                currentType: "confirmed",
            };
        case "reset":
            return {
                ...state,
                calendar: calendarValue(state.confirmed, state),
                confirmed: state.confirmed,
                input: state.confirmed,
                selected: state.confirmed,
                currentType: "reset",
            };
        case "invalid":
            return {
                ...state,
                calendar: undefined,
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
    calendar: undefined,
    confirmed: "",
    hover: "",
    input: "",
    selected: "",
    currentType: "confirmed",
};
