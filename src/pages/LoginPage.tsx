import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useMsal } from "@azure/msal-react";
import { DesktopLogin } from "../components/desktop-login/desktopLogin";
// import { MobileLogin } from "../components/mobile-login/mobileLogin";
import { useWindowSize } from "../hooks/useWindowSize";
import { loginRequest } from "../utils/authConfig";
import useAuth from "../hooks/context/useAuth";

const LoginPage = () => {
	const { instance } = useMsal();
	const navigate = useNavigate();
	const { state } = useLocation();
	const { isMobileView } = useWindowSize();
	const { setAuthenticatedAccount } = useAuth();

	const [isAuthenticating, setIsAuthenticating] = useState(false);

	useEffect(() => {
		const activeAccount = instance.getActiveAccount();
		if (activeAccount) {
			setAuthenticatedAccount(activeAccount);
			navigate(state || "/check-in");
		}
	}, [navigate, instance, setAuthenticatedAccount, state]);

	const isLoading = isAuthenticating;

	const handleSignIn = async () => {
		setIsAuthenticating(true);
		await instance.loginRedirect(loginRequest);
		setIsAuthenticating(false);
	};

	if (isMobileView)
		return (
			<>Mobile</>
			// <MobileLogin
			// 	onClick={handleSignIn}
			// 	isLoading={isLoading}
			// />
		);

	return (
		<DesktopLogin
			onClick={handleSignIn}
			isLoading={isLoading}
		/>
	);
};

export default LoginPage;
