import { FC, useState } from "react";
import Button from "../common/button/button";
import styles from "./createEntryButton.module.css";
import { UnitOptionsModal } from "../modals/unitOptionsModal";
import { IoIosCreate } from "react-icons/io";

type CreateEntryButtonProps = {
	onClick?: () => void;
};

export const CreateEntryButton: FC<CreateEntryButtonProps> = (
	props: CreateEntryButtonProps
) => {
	const [optionsOpened, setOptionsOpened] = useState(false);
	return (
		<>
			<div className={styles.buttonDiv}>
				{/* <Button
					variant={"blue-bg"}
					text="Create New Entry"
					startIconClassname="icon-plus"
					onClick={(e) => {
						e.stopPropagation();
						setOptionsOpened(true);
					}}
				/> */}

				<IoIosCreate
					onClick={(e) => {
						e.stopPropagation();
						setOptionsOpened(true);
					}}
					title="Create a new entry"
				/>
			</div>
			{optionsOpened && (
				<UnitOptionsModal onClose={() => setOptionsOpened(false)} />
			)}
		</>
	);
};
