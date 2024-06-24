/********************************************* Exported Types **************************************************************************/

export type RigNames = "Rig31" | "Rig32" | "TestBay" | "Catalyst";

export type RigSelection = { label: RigNames; type: string }[];

/********************************************* Exported Variables **********************************************************************/

export const MODAL_OPTION_STATE: RigSelection = [
	{ label: "Rig31", type: "radio" },
	{ label: "Rig32", type: "radio" },
	{ label: "TestBay", type: "radio" },
	{ label: "Catalyst", type: "radio" },
];

export const RIG_31_SYSTEMS = {
	form_header: ["System A", "System B", "System C"],
	form_data: [
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Nateral gas smell",
				"Emergency generator overall condition (leaks, smell, visual deterioration)",
				"Natural gas supply pressure",
				"Natural gas delivery pressure",
			],
			inputs: [
				{ type: "radio", response: ["Good", "Bad"] },
				{ type: "radio", response: ["Yes", "No"] },
				{ type: "radio", response: ["Good", "Bad"] },
			],
		},
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Nateral gas smell",
				"Emergency generator overall condition (leaks, smell, visual deterioration)",
				"Natural gas supply pressure",
				"Natural gas delivery pressure",
			],
			inputs: [
				{ type: "radio", response: ["Good", "Bad"] },
				{ type: "radio", response: ["Yes", "No"] },
				{ type: "radio", response: ["Good", "Bad"] },
			],
		},
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Nateral gas smell",
				"Emergency generator overall condition (leaks, smell, visual deterioration)",
				"Natural gas supply pressure",
				"Natural gas delivery pressure",
			],
			inputs: [
				{ type: "radio", response: ["Good", "Bad"] },
				{ type: "radio", response: ["Yes", "No"] },
				{ type: "radio", response: ["Good", "Bad"] },
			],
		},
	],
};

export const RIG_32_SYSTEMS = {
	form_header: [
		"Ammonia",
		"Gas Panel",
		"Cooling Water",
		"Gas Cylinders",
		"LabView",
	],
	form_data: [
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Nateral gas smell",
				"Emergency generator overall condition (leaks, smell, visual deterioration)",
				"Natural gas supply pressure",
				"Natural gas delivery pressure",
			],
			inputs: [
				{ type: "radio", response: ["Good", "Bad"] },
				{ type: "radio", response: ["Good", "Bad"] },
				{ type: "radio", response: ["Good", "Bad"] },
			],
		},
	],
};

