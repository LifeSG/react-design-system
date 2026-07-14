export type Listener = () => void;

export abstract class Store<State> {
    private listeners = new Set<Listener>();
    private state: State;

    constructor(initialState: State) {
        this.state = initialState;
    }

    getState(): State {
        return this.state;
    }

    subscribe(listener: Listener): () => void {
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    }

    protected setState(updater: State | ((prev: State) => State)): void {
        const nextState =
            typeof updater === "function"
                ? (updater as (prev: State) => State)(this.state)
                : updater;
        this.state = nextState;
        this.listeners.forEach((l) => l());
    }
}
