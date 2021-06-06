import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import listcart from "../screens/listcartsection/listcart";
import listcheckout from "../screens/listcartsection/orderonline/listcheckout";

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
		</Stack.Navigator>
	);
}

export default function Mainlistcartnavigation() {
	return <MyStack />;
}
