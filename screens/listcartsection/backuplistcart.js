<View style={{ flex: 1 }}>
	{/**
			|--------------------------------------------------
			| const mapDispatchToProps = (dispatch) => {
			|		return {
			|			addItemToList: (item) => dispatch(actions.addToList({ quantity: 1, item })),
			|		};
			|	};
			|--------------------------------------------------
			*/}
	{props.listCartItems.map((x) => {
		return <Text>{x.item.name}</Text>;
	})}
</View>;

/**
|--------------------------------------------------
| listcart section that got removed on 020521
|--------------------------------------------------
*/

{
	/* <ListItem style={styles.listItem} key={Math.random()} avatar>
	<Left>
		<Thumbnail
			source={{
				uri: data.item.image
					? data.item.image
					: "https://base.imgix.net/files/base/ebm/mhlnews/image/2019/03/mhlnews_4187_out_stock_1.png?auto=format&fit=crop&h=432&w=768",
			}}
		/>
	</Left>
	<Body style={styles.body}>
		<Left>
			<Text>{data.item.name}</Text>
		</Left>
		<Right>
			<Text>Store: {data.item.brand}</Text>
			<Text>£{data.item.price}</Text>
		</Right>
	</Body>
</ListItem>; */
}

/**
|--------------------------------------------------
| Listcartitem in listcart backup 
|--------------------------------------------------
*/
{
	/* <H1 style={{ alignSelf: "center" }}>Comparison List</H1>;
{
	props.listCartItems.map((data) => {
		return <Listcartitem item={data} />;
	});
}
<View style={styles.bottomContainer}></View>; */
}

/**
|--------------------------------------------------
| List cart whole backup
|--------------------------------------------------
*/

// import React from "react";
// import {
// 	View,
// 	Dimensions,
// 	Button,
// 	StyleSheet,
// 	TouchableOpacity,
// } from "react-native";
// import {
// 	Left,
// 	Right,
// 	Text,
// 	Container,
// 	Thumbnail,
// 	Body,
// 	ListItem,
// 	H1,
// } from "native-base";

// import Icon from "react-native-vector-icons/FontAwesome5";

// /**
// |--------------------------------------------------
// | List view import 020521
// |--------------------------------------------------
// */
// import { SwipeListView } from "react-native-swipe-list-view";

// /**
// |--------------------------------------------------
// | we need to connect to out stores
// |--------------------------------------------------
// */

// import { connect } from "react-redux";
// import * as actions from "../../src/actions/listcartactions";

// /**
// |--------------------------------------------------
// | Need to import Listcartitem cause it has the rendering for the items in list, that stuff is kinda confusing
// |--------------------------------------------------
// */

// import Listcartitem from "../listcartsection/Listcartitem";

// var { width, height } = Dimensions.get("window");

// /**
// |--------------------------------------------------
// | Maybe the data in line 41 can be changed
// | data.product.image should be data.item.image cause instead of product i put item somewhere
// |--------------------------------------------------
// */

// const listcart = (props) => {
// 	/**
// 	|--------------------------------------------------
// 	| Method for calculating the total value
// 	|			var totalprice = 0;
// 	|		props.listCartItems.forEach((element) => {
// 	|			return (totalprice += element.item.price);
// 	|		});
// 	|	the 'element' was called 'cart', 'element.item.price' was 'element.product.price'
// 	|--------------------------------------------------
// 	*/
// 	var totalprice = 0;
// 	props.listCartItems.forEach((element) => {
// 		return (totalprice += element.item.price);
// 	});

// 	/**
// 							|--------------------------------------------------
// 							| This is where the former listItem section was but Listcartitem new bit will be added
// 							|--------------------------------------------------
// 							*/

