import { useState } from "react";
import { Layout } from "../components/common/layout/layout";
import { UnitSelector } from "../components/unit-selector/unitSelector";

const CreateRoundEntryPage = () => {
	const unitRounds = JSON.parse(sessionStorage.getItem("Unit_Rounds") || "{}");

	return (
		<Layout
			pageTitle={`${unitRounds.rig} Unit Round`}
			// navigationBackUrl="/round-entries"
			// isLoading={initialLoading}
		>
			<UnitSelector rigName={unitRounds.rig} />
		</Layout>
	);
};

export default CreateRoundEntryPage;

/************
 *  CreateRoundEntryPage will render the systems within the selected unit. The header will have a display of the system that is actively collecting data from the form provided.
 *  Each form will display a variety of inputs associated with the active stystem.
 *  Once all data is collected the application will enable the operator to proceed to the next step. All steps will have an ablilty to return to to the previous step to make edits.
 *  In the instance the application has been navigated to another page while the data is being collected the sessionsStorage (Only available while the application has not been closed and is in the progress of collecting data) will keep track of the progress, allowing the operator to pick back up from where they left off during the progess of making their rounds. 
 *  The final system in the rounds will have a submit button that will save the data to the backend, remove populated data from sessionStorage, and update the RoundEntriesPage for operations to reference.
/************


// const [rigName, setRigName] = useState("");
// const [operator, setOperator] = useState("");
// const [shiftDate, setShiftDate] = useState("");
// const [lastTimeSubmitted, setLastTimeSubmitted] = useState("");
// const [lastRoundPerformedBy, setLastRoundPerformedBy] = useState("");
// const [roundsCompleted, setRoundsCompleted] = useState("");
// const [message, setMessage] = useState("");

// const handleSubmit = async (event: any) => {
// 	event.preventDefault();
// 	try {
// 		const response = await axios.post(
// 			"http://localhost:3001/api/rounds/insertRounds",
// 			{
// 				rig_name: rigName,
// 				operator: operator,
// 				shift_date: shiftDate,
// 				last_time_submitted: lastTimeSubmitted,
// 				last_round_performed_by: lastRoundPerformedBy,
// 				rounds_completed: roundsCompleted,
// 			}
// 		);
// 		setMessage(
// 			"Data inserted successfully: " + JSON.stringify(response.data)
// 		);
// 	} catch (error) {
// 		console.error("Error inserting data:", error);
// 		setMessage("Error inserting data.");
// 	}
// };

	/* <form onSubmit={(event) => handleSubmit(event)}>
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
			{message && <p>{message}</p>} */
