import { ADD_T_CART, REMOVE_T_CART, CLEAR_T_CART } from "../typesConstants";

/**
|--------------------------------------------------
| this is where we pass the switch cases
| can we change the .type to anything else 
| does it always have to be action
| types   
|--------------------------------------------------
*/

/**
 * cartItems
 */
const listCartItems = (state = [], action) => {
	switch (action.type) {
		case ADD_T_CART:
			/**
            |--------------------------------------------------
            | Have to pay attention to this
            |--------------------------------------------------
            */
			return [...state, action.payload];
		case REMOVE_T_CART:
			/**
            |--------------------------------------------------
            | Not hundred percent sure how this works
            |--------------------------------------------------
            */
			return state.filter((listCartItem) => listCartItem !== action.payload);
		case CLEAR_T_CART:
			/**
            |--------------------------------------------------
            | Have to check wether this is good
            |--------------------------------------------------
            */
			return (state = []);
	}
	return state;
};

export default listCartItems;
