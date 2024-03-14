import { useSyncExternalStore } from 'react';

type ExternalStore<State> = {
    updateState: (newState: State) => void;
    getSnapshot: () => State;
    subscribe: (cb: () => void) => () => void;
};

const createExternalStore = <State>(initialState: State) => {
    let state: State = initialState;

    let onUpdateState: () => void = () => {};

    function updateState(newState: State) {
        state = newState;
        onUpdateState();
    }

    function getSnapshot() {
        return state;
    }

    function subscribe(cb: () => void) {
        onUpdateState = cb;
        return unsubscribe;
    }

    function unsubscribe() {
        onUpdateState = () => {};
    }

    return {
        updateState,
        getSnapshot,
        subscribe,
    };
};

function useExternalStore<State>(instance: ExternalStore<State>) {
    const state = useSyncExternalStore<State>(instance.subscribe, instance.getSnapshot);
    const updateState = instance.updateState;

    return { state, updateState };
}

export type { ExternalStore };
export { createExternalStore, useExternalStore };
