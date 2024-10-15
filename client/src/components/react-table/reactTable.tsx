import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoundEntry } from "../../models/roundEntry";
import { SearchBar } from "../common/search-bar/searchBar";
import { CreateEntryButton } from "../create-entry-button/createEntryButton";
import { Pagination } from "../common/pagination/pagination";
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	ColumnDef,
	flexRender,
	getSortedRowModel,
	SortingState,
	// Row,
	FilterFn,
} from "@tanstack/react-table";
import Indicator from "../common/indicator/indicator";
import { formatDateString } from "../../utils/stringFormatter";
import { FaSearch, FaPlus, FaClipboardList } from "react-icons/fa";
import styles from "./reactTable.module.css";
// import { Tooltip } from "../common/tool-tip/toolTip";

type ReactTableProps = {
	entries: RoundEntry[];
	show: boolean;
};

export const ReactTable: FC<ReactTableProps> = (props) => {
	const { updateRound } = JSON.parse(
		sessionStorage.getItem("Update_Round") || "{}"
	);
	const [isOpen, setIsOpen] = useState(false);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [options] = useState([5, 10, 15]);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [searchInput, setSearchInput] = useState("");
	const navigate = useNavigate();

	const columns: ColumnDef<RoundEntry>[] = [
		{
			accessorKey: "rig_name",
			header: "Rig Name",
			cell: ({ row }) => {
				return (
					<div className={styles.rigName}>
						{row.original.round_id === updateRound && (
							<Indicator show={props.show} />
						)}
						{row.original.rig_name}
					</div>
				);
			},
		},
		{
			accessorKey: "operator",
			header: "Operator",
		},
		{
			accessorKey: "shift_date",
			header: "Shift Date",
			cell: (info) => formatDateString(info.getValue() as string).split(",")[0],
		},
		{
			accessorKey: "last_time_submitted",
			header: "Last Time Submitted",
			cell: (info) => formatDateString(info.getValue() as string).split(",")[1],
		},
		{
			accessorFn: (row) => row.last_round_performed_by.slice(-1)[0],
			id: "lastPerson",
			header: "Last To Submit",
		},
		{
			id: "roundsCompleted",
			header: "Rounds Completed",
			cell: ({ row }) => {
				const completedRounds = row.original.rounds_completed.length;
				const totalRounds = 3;
				const rounds = Array.from(
					{ length: totalRounds },
					(_, i) => i < completedRounds
				);

				return (
					<div className={styles.rounds}>
						{rounds.map((isCompleted, index) => (
							<div
								key={index}
								className={styles.round}
								style={{
									backgroundColor: isCompleted ? "rgb(112 235 31)" : "grey",
									border: isCompleted ? "solid black 1px" : "none",
								}}
							/>
						))}
					</div>
				);
			},
		},
		{
			id: "actions",
			header: "",
			cell: ({ row }) => {
				const isDisabled = row.original.rounds_completed.length >= 3;
				const description = isDisabled
					? "Rounds are complete"
					: "Add a new round";

				return (
					<>
						<button
							onClick={() =>
								handleEditRound(
									row.original.round_id,
									row.original.rig_name,
									row.original.rounds_completed.length
								)
							}
							disabled={isDisabled}
							style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
							title={description}
						>
							<FaPlus color={isDisabled ? "grey" : "#012bd9"} />
						</button>
						<button onClick={() => handleViewRounds(row.original.round_id)}>
							<FaClipboardList
								title="View Details"
								color={"F5A623"}
							/>
						</button>
					</>
				);
			},
		},
	];

	const globalFilterFn: FilterFn<RoundEntry> = (row, columnId, filterValue) => {
		const {
			rig_name,
			operator,
			shift_date,
			last_time_submitted,
			last_round_performed_by,
			rounds_completed,
		} = row.original;
		return (
			rig_name.toLowerCase().includes(filterValue.toLowerCase()) ||
			operator.toLowerCase().includes(filterValue.toLowerCase()) ||
			formatDateString(shift_date)
				.toLowerCase()
				.includes(filterValue.toLowerCase()) ||
			formatDateString(last_time_submitted)
				.toLowerCase()
				.includes(filterValue.toLowerCase()) ||
			last_round_performed_by
				.slice(-1)[0]
				.toLowerCase()
				.includes(filterValue.toLowerCase()) ||
			rounds_completed.length.toString().includes(filterValue)
		);
	};

	const table = useReactTable({
		data: props.entries,
		columns: columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		globalFilterFn,
		initialState: {
			pagination: {
				pageSize: rowsPerPage,
			},
		},
		state: {
			sorting,
			globalFilter: searchInput,
		},
	});

	const handleEditRound = (
		id: number,
		rig: string,
		roundsCompleted: number
	) => {
		sessionStorage.setItem(
			"Unit_Rounds",
			JSON.stringify({
				round_id: id,
				rig: rig,
				rounds_completed: roundsCompleted,
			})
		);
		return navigate(`/add-round-entry/${id}`);
	};

	const handleViewRounds = (id: number) => {
		return navigate(`/view-round-entry/${id}`);
	};

	const handleRowsPerPageChange = (rowsPerPage: number) => {
		setRowsPerPage(rowsPerPage);
		table.setPageSize(rowsPerPage);
	};

	return (
		<div className={styles.tableContainer}>
			<div className={styles.filterHeader}>
				<h1>Round Entries</h1>
				<div className={styles.filterOptions}>
					{isOpen ? (
						<SearchBar
							value={searchInput}
							onChangeInput={setSearchInput}
							onClose={() => setIsOpen(false)}
						/>
					) : (
						<FaSearch
							onClick={() => setIsOpen(!isOpen)}
							title="Search Entries"
						/>
					)}

					<CreateEntryButton />
				</div>
			</div>
			<table className={styles.table}>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr
							key={row.id}
							className={styles.grid}
						>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.tableFooter}>
				<Pagination
					totalRows={props.entries.length}
					pagesAmount={table.getPageCount()}
					currentPage={table.getState().pagination.pageIndex + 1}
					options={options}
					onRowsPerPageChange={handleRowsPerPageChange}
					onClickPage={(pageNumber) => table.setPageIndex(pageNumber - 1)}
					rowsPerPage={rowsPerPage}
				/>
			</div>
		</div>
	);
};

export default ReactTable;
