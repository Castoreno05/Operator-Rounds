import React, {
	FC,
	Dispatch,
	SetStateAction,
	useRef,
	MutableRefObject,
} from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import styles from "./searchBar.module.css";

type SearchBarProps = {
	value: string;
	onChangeInput: Dispatch<SetStateAction<string>>;
	onClose: () => void;
};

export const SearchBar: FC<SearchBarProps> = (props) => {
	const ref = useRef() as MutableRefObject<HTMLInputElement>;
	useOutsideClick([ref], () => {
		props.onClose?.();
	});

	return (
		<input
			ref={ref}
			type="text"
			value={props.value}
			placeholder="Search Entries"
			onChange={(e) => props.onChangeInput(e.target.value)}
			className={styles.searchBar}
		/>
	);
};
