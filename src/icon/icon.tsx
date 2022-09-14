import React from "react";
import styled from "styled-components";
import { ArrowRightIcon } from "./arrow-right";
import { InfoIcon } from "./info-icon";
import { IconProps } from "./types";

export const Icon = ({ type, ...props }: IconProps) => {
	switch (type) {
		case "arrow-right":
			return <ArrowRightIcon {...props} />;
		case "info":
			return <InfoIcon {...props} />;
		default: {
			const baseClassName = `sgds-icon sgds-icon-${type}`;
			const mergedClassName = props.className
				? `${baseClassName} ${props.className}`
				: baseClassName;

			return <IconSpan {...props} className={mergedClassName} />;
		}
	}
};

// =============================================================================
// STYLING
// =============================================================================
const IconSpan = styled.span`
    font-size: 1rem;
`;
