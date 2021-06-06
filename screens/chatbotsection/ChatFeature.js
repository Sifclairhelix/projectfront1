import React from "react";
import { View, Text, Dimensions } from "react-native";
import ChatBot from "react-native-chatbot-expo";


const ChatFeature = () => {
	const steps = [
		{
			id: "0",
			message: "Welcome to Pricesy Query Bot ",
			trigger: "1",
		},
		{
			id: "1",
			delay: 500,
			message: "What can i help you with? ",
			trigger: "2",
		},
		{
			id: "2",
			message: "1. How to use application ?",
			trigger: "3",
		},
		{
			id: "3",
			message: "2. What features are available? ",
			trigger: "4",
		},
		{
			id: "4",
			message: "3. Faq",
			trigger: "5",
		},
		{
			id: "5",
			options: [
				{
					value: 1,
					label: "1",
					trigger: "6",
				},
				{ value: 2, label: "2", trigger: "7" },
				{ value: 3, label: "3", trigger: "8" },

			],
		},

		{
			id: "6",
			trigger: "9",
			message: "Do you want it in detail?",
			end: false,
		},
		{
			id: "7",
			trigger: "15",
			message: "Will generate and display features about the application",
			end: false,
		},
		{
			id: "8",
			trigger: "20",
			message:
				"The FAQ section is still in production and will not be displayed currently",
			end: false,
		},
		{
			id: "9",
			trigger: "10",
			message: "Please type your response",
			end: false,
		},
		{
			id: "10",
			trigger: "11",
			user: true,
			inputAttributes: {
				keyboardType: "email-address",
			},

			end: false,
		},
		{
			id: "11",
			trigger: "12",
			message:
				"HomeScreen is used for finding products and adding them for comparison in the List Screen",
			end: false,
		},
		{
			id: "12",
			trigger: "13",
			message:
				"The Map screen is for identifying locations of stores close to you ",
			end: false,
		},
		{
			id: "13",
			trigger: "14",
			message: "What else can i help you with? ",
			end: false,
		},
		{
			id: "14",
			trigger: "1",
			user: true,
			inputAttributes: {
				keyboardType: "email-address",
			},

			end: false,
		},
		{
			id: "15",
			trigger: "16",
			message: "The features included in this Application are products: ",
			end: false,
		},
		{
			id: "16",
			trigger: "17",
			message:
				"Getting products from different supermarkets, soritng by categories, using Google maps to find store, routing to stores, comaprison list",
			end: false,
		},
		{
			id: "17",
			trigger: "18",
			message:
				"features are going to be added in future version of the application",
			end: false,
		},
		{
			id: "18",
			trigger: "19",
			message: "Is there anything else you want to find out about? ",
			end: false,
		},
		{
			id: "19",
			trigger: "1",
			user: true,
			inputAttributes: {
				keyboardType: "email-address",
			},

			end: false,
		},
		{
			id: "20",
			trigger: "21",
			message: "Would you like to return back to the start?",
			end: false,
		},
		{
			id: "21",
			trigger: "1",
			user: true,
			inputAttributes: {
				keyboardType: "email-address",
			},

			end: false,
		},
	];

	return <ChatBot steps={steps} />;
};

export default ChatFeature;
