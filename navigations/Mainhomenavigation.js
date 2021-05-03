import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
|--------------------------------------------------
| Import pages into the stack 010521(1)
|--------------------------------------------------
*/

import Productmaincontainer from "../screens/productsection/Productmaincontainer";
import Selectsinglepage from "../screens/productsection/Selectsinglepage";

/**
|--------------------------------------------------
| Stack navigator for the homepage which are connected
|--------------------------------------------------
*/

const Stack = createStackNavigator();

const MyStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Productmaincontainer}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				/**
                |--------------------------------------------------
                | change product detail name later but you will have to change other places use ctrl F
                |--------------------------------------------------
                */
				name="Product Detail"
				component={Selectsinglepage}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default function Mainhomenavigation() {
	return <MyStack />;
}
