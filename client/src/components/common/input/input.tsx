import { FC } from "react";
import styles from "./input.module.css";

type InputProps = {
	label: string;
	type: string;
	name: string;
	selectedUnit: string;
	onClick?: () => void;
	onChange?: () => void;
	onClickOutside?: () => void;
};

export const Input: FC<InputProps> = (props) => {
	return (
		<label
			htmlFor={props.label}
			className={
				props.selectedUnit === props.label
					? `${styles.labelActive}`
					: `${styles.label}`
			}
		>
			{props.label}
			<input
				name={props.name}
				id={props.label}
				type={props.type}
				onChange={props.onChange}
			/>
		</label>
	);
};
