export type ActionType =
    | "confirmed"
    | "default"
    | "error"
    | "hover"
    | "invalid"
    | "reset"
    | "selected"
    | "transition"
    | "restore"
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
 * 'transition'     temporary store the value
 * 'restore'        use the temporary value
 */
export interface ReducerState {
    calendar: string | undefined;
    confirmed: string;
    currentType: ActionType;
    hover: string;
    input: string;
    selected: string;
    transition: string;
}
const calendarValue = (value: string) => (value?.length ? value : undefined);

export const dateInputReducer = (
    state: ReducerState,
    action: Action
): ReducerState => {
    const { type, value } = action;

    // initial load value if exist
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
                calendar: calendarValue(value),
                hover: "",
                input: value,
                selected: value,
                transition: value,
                currentType: "selected",
            };
        case "confirmed":
            return {
                ...state,
                calendar: calendarValue(confirmedValue),
                confirmed: confirmedValue,
                input: confirmedValue,
                selected: confirmedValue,
                transition: confirmedValue,
                currentType: "confirmed",
            };
        case "transition":
            return {
                ...state,
                calendar: calendarValue(value),
                input: value,
                selected: value,
                transition: state.selected,
                currentType: "transition",
            };
        case "restore":
            return {
                ...state,
                calendar: calendarValue(state.transition),
                input: state.transition,
                selected: state.transition,
                currentType: "restore",
            };
        case "reset":
            return {
                ...state,
                calendar: calendarValue(state.confirmed),
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
    transition: "",
    currentType: "confirmed",
};
