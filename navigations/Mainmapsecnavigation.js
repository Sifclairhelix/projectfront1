import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
|--------------------------------------------------
| this is the import page for the map function
| im
|--------------------------------------------------
*/

import listcart from "../screens/listcartsection/listcart";
import listcheckout from "../screens/listcartsection/orderonline/listcheckout";
import Mapsection from "../screens/mapsection/Mapsection";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Cart"
				component={Mapsection}
				options={{
					headerShown: false,
				}}
			/>
			{/* <Stack.Screen
				name="Checkout"
				component={listcheckout}
				options={{
					headerShown: false,
				}}
			/> */}
		</Stack.Navigator>
	);
}

export default function Mainmapsecnavigation() {
	return <MyStack />;
}
