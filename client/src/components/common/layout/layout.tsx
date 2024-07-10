import { useNavigate } from "react-router-dom";
import styles from "./layout.module.css";
import { FC, ReactNode } from "react";
import { Loader } from "../loader/loader";
import { useWindowSize } from "../../../hooks/useWindowSize";

type LayoutProps = {
	pageTitle?: string;
	navigationBackUrl?: string;
	isLoading?: boolean;
	rightAction?: ReactNode;
	children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
	const navigate = useNavigate();
	const { isMobileView } = useWindowSize();

	const shouldRenderHeader =
		props.pageTitle || props.navigationBackUrl || props.rightAction;
	return (
		<div className={styles.container}>
			{props.isLoading ? (
				<div className={styles.loaderContainer}>
					<Loader size={isMobileView ? "medium" : "large"} />
				</div>
			) : (
				<>
					{shouldRenderHeader && (
						<header>
							<div className={styles.leftSide}>
								{props.navigationBackUrl && (
									<i
										className="icon-arrow-left"
										onClick={() => navigate(props.navigationBackUrl!)}
									/>
								)}
								{props.pageTitle && <h1>{props.pageTitle}</h1>}
							</div>
							{props.rightAction}
						</header>
					)}

					<div className={styles.contentContainer}>
						<div className={styles.content}>{props.children}</div>
					</div>
				</>
			)}
			{!props.isLoading}
		</div>
	);
};
