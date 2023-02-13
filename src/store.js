import {combineReducers} from 'redux';
import {  legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { getAllMealsReducer } from './reducers/mealReducers';

const finalReducer = combineReducers({
    getAllMealsReducer : getAllMealsReducer,
    cartReducer : cartReducer 
})

const cartItems = localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')): []
const initialState = { 
   cartReducer:{
    cartItems: cartItems
   }
}  
const composeEnhancers = composeWithDevTools({})




const store = createStore ( finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store