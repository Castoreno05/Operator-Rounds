import { FC } from "react";
import { SystemForm } from "../system-form/systemForm";
import {
	RIG_31_SYSTEMS,
	RIG_32_SYSTEMS,
	TEST_BAY_SYSTEMS,
	CATALYST_SYSTEMS,
} from "../../utils/constants";

type UnitSelectorProps = {
	rigName: string;
};

export const UnitSelector: FC<UnitSelectorProps> = (props) => {
	switch (props.rigName) {
		case "Rig 31":
			return <SystemForm systems={RIG_31_SYSTEMS} />;
		case "Rig 32":
			return <SystemForm systems={RIG_32_SYSTEMS} />;
		case "Test Bay":
			return <SystemForm systems={TEST_BAY_SYSTEMS} />;
		case "Catalyst":
			return <SystemForm systems={CATALYST_SYSTEMS} />;
		default:
			return null;
	}
};
