import { useNavigate } from "react-router-dom";
import { Layout } from "../components/common/layout/layout";
import useMultiStep from "../hooks/useMultiStep";
import { useRoundEntryUpdate } from "../services/roundEntry";
import useRoundEntry from "../hooks/context/useRoundEntry";

export const AddRoundEntryPage = () => {
	const navigate = useNavigate();
	const { refetch } = useRoundEntry();
	const { round_id, rounds_completed } = JSON.parse(
		sessionStorage.getItem("Unit_Rounds") || "{}"
	);

	const { mutation } = useRoundEntryUpdate({
		onSuccess: () => {
			navigate("/round-entries");
			refetch();
		},
		onError: () => navigate("/round-entries"),
	});
	const { rig, renderStep } = useMultiStep(
		mutation,
		rounds_completed,
		round_id
	);

	return (
		<Layout
			navigationBackUrl="/round-entries"
			pageTitle={`${rig} Unit Round`}
		>
			{renderStep()}
		</Layout>
	);
};
export default AddRoundEntryPage;

/************
 *  CreateRoundEntryPage will render the systems within the selected unit. The header will have a display of the system that is actively collecting data from the form provided.
 *  Each form will display a variety of inputs associated with the active stystem.
 *  Once all data is collected the application will enable the operator to proceed to the next step. All steps will have an ablilty to return to to the previous step to make edits.
 *  In the instance the application has been navigated to another page while the data is being collected the sessionsStorage (Only available while the application has not been closed and is in the progress of collecting data) will keep track of the progress, allowing the operator to pick back up from where they left off during the progess of making their rounds. 
 *  The final system in the rounds will have a submit button that will save the data to the backend, remove populated data from sessionStorage, and update the RoundEntriesPage for operations to reference.
 * 
 * ******** Future Features ********
 * 
 * Toggle button that gives a system status of "online" or "offline".
 * Section to add comments to the system.
 * Review page once systems are complete.
 * Ability to resume rounds from where the operator left off in the instance of navigating to another page.
/************/
