import { Routes, Route } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import LoginPage from "./pages/LoginPage";
import RoundEntriesPage from "./pages/RoundEntriesPage";
import CreateRoundEntryPage from "./pages/CreateRoundEntryPage";
import AddRoundEntryPage from "./pages/AddRoundEntryPage";
import ViewRoundEntryPage from "./pages/ViewRoundEntryPage";

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
			<Route
				path="/add-round-entry/:id"
				element={
					<AuthGuard>
						<AddRoundEntryPage />
					</AuthGuard>
				}
			/>
			<Route
				path="/view-round-entry/:id"
				element={
					<AuthGuard>
						<ViewRoundEntryPage />
					</AuthGuard>
				}
			/>
		</Routes>
	);
};
