// Generated with util/create-component.js
import React from "react";
import { Layout } from "../layout";
import { Text } from "../text";
import {
    CircleIndicator,
    LineIndicator,
    TimelineIndicators,
    TimelineItem,
    TimelineItemContent,
    TimelineItemTitle,
    TimelinePill,
    TimelinePills,
    TimelineTitle,
    TimelineWrapper,
} from "./timeline.style";
import { TimelineItemProps, TimelineProps, TimelineStatusProps } from "./types";

export const Timeline = ({
    items,
    className,
    title,
    startCol,
    colSpan,
    baseIndicatorTestID,
    ...otherProps
}: TimelineProps) => {
    // ===========================================================================
    // CONST, STATE, REF
    // ===========================================================================
    const testId = otherProps["data-testid"] || "timeline";

    // ===========================================================================
    // RENDER
    // ===========================================================================
    const renderContent = (content: string | JSX.Element): JSX.Element => {
        if (typeof content === "string") {
            return <Text.Body>{content}</Text.Body>;
        }

        return <>{content}</>;
    };
    const renderTitle = (title: string | JSX.Element): JSX.Element => {
        if (typeof title === "string") {
            return (
                <TimelineItemTitle weight="semibold">{title}</TimelineItemTitle>
            );
        }

        return <>{title}</>;
    };
    const renderStatusPills = (
        statuses: TimelineStatusProps[]
    ): JSX.Element[] => {
        // maximum 2 pills allowed
        const renderableStatuses = statuses.slice(0, 2);
        return renderableStatuses.map((status: TimelineStatusProps, index) => {
            return (
                <TimelinePill
                    {...status}
                    key={`status-pill-${index}`}
                    data-testid="status-pill"
                >
                    <Text.XSmall>{status.label}</Text.XSmall>
                </TimelinePill>
            );
        });
    };
    const renderItems = () =>
        items.map((item: TimelineItemProps, index) => {
            const { title, content, statuses } = item;
            const circleIndicatorTestId = baseIndicatorTestID
                ? `circleindicator${index + 1}_div_${baseIndicatorTestID}`
                : "circleindicator";

            return (
                <TimelineItem key={`timeline-item-${index}`}>
                    <TimelineIndicators>
                        <CircleIndicator
                            data-testid={circleIndicatorTestId}
                            filled={index === 0}
                        />
                        <LineIndicator />
                    </TimelineIndicators>
                    <TimelineItemContent>
                        <>{renderTitle(title)}</>
                        {statuses && (
                            <TimelinePills>
                                {renderStatusPills(statuses)}
                            </TimelinePills>
                        )}
                        <>{renderContent(content)}</>
                    </TimelineItemContent>
                </TimelineItem>
            );
        });

    return (
        <Layout.GridContent className={className} data-testid={testId}>
            <TimelineWrapper startCol={startCol} colSpan={colSpan}>
                <TimelineTitle>{title}</TimelineTitle>
                {renderItems()}
            </TimelineWrapper>
        </Layout.GridContent>
    );
};
