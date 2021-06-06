/**
|--------------------------------------------------
| FEATURES COMMENTED OUT CAUSE IT WAS INCOMPLETE AND COULDN'T BE ADDED INTO PROTOTYPE
|--------------------------------------------------
*/

// import React from "react";
// import { View, Dimensions, StyleSheet, ScrollView, Button } from "react-native";
// import { Left, ListItem, Right, Thumbnail, Body, Text } from "native-base";

/**
|--------------------------------------------------
| Need to import dimensions for height
|--------------------------------------------------
*/

// var { width, height } = Dimensions.get("window");

/**
|--------------------------------------------------
| Have to connect to redux store for right elements, hopefully doesnt break somewhere
|--------------------------------------------------
*/

// import { connect } from "react-redux";

/**
|--------------------------------------------------
| Have to import all the actions you know thats what is terrifying right now
|--------------------------------------------------
*/

// import * as actions from "../../../src/actions/listcartactions";

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

// const Listcartaccept = (props) => {
/**
	|--------------------------------------------------
	| Assign to variable to have it shorter
	|--------------------------------------------------
	*/

// const mainAccept = props.route.params;

/**
	|--------------------------------------------------
	| Making method to make final clear the final order/ timeout
	|--------------------------------------------------
	*/

// const mainAcceptOrder = () => {
// 	setTimeout(() => {
// 		props.clearList();
// 		/**
// 		|--------------------------------------------------
// 		| Pay attention to the navigate details cause if you lose track it can cause a mess up
// 		|--------------------------------------------------
// 		*/
// 		props.navigation.navigate("Cart");
// 	}, 600);
// };

// 	return (
// 		<ScrollView contentContainerStyle={styles.container}>
// 			<View style={styles.titleContainer}>
// 				<Text style={{ fontSize: 20, fontWeight: "bold" }}>Accept Order</Text>
// 				{/**
// 				|--------------------------------------------------
// 				| We need to get order objects
// 				|--------------------------------------------------
// 				*/}
// 				{props.route.params ? (
// 					<View style={{ borderWidth: 1, borderColor: "orange" }}>
// 						<Text style={styles.title}>Shipping to:</Text>
// 						<View style={{ padding: 8 }}>
// 							<Text>
// 								Address: {mainAccept.mainOrder.mainOrder.ShipAddress1}
// 							</Text>
// 							<Text>
// 								Second Address: {mainAccept.mainOrder.mainOrder.ShipAddress2}
// 							</Text>
// 							<Text>City: {mainAccept.mainOrder.mainOrder.mainCity}</Text>
// 							<Text>
// 								Order ZipCode: {mainAccept.mainOrder.mainOrder.mainZip}
// 							</Text>
// 							<Text>
// 								Order Country: {mainAccept.mainOrder.mainOrder.mainCountry}
// 							</Text>
// 						</View>
// 						<Text style={styles.title}>Items:</Text>
// 						{/**
// 						|--------------------------------------------------
// 						| This bit is confusing cause i dont know if '(x)' can be changed
// 						| Furthermore, i dont know wether my route mainAccept.mainOrder.mainOrder.listCartItems is right it could been
// 						| have been different furthermore not sure about key={x.item.name} cause it could be 'x.product.name'
// 						|--------------------------------------------------
// 						*/}
// 						{mainAccept.mainOrder.mainOrder.orderListItems.map((x) => {
// 							return (
// 								<ListItem style={styles.listItem} key={x.item.name} avatar>
// 									<Left>
// 										<Thumbnail source={{ uri: x.item.image }} />
// 									</Left>
// 									<Body style={styles.body}>
// 										<Left>
// 											<Text>{x.item.name}</Text>
// 										</Left>
// 										<Right>
// 											<Text>£{x.item.price}</Text>
// 										</Right>
// 									</Body>
// 								</ListItem>
// 							);
// 						})}
// 					</View>
// 				) : null}
// 				<View style={{ alignItems: "center", margin: 20 }}>
// 					<Button title={"Send order for delivery"} onPress={mainAcceptOrder} />
// 				</View>
// 			</View>
// 		</ScrollView>
// 	);
// };

/**
|--------------------------------------------------
| Import clear cart method, which is basically map dispatch to props
|--------------------------------------------------
*/

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		clearList: () => dispatch(actions.clearList()),
// 	};
// };

/**
|--------------------------------------------------
| 	const mapStateToProps = (state) => {
|	const { listCartItems } = state;
|	return {
|		listCartItems: listCartItems,
|	};
};
|--------------------------------------------------
*/
/**
|--------------------------------------------------
| mainCity,
|			mainCountry,
|			dateOrdered: Date.now(),
|			orderListItems,
|			mainPhone,
|			
|			  ShippingAddress1 : mainAddress
|			  ShippingAddress2 : mainAddress2
|			 
|			 ShipAddress1: mainAddress,
|			 ShipAddress2: mainAddress2,
|			 mainZip,
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| This is where the stylesheet goes which is required, but it has to be changed, 035021
|--------------------------------------------------
*/

// const styles = StyleSheet.create({
// 	container: {
// 		height: height,
// 		padding: 8,
// 		alignContent: "center",
// 		backgroundColor: "white",
// 	},
// 	titleContainer: {
// 		justifyContent: "center",
// 		alignItems: "center",
// 		margin: 8,
// 	},
// 	title: {
// 		alignSelf: "center",
// 		margin: 8,
// 		fontSize: 16,
// 		fontWeight: "bold",
// 	},
// 	listItem: {
// 		alignItems: "center",
// 		backgroundColor: "white",
// 		justifyContent: "center",
// 		width: width / 1,
// 	},
// 	body: {
// 		margin: 10,
// 		alignItems: "center",
// 		flexDirection: "row",
// 	},
// });

// export default connect(null, mapDispatchToProps)(Listcartaccept);

//Listcartaccept;
