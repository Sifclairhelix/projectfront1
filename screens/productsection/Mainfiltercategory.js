import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Badge, Text, ListItem } from "native-base";

/**
|--------------------------------------------------
| Props will come from the Productmaincontainer
|--------------------------------------------------
*/

/**
|--------------------------------------------------
|  productCategories={productCategories}
|  Mainfiltercategory={changeCategory}
|  productsCategory={productsCategory}
|  badgeActive={badgeActive}
|  setBadgeActive={setBadgeActive}
| 
|  categories={categories}
|  categoryFilter={changeCtg}
|  productsCtg={productsCtg}
|  active={active}
|  setActive={setActive}
|--------------------------------------------------
*/
const Mainfiltercategory = (props) => {
	return (
		<ScrollView horizontal={true} style={styles.scrollthing}>
			<ListItem style={{ margin: 0, padding: 0, borderRadius: 0 }}>
				<TouchableOpacity
					key={1}
					/**
					 * We will have an onPress event when we pass props props
					 */
					onPress={() => {
						props.Mainfiltercategory("all"), props.setBadgeActive(-1);
					}}
				>
					<Badge
						/**
                    |--------------------------------------------------
                    | this badge is how the category buttons look like
                    |--------------------------------------------------
                    */
						style={[
							styles.center,
							{ margin: 5 },
							props.badgeActive == -1 ? styles.active : styles.inactive,
						]}
					>
						<Text style={{ color: "white" }}>All</Text>
					</Badge>
				</TouchableOpacity>
				{props.productCategories.map((item) => (
					<TouchableOpacity
						key={item._id}
						/**
						 * We will have an onPress event when we pass props props
						 */
						onPress={() => {
							/**
							|--------------------------------------------------
							| props.Mainfiltercategory(item._id.$oid), this will change into this i guess props.Mainfiltercategory(item._id) not now but later 
							|--------------------------------------------------
							*/
							props.Mainfiltercategory(item._id.$oid),
								props.setBadgeActive(props.productCategories.indexOf(item));
						}}
					>
						<Badge
							/**
                    |--------------------------------------------------
                    | this badge is how the category buttons look like
                    |--------------------------------------------------
                    */
							style={[
								styles.center,
								{ margin: 5 },
								props.badgeActive == props.productCategories.indexOf(item)
									? styles.active
									: styles.inactive,
							]}
						>
							<Text style={{ color: "white" }}>{item.name}</Text>
						</Badge>
					</TouchableOpacity>
				))}
			</ListItem>
		</ScrollView>
	);
};

/**
|--------------------------------------------------
| Stylesheet goes over here change it later
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	scrollthing: {
		backgroundColor: "#f2f2f2",
	},
	active: {
		backgroundColor: "#03bafc",
	},
	inactive: {
		backgroundColor: "#a0e1eb",
	},
});

export default Mainfiltercategory;
