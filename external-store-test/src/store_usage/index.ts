import { createExternalStore } from '../external_store';

interface State {
    counter: number;
}

const store = createExternalStore<State>({ counter: 10 });

type StoreType = ReturnType<typeof createExternalStore<State>>;

export type { StoreType };
export { store };
