import { FC, ReactNode, useState } from "react";
import styles from "./toolTip.module.css";

type ToolTipProps = {
	description: string;
	children: ReactNode;
};

export const Tooltip: FC<ToolTipProps> = (props) => {
	const [visible, setVisible] = useState(false);

	return (
		<div
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			style={{ position: "relative", display: "flex" }}
		>
			{props.children}
			{visible && (
				<div className={styles.tipContainer}>{props.description}</div>
			)}
		</div>
	);
};
