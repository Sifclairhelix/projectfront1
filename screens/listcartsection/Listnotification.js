import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Badge, Text } from "native-base";

/**
|--------------------------------------------------
| Need to know how many items are in the redux store so need to connect to redux
|--------------------------------------------------
*/
import { connect } from "react-redux";

const Listnotification = (props) => {
	return (
		<>
			{props.listCartItems.length ? (
				<Badge style={styles.badgeStructure}>
					<Text style={styles.badgeText}>{props.listCartItems.length}</Text>
				</Badge>
			) : null}
		</>
	);
};

/**
|--------------------------------------------------
| Method for adding and removing items from list
|   const listCartItems = (state = [], action) => {
|        switch (action.type) {
|            case ADD_T_CART:

    const reducers = combineReducers({
	listCartItems: listCartItems,
|--------------------------------------------------
*/

const mapStateToProps = (state) => {
	const { listCartItems } = state;
	return {
		listCartItems: listCartItems,
	};
};

/**
|--------------------------------------------------
| The Stylesheet will go below need to change it later, we will try to change it if possible
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	badgeStructure: {
		height: 20,
		width: 20,
		position: "absolute",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		top: 0,
		right: -16,
		borderRadius: 50,
	},
	badgeText: {
		fontSize: 14,
		width: 120,
		fontWeight: "bold",
	},
});

export default connect(mapStateToProps)(Listnotification);
