import { FC, useState } from "react";
import Button from "../common/button/button";
import styles from "./headerButton.module.css";
import { UnitOptionsModal } from "../modals/unitOptionsModal";

type HeaderButtonProps = {
	onClick?: () => void;
};

export const HeaderButton: FC<HeaderButtonProps> = (
	props: HeaderButtonProps
) => {
	const [optionsOpened, setOptionsOpened] = useState(false);
	return (
		<>
			<div className={styles.topRight}>
				<Button
					variant={"blue-bg"}
					text="Create New Entry"
					startIconClassname="icon-plus"
					onClick={(e) => {
						e.stopPropagation();
						setOptionsOpened(true);
					}}
				/>
			</div>
			{optionsOpened && (
				<UnitOptionsModal onClose={() => setOptionsOpened(false)} />
			)}
		</>
	);
};
