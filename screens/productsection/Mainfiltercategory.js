import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Badge, Text, ListItem } from "native-base";


const Mainfiltercategory = (props) => {
	return (
		<ScrollView horizontal={true} style={styles.scrollthing}>
			<ListItem
				style={
					styles.styleForList 
				}
			>
				<TouchableOpacity
					key={1}
					
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
						
						key={item._id}
						
						onPress={() => {
							
							props.Mainfiltercategory(item._id),
								props.setBadgeActive(props.productCategories.indexOf(item));
						}}
					>
						<Badge
							
							style={[
								styles.badgeCenterStruc,
								
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
