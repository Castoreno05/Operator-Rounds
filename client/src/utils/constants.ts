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
	form_header: ["Lab View", "Containment", "Gas Supply"],
	form_data: [
		{
			labels: [
				"Catalyst bed top temperature",
				"Catalyst bed middle temperature",
				"Catalyst bed bottom temperature",
				"H-0501 temperature",
				"H-0502 temperature",
				"H-0503 temperature",
				"Capturing GC data",
				"Cooling water temperature",
			],
			inputs: [
				{
					type: "number",
					response: ["Disabled"],
					name: ["Catalyst Top Temperature"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Catalyst Middle Temperature"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Catalyst Bottom Temperature"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["H-0501 Temperature"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["H-0502 Temperature"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["H-0503 Temperature"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["Capturing GC Data"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Cooling Water Temperature"],
				},
			],
		},
		{
			labels: [
				"Permissive status",
				"Interior lighting",
				"Blue light",
				"H2O trap tank lined up",
				"H2O trap tank drained",
				"Exposed wire",
				"V-0601 level",
				"V-0602 level",
				"V-0202 level",
				"Black drum level (%)",
				"PU-0601 pressure",
				"PU-0602 pressure",
				"Drierite color",
				"GC faults",
			],
			inputs: [
				{
					type: "radio",
					response: ["On", "Off"],
					name: ["Permissive Status"],
				},
				{
					type: "radio",
					response: ["On", "Off"],
					name: ["Interior Lighting"],
				},
				{
					type: "radio",
					response: ["On", "Off"],
					name: ["Blue Light"],
				},
				{
					type: "radio",
					response: ["V-0902", "V-0903"],
					name: ["H2O Trap Tank Lined Up"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["H2O Trap Tank Drained"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["Exposed Wire"],
				},
				{ type: "number", response: ["Disabled"], name: ["V-0601 Level"] },
				{ type: "number", response: ["Disabled"], name: ["V-0602 Level"] },
				{ type: "number", response: ["Disabled"], name: ["V-0202 Level"] },
				{
					type: "number",
					response: ["Disabled"],
					name: ["Black Drum Level (%)"],
				},
				{ type: "number", response: ["Disabled"], name: ["PU-0601 Pressure"] },
				{
					type: "number",
					response: ["Disabled"],
					name: ["PU-0602 Pressure"],
				},
				{
					type: "radio",
					response: ["Clear", "Pink"],
					name: ["Drierite Color"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["GC Faults"],
				},
			],
		},
		{
			labels: [
				"Argon supply pressure",
				"Argon delivery pressure",
				"Helium supply pressure",
				"Helium delivery pressure",
				"Methane supply pressure",
				"Methane delivery pressure",
				"Calibration Gas supply pressure",
				"Calibration Gas delivery pressure",
				"10% Hydrogen supply pressure",
				"10% Hydrogen delivery pressure",
				"Hydrogen supply pressure",
				"Hydrogen delivery pressure",
				"Carbon Dioxide supply pressure",
				"Carbon Dioxide delivery pressure",
				"Natural Gas supply pressure",
				"Natural Gas delivery pressure",
			],
			inputs: [
				{
					type: "number",
					response: ["Disabled"],
					name: ["Argon Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Argon Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Helium Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Helium Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Methane Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Methane Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Calibration Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Calibration Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["10% Hydrogen Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["10% Hydrogen Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Hydrogen Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Hydrogen Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Carbon Dioxide Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Carbon Dioxide Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Natural Gas Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Natural Gas Delivery Pressure"],
				},
			],
		},
	],
};

export const RIG_32_SYSTEMS = {
	form_header: ["LabView", "Ammonia Area", "Rig 32 Panel", "Gas Supply"],
	form_data: [
		{
			labels: [
				"PID (Top IR Controller)",
				"Top IR voltage",
				"Bottom IR voltage",
				"H-0201 top temperature",
				"H-0101 temperature",
				"H-402 controller",
				"PV-0704 pressure",
			],
			inputs: [
				{ type: "number", response: ["Disabled"], name: ["Top IR Controller"] },
				{ type: "number", response: ["Disabled"], name: ["Top IR Voltage"] },
				{ type: "number", response: ["Disabled"], name: ["Bottom IR Voltage"] },
				{
					type: "number",
					response: ["Disabled"],
					name: ["H-0201 Top Temperature"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["H-0101 Temperature"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["H-402 Controller"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["PV-0704 Pressure"],
				},
			],
		},
		{
			labels: [
				"Vaporizor status",
				"Ammonia tank level",
				"Ammonia tank pressure",
				"Ammonia tank observation",
				"Ammonia odor",
				"Power indicator light",
				"PT-401A reading",
				"PT-401B reading",
				"Water tote level",
				"BV-405 (sprinkler) position",
			],
			inputs: [
				{
					type: "radio",
					response: ["On", "Off"],
					name: ["Vaporizor Status"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Ammonia Tank Level"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Ammonia Tank Pressure"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Ammonia Tank Observation"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["Ammonia Odor"],
				},
				{
					type: "radio",
					response: ["On", "Off"],
					name: ["Power Indicator Light"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["PT-401A Reading"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["PT-401B Reading"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Water Tote Level"],
				},
				{
					type: "radio",
					response: ["Opened", "Closed"],
					name: ["BV-405 Position"],
				},
			],
		},
		{
			labels: [
				"Regulator PCV-101 reading",
				"PT-102A reading",
				"PT-102B reading",
				"PT-103 reading",
				"PT-704 reading",
				"PT-504 suction",
				"PT-503 suction",
				"PT-501 discharge",
				"PT-502 discharge",
				"PG-504 suction",
				"PG-503 suction",
				"PG-501 discharge",
				"PG-502 discharge",
				"FG-501 reading",
				"FG-502 reading",
				"FG-503 reading",
				"FG-504 reading",
				"501 pump running",
				"502 pump running",
			],
			inputs: [
				{ type: "number", response: ["Disabled"], name: ["PCV-101 Reading"] },
				{ type: "number", response: ["Disabled"], name: ["PT-102A Reading"] },
				{ type: "number", response: ["Disabled"], name: ["PT-102B Reading"] },
				{ type: "number", response: ["Disabled"], name: ["PT-103 Reading"] },
				{ type: "number", response: ["Disabled"], name: ["PT-704 Reading"] },
				{ type: "number", response: ["Disabled"], name: ["PT-504 Suction"] },
				{ type: "number", response: ["Disabled"], name: ["PT-503 Suction"] },
				{ type: "number", response: ["Disabled"], name: ["PT-501 Discharge"] },
				{ type: "number", response: ["Disabled"], name: ["PT-502 Discharge"] },
				{ type: "number", response: ["Disabled"], name: ["PG-504 Suction"] },
				{ type: "number", response: ["Disabled"], name: ["PG-503 Suction"] },
				{ type: "number", response: ["Disabled"], name: ["PG-501 Discharge"] },
				{ type: "number", response: ["Disabled"], name: ["PG-502 Discharge"] },
				{ type: "number", response: ["Disabled"], name: ["FG-501 Reading"] },
				{ type: "number", response: ["Disabled"], name: ["FG-502 Reading"] },
				{ type: "number", response: ["Disabled"], name: ["FG-503 Reading"] },
				{ type: "number", response: ["Disabled"], name: ["FG-504 Reading"] },
				{
					type: "radio",
					response: ["Pump A", "Pump B"],
					name: ["501 Pump Running"],
				},
				{
					type: "radio",
					response: ["Pump A", "Pump B"],
					name: ["502 Pump Running"],
				},
			],
		},
		{
			labels: [
				"Nitrogen supply pressure",
				"Nitrogen delivery pressure",
				"Helium supply pressure",
				"Helium delivery pressure",
				"Hydrogen supply pressure",
				"Hydrogen delivery pressure",
				"Argon supply pressure",
				"Argon delivery pressure",
				"Nitrogen cylinders left",
				"Helium cylinders left",
				"Hydrogen cylinders left",
				"Argon cylinders left",
			],
			inputs: [
				{ type: "number", response: ["Disabled"], name: ["Nitrogen Supply Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Nitrogen Delivery Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Helium Supply Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Helium Delivery Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Hydrogen Supply Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Hydrogen Delivery Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Argon Supply Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Argon Delivery Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Nitrogen Cylinders Left"] },
				{ type: "number", response: ["Disabled"], name: ["Helium Cylinders Left"] },
				{ type: "number", response: ["Disabled"], name: ["Hydrogen Cylinders Left"] },
				{ type: "number", response: ["Disabled"], name: ["Argon Cylinders Left"] },
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
				"Natural gas smell",
				"Emergency generator overall condition (leaks, smell, visual deterioration)",
				"Natural gas supply pressure",
				"Natural gas delivery pressure",
			],
			inputs: [
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Control Room"],
				},
				{ type: "number", response: ["Disabled"], name: ["UPS Battery Life"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["UPS Condition"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["Natural Gas Present"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Emergency Generator Condition"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Natural Gas Supply"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Natural Gas Delivery"],
				},
			],
		},
		{
			labels: ["Delivery pressure", "Level(in)"],
			inputs: [
				{
					type: "number",
					response: ["Disabled"],
					name: ["Nitrogen Gas Delivery"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Nitrogen Tank Level"],
				},
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
				{
					type: "number",
					response: ["Disabled"],
					name: ["Compressor Pressure"],
				},
				{ type: "number", response: ["Disabled"], name: ["Wet Tank Pressure"] },
				{ type: "number", response: ["Disabled"], name: ["Dry Tank Pressure"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Blowdown Condition"],
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
					name: ["Ammonia Area Condition"],
				},
				{
					type: "radio",
					response: ["Yes", "No"],
					name: ["Odor Present"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Deluge Tank Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Ammonia Tank Level"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Ammonia Tank Pressure"],
				},
				{
					type: "radio",
					response: ["Opened", "Closed"],
					name: ["Feed Valve"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Argon Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Argon Delivery Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Hydrogen Supply Pressure"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Hydrogen Delivery Pressure"],
				},
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
					name: ["Fan"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Fan Condition"],
				},
				{ type: "number", response: ["Disabled"], name: ["TK-3000 Level"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Pump Condition"],
				},
				{ type: "number", response: ["Disabled"], name: ["Pump Suction"] },
				{ type: "number", response: ["Disabled"], name: ["Pump Discharge"] },
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Water Parameters"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["Chemical Levels"],
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
					name: ["Test Bay Condition"],
				},
				{
					type: "radio",
					response: ["On", "Off"],
					name: ["Indicator Lamps"],
				},
				{
					type: "radio",
					response: ["F-3000A", "F-3000B"],
					name: ["Filter"],
				},
				{
					type: "number",
					response: ["Disabled"],
					name: ["Differential Pressure"],
				},
			],
		},
		{
			labels: [
				"VCU temperature (°F)",
				"Hydrogen bottles blocked in when not in use",
				"VCU area condition",
			],
			inputs: [
				{ type: "number", response: ["Disabled"], name: ["VCU Temp"] },
				{
					type: "radio",
					response: ["Opened", "Closed"],
					name: ["Hydrogen Bottles"],
				},
				{
					type: "radio",
					response: ["Good", "Bad"],
					name: ["VCU Condition"],
				},
			],
		},
	],
};

export const CATALYST_SYSTEMS = {
	form_header: [
		"Wet Chem & Platform",
		"Centrifuge",
		"Calcination Furnace",
		"Reduction Furnace",
		"Lab",
		"Evaporator",
	],
	form_data: [
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Natural gas smell",
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
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Natural gas smell",
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
		{
			labels: [
				"Control room housekeeping",
				"UPS battery life %",
				"UPS condition",
				"Natural gas smell",
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
