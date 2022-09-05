import { compose, createStore } from 'redux';
import { reducer } from './reducers/reducer';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducer, composeEnhancers())
export type AppRootStateType = ReturnType<typeof reducer>

//@ts-ignore
window.store = store

