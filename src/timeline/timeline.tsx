import { ExclamationCircleFillIcon, TickIcon } from "@lifesg/react-icons";
import { PillProps } from "../pill";
import { Typography } from "../typography";
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
import { TimelineItemProps, TimelineProps, Variant } from "./types";

export const Timeline = ({
    items,
    className,
    id,
    title,
    startCol,
    colSpan,
    "data-base-indicator-testid": baseIndicatorTestId,
    "data-testid": testId = "timeline",
}: TimelineProps): JSX.Element => {
    // ===========================================================================
    // RENDER
    // ===========================================================================
    const renderContent = (content: string | JSX.Element): JSX.Element => {
        if (typeof content === "string") {
            return (
                <Typography.BodyMD className="timeline-item-content-text">
                    {content}
                </Typography.BodyMD>
            );
        }

        return <>{content}</>;
    };

    const renderTitle = (title: string | JSX.Element): JSX.Element => {
        if (typeof title === "string") {
            return (
                <TimelineItemTitle
                    weight="semibold"
                    className="timeline-item-title"
                >
                    {title}
                </TimelineItemTitle>
            );
        }

        return <>{title}</>;
    };

    const renderStatusPills = (statuses: PillProps[]): JSX.Element[] => {
        // maximum 2 pills allowed
        const renderableStatuses = statuses.slice(0, 2);
        return renderableStatuses.map((status: PillProps, index) => {
            return (
                <TimelinePill
                    {...status}
                    type={status.type}
                    key={`status-pill-${index}`}
                    data-testid="status-pill"
                    className="timeline-status-pill"
                >
                    {status.children}
                </TimelinePill>
            );
        });
    };

    const renderIcon = (variant: Variant) => {
        switch (variant) {
            case "completed":
                return <TickIcon />;
            case "error":
                return <ExclamationCircleFillIcon />;
            default:
                return null;
        }
    };

    const renderItems = () =>
        items.map((item: TimelineItemProps, index) => {
            const { title, content, statuses, variant: _variant } = item;
            const circleIndicatorTestId = baseIndicatorTestId
                ? `circleindicator${index + 1}_div_${baseIndicatorTestId}`
                : "circleindicator";
            const variant =
                _variant || (index === 0 ? "current" : "upcoming-active");

            return (
                <TimelineItem key={`timeline-item-${index}`}>
                    <TimelineIndicators>
                        <CircleIndicator
                            data-testid={circleIndicatorTestId}
                            $variant={variant}
                        >
                            {renderIcon(variant)}
                        </CircleIndicator>
                        <LineIndicator $variant={variant} />
                    </TimelineIndicators>
                    <TimelineItemContent className="timeline-item-content">
                        {renderTitle(title)}
                        {statuses && (
                            <TimelinePills>
                                {renderStatusPills(statuses)}
                            </TimelinePills>
                        )}
                        {renderContent(content)}
                    </TimelineItemContent>
                </TimelineItem>
            );
        });

    return (
        <TimelineWrapper
            className={className}
            id={id}
            data-testid={testId}
            $startCol={startCol}
            $colSpan={colSpan}
        >
            <TimelineTitle data-testid="timeline-title" weight="bold">
                {title}
            </TimelineTitle>
            {renderItems()}
        </TimelineWrapper>
    );
};
