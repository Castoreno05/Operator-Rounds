import React from "react";
import SystemHeader from "../system-header/systemHeader";
import styles from "./systemForms.module.css";

interface Input {
	type: string;
	response: string[];
	name: string[];
}

interface FormStepProps {
	isLastStep: boolean;
	labels: string[];
	inputs: Input[];
	formData: any;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	nextStep: () => void;
	prevStep?: () => void;
	isNextEnabled: boolean;
	systems: string[];
	activeSystem: number;
}

const SystemForms: React.FC<FormStepProps> = ({
	isLastStep,
	labels,
	inputs,
	formData,
	handleChange,
	nextStep,
	prevStep,
	isNextEnabled,
	systems,
	activeSystem,
}) => {
	return (
		<div className={styles.formContainer}>
			<SystemHeader
				systems={systems}
				activeSystem={activeSystem}
			/>
			<div className={styles.form}>
				{labels.map((label, index) => (
					<div
						key={index}
						className={styles.form_inputs}
					>
						<label>{label}</label>
						<div className={styles.responses}>
							{inputs[index].type === "radio" ? (
								inputs[index].response.map((response, i) => (
									<label key={i}>
										{response}
										<input
											type="radio"
											name={inputs[index].name[0]}
											value={response}
											checked={formData[inputs[index].name[0]] === response}
											onChange={handleChange}
										/>
									</label>
								))
							) : (
								<input
									type={inputs[index].type}
									name={inputs[index].name[0]}
									value={formData[inputs[index].name[0]] || ""}
									onChange={handleChange}
								/>
							)}
						</div>
					</div>
				))}
			</div>
			<div className={styles.button_container}>
				{prevStep && <button onClick={prevStep}>Previous</button>}
				<button
					onClick={nextStep}
					className={styles.next_btn}
					disabled={!isNextEnabled}
				>
					{isLastStep ? "Submit" : "Next"}
				</button>
			</div>
		</div>
	);
};

export default SystemForms;
