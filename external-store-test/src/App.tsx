import { useExternalStore } from './external_store';

import './App.css';
import { store } from './store_usage';

function App() {
    const { state, updateState } = useExternalStore(store);

    return (
        <>
            <h1>{state.counter}</h1>

            <button onClick={() => updateState({ counter: state.counter + 1 })}>Inc counter</button>
        </>
    );
}

export default App;
