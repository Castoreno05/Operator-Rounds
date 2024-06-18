import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./unitOptionsModal.module.css";
import useOutsideClick from "../../hooks/useOutsideClick";
import { MODAL_OPTION_STATE } from "../../utils/constants";
import { Input } from "../common/input/input";

type UnitOptionsModalProps = {
	disableEdition?: boolean;
	onClose?: () => void;
};

export const UnitOptionsModal: FC<UnitOptionsModalProps> = (props) => {
	const navigate = useNavigate();
	const [selectedOption, setSelectedOption] = useState<string>("");
	
	const containerRef = useRef<HTMLDivElement>(null);
	useOutsideClick([containerRef], () => {
		props.onClose?.();
	});

	const handleOptionChange = (label: string) => {
		setSelectedOption(label);
	};
	const navigateAndClose = (url: string) => {
		sessionStorage.setItem(
			"Unit_Rounds",
			JSON.stringify({ rig: selectedOption })
		);
		navigate(url);
		props.onClose?.();
	};

	return (
		<div className={styles.overlay}>
			<div
				className={styles.containerOptions}
				ref={containerRef}
			>
				<h1>Select a Unit</h1>
				{MODAL_OPTION_STATE.map((option, index) => (
					<Input
						key={index}
						label={option.label}
						type={option.type}
						name="unitOptions"
						onChange={() => handleOptionChange(option.label)}
					/>
				))}
				<button disabled={!selectedOption} onClick={() => navigateAndClose("/create-entry")}>
					Submit
				</button>
			</div>
			;
		</div>
	);
};
