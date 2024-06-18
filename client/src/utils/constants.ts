/********************************************* Exported Types **************************************************************************/

export type RigNames = "Rig 31" | "Rig 32" | "Test Bay" | "Catalyst";

export type RigSelection = { label: RigNames; type: string }[];

/********************************************* Exported Variables **********************************************************************/

export const MODAL_OPTION_STATE: RigSelection = [
	{ label: "Rig 31", type: "radio" },
	{ label: "Rig 32", type: "radio" },
	{ label: "Test Bay", type: "radio" },
	{ label: "Catalyst", type: "radio" },
];

export const RIG_31_SYSTEMS = {
	formHeader: ["System A", "System B", "System C"],
	descriptions: [
		"Render form for System A",
		"Render form for System B",
		"Render form for System C",
	],
};

export const RIG_32_SYSTEMS = {
	formHeader: [
		"Ammonia",
		"Gas Panel",
		"Cooling Water",
		"Gas Cylinders",
		"LabView",
	],
	descriptions: [
		"Render form for Ammonia",
		"Render form for Gas Panel",
		"Render form for Cooling Water",
		"Render form for Gas Cylinders",
		"Render form for LabView",
	],
};

export const TEST_BAY_SYSTEMS = {
	formHeader: ["Test System 1", "Test System 2"],
	descriptions: [
		"Render form for Test System 1",
		"Render form for Test System 2",
	],
};

export const CATALYST_SYSTEMS = {
	formHeader: ["Catalyst System A", "Catalyst System B"],
	descriptions: [
		"Render form for Catalyst System A",
		"Render form for Catalyst System B",
	],
};

export const MOBILE_BREAKPOINT = 768;

export const ROUND_API_URL = "http://localhost:3001/api";

export const REACT_APP_APPLICATION_CLIENT_ID =
	// '9ea11ac6-6509-4264-8bff-12e600f3b084'
	// "b8cd0e46-7c4d-45ee-9f2c-c2347da71fc3";
	"54dae81e-b920-4a8a-8ca2-12765de0c78d";

export const REACT_APP_APPLICATION_AUTHORITY =
	// 'https://login.microsoftonline.com/9dee0590-9ade-48bf-8659-402111e6efea'
	"https://login.microsoftonline.com/MatthewCastorenoyahoo.onmicrosoft.com";
