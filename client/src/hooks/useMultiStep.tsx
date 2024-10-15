import React, { useState, useEffect } from "react";
import useAuth from "./context/useAuth";
import {
	CATALYST_SYSTEMS,
	RIG_31_SYSTEMS,
	RIG_32_SYSTEMS,
	TEST_BAY_SYSTEMS,
} from "../utils/constants";
import SystemForms from "../components/system-forms/systemForms";

const SYSTEMS = {
	Catalyst: CATALYST_SYSTEMS,
	TestBay: TEST_BAY_SYSTEMS,
	Rig32: RIG_32_SYSTEMS,
	Rig31: RIG_31_SYSTEMS,
};
type SystemKey = keyof typeof SYSTEMS;
type FormData = {
	[key: string]: {
		[field: string]: string;
	};
};

export default function useMultiStep(
	mutation?: any,
	roundsCompleted?: number,
	round_id?: number
) {
	const { authenticatedAccount } = useAuth();
	const { rig } = JSON.parse(sessionStorage.getItem("Unit_Rounds") || "{}");
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [currentSystem] = useState<SystemKey>(rig);
	const [formData, setFormData] = useState<Partial<FormData>>(() => {
		const savedFormData = sessionStorage.getItem("formData");
		return savedFormData ? JSON.parse(savedFormData) : {};
	});
	const [isNextEnabled, setIsNextEnabled] = useState(false);
	const firstPropertyObject = formData[Object.keys(formData)[0]];
	const firstNestedValue =
		firstPropertyObject?.[Object.keys(firstPropertyObject)[0]] === "offline" ? false : true;
	const [online, setOnline] = useState(firstNestedValue);

	const system = SYSTEMS[currentSystem];
	const isLastStep =
		currentStepIndex === SYSTEMS[currentSystem]?.form_header?.length - 1;
	const stepKey = system?.form_header[currentStepIndex];

	useEffect(() => {
		validateForm();
		// eslint-disable-next-line
		sessionStorage.setItem("formData", JSON.stringify(formData));
	}, [formData, currentStepIndex]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevFormData: any) => {
			const stepKey = SYSTEMS[currentSystem].form_header[currentStepIndex];
			const newStepData = {
				...prevFormData[stepKey],
				[name]: value,
			};
			return {
				...prevFormData,
				[stepKey]: newStepData,
			};
		});
	};
	const handleOnline = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newOnlineState = e.target.checked;
		setOnline(newOnlineState);
		if (!newOnlineState) {
			setFormData((prevFormData) => {
				const updatedFormData: Partial<FormData> = {
					...prevFormData,
					[stepKey]: {
						...prevFormData[stepKey],
					},
				};
				const currentInputs =
					SYSTEMS[currentSystem].form_data[currentStepIndex].inputs;
				currentInputs.forEach((input) => {
					if (input.type === "radio") {
						updatedFormData[stepKey]![input.name[0]] = "offline";
					} else {
						input.name.forEach((name) => {
							updatedFormData[stepKey]![name] = "offline";
						});
					}
				});
				return updatedFormData;
			});
		} else if (newOnlineState) {
			setFormData((prevFormData) => {
				const updatedFormData: Partial<FormData> = { ...prevFormData };
				if (updatedFormData[stepKey]) {
					delete updatedFormData[stepKey];
				}
				return updatedFormData;
			});
		}
	};
	const validateForm = () => {
		const stepKey = SYSTEMS[currentSystem]?.form_header[currentStepIndex];
		const currentFormData = formData[stepKey] || {};
		const currentInputs =
			SYSTEMS[currentSystem]?.form_data[currentStepIndex].inputs;

		const allFilled = currentInputs?.every((input) => {
			if (input.type === "radio") {
				return currentFormData[input.name[0]] !== undefined;
			} else {
				return input.name.every((name) => currentFormData[name]);
			}
		});

		setIsNextEnabled(allFilled);
	};

	function handleSubmit() {
		if (!roundsCompleted) {
			mutation({
				rig_name: rig,
				operator: authenticatedAccount?.name,
				shift_date: new Date(),
				last_time_submitted: new Date(),
				last_round_performed_by: authenticatedAccount?.name,
				rounds_completed: JSON.stringify(formData),
			});
		} else {
			mutation({
				round_id: round_id,
				last_time_submitted: new Date(),
				last_round_performed_by: authenticatedAccount?.name,
				rounds_completed: formData,
			});
		}
		sessionStorage.removeItem("formData");
	}
	function next() {
		const nextStepKey = system.form_header[currentStepIndex + 1];
		const nextFormData = formData[nextStepKey];
		const firstPropertyKey = !nextFormData ? "" : Object.keys(nextFormData)[0];
		const firstPropertyValue = nextFormData
			? nextFormData[firstPropertyKey]
			: "";

		if (!nextFormData) {
			setOnline(true);
		} else if (firstPropertyValue === "offline") {
			setOnline(false);
		} else if (firstPropertyValue !== "offline") {
			setOnline(true);
		}

		setCurrentStepIndex((i) => {
			if (i >= SYSTEMS[currentSystem].form_header.length - 1) return i;
			return i + 1;
		});
	}
	function back() {
		const nextStepKey = system.form_header[currentStepIndex - 1];
		const prevFormData = formData[nextStepKey] || {};
		const firstPropertyKey = Object.keys(prevFormData)[0];
		const firstPropertyValue = prevFormData[firstPropertyKey];

		if (firstPropertyValue === "offline") {
			setOnline(false);
		} else {
			setOnline(true);
		}

		setCurrentStepIndex((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	}

	const renderStep = () => {
		return (
			<SystemForms
				systems={system.form_header}
				activeSystem={currentStepIndex}
				isLastStep={isLastStep}
				labels={system.form_data[currentStepIndex].labels}
				inputs={system.form_data[currentStepIndex].inputs}
				formData={formData[stepKey] || {}}
				handleChange={handleChange}
				nextStep={isLastStep ? handleSubmit : next}
				prevStep={currentStepIndex > 0 ? back : undefined}
				isNextEnabled={isNextEnabled}
				online={online}
			/>
		);
	};

	return {
		currentStepIndex,
		rig,
		renderStep,
		handleOnline,
		online,
	};
}
