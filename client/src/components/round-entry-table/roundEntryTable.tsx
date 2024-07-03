import React from "react";
import { useNavigate } from "react-router-dom";
import { RoundEntry } from "../../models/roundEntry";
import { formatDateString } from "../../utils/stringFormatter";
import styles from "./roundEntryTable.module.css";

type RoundEntriesTableProps = {
	entries: RoundEntry[];
};

const RoundEntryTable: React.FC<RoundEntriesTableProps> = ({ entries }) => {
	const navigate = useNavigate();

	const handleEditRound = (
		id: number,
		rig: string,
		roundsCompleted: number
	) => {
		sessionStorage.setItem(
			"Unit_Rounds",
			JSON.stringify({
				round_id: id,
				rig: rig,
				rounds_completed: roundsCompleted,
			})
		);
		return navigate(`/add-round-entry/${id}`);
	};

	const entry = entries.map((e, i) => {
		const roundsCompleted = e.rounds_completed.length;
		const lastPerson =
			e.last_round_performed_by[e.last_round_performed_by.length - 1];
		return (
			<div
				key={i}
				className={styles.grid}
			>
				<p>{e.round_id}</p>
				<p>{e.rig_name}</p>
				<p>{e.operator}</p>
				<p>{formatDateString(e.shift_date).split(",")[0]}</p>
				<p>{formatDateString(e.last_time_submitted).split(",")[1]}</p>
				<p>{lastPerson}</p>
				<p>{roundsCompleted}</p>
				<button
					disabled={roundsCompleted >= 3 ? true : false}
					onClick={() =>
						handleEditRound(e.round_id, e.rig_name, roundsCompleted)
					}
				>
					+ New Round
				</button>
			</div>
		);
	});
	return <div className={styles.table}>{entry}</div>;
};

export default RoundEntryTable;
