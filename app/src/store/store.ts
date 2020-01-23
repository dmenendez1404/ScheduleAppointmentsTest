import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/index';
import saga from './sagas/index';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

function configureStore(history: any){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const routingMiddleware = routerMiddleware(history);
    const middlewares = [ sagaMiddleware, routingMiddleware ];
    if(process.env.NODE_ENV === "development") {
        middlewares.push(createLogger());
    } 
    const store = createStore(
        createRootReducer(history),
        composeEnhancers( applyMiddleware(...middlewares) )
    );
    sagaMiddleware.run(saga);
    return store;
}
const history = createBrowserHistory();
const Store = configureStore(history);
export default Store;