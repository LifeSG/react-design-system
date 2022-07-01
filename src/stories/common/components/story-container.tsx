import React from "react";
import { MediaQuery, MediaWidths } from "src/components";
import styled from "styled-components";
import { StoryBoxProps } from "./types";

const MINIMUM_SIDE_PADDING = 48;

export const StoryContainer = styled.div`
    min-width: 500px;

    ${MediaQuery.MaxWidth.tablet} {
        min-width: 400px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        min-width: 350px;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        min-width: 0;
        width: calc(${MediaWidths.mobileM}px - ${MINIMUM_SIDE_PADDING}px);
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: calc(${MediaWidths.mobileS}px - ${MINIMUM_SIDE_PADDING}px);
    }
`;

const Container = styled.div`
    position: relative;
    overflow: hidden;
    margin: 25px 0 4px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 1.25rem;
`;

const Inner = styled.div`
    position: relative;
    overflow: hidden;
    max-height: 21rem;
`;

export const PreviewBox = ({ children }: StoryBoxProps) => {
	return (
		<Container>
			<Inner>{children}</Inner>
		</Container>
	);
};
