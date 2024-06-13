import { FC, ReactNode, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/context/useAuth";
import { useMsal } from "@azure/msal-react";
// import Header from "./components/common/header/header";
// import { Toast } from './components/common/toast/toast'

const AuthGuard: FC<{
	children?: ReactNode;
	hideHeader?: boolean;
}> = (props) => {
	const { instance } = useMsal();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { setAuthenticatedAccount, authenticatedAccount } = useAuth();

	useEffect(() => {
		const activeAccount = instance.getActiveAccount();

		// If the user tries to access a route without log in, we send him to the login page
		if (!activeAccount) {
			instance.setActiveAccount(null);
			navigate("/", { state: pathname });
		}
		// If the user refresh the page, we just want to get his roles again
		else {
			setAuthenticatedAccount(activeAccount);
		}
	}, [
		pathname,
		navigate,
		instance,
		setAuthenticatedAccount,
		authenticatedAccount,
	]);

	return (
		<>
			{/* {!props.hideHeader && <Header />} */}
			{props.children || <Outlet />}
		</>
	);
};

export default AuthGuard;
