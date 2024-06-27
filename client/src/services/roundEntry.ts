import { useGet } from "../hooks/useGet";
import { usePost } from "../hooks/usePost";
import { RoundEntry } from "../models/roundEntry";
import API_PATHS from "../path";

export const useRoundEntryGetAll = (handlers?: {
	onSuccess?: (data: RoundEntry[]) => void;
	onError?: () => void;
	disabled?: boolean;
}) => {
	return useGet<RoundEntry[]>({
		relativePath: API_PATHS.GET_ROUNDS,
		toastErrorText: "Error retrieving log entries",
		...handlers,
	});
};

export const useRoundEntryCreate = (handlers?: {
	onSuccess?: () => void;
	onError?: () => void;
}) => {
	return usePost<RoundEntry, unknown>({
		relativePath: API_PATHS.POST_ROUNDS,
		...handlers,
	});
};
