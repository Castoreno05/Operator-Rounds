import React, { FC, ReactNode } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

type ButtonProps = {
	variant: "gray-bg" | "blue-bg" | "transparent-bg";
	startIconClassname?: string;
	endIconClassname?: string;
	text?: string;
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	isLoading?: boolean;
	children?: ReactNode;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

// Medium is default size
const calculateFontSizePixels = (size?: "small" | "medium" | "large") => {
	let fontSize = 16;
	if (size === "small") fontSize = 14;
	else if (size === "large") fontSize = 20;
	return `${fontSize}px`;
};

const Button: FC<ButtonProps> = (props) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (!props.disabled) {
			e.stopPropagation();
			props.onClick?.(e);
		}
	};

	const sizePixels = calculateFontSizePixels(props.size);

	const sizeStyles = { fontSize: sizePixels };
	const loaderStyles = { width: sizePixels, height: sizePixels };

	return (
		<button
			onClick={handleClick}
			className={classNames(
				styles.button,
				styles[props.variant],
				props.disabled ? styles.disabled : ""
			)}
		>
			{props.isLoading && (
				<div
					className={styles.loader}
					style={loaderStyles}
				/>
			)}
			{props.startIconClassname && (
				<i
					className={props.startIconClassname}
					style={sizeStyles}
				/>
			)}
			{props.text && <p style={sizeStyles}>{props.text}</p>}
			{props.endIconClassname && (
				<i
					className={props.endIconClassname}
					style={sizeStyles}
				/>
			)}
		</button>
	);
};

export default Button;
