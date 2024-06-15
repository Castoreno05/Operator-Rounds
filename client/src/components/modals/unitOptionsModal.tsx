import { useNavigate } from "react-router-dom";
import styles from "./unitOptionsModal.module.css";
import { FC, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

type UnitOptionsModalProps = {
	disableEdition?: boolean;
	onClose?: () => void;
};

export const UnitOptionsModal: FC<UnitOptionsModalProps> = (props) => {
	const navigate = useNavigate();

	const containerRef = useRef<HTMLDivElement>(null);
	useOutsideClick([containerRef], () => {
		props.onClose?.();
	});

	const navigateAndClose = (url: string) => {
		navigate(url);
		props.onClose?.();
	};

	return (
		<div className={styles.overlay}>
			<div
				className={styles.containerOptions}
				ref={containerRef}
			>
				<button onClick={() => navigateAndClose("/create-entry")}>
					Submit
				</button>
			</div>
			;
		</div>
	);
};
