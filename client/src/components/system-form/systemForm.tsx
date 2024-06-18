import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./systemForm.module.css";

type SystemFormProps = {
	systems: {
		formHeader: string[];
		descriptions: string[];
	};
};

export const SystemForm: FC<SystemFormProps> = (props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const navigate = useNavigate();

	const handleNext = () => {
		if (currentIndex < props.systems.formHeader.length - 1) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		} else {
			navigate("/round-entries");
		}
	};

	const handleBack = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
	};

	const headerElements = props.systems.formHeader.map((system, index) => (
		<div
			key={index}
			className={styles.form_header_system}
			style={{
				backgroundColor: index === currentIndex ? "lightblue" : "transparent",
			}}
		>
			{system}
		</div>
	));

	return (
		<>
			<div className={styles.form_header}>{headerElements}</div>
			<br />
			<p>{props.systems.descriptions[currentIndex]}</p>
			<br />
			<div className={styles.button_container}>
				{currentIndex > 0 && <button onClick={handleBack}>Back</button>}
				<button onClick={handleNext} className={styles.next_btn}>
					{currentIndex < props.systems.formHeader.length - 1
						? "Next"
						: "Submit"}
				</button>
			</div>
		</>
	);
};
