<FlatList
	/**
                    |--------------------------------------------------
                    | Trying to use flatlist to render items
                    | required in renderItem {item} to deconstruct item
                    | // horizontal not required
                    | numColums necessary for seperation 
                    |--------------------------------------------------
                    */
	// horizontal
	numColumns={2}
	data={mainproducts}
	/**
                        |--------------------------------------------------
                        | renderItem={({ item }) => <Text>{item.brand}</Text>}
                        |--------------------------------------------------
                        */
	renderItem={({ item }) => <Productmainlist key={item.id} item={item} />}
	keyExtractor={(item) => item.name}
/>;

/**
|--------------------------------------------------
| The above code is take from product container 
|--------------------------------------------------
*/
