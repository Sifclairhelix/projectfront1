import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

/**
|--------------------------------------------------
| This section is for the chat bot which will be used 
| required to show store location
|--------------------------------------------------
*/
/**
|--------------------------------------------------
| Chatbot import
|--------------------------------------------------
*/
import { ChatFeature } from "../screens/chatbotsection/ChatFeature";

const Stack = createStackNavigator();

const MainChatBotnavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Chatbot"
				component={ChatFeature}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default MainChatBotnavigation;
