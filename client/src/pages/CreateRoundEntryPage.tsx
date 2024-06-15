import { useState } from "react";
import axios from "axios";
import { Layout } from "../components/common/layout/layout";

const CreateRoundEntryPage = () => {
	const [rigName, setRigName] = useState("");
	const [operator, setOperator] = useState("");
	const [shiftDate, setShiftDate] = useState("");
	const [lastTimeSubmitted, setLastTimeSubmitted] = useState("");
	const [lastRoundPerformedBy, setLastRoundPerformedBy] = useState("");
	const [roundsCompleted, setRoundsCompleted] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:3001/api/rounds/insertRounds",
				{
					rig_name: rigName,
					operator: operator,
					shift_date: shiftDate,
					last_time_submitted: lastTimeSubmitted,
					last_round_performed_by: lastRoundPerformedBy,
					rounds_completed: roundsCompleted,
				}
			);
			setMessage(
				"Data inserted successfully: " + JSON.stringify(response.data)
			);
		} catch (error) {
			console.error("Error inserting data:", error);
			setMessage("Error inserting data.");
		}
	};

	return (
		<Layout
			pageTitle="Create Round Entry"
			navigationBackUrl="/round-entries"
			// isLoading={initialLoading}
		>
			<h1>Create Round Entry Page</h1>
			<form onSubmit={(event) => handleSubmit(event)}>
				<div>
					<label>
						Rig Name:
						<input
							type="text"
							value={rigName}
							onChange={(e) => setRigName(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label>
						Operator:
						<input
							type="text"
							value={operator}
							onChange={(e) => setOperator(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label>
						Shift Date:
						<input
							type="date"
							value={shiftDate}
							onChange={(e) => setShiftDate(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label>
						Last Time Submitted:
						<input
							type="datetime-local"
							value={lastTimeSubmitted}
							onChange={(e) => setLastTimeSubmitted(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label>
						Last Round Performed By:
						<input
							type="text"
							value={lastRoundPerformedBy}
							onChange={(e) => setLastRoundPerformedBy(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label>
						Rounds Completed:
						<input
							type="number"
							value={roundsCompleted}
							onChange={(e) => setRoundsCompleted(e.target.value)}
							required
						/>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
			{message && <p>{message}</p>}
		</Layout>
	);
};

export default CreateRoundEntryPage;
