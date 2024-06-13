import { FC, ReactNode, createContext, useContext, useState } from "react";
import { AccountInfo } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";

export interface AuthContextValue {
	authenticatedAccount?: AccountInfo;
	setAuthenticatedAccount: (account: AccountInfo) => void;
	signOut: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
	setAuthenticatedAccount: () => {},
	signOut: () => {},
});

export const AuthProvider: FC<{
	children?: ReactNode;
}> = (props) => {
	const { instance } = useMsal();
	const [authenticatedAccount, setAuthenticatedAccount] =
		useState<AccountInfo>();

	const setUserAuthenticatedAccount = (account: AccountInfo) => {
		if (!authenticatedAccount) setAuthenticatedAccount(account);
	};

	const signOut = () => {
		setAuthenticatedAccount(undefined);
		instance.setActiveAccount(null);
	};

	return (
		<AuthContext.Provider
			value={{
				authenticatedAccount,
				setAuthenticatedAccount: setUserAuthenticatedAccount,
				signOut,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export const AuthConsumer = AuthContext.Consumer;

const useAuth = (): AuthContextValue => useContext(AuthContext);

export default useAuth;
