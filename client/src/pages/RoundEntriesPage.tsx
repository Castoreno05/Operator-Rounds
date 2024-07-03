// import React, { useState } from "react";
import { Layout } from "../components/common/layout/layout";
import { HeaderButton } from "../components/header-button/headerButton";
import RoundEntryTable from "../components/round-entry-table/roundEntryTable";
import useRoundEntry from "../hooks/context/useRoundEntry";

export const RoundEntriesPage = () => {
	const { roundEntries } = useRoundEntry();

	return (
		<Layout isLoading={!roundEntries}>
			<HeaderButton />
			<RoundEntryTable entries={roundEntries} />
		</Layout>
	);
};

export default RoundEntriesPage;

/************
 * RoundEntriesPage will render the rounds that are completed for the shift.
 * "Create New Entry" button will provide a modal to select units for the facilities. Once a selection has been made, the application will redirect you to CreateRoundEntryPage.
 * "RoundEntryTable" will take in data as props and passed into the component to be rendered.
/************/
