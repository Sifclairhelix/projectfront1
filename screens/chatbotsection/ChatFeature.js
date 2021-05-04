import React from "react";
import { View, Text, Dimensions } from "react-native";
import ChatBot from "react-native-chatbot-expo";

/**
|--------------------------------------------------
| Basically the chatbot section which needs to start working, this is going to be a lot of stress
|--------------------------------------------------
*/

const ChatFeature = () => {
	const steps = [
		{
			id: "0",
			message: "Welcome to Pricesy Query Bot ",
			trigger: "1",
		},
		{
			id: "1",
			trigger: "2",
			user: true,
			inputAttributes: {
				keyboardType: "email-address",
			},
			end: false,
		},
		{
			id: "2",
			message: "Bye!",
			end: true,
		},
	];
	return <ChatBot steps={steps} />;
};

export default ChatFeature;
