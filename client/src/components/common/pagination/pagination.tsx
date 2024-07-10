import { FC } from "react";
import styles from "./pagination.module.css";
import {
	IoIosArrowBack,
	IoIosSkipBackward,
	IoIosSkipForward,
	IoIosArrowForward,
} from "react-icons/io";

type PaginationProps = {
	pagesAmount: number;
	currentPage: number;
	onClickPage: (pageNumber: number) => void;
	options: number[];
	onRowsPerPageChange: (rowsPerPage: number) => void;
	rowsPerPage: number;
	totalRows: number;
};

export const Pagination: FC<PaginationProps> = (props) => {
	const handleRowsPerPageChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		props.onRowsPerPageChange(Number(event.target.value));
	};

	const option = props.options.map((o, i) => {
		return (
			<option
				key={i}
				value={o}
			>
				{o}
			</option>
		);
	});
	const startRow = (props.currentPage - 1) * props.rowsPerPage + 1;
	const endRow = Math.min(
		props.currentPage * props.rowsPerPage,
		props.totalRows
	);

	const goToFirstPage = () => {
		props.onClickPage(1);
	};
	const goToPreviousPage = () => {
		if (props.currentPage > 1) {
			props.onClickPage(props.currentPage - 1);
		}
	};
	const goToNextPage = () => {
		if (props.currentPage < props.pagesAmount) {
			props.onClickPage(props.currentPage + 1);
		}
	};
	const goToLastPage = () => {
		props.onClickPage(props.pagesAmount);
	};

	return (
		<div className={styles.filterFooter}>
			<div className={styles.footerLeft}>
				<label htmlFor="amount">Row amount:</label>
				<select
					id="amount"
					value={props.rowsPerPage}
					onChange={handleRowsPerPageChange}
				>
					{option}
				</select>
			</div>
			<div className={styles.footerCenter}>
				<IoIosSkipBackward
					title="First Page"
					onClick={goToFirstPage}
				/>
				<IoIosArrowBack
					title="Previous"
					onClick={goToPreviousPage}
				/>
				<p>
					Page {props.currentPage} of {props.pagesAmount}
				</p>
				<IoIosArrowForward
					title="Next"
					onClick={goToNextPage}
				/>
				<IoIosSkipForward
					title="Last Page"
					onClick={goToLastPage}
				/>
			</div>
			<div className={styles.footerRight}>
				<p>
					Rows {startRow} - {endRow} of {props.totalRows}
				</p>
			</div>
		</div>
	);
};
