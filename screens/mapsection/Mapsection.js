import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, {
	Callout,
	// Image,
	Marker,
	PROVIDER_GOOGLE,
	Circle,
} from "react-native-maps";

import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

//Google Maps Api key removed cause of costs

const GOOGLE_MAPS_APIKEY = "";
const origin = { latitude: 51.5611385, longitude: -0.2747318 };
const origin1 = { latitude: 51.5611384, longitude: -0.2747317 };
const destination = {
	latitude: 51.56488780545177,
	longitude: -0.2755235131795275,
};
const destination1 = {
	latitude: 51.56131226755128,
	longitude: -0.28096681502927223,
};

CustomMap = require("../../assets/placeholder.png");

import MapViewDirections from "react-native-maps-directions";

const Mapsection = () => {
	let curLat = 0;
	let curLon = 0;

	useEffect(() => {
		(async () => {
			if (Platform.OS === "android" && !Constants.isDevice) {
				setErrorMsg("Doesnt work on device");
				return;
			}
			let { status } = await Location.requestPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});

			console.log(JSON.stringify(location));
			curLat = location.coords.latitude;
			curLon = location.coords.longitude;

			// setLocation(location);
		})();
	}, []);

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
				<MapViewDirections
					origin={origin}
					destination={destination}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor="#f54242"
				/>
				<MapViewDirections
					origin={origin1}
					destination={destination1}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={3}
					strokeColor="#f54242"
				/>
				<Circle
					center={{
						// latitude: curLat,
						// longitude: curLon
						latitude: 51.5611245,
						longitude: -0.27468,
					}}
					radius={500}
					fillColor={"rgba(200, 300, 200,0.5)"}
				/>
				<Marker
					coordinate={{
						latitude: curLat,
						longitude: curLon,
					}}
					// title={"User"}
				/>
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
						latitude: 51.53097502220626,
						longitude: -0.2706999379893241,
					}}
					title={"Asda Store"}
				/>
				<Marker
					coordinate={{
						latitude: 51.597214411273605,
						longitude: -0.06854418837082775,
					}}
					title={"Asda Store"}
				/>

				<Marker
					coordinate={{
						latitude: 51.56131226755128,
						longitude: -0.28096681502927223,
					}}
					title={"Lidl Store"}
				/>
				<Marker
					coordinate={{
						latitude: 51.568341562182354,
						longitude: -0.26505492725480506,
					}}
					title={"Lidl Store"}
				/>
				<Marker
					coordinate={{
						latitude: 51.56535382485497,
						longitude: -0.21904967697017147,
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
				<Marker
					coordinate={{
						latitude: 51.53943988865234,
						longitude: -0.24424596525523823,
					}}
					title={"Iceland Store"}
				/>
				<Marker
					coordinate={{
						latitude: 51.508679965526376,
						longitude: -0.2703384952674184,
					}}
					title={"Iceland Store"}
				/>
				<Marker
					coordinate={{
						latitude: 51.487092898048495,
						longitude: -0.20030065155051371,
					}}
					title={"Iceland Store"}
				/>
				<Marker
					coordinate={{
						latitude: 51.54492177845251,
						longitude: -0.11675235425919826,
					}}
					title={"Iceland Store"}
				/>
				<Marker
					// style={styles.markerColor}
					coordinate={{
						latitude: 51.5611245,
						longitude: -0.27468,
					}}
					// title={"User"}
					image={require("../../assets/map-marker.png")}
				>
					{/* <Callout>
						<Text >
							<Image source={require("../../assets/placeholder.png")} />
						</Text>
					</Callout> */}
				</Marker>
			</MapView>
		</View>
	);
};


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
