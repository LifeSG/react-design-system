import { useCallback, useEffect, useRef, useState } from "react";

type SetStateAction<S> = S | ((prevState: S) => S);
type SetStateCallback<S> = (state: S) => void;
type SetStateDispatch<S> = (
    state: SetStateAction<S>,
    callback?: SetStateCallback<S>
) => void;

export const useStateCallback = <S>(
    initialState: S | (() => S)
): [S, SetStateDispatch<S>] => {
    const [state, setState] = useState<S>(initialState);
    const callbackRef = useRef<SetStateCallback<S> | undefined>(undefined);

    const setStateDispatch = useCallback<SetStateDispatch<S>>(
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

    return [state, setStateDispatch];
};
