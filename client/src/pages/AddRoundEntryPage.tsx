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
	const { currentStepIndex, rig, renderHeader, renderStep } = useMultiStep(
		mutation,
		rounds_completed,
		round_id
	);

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
export default AddRoundEntryPage;
