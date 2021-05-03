import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

/**
    |--------------------------------------------------
    | Not sure whether props.item.item.product should be props.item.item.item
    |  Not also sure about quanity either but we will find out
    | somewhere instead of 'product' i put 'item' can be confusing i guess later on   
    |--------------------------------------------------
    */

const Listcartitem = (props) => {
	const data = props.item.item.item;
	const [quantity, setQuantity] = useState(props.item.item.quantity);
	/**
|--------------------------------------------------
| bare confused in this section they removed  'props.item.item.product' and made it 'props.item' 
|--------------------------------------------------
*/

	/**
|--------------------------------------------------
| data.item.image the item in it has to be removed cause we already lopping through the item i guess
|    data.item.image - data.image
|    data.item.image - data.image
|   {data.item.name} - data.name
|    {data.item.brand} - data.brand
|    {data.item.price} - data.price
|--------------------------------------------------
*/
	/**
|--------------------------------------------------
| so changed the 'props.item.item.product' to 'props.item' and then changed them to data.item.image and somehow it worked do know what is this juju
|--------------------------------------------------
*/
	/**
|--------------------------------------------------
| Final thing to work from 'props.item' changed it to 'props.item.item.item' this seemed to work
|--------------------------------------------------
*/

	return (
		<ListItem style={styles.listItem} key={Math.random()} avatar>
			<Left>
				<Thumbnail
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

/**
|--------------------------------------------------
| Stylesheet section which needs to be changed as soon as possible
|--------------------------------------------------
*/
const styles = StyleSheet.create({
	listItem: {
		alignItems: "center",
		backgroundColor: "white",
		justifyContent: "center",
	},
	body: {
		margin: 10,
		alignItems: "center",
		flexDirection: "row",
	},
});

export default Listcartitem;
