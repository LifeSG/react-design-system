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
import { VisuallyHidden } from "src/shared/accessibility";

export const Timeline = ({
    items,
    className,
    id,
    title,
    startCol,
    colSpan,
    "data-base-indicator-testid": baseIndicatorTestId,
    "data-testid": testId = "timeline",
    headingLevel = 2,
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

    const renderTitle = (
        title: string | JSX.Element,
        level: number
    ): JSX.Element => {
        if (typeof title === "string") {
            return (
                <TimelineItemTitle
                    forwardedAs="h3"
                    aria-level={level}
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

    const renderIcon = (variant: Variant, index: number) => {
        switch (variant) {
            case "completed":
                return <TickIcon aria-hidden />;
            case "error":
                return <ExclamationCircleFillIcon aria-hidden />;
            case "numeric":
                return <span aria-hidden>{index + 1}</span>;
            default:
                return null;
        }
    };

    const getStatus = (variant: Variant, index: number) => {
        switch (variant) {
            case "current":
                return "Current step";
            case "completed":
                return "Completed step";
            case "upcoming-active":
                return "Upcoming active step";
            case "upcoming-inactive":
                return "Upcoming inactive step";
            case "disabled":
                return "Inactive step";
            case "error":
                return "Current step, action required";
            case "numeric":
                return `Step number ${index + 1}`;
            default:
                return "";
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
                <TimelineItem key={`timeline-item-${index}`} role="listitem">
                    <TimelineIndicators>
                        <CircleIndicator
                            data-testid={circleIndicatorTestId}
                            $variant={variant}
                        >
                            <VisuallyHidden>
                                {getStatus(variant, index)}
                            </VisuallyHidden>
                            {renderIcon(variant, index)}
                        </CircleIndicator>
                        <LineIndicator $variant={variant} />
                    </TimelineIndicators>
                    <TimelineItemContent className="timeline-item-content">
                        {renderTitle(title, headingLevel + 1)}
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
            <TimelineTitle
                forwardedAs="h2"
                aria-level={headingLevel}
                data-testid="timeline-title"
                weight="bold"
            >
                {title}
            </TimelineTitle>
            <div role="list">{renderItems()}</div>
        </TimelineWrapper>
    );
};
