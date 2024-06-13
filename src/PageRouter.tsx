import { Routes, Route } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import LoginPage from "./pages/LoginPage";

export const PageRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<LoginPage />}
			/>
		</Routes>
	);
};
