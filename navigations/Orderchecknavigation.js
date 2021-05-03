import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

/**
|--------------------------------------------------
| This is the checkout navigator for screens this is all for ordering online
|--------------------------------------------------
*/

import listcheckout from "../screens/listcartsection/orderonline/listcheckout";
import Listcartpayment from "../screens/listcartsection/orderonline/Listcartpayment";
import Listcartaccept from "../screens/listcartsection/orderonline/Listcartaccept";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Ship" component={listcheckout} />
			<Tab.Screen name="Pay" component={Listcartpayment} />
			<Tab.Screen name="Accept" component={Listcartaccept} />
		</Tab.Navigator>
	);
}

export default function Orderchecknavigation() {
	return <MyTabs />;
}
