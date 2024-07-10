import { useState, useEffect } from "react";
import useAuth from "./context/useAuth";
import { CATALYST_SYSTEMS, TEST_BAY_SYSTEMS } from "../utils/constants";
import SystemForms from "../components/system-forms/systemForms";

const SYSTEMS = {
	Catalyst: CATALYST_SYSTEMS,
	TestBay: TEST_BAY_SYSTEMS,
};
type SystemKey = keyof typeof SYSTEMS;

export default function useMultiStep(
	mutation?: any,
	roundsCompleted?: number,
	round_id?: number
) {
	const { authenticatedAccount } = useAuth();
	const { rig } = JSON.parse(sessionStorage.getItem("Unit_Rounds") || "{}");
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [currentSystem] = useState<SystemKey>(rig);
	const [formData, setFormData] = useState<any>({});
	const [isNextEnabled, setIsNextEnabled] = useState(false);

	const system = SYSTEMS[currentSystem];
	const isLastStep =
		currentStepIndex === SYSTEMS[currentSystem].form_header.length - 1;
	const stepKey = system.form_header[currentStepIndex];

	useEffect(() => {
		validateForm();
		// eslint-disable-next-line
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
	const validateForm = () => {
		const stepKey = SYSTEMS[currentSystem].form_header[currentStepIndex];
		const currentFormData = formData[stepKey] || {};
		const currentInputs =
			SYSTEMS[currentSystem].form_data[currentStepIndex].inputs;

		const allFilled = currentInputs.every((input) => {
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
	}
	function next() {
		setCurrentStepIndex((i) => {
			if (i >= SYSTEMS[currentSystem].form_header.length - 1) return i;
			return i + 1;
		});
	}
	function back() {
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
			/>
		);
	};

	return {
		currentStepIndex,
		rig,
		renderStep,
	};
}
