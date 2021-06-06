import { Platform } from "react-native";

let baseURL = "";

{
	Platform.OS == "android"
		? (baseURL = "http://10.0.2.2:4000/api/v1/")
		: (baseURL = "http://localhost:4000/api/v1");
}

export default baseURL;
