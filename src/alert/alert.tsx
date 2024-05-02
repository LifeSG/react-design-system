import { AlertProps } from "./types";
import {
    ActionLinkText,
    AlertIconWrapper,
    ShowMoreButton,
    TextContainer,
    TextWrapperContainer,
    Wrapper,
} from "./alert.style";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { useEffect, useRef, useState } from "react";

export const Alert = ({
    type,
    className,
    children,
    actionLink,
    actionLinkIcon,
    sizeType = "default",
    showIcon = false,
    customAlertIcon,
    maxLines,
    ...otherProps
}: AlertProps): JSX.Element => {
    const [isShowMore, setIsShowMore] = useState(false);
    const contentContainerHeightRef = useRef<HTMLDivElement>(null);
    const [displayShowMore, setDisplayShowMore] = useState<boolean>(false);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    useEffect(() => {
        // forces line-clamp to trigger so that we can determine if content is collapsible
        setIsShowMore(!maxLines);
        setDisplayShowMore(!!maxLines);
        if (!maxLines || !contentContainerHeightRef.current) return;

        // calculate whether to show more after line-clamp is triggered
        const clientHeight = contentContainerHeightRef.current.clientHeight;
        const scrollHeight = contentContainerHeightRef.current.scrollHeight;

        // Note: when using DS Text.H3 or Text.H1, the calculated scrollHeight and clientHeight differs by 1 without any overflow

        setDisplayShowMore(scrollHeight - clientHeight > 1);
    }, [children]);

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderLinkType = () => {
        if (actionLinkIcon) {
            return actionLinkIcon;
        }
        return <ArrowRightIcon />;
    };

    const renderLink = () => {
        return (
            <ActionLinkText
                data-testid="action-link"
                $type={type}
                $sizeType={sizeType}
                {...actionLink}
            >
                {actionLink.children}
                {renderLinkType()}
            </ActionLinkText>
        );
    };

    const renderIcon = () => {
        if (type && customAlertIcon) return customAlertIcon;
        switch (type) {
            case "success":
                return <TickCircleFillIcon />;
            case "warning":
                return <ExclamationTriangleFillIcon />;
            case "error":
                return <ExclamationCircleFillIcon />;
            case "info":
                return <ICircleFillIcon />;
            case "description":
                return <ICircleFillIcon />;
            default:
                return null;
        }
    };

    return (
        <Wrapper
            className={className}
            $type={type}
            $sizeType={sizeType}
            data-testid={otherProps["data-testid"]}
        >
            {showIcon && (
                <AlertIconWrapper $sizeType={sizeType} $type={type}>
                    {renderIcon()}
                </AlertIconWrapper>
            )}
            <TextContainer>
                <TextWrapperContainer
                    ref={contentContainerHeightRef}
                    $maxLines={maxLines}
                    $showMore={isShowMore}
                >
                    {children}
                </TextWrapperContainer>
                {maxLines !== undefined && displayShowMore && (
                    <ShowMoreButton
                        weight="semibold"
                        onClick={() => setIsShowMore(!isShowMore)}
                    >
                        {isShowMore ? "Show less" : "Show more"}
                    </ShowMoreButton>
                )}
                {actionLink && renderLink()}
            </TextContainer>
        </Wrapper>
    );
};
