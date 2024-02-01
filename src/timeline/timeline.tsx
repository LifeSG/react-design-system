import { TickIcon } from "@lifesg/react-icons";
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
import {
    TimelineItemProps,
    TimelineProps,
    TimelineStatusProps,
    TimelineStatusType,
    Variant,
} from "./types";

export const Timeline = ({
    items,
    className,
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
                <Text.Body className="timeline-item-content-text">
                    {content}
                </Text.Body>
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

    const renderStatusPills = (
        statuses: TimelineStatusProps[]
    ): JSX.Element[] => {
        // maximum 2 pills allowed
        const renderableStatuses = statuses.slice(0, 2);
        return renderableStatuses.map((status: TimelineStatusProps, index) => {
            let type: TimelineStatusType;

            switch (status.type) {
                case "dark":
                    type = "solid";
                    break;
                case "light":
                    type = "outline";
                    break;
                default:
                    type = status.type;
            }

            return (
                <TimelinePill
                    {...status}
                    type={type}
                    key={`status-pill-${index}`}
                    data-testid="status-pill"
                    className="timeline-status-pill"
                >
                    {status.children ? status.children : status.label}
                </TimelinePill>
            );
        });
    };

    const renderIcon = (variant: Variant) => {
        switch (variant) {
            case "completed":
                return <TickIcon />;
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
            data-testid={testId}
            $startCol={startCol}
            $colSpan={colSpan}
        >
            <TimelineTitle id="timeline-title">{title}</TimelineTitle>
            {renderItems()}
        </TimelineWrapper>
    );
};