// 	return (
// 		<>
// 			{props.listCartItems.length ? (
// 				<Container>
// 					<H1 style={{ alignSelf: "center" }}>Comparison List</H1>
// 					{/**
// 					|--------------------------------------------------
// 					| swipe list view used cause i needed a delete function spending time debugging it
// 					| there was issue where instead of this 'renderItem={(data) => <Listcartitem item={data} />}' i had renderItem={(data) => {<Listcartitem item={data} />}}
// 					|--------------------------------------------------
// 					*/}
// 					<SwipeListView
// 						data={props.listCartItems}
// 						renderItem={(data) => <Listcartitem item={data} />}
// 						renderHiddenItem={(data) => (
// 							<View style={styles.hiddenContainer}>
// 								<TouchableOpacity
// 									style={styles.hiddenButton}
// 									onPress={() => props.removeList(data.item)}
// 								>
// 									{/**
// 									|--------------------------------------------------
// 									| Need to make changes to it later on the icon name, color and size
// 									|--------------------------------------------------
// 									*/}
// 									<Icon name="trash" color={"white"} size={30} />
// 								</TouchableOpacity>
// 							</View>
// 						)}
// 						/**
// 						|--------------------------------------------------
// 						| edit the changes below later or removed some of the features
// 						|--------------------------------------------------
// 						*/

// 						disableRightSwipe={true}
// 						previewOpenDelay={3000}
// 						friction={1000}
// 						tension={40}
// 						leftOpenValue={75}
// 						stopLeftSwipe={75}
// 						rightOpenValue={-75}
// 					/>

// 					<View style={styles.bottomContainer}>
// 						<Left>
// 							{/**
// 							|--------------------------------------------------
// 							| in the component below we will be calculating the total
// 							|--------------------------------------------------
// 							*/}
// 							<Text style={styles.price}>£{totalprice}</Text>
// 						</Left>
// 						<Right>
// 							{/**
// 							|--------------------------------------------------
// 							| In the clear button is where
// 							| const mapDispatchToProps = (dispatch) => {
// 							|		return {
// 							|			clearList: () => dispatch(actions.clearList),
// 							|		};
// 							|	};
// 							|--------------------------------------------------
// 							*/}
// 							<Button title="Clear List" onPress={() => props.clearList()} />
// 						</Right>
// 						<Right>
// 							<Button
// 								title="Order"
// 								onPress={() => props.navigation.navigate("Checkout")}
// 							/>
// 						</Right>
// 					</View>
// 				</Container>
// 			) : (
// 				<Container style={styles.emptyContainer}>
// 					<Text>List/Cart is Empty</Text>
// 					<Text>You can add items for comparison</Text>
// 				</Container>
// 			)}
// 		</>
// 	);
// };

// /**
// |--------------------------------------------------
// | Method for adding and removing items from list
// |   const listCartItems = (state = [], action) => {
// |        switch (action.type) {
// |            case ADD_T_CART:

//     const reducers = combineReducers({
// 	listCartItems: listCartItems,
// |--------------------------------------------------
// */

// /**
//  * Added on 010421(1)
//  */

// const mapStateToProps = (state) => {
// 	const { listCartItems } = state;
// 	return {
// 		listCartItems: listCartItems,
// 	};
// };

// /**
// |--------------------------------------------------
// | This is to clear items from list and also contains the remove function
// |--------------------------------------------------
// */

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		clearList: () => dispatch(actions.clearList()),
// 		removeList: (item) => dispatch(actions.removeFromList(item)),
// 	};
// };

// /**
// |--------------------------------------------------
// | Enter stylesheet to for the page
// | emptyContainer must be changed other stuff must be also changed 010421
// |--------------------------------------------------
// */

// const styles = StyleSheet.create({
// 	emptyContainer: {
// 		height: height,
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},

// 	bottomContainer: {
// 		flexDirection: "row",
// 		position: "absolute",
// 		bottom: 0,
// 		left: 0,
// 		backgroundColor: "white",
// 		elevation: 20,
// 	},
// 	price: {
// 		fontSize: 18,
// 		margin: 20,
// 		color: "red",
// 	},
// 	hiddenContainer: {
// 		flex: 1,
// 		justifyContent: "flex-end",
// 		flexDirection: "row",
// 	},
// 	hiddenButton: {
// 		backgroundColor: "red",
// 		justifyContent: "center",
// 		alignItems: "flex-end",
// 		paddingRight: 25,
// 		height: 70,
// 		width: width / 1.2,
// 	},
// });

// export default connect(mapStateToProps, mapDispatchToProps)(listcart);

// //listcart;
