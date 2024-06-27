import { useNavigate } from "react-router-dom";
import { Layout } from "../components/common/layout/layout";
import useMultiStep from "../hooks/useMultiStep";
import { useRoundEntryCreate } from "../services/roundEntry";

const CreateRoundEntryPage = () => {
	const navigate = useNavigate();
	const { mutation } = useRoundEntryCreate({
		onSuccess: () => {
			navigate("/round-entries");
		},
		onError: () => navigate("/round-entries"),
	});
	const { currentStepIndex, rig, renderHeader, renderStep } =
		useMultiStep(mutation);

	return (
		<Layout
			systemHeaderIndex={currentStepIndex}
			navigationBackUrl="/round-entries"
			pageTitle={`${rig} Unit Round`}
			systemHeader={renderHeader()}
		>
			{renderStep()}
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
/************/
