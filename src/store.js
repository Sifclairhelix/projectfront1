import { combineReducers, applyMiddleware, createStore } from "redux";
/**
 * can change to thunkMiddleware if it doesnt work
 */
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

/**
|--------------------------------------------------
| import reducers below
|--------------------------------------------------
*/

import listCartItems from "./reducers/listCartItem";

const reducers = combineReducers({
	/**
    |--------------------------------------------------
    | methodmade assigned to methdod imported
    | cartItems : cartItems
    |--------------------------------------------------
    */
	listCartItems: listCartItems,
});

/**
|--------------------------------------------------
| the thunk can also be thunk middleware
|--------------------------------------------------
*/
const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
