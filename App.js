import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Mainnavigation from "./navigations/Mainnavigation";


import Productmaincontainer from "./screens/productsection/Productmaincontainer";
import Topheader from "./screens/topsectionofphone/Topheader";



LogBox.ignoreAllLogs(true);



import { Provider } from "react-redux";
import store from "./src/store";



export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				{/* <View style={styles.container}> */}
				<Topheader />
				{/* <Productmaincontainer /> */}
				<Mainnavigation />
				{/* </View> */}
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
