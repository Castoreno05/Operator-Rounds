import { FC, useEffect } from "react";
import useRoundEntry from "../../../hooks/context/useRoundEntry";
import styles from "./indicator.module.css";

type IndicatorProps = {
	show: boolean;
};

export const Indicator: FC<IndicatorProps> = ({ show }) => {
	const { setShowIndicator } = useRoundEntry();

	useEffect(() => {
		if (show) {
			setTimeout(() => {
				setShowIndicator(false);
				sessionStorage.removeItem("Update_Round");
			}, 5000);
		}
	}, [show]);

	return (show && <span className={styles.indicator} />) || null;
};

export default Indicator;
