import { ExclamationCircleFillIcon, TickIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import { useRef } from "react";

import type { PillProps } from "../pill";
import { Pill } from "../pill";
import { VisuallyHidden } from "../shared/accessibility";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import * as styles from "./timeline.styles";
import type { TimelineItemProps, TimelineProps, Variant } from "./types";

// @catalog
/**
 * A vertically ordered list of steps with visual state indicators.
 *
 * Use `Timeline` to communicate multi-step progress such as application stages
 * or process flows.
 */
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
    const wrapperRef = useRef<HTMLDivElement>(null);

    useApplyStyle(wrapperRef, {
        [styles.tokens.wrapper.startCol]: startCol,
        [styles.tokens.wrapper.colSpan]: colSpan,
    });

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
                <Typography.HeadingXS
                    as="h3"
                    aria-level={level}
                    weight="semibold"
                    className={clsx(
                        styles.timelineItemTitle,
                        "timeline-item-title"
                    )}
                >
                    {title}
                </Typography.HeadingXS>
            );
        }

        return <>{title}</>;
    };

    const renderStatusPills = (statuses: PillProps[]): JSX.Element[] => {
        // maximum 2 pills allowed
        const renderableStatuses = statuses.slice(0, 2);
        return renderableStatuses.map((status: PillProps, index) => {
            return (
                <Pill
                    {...status}
                    type={status.type}
                    key={`status-pill-${index}`}
                    data-testid="status-pill"
                    className="timeline-status-pill"
                >
                    {status.children}
                </Pill>
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
                <div
                    key={`timeline-item-${index}`}
                    role="listitem"
                    className={styles.timelineItem}
                >
                    <div className={styles.timelineIndicators}>
                        <div
                            data-testid={circleIndicatorTestId}
                            className={styles.circleIndicator}
                            data-variant={variant}
                        >
                            <VisuallyHidden>
                                {getStatus(variant, index)}
                            </VisuallyHidden>
                            {renderIcon(variant, index)}
                        </div>
                        <div
                            className={styles.lineIndicator}
                            data-variant={variant}
                        />
                    </div>
                    <div
                        className={clsx(
                            styles.timelineItemContent,
                            "timeline-item-content"
                        )}
                    >
                        {renderTitle(title, headingLevel + 1)}
                        {statuses && (
                            <div className={styles.timelinePills}>
                                {renderStatusPills(statuses)}
                            </div>
                        )}
                        {renderContent(content)}
                    </div>
                </div>
            );
        });

    return (
        <div
            ref={wrapperRef}
            className={clsx(styles.timelineWrapper, className)}
            id={id}
            data-testid={testId}
        >
            <Typography.HeadingSM
                as="h2"
                aria-level={headingLevel}
                data-testid="timeline-title"
                weight="bold"
                className={styles.timelineTitle}
            >
                {title}
            </Typography.HeadingSM>
            <div role="list">{renderItems()}</div>
        </div>
    );
};
