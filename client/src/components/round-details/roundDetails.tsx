import { FC } from "react";

type RoundDetailsProps = {
	last_round_performed_by?: string[] | string;
	rig_name: string;
	operator: string;
	round_id: number;
	shift_date: string;
	rounds_completed: string[];
};

export const RoundDetails: FC<RoundDetailsProps> = ({
	last_round_performed_by = [],
	rig_name,
	operator,
	round_id,
	shift_date,
	rounds_completed,
}) => {
	const submitters = Array.isArray(last_round_performed_by)
		? last_round_performed_by
		: [last_round_performed_by];

	const completedRounds = rounds_completed?.map((round) => JSON.parse(round));

	return (
		<>
			{submitters}
			<pre>{JSON.stringify(completedRounds, null, 2)}</pre>
		</>
	);
};

export default RoundDetails;