export const TEST_BAY_SYSTEMS = {
	form_header: [
		"Warehouse",
		"Nitrogen",
		"Compressed-Air",
		"Ammonia",
		"Cooling Water",
		"Test Bay Skid",
		"VCU",
	],
	form_data: [
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Nateral gas smell",
				"Emergency generator overall condition (leaks, smell, visual deterioration)",
				"Natural gas supply pressure",
				"Natural gas delivery pressure",
			],
			inputs: [
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["control-good", "control-bad"],
				},
				{ type: "number", response: ["Disabled"], name: ["battery-life"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["ups-good", "ups-bad"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["smell-yes", "smell-no"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["generator-good", "generator-bad"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["nat-supply-pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["nat-delivery-pressure"],
				},
			],
		},
		{
			labels: ["Delivery pressure", "Level(in)"],
			inputs: [
				{ type: "number", response: ["Disabled"], name: ["nitrogen-deliv"] },
				{ type: "number", response: ["Disabled"], name: ["nitrogen-level"] },
			],
		},
		{
			labels: [
				"Compressor pressure",
				"Wet air pressure",
				"Dry air pressure",
				"Blowdown mechanism status",
			],
			inputs: [
				{ type: "number", response: ["Disabled"], name: ["compress-pressure"] },
				{ type: "number", response: ["Disabled"], name: ["wet-pressure"] },
				{ type: "number", response: ["Disabled"], name: ["dry-pressure"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["mech-good", "mech-bad"],
				},
			],
		},
		{
			labels: [
				"Ammonia area condition",
				"Ammonia odor presence",
				"Water tank supply (from Pearland city)",
				"Ammonia tank level",
				"Ammonia tank pressure",
				"V-0401 feed valve blocked in when not in use (HV-1002)",
				"Argon supply pressure",
				"Argon delivery pressure",
				"Hydrogen supply pressure",
				"Hydrogen delivery pressure",
			],
			inputs: [
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["ammonia-condition-good", "ammonia-condition-bad"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["ammonia-presence-yes", "ammonia-presence-no"],
				},
				{ type: "number", response: ["Disabled"], name: ["tank-supply"] },
				{ type: "number", response: ["Disabled"], name: ["tank-level"] },
				{ type: "number", response: ["Disabled"], name: ["tank-pressure"] },
				{
					type: "radio",
					response: ["Opened", "Closed"],
					name: ["feed-open", "feed-closed"],
				},
				{ type: "number", response: ["Disabled"], name: ["argon-supply"] },
				{ type: "number", response: ["Disabled"], name: ["argon-delivery"] },
				{ type: "number", response: ["Disabled"], name: ["hydrogen-supply"] },
				{ type: "number", response: ["Disabled"], name: ["hydrogen-delivery"] },
			],
		},
		{
			labels: [
				"Cooling fan running",
				"Cooling fan condition",
				"TK-3000 level(in)",
				"Overall pump condition",
				"Running pump suction",
				"Running pump discharge",
				"Water Parameters",
				"Chemical visual levels",
			],
			inputs: [
				{
					type: "radio",
					response: ["AC-3000A", "AC-3000B"],
					name: ["fan-a", "fan-b"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["fan-condition-good", "fan-condition-bad"],
				},
				{ type: "number", response: ["Disabled"], name: ["tk-level"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["pump-condition-good", "pump-condition-bad"],
				},
				{ type: "number", response: ["Disabled"], name: ["pump-suction"] },
				{ type: "number", response: ["Disabled"], name: ["pump-discharge"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["water-good", "water-bad"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["visual-good", "visual-bad"],
				},
			],
		},
		{
			labels: [
				"Test Bay overall condition (leaks, smell, visual, deterioration)",
				"Indicator lamps (while in operation)",
				"Filter in use",
				"Differential pressure (psig)",
			],
			inputs: [
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["bay-good", "bay-bad"],
				},
				{
					type: "radio",
					response: ["On", "Off"],
					name: ["lamps-on", "lamps-off"],
				},
				{
					type: "radio",
					response: ["F-3000A", "F-3000B"],
					name: ["filter-a", "filter-b"],
				},
				{ type: "number", response: ["Disabled"], name: ["diff-pressure"] },
			],
		},
		{
			labels: [
				"VCU temperature (°F)",
				"Hydrogen bottles blocked in when not in use",
				"VCU area condition",
			],
			inputs: [
				{ type: "number", response: ["Disabled"], name: ["vcu-temp"] },
				{
					type: "radio",
					response: ["Opened", "Closed"],
					name: ["bottles-opened", "bottles-closed"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["vcu-good", "vcu-bad"],
				},
			],
		},
	],
};

export const CATALYST_SYSTEMS = {
	form_header: ["Catalyst System A", "Catalyst System B"],
	form_data: [
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Nateral gas smell",
				"Emergency generator overall condition (leaks, smell, visual deterioration)",
				"Natural gas supply pressure",
				"Natural gas delivery pressure",
			],
			inputs: [
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["control-good", "control-bad"],
				},
				{ type: "number", response: ["Disabled"], name: ["battery-life"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["ups-good", "ups-bad"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["smell-yes", "smell-no"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["generator-good, generator-bad"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["nat-supply-pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["nat-delivery-pressure"],
				},
			],
		},
		{
			labels: [
				"Ammonia area condition",
				"Ammonia odor presence",
				"Water tank supply (from Pearland city)",
				"Ammonia tank level",
				"Ammonia tank pressure",
				"V-0401 feed valve blocked in when not in use (HV-1002)",
				"Argon supply pressure",
				"Argon delivery pressure",
				"Hydrogen supply pressure",
				"Hydrogen delivery pressure",
			],
			inputs: [
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["ammonia-condition-good", "ammonia-condition-bad"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["ammonia-presence-yes", "ammonia-presence-no"],
				},
				{ type: "number", response: ["Disabled"], name: ["tank-supply"] },
				{ type: "number", response: ["Disabled"], name: ["tank-level"] },
				{ type: "number", response: ["Disabled"], name: ["tank-pressure"] },
				{
					type: "radio",
					response: ["Opened", "Closed"],
					name: ["feed-open", "feed-closed"],
				},
				{ type: "number", response: ["Disabled"], name: ["argon-supply"] },
				{ type: "number", response: ["Disabled"], name: ["argon-delivery"] },
				{ type: "number", response: ["Disabled"], name: ["hydrogen-supply"] },
				{ type: "number", response: ["Disabled"], name: ["hydrogen-delivery"] },
			],
		},
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
