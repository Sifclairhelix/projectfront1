/**
|--------------------------------------------------
| FEATURES COMMENTED OUT CAUSE IT WAS INCOMPLETE AND COULDN'T BE ADDED INTO PROTOTYPE
|--------------------------------------------------
*/

// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Dimensions, Button } from "react-native";
// import {
// 	Text,
// 	Container,
// 	Content,
// 	Right,
// 	Left,
// 	Picker,
// 	Icon,
// 	Body,
// 	TitleHeader,
// 	ListItem,
// 	Radio,
// 	Title,
// } from "native-base";
// import { Header } from "react-native/Libraries/NewAppScreen";

// var { width, height } = Dimensions.get("window");

/**
|--------------------------------------------------
| Paying modes for the task
|--------------------------------------------------
*/

// const payingModes = [
// 	{ modeName: "Cash", value: 1 },
// 	{ modeName: "Transfer", value: 2 },
// 	{ modeName: "Online Pay", value: 3 },
// 	{ modeName: "Interest Pay", value: 4 },
// ];

/**
|--------------------------------------------------
| Methods for paying through cards
|--------------------------------------------------
*/

// const payingCards = [
// 	{ modeName: "online wallet", value: 1 },
// 	{ modeName: "Debit Card", value: 2 },
// 	{ modeName: "Buy now play later (E.g Kalani)", value: 3 },
// 	{ modeName: "Other loan methods", value: 4 },
// ];

// const Listcartpayment = (props) => {
/**
	|--------------------------------------------------
	| This is to catch the previous method we passed in the pay section
	|--------------------------------------------------
	*/

// const mainOrder = props.route.params;

/**
	|--------------------------------------------------
	| Payment method for state
	|--------------------------------------------------
	*/

// const [methodSelected, setMethodSelected] = useState();
// const [cardMethodSelected, setCardMethodSelected] = useState();

/**
	|--------------------------------------------------
	| Could change the left to right in 'element.modeName'
	|--------------------------------------------------
	*/

// 	return (
// 		<Container>
// 			{/* <Header>
// 				<Body>
// 					<Title>Choose Payment Method</Title>
// 				</Body>
// 			</Header> */}
// 			<Content>
// 				{payingModes.map((element, index) => {
// 					return (
// 						<ListItem
// 							key={element.modeName}
// 							onPress={() => setMethodSelected(element.value)}
// 						>
// 							<Left>
// 								<Text>{element.modeName}</Text>
// 							</Left>
// 							<Right>
// 								<Radio selected={methodSelected == element.value} />
// 							</Right>
// 						</ListItem>
// 					);
// 				})}
// 				{methodSelected == 2 ? (
// 					<Picker
// 						mode="dropdown"
// 						/**
// 						 * Without the style it doesnt appear lots of bugs which i dont know how to fix
// 						 */
// 						style={{ width: width, height: 50 }}
// 						iosIcon={<Icon name={"arrow-down"} />}
// 						headerStyle={{ backgroundColor: "orange" }}
// 						headerBackButtonTextStyle={{ color: "#fff" }}
// 						headerTitleStyle={{ color: "#fff" }}
// 						selectedValue={cardMethodSelected}
// 						/**
// 						 * The x value below can be changed but i dont know if it breaks somewhere else
// 						 */
// 						onValueChange={(x) => setCardMethodSelected(x)}
// 					>
// 						{payingCards.map((cm, index) => {
// 							return (
// 								<Picker.Item
// 									key={cm.modeName}
// 									label={cm.modeName}
// 									value={cm.modeName}
// 								/>
// 							);
// 						})}
// 					</Picker>
// 				) : null}
// 				<View style={{ marginTop: 60, alignSelf: "center" }}>
// 					<Button
// 						title={"Accept"}
// 						/**
// 						|--------------------------------------------------
// 						| { mainOrder: mainOrder }
// 						|--------------------------------------------------
// 						*/
// 						onPress={() => props.navigation.navigate("Accept", { mainOrder })}
// 					/>
// 				</View>
// 			</Content>
// 		</Container>
// 	);
// };

// export default Listcartpayment;
