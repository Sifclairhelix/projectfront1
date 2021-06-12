import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	ScrollView,
} from "react-native";
import { Container, H1, Right, Left, Body } from "native-base";


import { connect } from "react-redux";
import * as actions from "../../src/actions/listcartactions";



const Selectsinglepage = (props) => {
	

	const [itemId, setItemId] = useState(props.route.params.item);
	

	return (
		<Container style={styles.mainContainer}>
			<ScrollView
				style={styles.scrlViewStyling }
			>
				<View>
					<Image
						
						source={{
							uri: itemId.image
								? itemId.image
								: "https://base.imgix.net/files/base/ebm/mhlnews/image/2019/03/mhlnews_4187_out_stock_1.png?auto=format&fit=crop&h=432&w=768",
						}}
						resizeMode="contain"
						style={styles.singlePageImage}
					/>
				</View>

				<View style={styles.mainContentContainer}>
					<H1 style={styles.mainContentHeader}>{itemId.name}</H1>
					<Text style={styles.mainContentText}>{itemId.brand}</Text>
				</View>
				
				<Left>
					<Text>Description:</Text>
				</Left>
				<View style={styles.mainContentContainer}>
					<Text>{itemId.description}</Text>
				</View>
			</ScrollView>

			<View style={styles.mainBottomContainer}>
				<Left>
					<Text style={styles.singlePagePrice}>£{itemId.price}</Text>
				</Left>
				<Right style={styles.btnStyle}>
					<Button
						color="#3399"
						accessibilityLabel="Select"
						title="Select"
						onPress={() => props.addItemToList(itemId)}
					/>
				</Right>
			</View>
		</Container>
	);
};



const mapDispatchToProps = (dispatch) => {
	return {
		addItemToList: (item) => {
			dispatch(actions.addToList({ quantity: 1, item }));
		},
	};
};



const styles = StyleSheet.create({
	mainContainer: {
		position: "relative",
		height: "100%",
	},
	scrlViewStyling: {
		marginBottom: 80,
		padding: 5,
	},
	imageContainer: {
		backgroundColor: "white",
		padding: 0,
		margin: 0,
	},
	singlePageImage: {
		width: "100%",
		height: 230,
		borderRadius: 20,
	},
	mainContentContainer: {
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	mainContentHeader: {
		fontWeight: "bold",
		marginBottom: 20,
	},
	mainContentText: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
		marginTop: 20,
	},
	mainBottomContainer: {
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		left: 0,
		backgroundColor: "#ffffff",
	},
	singlePagePrice: {
		fontSize: 24,
		margin: 20,
		color: "#ff6984",
		left: 10,
	},
	btnStyle: {
		right: 20,
	},
});

export default connect(null, mapDispatchToProps)(Selectsinglepage);

//Selectsinglepage;
