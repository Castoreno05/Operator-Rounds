import { useEffect, useState } from "react";
// import { Toast } from '../components/common/toast/toast'
import { ROUND_API_URL } from "../utils/constants";
// import { useMsal } from "@azure/msal-react";

type UseGetProps<T> = {
	relativePath: string;
	toastErrorText: string;
	disabled?: boolean;
	onSuccess?: (data: T) => void | Promise<void>;
	onError?: () => void;
};

export function useGet<RequestResponse>(props: UseGetProps<RequestResponse>) {
	// const { instance } = useMsal();
	const [isLoading, setIsLoading] = useState(false);
	const [refetchFlag, setRefetchFlag] = useState(false);
	const [data, setData] = useState<RequestResponse>();

	const refetch = () => {
		setRefetchFlag((prev) => !prev);
	};

	useEffect(() => {
		const fetchData = async () => {
			if (!props.disabled) {
				setIsLoading(true);
				try {
					const response = await fetch(`${ROUND_API_URL}${props.relativePath}`);
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const responseData = await response.json();
					setData(responseData);
					props.onSuccess?.(responseData);
				} catch (error) {
					console.error("Error fetching data:", error);
					// Handle error, e.g., props.onError?.();
				} finally {
					setIsLoading(false);
				}
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.relativePath, refetchFlag, props.disabled]);

	return { isLoading, data: data || [], refetch };
}
