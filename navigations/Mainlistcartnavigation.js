import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
|--------------------------------------------------
| importing cart : listcart
| importing listcheckout : checkout this is switched by mistake
|--------------------------------------------------
*/

import listcart from "../screens/listcartsection/listcart";
import listcheckout from "../screens/listcartsection/orderonline/listcheckout";

/**
|--------------------------------------------------
| import the listcheckout navigator updated 020421(1)
|--------------------------------------------------
*/

import Orderchecknavigation from "../navigations/Orderchecknavigation";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Cart"
				component={listcart}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Checkout"
				component={Orderchecknavigation}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default function Mainlistcartnavigation() {
	return <MyStack />;
}
