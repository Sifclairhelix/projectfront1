import { ADD_T_CART, REMOVE_T_CART, CLEAR_T_CART } from "../typesConstants";

/**
|--------------------------------------------------
| method for adding 
|--------------------------------------------------
*/

export const addToList = (payload) => {
	return {
		/**
        |--------------------------------------------------
        | method will go to reducer listcartitem and do in the function there 
        |--------------------------------------------------
        */
		type: ADD_T_CART,
		payload,
	};
};

export const removeFromList = (payload) => {
	return {
		type: REMOVE_T_CART,
		payload,
	};
};

export const clearList = () => {
	return {
		type: CLEAR_T_CART,
	};
};
