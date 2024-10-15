import { Layout } from "../components/common/layout/layout";
import { useLocation } from "react-router-dom";
import useRoundEntry from "../hooks/context/useRoundEntry";
import RoundDetails from "../components/round-details/roundDetails";

export const ViewRoundEntryPage = () => {
	const location = useLocation();
	const roundId = Number(location.pathname.split("/").pop());
	const { roundEntriesById } = useRoundEntry();

	const roundEntry = roundEntriesById[roundId] || {};

	return (
		<Layout
			navigationBackUrl="/round-entries"
			pageTitle="Round Details"
		>
			<RoundDetails {...roundEntry} />
		</Layout>
	);
};

export default ViewRoundEntryPage;


/************
 * ViewRoundEntryPage will render the selected rounds in RoundEntriesPage.
 * Each round and all the details pertaining to the round will be displayed to the user.
 * Rounds will be laid out to display all information in a PDF format.
 * 
 * 
 * ******** Future Features ********
 * 
 * 
 * 
/************/