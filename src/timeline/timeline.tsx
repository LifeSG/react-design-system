import { ExclamationCircleFillIcon, TickIcon } from "@lifesg/react-icons";

import type { PillProps } from "../pill";
import { VisuallyHidden } from "../shared/accessibility";
import { Typography } from "../typography";
import * as styles from "./timeline.styles";
import type { TimelineItemProps, TimelineProps, Variant } from "./types";

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
    counterOffset = 0,
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
                <styles.TimelineItemTitle
                    forwardedAs="h3"
                    aria-level={level}
                    weight="semibold"
                    className="timeline-item-title"
                >
                    {title}
                </styles.TimelineItemTitle>
            );
        }

        return <>{title}</>;
    };

    const renderStatusPills = (statuses: PillProps[]): JSX.Element[] => {
        // maximum 2 pills allowed
        const renderableStatuses = statuses.slice(0, 2);
        return renderableStatuses.map((status: PillProps, index) => {
            return (
                <styles.TimelinePill
                    {...status}
                    type={status.type}
                    key={`status-pill-${index}`}
                    data-testid="status-pill"
                    className="timeline-status-pill"
                >
                    {status.children}
                </styles.TimelinePill>
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
                return <span aria-hidden>{index + 1 + counterOffset}</span>;
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
                return `Step number ${index + 1 + counterOffset}`;
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
                <styles.TimelineItem
                    key={`timeline-item-${index}`}
                    role="listitem"
                >
                    <styles.TimelineIndicators>
                        <styles.CircleIndicator
                            data-testid={circleIndicatorTestId}
                            $variant={variant}
                        >
                            <VisuallyHidden>
                                {getStatus(variant, index)}
                            </VisuallyHidden>
                            {renderIcon(variant, index)}
                        </styles.CircleIndicator>
                        <styles.LineIndicator $variant={variant} />
                    </styles.TimelineIndicators>
                    <styles.TimelineItemContent className="timeline-item-content">
                        {renderTitle(title, headingLevel + 1)}
                        {statuses && (
                            <styles.TimelinePills>
                                {renderStatusPills(statuses)}
                            </styles.TimelinePills>
                        )}
                        {renderContent(content)}
                    </styles.TimelineItemContent>
                </styles.TimelineItem>
            );
        });

    return (
        <styles.TimelineWrapper
            className={className}
            id={id}
            data-testid={testId}
            $startCol={startCol}
            $colSpan={colSpan}
        >
            <styles.TimelineTitle
                forwardedAs="h2"
                aria-level={headingLevel}
                data-testid="timeline-title"
                weight="bold"
            >
                {title}
            </styles.TimelineTitle>
            <div role="list">{renderItems()}</div>
        </styles.TimelineWrapper>
    );
};
