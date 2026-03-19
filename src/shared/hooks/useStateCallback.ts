import { useCallback, useEffect, useRef, useState } from "react";

type SetStateAction<S> = S | ((prevState: S) => S);
type StateCallback<S> = (state: S) => void;
type SetStateWithCallback<S> = (
    state: SetStateAction<S>,
    callback?: StateCallback<S>
) => void;

export const useStateCallback = <S>(
    initialState: S | (() => S)
): [S, SetStateWithCallback<S>] => {
    const [state, setState] = useState<S>(initialState);
    const callbackRef = useRef<StateCallback<S> | undefined>(undefined);

    const setStateWithCallback = useCallback<SetStateWithCallback<S>>(
        (value, callback) => {
            callbackRef.current = callback;
            setState(value);
        },
        []
    );

    useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current(state);
            callbackRef.current = undefined;
        }
    }, [state]);

    return [state, setStateWithCallback];
};
