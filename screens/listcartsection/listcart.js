import React from "react";
import {
	View,
	Dimensions,
	Button,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import {
	Left,
	Right,
	Text,
	Container,
	Thumbnail,
	Body,
	ListItem,
	H1,
	H2,
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";

/**
|--------------------------------------------------
| List view import 020521
|--------------------------------------------------
*/
import { SwipeListView } from "react-native-swipe-list-view";
import { connect } from "react-redux";
import * as actions from "../../src/actions/listcartactions";
import Listcartitem from "../listcartsection/Listcartitem";

var { width, height } = Dimensions.get("window");

const listcart = (props) => {
	var priceCalcTotal = 0;
	props.listCartItems.forEach((element) => {
		return (priceCalcTotal += element.item.price);
	});

	return (
		<>
			{props.listCartItems.length ? (
				<Container>
					<H2 style={styles.h2Style /*{ alignSelf: "center" }*/}>
						Comparison List
					</H2>
					<SwipeListView
						data={props.listCartItems}
						renderItem={(data) => <Listcartitem item={data} />}
						renderHiddenItem={(data) => (
							<View style={styles.hiddenContainer}>
								<TouchableOpacity
									style={styles.hiddenButton}
									onPress={() => props.removeList(data.item)}
								>
									<Icon name="trash-alt" color={"#f5006e"} size={32} />
								</TouchableOpacity>
							</View>
						)}

						disableRightSwipe={true}
						// previewOpenDelay={2000}
						friction={2000}
						tension={900}
						leftOpenValue={50}
						stopLeftSwipe={50}
						rightOpenValue={-75}
					/>

					<View style={styles.bottomContainer}>
						<Left>

							<Text style={styles.layoutofPrice}>£{priceCalcTotal}</Text>
						</Left>
						<Right style={styles.clrListBtn}>
							<Button
								color={"#9999cc"}
								title="Clear List"
								onPress={() => props.clearList()}
							/>
						</Right>
					</View>
				</Container>
			) : (
				<Container style={styles.emptyContainer}>
					<Text>List/Cart is Empty</Text>
					<Text>You can add items for comparison</Text>
				</Container>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	const { listCartItems } = state;
	return {
		listCartItems: listCartItems,
	};
};



const mapDispatchToProps = (dispatch) => {
	return {
		clearList: () => dispatch(actions.clearList()),
		removeList: (item) => dispatch(actions.removeFromList(item)),
	};
};


const styles = StyleSheet.create({
	emptyContainer: {
		height: height,
		alignItems: "center",
		justifyContent: "center",
	},

	h2Style: {
		alignSelf: "center",
	},
	clrListBtn: {
		right: 20,
	},

	bottomContainer: {
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		left: 0,
		backgroundColor: "white",
		elevation: 20,
	},
	layoutofPrice: {
		left: 20,
		fontSize: 18,
		margin: 20,
		color: "#00ad8b",
	},
	hiddenContainer: {
		flex: 1,
		justifyContent: "flex-end",
		flexDirection: "row",
	},
	hiddenButton: {
		backgroundColor: "#ccffff",
		justifyContent: "center",
		alignItems: "flex-end",
		paddingRight: 25,
		height: 70,
		width: width / 1.2,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(listcart);

//listcart;
