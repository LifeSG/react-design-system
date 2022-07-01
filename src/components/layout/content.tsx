import React from "react";
import { Container } from "./container";
import { Section } from "./section";
import { LayoutProps } from "./types";

const Component = (
	props: LayoutProps,
	ref: React.Ref<HTMLDivElement>
) => {
	const { children, className, ...otherProps } = props;

	return (
		<Section {...otherProps} ref={ref}>
			<Container className={className}>{children}</Container>
		</Section>
	);
};

export const Content = React.forwardRef(Component);