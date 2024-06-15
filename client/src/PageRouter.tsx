import { Routes, Route } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import LoginPage from "./pages/LoginPage";
import RoundEntriesPage from "./pages/RoundEntriesPage";
import CreateRoundEntryPage from "./pages/CreateRoundEntryPage";

export const PageRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<LoginPage />}
			/>
			<Route
				path="/round-entries"
				element={
					<AuthGuard>
						<RoundEntriesPage />
					</AuthGuard>
				}
			/>
			<Route
				path="/create-entry"
				element={
					<AuthGuard>
						<CreateRoundEntryPage />
					</AuthGuard>
				}
			/>
		</Routes>
	);
};
