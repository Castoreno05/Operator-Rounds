import {
	FC,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { RoundEntry } from "../../models/roundEntry";
import { differenceBy } from "lodash";
import { useRoundEntryGetAll } from "../../services/roundEntry";
import useAuth from "./useAuth";

export interface RoundEntryContextValue {
	roundEntries: RoundEntry[];
	roundEntriesById: Record<number, RoundEntry>;
	isLoading: boolean;
	addRoundEntries: (roundEntries: RoundEntry[]) => void;
	removeRoundEntries: (ids: number[]) => void;
	refetch: () => void;
}

export const RoundEntryContext = createContext<RoundEntryContextValue>({
	roundEntries: [],
	roundEntriesById: {},
	isLoading: false,
	addRoundEntries: (_) => {},
	removeRoundEntries: (_) => {},
	refetch: () => {},
});

export const RoundEntryProvider: FC<{
	children?: ReactNode;
}> = (props) => {
	const { authenticatedAccount } = useAuth();
	const [roundEntries, setRoundEntries] = useState<RoundEntry[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [roundEntriesById, setRoundEntriesById] = useState<
		Record<string, RoundEntry>
	>({});

	const { isLoading: isFetching, refetch } = useRoundEntryGetAll({
		onSuccess: (data) => {
			setRoundEntries(
				data.map((d: RoundEntry, index: number) => ({
					...d,
					// internalId: index,
				})).reverse()
			);
		},
		disabled: !authenticatedAccount,
	});

	const addRoundEntries = (newRoundEntries: RoundEntry[]) =>
		setRoundEntries([
			...differenceBy(
				roundEntries,
				newRoundEntries,
				(c: RoundEntry) => c.round_id
			),
			...newRoundEntries,
		]);

	const removeRoundEntries = (ids: number[]) => {
		setRoundEntries(
			roundEntries.filter((entry) => !ids.includes(entry.round_id))
		);
	};

	useEffect(() => {
		if (roundEntries) {
			setIsLoading(true);
			const roundEntryMap: Record<string, RoundEntry> = {};
			roundEntries.forEach((entry) => {
				if (entry.round_id) {
					roundEntryMap[entry.round_id] = entry;
				}
			});
			setRoundEntriesById(roundEntryMap);
		}
		setIsLoading(false);
	}, [roundEntries]);

	return (
		<RoundEntryContext.Provider
			value={{
				roundEntries,
				roundEntriesById,
				isLoading: isFetching || isLoading,
				addRoundEntries,
				removeRoundEntries,
				refetch,
			}}
		>
			{props.children}
		</RoundEntryContext.Provider>
	);
};

export const useRoundEntry = (): RoundEntryContextValue =>
	useContext(RoundEntryContext);

export default useRoundEntry;
