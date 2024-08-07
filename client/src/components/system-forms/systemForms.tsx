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
	online: boolean;
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
	online,
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
											disabled={!online}
										/>
									</label>
								))
							) : (
								<input
									type={inputs[index].type}
									name={inputs[index].name[0]}
									value={formData[inputs[index].name[0]] || ""}
									onChange={handleChange}
									style={{ width: "250px" }}
									disabled={!online}
								/>
							)}
						</div>
					</div>
				))}
			</div>
			<div className={styles.button_container}>
				{prevStep && (
					<button
						onClick={prevStep}
						style={{ cursor: "pointer" }}
					>
						Previous
					</button>
				)}
				<button
					onClick={nextStep}
					className={styles.next_btn}
					disabled={!isNextEnabled}
					style={isNextEnabled ? { cursor: "pointer" } : { cursor: "default" }}
				>
					{isLastStep ? "Submit" : "Next"}
				</button>
			</div>
		</div>
	);
};

export default SystemForms;
