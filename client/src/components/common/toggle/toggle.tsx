import React from "react";
import styles from "./toggle.module.css";

type ToggleProps = {
	online: boolean;
	handleOnline: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Toggle: React.FC<ToggleProps> = (props) => {
	return (
		<div className={styles.toggleContainer}>
			System {props.online ? "Online" : "Offline"}
			<label className={styles.switch}>
				<input
					id="checkbox"
					type="checkbox"
					checked={props.online}
					onChange={props.handleOnline}
					className={styles.toggle}
				/>
				<span className={styles.slider} />
			</label>
		</div>
	);
};

export default Toggle;
