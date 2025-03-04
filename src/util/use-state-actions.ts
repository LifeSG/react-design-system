import { useReducer } from "react";
import { RequiredKeys } from "./utility-types";

type ReducerObj<State> = {
    [action: string]: (state: State, payload: any) => State;
};

type Actions<State, Reducers extends ReducerObj<State>> = {
    [T in keyof Reducers]: Reducers[T] extends (state: State) => State
        ? () => void
        : Reducers[T] extends (
              state: State,
              payload: Parameters<Reducers[T]>[1]
          ) => State
        ? (
              ...args: RequiredKeys<Parameters<Reducers[T]>[1]> extends never
                  ? [payload?: Parameters<Reducers[T]>[1]]
                  : [payload: Parameters<Reducers[T]>[1]]
          ) => void
        : never;
};

interface StateActions<State, Reducers> {
    /** reducer initial state */
    initialState: State;
    /** specify functions that return the new state. must be immutable */
    reducers: Reducers;
    /** identify the reducer for debugging */
    name?: string;
    /** enable debugging */
    debug?: boolean;
}

/**
 * An interface around `React.useReducer` to limit boilerplate. Each action
 * is a function that takes in state and payload, then returns the updated state
 * immutably. Inspired by redux toolkit's createSlice api.
 *
 * Example:
 * ```
 * const initialState = { count: 0 };
 * const reducers = {
 *     increment: (state) => ({ ...state, count: state.count + 1 }),
 *     multiplyBy: (state, multiplier: number) => ({
 *         ...state,
 *         count: state.count * multiplier,
 *     }),
 * };
 * const [state, actions] = useStateActions({ initialState, reducers });
 * actions.increment();
 * actions.multiplyBy(2);
 * ```
 *
 */
export const useStateActions = <State, Reducers extends ReducerObj<State>>({
    initialState,
    reducers,
    name,
    debug,
}: StateActions<State, Reducers>): [State, Actions<State, Reducers>] => {
    const reducer = (state: State, action: { type: string; payload: any }) => {
        if (reducers[action.type]) {
            return reducers[action.type](state, action.payload);
        }
        return state;
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = Object.fromEntries(
        Object.keys(reducers).map((actionType) => {
            return [
                actionType,
                (payload: unknown) => {
                    if (debug) {
                        logAction(name, actionType, payload);
                    }
                    dispatch({
                        type: actionType,
                        payload,
                    });
                },
            ];
        })
    );
    return [state, actions] as [State, Actions<State, Reducers>];
};

const logAction = (
    name: string | undefined,
    type: string,
    payload: unknown
) => {
    const args = [];
    if (name) args.push(`[${name}]`);
    args.push(type, payload);

    console.log(...args);
};
