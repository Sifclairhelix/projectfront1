import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Left, Body, Content, Thumbnail, ListItem, Text } from "native-base";

/**
|--------------------------------------------------
| Need Dimensions cause causes weird shape when rendering items 
|--------------------------------------------------
*/

var { width, height } = Dimensions.get("window");

const Mainsearchproducts = (props) => {
	/**
    |--------------------------------------------------
    | props we have props, we created constants with props
    | const [mainProductsFiltered, setMainProductsFiltered] = useState([]);
    |--------------------------------------------------
    */

	const { mainProductsFiltered } = props;

	return (
		<Content style={{ width: width }}>
			{mainProductsFiltered.length > 0 ? (
				mainProductsFiltered.map((item) => (
					<ListItem
						/**
                |--------------------------------------------------
                | will have onpress for navigation, this is for clicking on search to take use to the image
                |--------------------------------------------------
                */

						onPress={() => {
							props.navigation.navigate("Product Detail", { item: item });
						}}
						key={item._id.$oid}
						avatar
					>
						<Left>
							<Thumbnail
								source={{
									/**
                                    |--------------------------------------------------
                                    | We use item for the image cause we passed item into mainProductsFiltered.map((item)
                                    | and const { mainProductsFiltered } = props;
                                    |--------------------------------------------------
                                    */
									uri: item.image
										? item.image
										: "https://base.imgix.net/files/base/ebm/mhlnews/image/2019/03/mhlnews_4187_out_stock_1.png?auto=format&fit=crop&h=432&w=768",
								}}
							/>
						</Left>
						<Body>
							<Text>{item.name}</Text>
							<Text note>{item.description}</Text>
						</Body>
					</ListItem>
				))
			) : (
				<View style={styles.center}>
					<Text style={{ alignSelf: "center" }}>
						There was no products found for query
					</Text>
				</View>
			)}
		</Content>
	);
};

/**
|--------------------------------------------------
| Stylesheet section
| Need to change stylesheet later 300421(1)   
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Mainsearchproducts;
