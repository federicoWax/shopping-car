import { combineReducers, createStore } from 'redux';
import productsData from '../data/products'
import productsReducer from '../ducks/products'
import cartReducer from '../ducks/cart';
import userAuthReducer from '../ducks/userAuth';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    userAuth: userAuthReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

export default store