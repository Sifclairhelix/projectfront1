/**
|--------------------------------------------------
| base imports 300421(1) 
|--------------------------------------------------
*/
import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	ActivityIndicator,
	Dimensions,
	ScrollView,
} from "react-native";
import { Header, Item, Icon, Input, Text, Container } from "native-base";

/**
|--------------------------------------------------
| import baseURL
|--------------------------------------------------
*/

import baseURL from "../../assets/connection/baseURL";
import axios from "axios";

/**
|--------------------------------------------------
| Imports section for the Productmain container
|--------------------------------------------------
*/

import Productmainlist from "./Productmainlist";
import Mainsearchproducts from "./Mainsearchproducts";
import Mainfiltercategory from "./Mainfiltercategory";

/*required import for now for the data from json 300421(1) */
// const productdata = require("../../assets/additionaldata/products.json");
// const productcategories = require("../../assets/additionaldata/categories.json");

var { height, width } = Dimensions.get("window");

/**
|--------------------------------------------------
| Dimensions for the category section
|--------------------------------------------------
*/

const Productmaincontainer = (props) => {
	/**
    |--------------------------------------------------
    | Usestate sections
    |--------------------------------------------------
    */

	const [mainproducts, setMainProducts] = useState([]);
	/**
	 * Filteredproduct section
	 */
	const [mainProductsFiltered, setMainProductsFiltered] = useState([]);
	const [focusonsearch, setFocusOnSearch] = useState();

	const [productCategories, setProductCategories] = useState([]);
	const [productsCategory, setProductsCategory] = useState([]);
	const [badgeActive, setBadgeActive] = useState();
	const [startStateInitial, setStartStateInitial] = useState([]);

	/**
    |--------------------------------------------------
    | UseEffect section
    |--------------------------------------------------
    */

	useEffect(() => {
		// setMainProducts(productdata);
		// setMainProductsFiltered(productdata);
		setFocusOnSearch(false);
		/**
		 * setProductCategories got it from productcategories
		 */
		// setProductCategories(productcategories);
		// setProductsCategory(productdata);
		setBadgeActive(-1);
		// setStartStateInitial(productdata);

		/**
		|--------------------------------------------------
		| Using axios here for the main products
		|--------------------------------------------------
		*/

		axios.get(`${baseURL}products`).then((res) => {
			setMainProducts(res.data);
			setMainProductsFiltered(res.data);
			setProductsCategory(res.data);
			setStartStateInitial(res.data);
		});

		/**
		|--------------------------------------------------
		| Categories using axios
		|--------------------------------------------------
		*/
		axios
			.get(`${baseURL}categories`)
			.then((res) => {
				setProductCategories(res.data);
			})
			.catch((err) => {
				console.log("Api error");
			});

		return () => {
			setMainProducts([]);
			setMainProductsFiltered([]);
			setFocusOnSearch();
			setProductCategories([]);
			setBadgeActive();
			setStartStateInitial();
		};
	}, []);

	/**
    |--------------------------------------------------
    | Searching product method, take text input
    | confused in this section for some reason why is it products in the line mainproducts.filter((i) =>
	|			i.name.toLowerCase().includes(text.toLowerCase()) 300421(1)
    | the (i) in the searchingForProduct can be chnaged 
    |--------------------------------------------------
    */

	const searchingForProduct = (text) => {
		setMainProductsFiltered(
			mainproducts.filter((i) =>
				i.name.toLowerCase().includes(text.toLowerCase())
			)
		);
	};

	/**
    |--------------------------------------------------
    | We need method to set openSearchList to set Focus to true
    |--------------------------------------------------
    */

	const openSearchList = () => {
		setFocusOnSearch(true);
	};

	/**
    |--------------------------------------------------
    | Another focus method to set it to false
    |--------------------------------------------------
    */

	const onSearchBlur = () => {
		setFocusOnSearch(false);
	};

	// console.log(mainproducts);

	/**
    |--------------------------------------------------
    | Filter by category
    | setProductsCategory will be the initialstate all the products will be rendered
    |  startStateInitial and setBadgeActive.
    | mainproducts == products
    | changeCtg
	|
	| we change 'mainproducts.filter((i) => i.category.$oid === ctg)' to mainproducts.filter((i) => i.category._id === ctg)
    |--------------------------------------------------
    */

	const changeCategory = (ctg) => {
		{
			ctg === "all"
				? [setProductsCategory(startStateInitial), setBadgeActive(true)]
				: [
						setProductsCategory(
							mainproducts.filter((i) => i.category._id === ctg)
						),
				  ];
			setBadgeActive(true);
		}
	};

	return (
		<Container>
			<Header searchBar regular>
				<Item /**
                |--------------------------------------------------
                | Item is required so that you must add the icon in it or looks weird
                |--------------------------------------------------
                */
				>
					<Icon name="ios-search" />
					<Input
						placeholder="Enter product name"
						/**
                    |--------------------------------------------------
                    | We will have a onfocus functionn over here
                    | we will have an onChangetext here
                    | openSearchList gets passed for onFocus
                    | onChangeText={(text) => takes the method searchingForProduct
                    |--------------------------------------------------
                    */
						onFocus={openSearchList}
						onChangeText={(text) => searchingForProduct(text)}
					/>
					{
						/**
                        |--------------------------------------------------
                        | if focusonsearch is true than we have to render close button for the search brand
                        | we have to pass onSearchBlur here and if not then we pass null turnary condition
                        |--------------------------------------------------
                        */
						focusonsearch == true ? (
							<Icon onPress={onSearchBlur} name="ios-close" />
						) : null
					}
				</Item>
			</Header>

			{
				/**
            |--------------------------------------------------
            | takes focusonsearch Usestate
            |--------------------------------------------------
            */
				focusonsearch == true ? (
					/**
                    |--------------------------------------------------
                    | We want the Mainsearchproducts <Mainsearchproducts /> component here which was imported
                    | we will pass the mainProductsFiltered into the mainProductsFiltered this goes to Mainsearchproducts
                    |--------------------------------------------------
                    */
					<Mainsearchproducts
						mainProductsFiltered={mainProductsFiltered}
						navigation={props.navigation}
					/>
				) : (
					<ScrollView>
						<View
						/**
						 * style={styles.container}
						 */
						>
							{/* <Text>Main Product Container section</Text> */}
							<View>
								<Mainfiltercategory
									productCategories={productCategories}
									Mainfiltercategory={changeCategory}
									productsCategory={productsCategory}
									badgeActive={badgeActive}
									setBadgeActive={setBadgeActive}
								/>
							</View>
							{productsCategory.length > 0 ? (
								<View
									/**
                |--------------------------------------------------
                | changed { marginTop: 50 } in style below to styles.container
                |--------------------------------------------------
                */
									style={styles.categoryListContainer}
								>
									{productsCategory.map((item) => {
										return (
											<Productmainlist
												/**
                                        |--------------------------------------------------
                                        | We need to pass stuff here so it goes to productlist than to product single page
                                        |--------------------------------------------------
                                        */
												navigation={props.navigation}
												key={item._id}
												item={item}
											/>
										);
									})}
								</View>
							) : (
								<View style={styles.errorDisplay}>
									<Text> No products are available</Text>
								</View>
							)}
						</View>
					</ScrollView>
				)
			}
		</Container>
	);
};

/**
|--------------------------------------------------
| Need to change stylesheet later
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	// container: {
	// 	flexWrap: "wrap",
	// 	backgroundColor: "white",
	// },
	categoryListContainer: {
		// width: "100%",
		/**
        |--------------------------------------------------
        | the height: height caused a bunch of issues it didnt display all the items made it stick to 6
        |--------------------------------------------------
        */
		// height: height,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		backgroundColor: "#969bab",
	},
	errorDisplay: {
		justifyContent: "center",
		alignItems: "center",
		height: height / 2,
	},
});

export default Productmaincontainer;
