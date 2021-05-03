import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
/**
 * Navigation Container
 */
import { NavigationContainer } from "@react-navigation/native";
import Mainnavigation from "./navigations/Mainnavigation";

/**
|--------------------------------------------------
| screens section required for import 300421(1)
|--------------------------------------------------
*/
import Productmaincontainer from "./screens/productsection/Productmaincontainer";
import Topheader from "./screens/topsectionofphone/Topheader";

/**
|--------------------------------------------------
| Logbox not recommended to be used
|--------------------------------------------------
*/

LogBox.ignoreAllLogs(true);

/**
|--------------------------------------------------
| Redux calls need to import provider  and also import store 
|--------------------------------------------------
*/

import { Provider } from "react-redux";
import store from "./src/store";

/**
|--------------------------------------------------
| have to put into store so that it can be accessed from everywhere
|--------------------------------------------------
*/

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
