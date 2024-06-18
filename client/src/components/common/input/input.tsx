import { FC } from "react";

type InputProps = {
	label: string;
	type: string;
	name: string;
	onClick?: () => void;
    onChange?: () => void;
	onClickOutside?: () => void;
};

export const Input: FC<InputProps> = (props) => {
	return (
		<label htmlFor={props.label}>
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
