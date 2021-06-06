import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";



const Listcartitem = (props) => {
	const data = props.item.item.item;
	const [quantity, setQuantity] = useState(props.item.item.quantity);


	return (
		<ListItem style={styles.listItem} key={Math.random()} avatar>
			<Left>
				<Thumbnail
					style={styles.thumbnailStyle}
					source={{
						uri: data.image
							? data.image
							: "https://base.imgix.net/files/base/ebm/mhlnews/image/2019/03/mhlnews_4187_out_stock_1.png?auto=format&fit=crop&h=432&w=768",
					}}
				/>
			</Left>
			<Body style={styles.body}>
				<Left>
					<Text>{data.name}</Text>
				</Left>
				<Right>
					<Text>Store: {data.brand}</Text>
					<Text>£{data.price}</Text>
				</Right>
			</Body>
		</ListItem>
	);
};

const styles = StyleSheet.create({
	listItem: {
		alignItems: "center",
		backgroundColor: "white",
		justifyContent: "center",
	},
	body: {
		margin: 6,
		alignItems: "center",
		flexDirection: "row",
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
		borderRadius: 1,
	},
});

export default Listcartitem;
