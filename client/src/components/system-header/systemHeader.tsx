import React from "react";
import styles from "./systemHeader.module.css";

type SystemHeaderProps = {
	systems: string[];
	activeSystem: number;
};

export const SystemHeader: React.FC<SystemHeaderProps> = ({
	systems,
	activeSystem,
}) => {
	const system = systems.map((s, i) => {
		return (
			<h1
				key={i}
				className={
					i === activeSystem ? `${styles.activeSystem}` : `${styles.system}`
				}
			>
				{s}
			</h1>
		);
	});
	return <div className={styles.headerContainer} style={{gridTemplateColumns: `repeat(${systems.length}, 1fr)`}}>{system}</div>;
};

export default SystemHeader;
