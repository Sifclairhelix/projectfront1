/**
|--------------------------------------------------
| 010421(2)
|--------------------------------------------------
*/
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

/**
|--------------------------------------------------
| Import Stack into the this Page so they get rendered, change up some of the stuff later
|--------------------------------------------------
*/

import Mainhomenavigation from "./Mainhomenavigation";
import Mainlistcartnavigation from "./Mainlistcartnavigation";
import Mainmapsecnavigation from "../navigations/Mainmapsecnavigation";

/**
|--------------------------------------------------
| Chatbot import for the application
|--------------------------------------------------
*/

import ChatFeature from "../screens/chatbotsection/ChatFeature";

/**
|--------------------------------------------------
| Import for notifications for the list
|--------------------------------------------------
*/

import Listnotification from "../screens/listcartsection/Listnotification";

/**
|--------------------------------------------------
| This is required for how the bottom section of the screens look basically navigation
|--------------------------------------------------
*/

const Tab = createBottomTabNavigator();

const Mainnavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				keyboardHidesTabBar: true,
				showLabel: true,
				activeTintColor: "#f2569a",
			}}
		>
			<Tab.Screen
				name="Home"
				component={Mainhomenavigation}
				options={{
					tabBarIcon: ({ colour }) => (
						<Icon
							name="home"
							style={{ position: "relative" }}
							color={"#363746"}
							size={30}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Map"
				component={Mainmapsecnavigation}
				options={{
					tabBarIcon: ({ colour }) => (
						<Icon
							name="map"
							style={{ position: "relative" }}
							color={"#363746"}
							size={30}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="List"
				component={Mainlistcartnavigation}
				options={{
					tabBarIcon: ({ colour }) => (
						/**
						|--------------------------------------------------
						| This section is for inserting the notification for the list/cart products added
						|--------------------------------------------------
						*/
						<View>
							<Icon
								name="clipboard-list"
								// style={{ position: "relative" }}
								color={"#363746"}
								size={30}
							/>
							<Listnotification />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="FAQ bot"
				component={ChatFeature}
				options={{
					tabBarIcon: ({ colour }) => (
						<Icon
							name="robot"
							style={{ position: "relative" }}
							color={"#363746"}
							size={30}
						/>
					),
				}}
			/>
			{/* <Tab.Screen
				name="User"
				component={}
				options={{
					tabBarIcon: ({ colour }) => (
						<Icon
							name="user"
							// style={{ position: "relative" }}
							color={colour}
							size={30}
						/>
					),
				}}
			/> */}
		</Tab.Navigator>
	);
};

/**
|--------------------------------------------------
| we could put a stylesheet here but not sure
|--------------------------------------------------
*/

export default Mainnavigation;
