export type ActionType = "confirmed" | "default" | "error" | "hover" | "invalid" | "reset" | "selected" | "unhover" | any;
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
export declare const dateInputReducer: (state: ReducerState, action: Action) => ReducerState;
export declare const INITIAL_INPUT_VALUES: {
    calendar: any;
    confirmed: string;
    hover: string;
    input: string;
    selected: string;
    currentType: string;
};
export {};
