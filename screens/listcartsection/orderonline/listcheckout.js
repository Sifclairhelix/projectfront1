/**
|--------------------------------------------------
| FEATURES COMMENTED OUT CAUSE IT WAS INCOMPLETE AND COULDN'T BE ADDED INTO PROTOTYPE
|--------------------------------------------------
*/

// import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import { Item, Picker, Container, Input } from "native-base";
/**
|--------------------------------------------------
| keyboard awarness required so that it doesnt overlap 
|--------------------------------------------------
*/
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

/**
|--------------------------------------------------
| ICONS import for the design
|--------------------------------------------------
*/

// import Icon from "react-native-vector-icons/FontAwesome";

/**
|--------------------------------------------------
| Redux is necessary as we are getting items from list
|--------------------------------------------------
*/

// import { connect } from "react-redux";

/**
|--------------------------------------------------
| Import for the templates design
|--------------------------------------------------
*/

// import ListContainer from "../../basetemplate/ListContainer";
// import Listmaindetails from "../../basetemplate/Listmaindetails";

/**
|--------------------------------------------------
| the countries data json input
|--------------------------------------------------
*/

// const impCountries = require("../../../assets/additionaldata/countries.json");

// const listcheckout = (props) => {
/**
	|--------------------------------------------------
	| States we need for input into the the forms
	|--------------------------------------------------
	*/

// const [orderListItems, setOrderListItems] = useState();
// const [mainAddress, setMainAddress] = useState();
// const [mainAddress2, setMainAddress2] = useState();
// const [mainCity, setMainCity] = useState();
// const [mainZip, setMainZip] = useState();
// const [mainCountry, setMainCountry] = useState();
// const [mainPhone, setMainPhone] = useState();

/**
	|--------------------------------------------------
	| Useeffect required cause we need to handle sideffects
	|--------------------------------------------------
	*/

/**
	|--------------------------------------------------
	| 	const listCartItems = (state = [], action) => {
	|	switch (action.type) {
	|		case ADD_T_CART:
	|--------------------------------------------------
	*/

// useEffect(() => {
// 	setOrderListItems(props.listCartItems);

// 	return () => {
// 		setOrderListItems();
// 	};
// }, []);

/**
	|--------------------------------------------------
	| Function to pass data onto next page
	|--------------------------------------------------
	*/

/**
	|--------------------------------------------------
	| Need to check content in the 
	|	<Listmaindetails
	|					placeholder={"City"}
	|					name={"city"}
	|					value={mainCity}
	|					keyboardType={"numeric"}
	|					onChangeText={(text) => setMainCity(text)}
	|				/>
	|--------------------------------------------------
	*/

// const mainListCheckOut = () => {
// 	let mainOrder = {
// 		mainCity,
// 		mainCountry,
// 		dateOrdered: Date.now(),
// 		orderListItems,
// 		mainPhone,
// 		/**
// 		 * ShippingAddress1 : mainAddress
// 		 * ShippingAddress2 : mainAddress2
// 		 */
// 		ShipAddress1: mainAddress,
// 		ShipAddress2: mainAddress2,
// 		mainZip,
// 	};
// 	props.navigation.navigate("Pay", { mainOrder: mainOrder });
// };

// 	return (
// 		<KeyboardAwareScrollView
// 			viewIsInsideTabBar={true}
// 			extraHeight={200}
// 			enableOnAndroid={true}
// 		>
// 			<ListContainer title={"Ship the product"}>
// 				<Listmaindetails
// 					placeholder={"Phone"}
// 					name={"phone"}
// 					value={mainPhone}
// 					keyboardType={"numeric"}
// 					onChangeText={(text) => setMainPhone(text)}
// 				/>
// 				<Listmaindetails
// 					placeholder={"Shipping Address 1"}
// 					name={"ShippingAddress1"}
// 					value={mainAddress}
// 					// keyboardType={"numeric"}
// 					onChangeText={(text) => setMainAddress(text)}
// 				/>
// 				<Listmaindetails
// 					placeholder={"Shipping Address 2"}
// 					name={"ShippingAddress2"}
// 					value={mainAddress2}
// 					// keyboardType={"numeric"}
// 					onChangeText={(text) => setMainAddress2(text)}
// 				/>
// 				<Listmaindetails
// 					placeholder={"City"}
// 					name={"city"}
// 					value={mainCity}
// 					// keyboardType={"numeric"}
// 					onChangeText={(text) => setMainCity(text)}
// 				/>
// 				<Listmaindetails
// 					placeholder={"Zipcode"}
// 					name={"Zip code"}
// 					value={mainZip}
// 					// keyboardType={"numeric"}
// 					onChangeText={(text) => setMainZip(text)}
// 				/>
// 				<Item picker>
// 					<Picker
// 						/**
// 						|--------------------------------------------------
// 						| The style and dimensions were causing a big issue care with that
// 						|--------------------------------------------------
// 						*/
// 						mode="dialog"
// 						iosIcon={<Icon name="arrow-down" color={"#007aff"} />}
// 						style={{ height: 40, width: 100 }}
// 						selectedValue={mainCountry}
// 						placeholder="Select  country"
// 						placeholderStyle={{ color: "#007aff" }}
// 						placeholderIconColor="#007aff"
// 						/**
// 						 * can we change the value 'e' and also the value 'c' from impCountries.map((c) => {
// 						 */
// 						onValueChange={(e) => setMainCountry(e)}
// 					>
// 						{impCountries.map((c) => {
// 							return <Picker.Item key={c.code} label={c.name} value={c.name} />;
// 						})}
// 					</Picker>
// 				</Item>
// 				<View style={{ width: "100%", alignItems: "center" }}>
// 					<Button title="Accept" onPress={() => mainListCheckOut()} />
// 				</View>
// 			</ListContainer>
// 		</KeyboardAwareScrollView>
// 	);
// };

/**
|--------------------------------------------------
| State to map it to th redux store
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| const mapToDispatchToProps = (dispatch) => {
|		return {
|			addItemToCart: (product) => 
|				dispatch(actions.addToCart({quantity: 1, product}))
|		}
|	}
|--------------------------------------------------
*/

/**
|--------------------------------------------------
|		 const mapStateToProps = (state) => {
|			const { listCartItems } = state;
|			return {
|				listCartItems: listCartItems,
|			};
|		};
|--------------------------------------------------
*/

// const mapStateToProps = (state) => {
// 	const { listCartItems } = state;
// 	return {
// 		listCartItems: listCartItems,
// 	};
// };

// export default connect(mapStateToProps)(listcheckout);

//listcheckout;
