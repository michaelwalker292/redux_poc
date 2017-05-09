import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

function configureStore(initialState) {
    const createLogger = require(`redux-logger`);
    const logger = createLogger();
    const middlewares = [
        reduxImmutableStateInvariant(),
        thunk(),
        logger
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)));

    return store;
}

export default configureStore;