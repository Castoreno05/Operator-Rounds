import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MsalProvider } from "@azure/msal-react";
import { AuthProvider } from "./hooks/context/useAuth";
import { RoundEntryProvider } from "./hooks/context/useRoundEntry";

import {
	EventType,
	PublicClientApplication,
	EventMessage,
	AuthenticationResult,
} from "@azure/msal-browser";
import { msalConfig } from "./utils/authConfig";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((event: EventMessage) => {
	if (
		(event.eventType === EventType.LOGIN_SUCCESS ||
			event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
		event.payload
	) {
		const payload = event.payload as AuthenticationResult;
		const account = payload.account;
		msalInstance.setActiveAccount(account);
		// console.log(payload)
	}
});

root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<MsalProvider instance={msalInstance}>
			<AuthProvider>
				<RoundEntryProvider>
					<App />
				</RoundEntryProvider>
			</AuthProvider>
		</MsalProvider>
	</BrowserRouter>
	// </React.StrictMode>
);
