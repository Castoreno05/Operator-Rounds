import { testModel } from "../models/testModel";
import { usePost } from "../hooks/usePost";
import API_PATHS from "../path";

export const useCheckInCreate = (handlers: {
	onSuccess?: () => void;
	onError?: () => void;
}) => {
	return usePost<testModel, unknown>({
		relativePath: API_PATHS.Rounds,
		...handlers,
	});
};
