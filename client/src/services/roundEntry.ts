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
		toastMessage: {
			error: "Unable to create your round entry.",
			success: "Your round entry has been created and saved",
		},
	});
};

export const useRoundEntryUpdate = (handlers?: {
	onSuccess?: () => void;
	onError?: () => void;
}) => {
	return usePost<RoundEntry, unknown>({
		relativePath: API_PATHS.PATCH_ROUNDS,
		...handlers,
		toastMessage: {
			error: "Unable to update your round entry.",
			success: "Your round entry has been updated and saved",
		},
	});
};
