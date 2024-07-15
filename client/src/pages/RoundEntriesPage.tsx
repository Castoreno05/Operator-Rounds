// import React, { useState } from "react";
import { Layout } from "../components/common/layout/layout";
import ReactTable from "../components/react-table/reactTable";
import useRoundEntry from "../hooks/context/useRoundEntry";

export const RoundEntriesPage = () => {
	const { roundEntries, showIndicator } = useRoundEntry();

	return (
		<Layout isLoading={!roundEntries}>
			<ReactTable
				entries={roundEntries}
				show={showIndicator}
			/>
		</Layout>
	);
};

export default RoundEntriesPage;

/************
 * RoundEntriesPage will render the rounds that are completed for the shift.
 * "Create New Entry" button will provide a modal to select units for the facilities. Once a selection has been made, the application will redirect you to CreateRoundEntryPage.
 * "RoundEntryTable" will take in data as props and pass into the component to be rendered.
 * 
 * ******** Future Features ********
 * 
 * View Details button that will redirect you to an overview of the created entry.
 * Column re-sizer.
 * Options to hide or show table columns
 * Visual representation of table additions.
 * Selector on table rows.
 * Print option for selected rows.
/************/
