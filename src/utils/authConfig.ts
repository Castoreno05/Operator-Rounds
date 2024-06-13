import { Configuration, PopupRequest } from "@azure/msal-browser";
import {
	REACT_APP_APPLICATION_AUTHORITY,
	REACT_APP_APPLICATION_CLIENT_ID,
} from "./constants";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
	auth: {
		clientId: REACT_APP_APPLICATION_CLIENT_ID!,
		authority: REACT_APP_APPLICATION_AUTHORITY,
		redirectUri: "/",
	},
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
	scopes: ["User.Read"],
	redirectUri: "/",
	prompt: "select_account",
};
