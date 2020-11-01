import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';

// aqui se combina os reducers
const reducer = combineReducers({
    productList: productListReducer,
});

// aqui se cria o initialState, estado inicial da store
const initialState = {};

// aqui ficam listadas as middleware aplicadas a store
const middleware = [thunk];

// aqui é criada a store
const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(
        ...middleware
    ))
);

export default store;