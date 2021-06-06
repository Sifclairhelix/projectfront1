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
			<ListItem
				style={
					styles.styleForList /*{ margin: 0, padding: 0, borderRadius: 0 }*/
				}
			>
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
							props.badgeActive == -1
								? styles.badgeActive
								: styles.badgeInactive,
						]}
					>
						<Text style={styles.badgeAllText}>All</Text>
					</Badge>
				</TouchableOpacity>
				{props.productCategories.map((item) => (
					<TouchableOpacity
						/**
						|--------------------------------------------------
						| This orginally is item._id.$oid but when getting data it is item._id
						|--------------------------------------------------
						*/
						key={item._id}
						/**
						 * We will have an onPress event when we pass props props
						 */
						onPress={() => {
							/**
							|--------------------------------------------------
							| props.Mainfiltercategory(item._id.$oid), this will change into this i guess props.Mainfiltercategory(item._id) not now but later
							| Here we have a function where we change the  props.Mainfiltercategory(item._id.$oid), to props.Mainfiltercategory(item._id),
							|--------------------------------------------------
							*/
							props.Mainfiltercategory(item._id),
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
								styles.badgeCenterStruc,
								/*{ margin: 5 },*/
								props.badgeActive == props.productCategories.indexOf(item)
									? styles.badgeActive
									: styles.badgeInactive,
							]}
						>
							<Text style={styles.badgeIntext}>{item.name}</Text>
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
	badgeCenterStruc: {
		justifyContent: "center",
		alignItems: "center",
		margin: 5.5,
	},
	styleForList: {
		margin: 0,
		padding: 0,
		borderRadius: 0,
	},
	badgeAllText: {
		color: "#ffffff",
		fontStyle: "normal",
	},
	badgeIntext: {
		color: "#ffffff",
		fontStyle: "normal",
	},
	scrollthing: {
		backgroundColor: "#f2f2f2",
	},
	badgeActive: {
		backgroundColor: "#00609f",
		borderRadius: 10,
	},
	badgeInactive: {
		backgroundColor: "#ae9b89",
		borderRadius: 2,
	},
});

export default Mainfiltercategory;
