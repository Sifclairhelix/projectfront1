import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, {
	Callout,
	Marker,
	PROVIDER_GOOGLE,
	Circle,
} from "react-native-maps";

import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const Mapsection = () => {
	return (
		<View>
			<MapView
				provider={PROVIDER_GOOGLE}
				showsUserLocation={true}
				followsUserLocation={true}
				initialRegion={{
					latitude: 51.55616,
					longitude: -0.27955,
					latitudeDelta: 0.07,
					longitudeDelta: 0.07,
				}}
				style={styles.map}
			>
				<Circle
					center={{ latitude: 51.5611245, longitude: -0.27468 }}
					radius={800}
					fillColor={"rgba(200, 300, 200,0.5)"}
				/>
				{/* <Marker
					coordinate={{
						latitude: curLat,
						longitude: curLon,
					}}
					title={"User"}
				/> */}
				<Marker
					coordinate={{
						latitude: 51.56488780545177,
						longitude: -0.2755235131795275,
					}}
					title={"Asda Store"}
				>
					{/* <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "transparent",
                    }}
                > */}
					<Callout>
						<Text>
							{/* <Image
                            // source={require("./src/img/asda1.png")}
                            style={{ height: 100, width: 100 }}
                            source={asdaImg}
                            resizeMode="center"
                            // style={{
                            // 	width: 90,
                            // 	height: 90,
                            // 	// backgroundColor: "red",
                            // }}
                            // resizeMode="cover"
                        /> */}
							Asda Store
						</Text>
					</Callout>
				</Marker>
				<Marker
					coordinate={{
						latitude: 51.56131226755128,
						longitude: -0.28096681502927223,
					}}
					title={"Lidl Store"}
				/>
				<Marker
					coordinate={{
						latitude: 51.5519431759536,
						longitude: -0.29596624386523246,
					}}
					title={"Iceland Store"}
				/>
			</MapView>
		</View>
	);
};

/**
|--------------------------------------------------
| This section hold the styling for the project 
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});

export default Mapsection;
