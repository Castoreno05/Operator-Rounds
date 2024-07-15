import { useState } from "react";
import { ROUND_API_URL } from "../utils/constants";
import { Toast } from '../components/common/toast/toast'
// import { useMsal } from "@azure/msal-react";

type UsePostProps<T> = {
	relativePath?: string;
	toastMessage?: { success?: string; error?: string };
	onError?: () => void;
	onSuccess?: (response: T) => void;
};

export function usePost<RequestBody, RequestResponse>(
	props: UsePostProps<RequestResponse>
) {
	// const { instance } = useMsal();

	const [isLoading, setIsLoading] = useState(true);

	const mutation = async (body: RequestBody) => {
		const url = `${ROUND_API_URL}${props.relativePath || ""}`;

		// const { accessToken } = await instance.acquireTokenSilent({
		// 	scopes: ["user.read"],
		// });

		const headers = {
			// Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json",
		};

		fetch(url, {
			method: "POST",
			body: JSON.stringify(body),
			headers,
		})
			.then((response) => {
				response.json().then((data: RequestResponse) => {
					if (props.toastMessage?.success) {
					    Toast({ type: 'success', message: props.toastMessage.success })
					}
					props.onSuccess?.(data);
				});
			})
			.catch(() => {
				if (props.toastMessage?.error) {
				    Toast({ type: 'success', message: props.toastMessage.error })
				}
				props.onError?.();
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return { isLoading, mutation };
}
