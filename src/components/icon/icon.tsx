// Generated with util/create-component.js
import React from "react";
import { IconProps } from "./types";
import classnames from "classnames/bind";
import styles from "../../index.css";

const cx = classnames.bind(styles); // Needed to use css

export const Icon = ({
	type,
	...props
}: IconProps) => {
	const baseClassName = `sgds-icon sgds-icon-${type}`;
	const mergedClassName = props.className ? `${baseClassName} ${props.className}` : baseClassName;

	return <span {...props} className={mergedClassName} />;
};
