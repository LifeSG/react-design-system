type SetStateAction<S> = S | ((prevState: S) => S);
type SetStateCallback<S> = (state: S) => void;
type SetStateDispatch<S> = (state: SetStateAction<S>, callback?: SetStateCallback<S>) => void;
export declare const useStateCallback: <S>(initialState: S | (() => S)) => [S, SetStateDispatch<S>];
export {};
