import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import styled from "styled-components";
import { V2_MediaQuery } from "../../src/v2_media";
import { MediaWidths } from "../../src/spec/media-spec";

const MINIMUM_SIDE_PADDING = 48;
const SIDEBAR_WIDTH = 210;
const SPACER = 600;

export const StoryContainer = styled.div`
    min-width: 500px;
    margin: auto;
    width: calc(
        ${MediaWidths.desktopM}px -
            ${MINIMUM_SIDE_PADDING + SIDEBAR_WIDTH + SPACER}px
    );

    ${V2_MediaQuery.MaxWidth.tablet} {
        min-width: 400px;
        width: calc(
            ${MediaWidths.tablet}px -
                ${MINIMUM_SIDE_PADDING + SIDEBAR_WIDTH + SPACER}px
        );
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        min-width: 350px;
        width: calc(
            ${MediaWidths.mobileL}px - ${MINIMUM_SIDE_PADDING + SPACER}px
        );
    }

    ${V2_MediaQuery.MaxWidth.mobileM} {
        min-width: 0;
        width: calc(${MediaWidths.mobileM}px - ${MINIMUM_SIDE_PADDING}px);
    }

    ${V2_MediaQuery.MaxWidth.mobileS} {
        width: calc(${MediaWidths.mobileS}px - ${MINIMUM_SIDE_PADDING}px);
    }
`;

export const FullWidthStoryContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
`;

export const FlexStoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 1.25rem;
    gap: 2rem;
`;

const StackStoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StackDecorator: () => DecoratorFunction<ReactRenderer> = () =>
    function Stack(Story) {
        return (
            <StackStoryContainer>
                <Story />
            </StackStoryContainer>
        );
    };
