import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { useEffect, useState } from "react";
import {
    ActionLinkText,
    AlertIconWrapper,
    ChevronIcon,
    ShowMoreButton,
    TextContainer,
    TextWrapperContainer,
    Wrapper,
} from "./alert.style";
import { AlertProps } from "./types";
import { useResizeDetector } from "react-resize-detector";
import { isNil } from "lodash";

export const Alert = ({
    type,
    className,
    children,
    actionLink,
    actionLinkIcon,
    sizeType = "default",
    showIcon = false,
    customIcon,
    collapsedHeight,
    ...otherProps
}: AlertProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [showHiddenContent, setShowHiddenContent] = useState<boolean>(false);
    const [renderShowMore, setRenderShowMore] = useState<boolean>(false);
    const contentResizeDetector = useResizeDetector<HTMLDivElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        setInitialCollapsedState();
    }, [collapsedHeight]);

    // =============================================================================
    // HELPERS
    // =============================================================================

    const setInitialCollapsedState = () => {
        setShowHiddenContent(isNil(collapsedHeight));
        setRenderShowMore(!isNil(collapsedHeight));
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderShowMoreButton = () => (
        <ShowMoreButton
            onClick={() => setShowHiddenContent(!showHiddenContent)}
        >
            Show {showHiddenContent ? "less" : "more"}
            <ChevronIcon $expanded={showHiddenContent} />
        </ShowMoreButton>
    );

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
        if (type && customIcon) return customIcon;
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
                    ref={contentResizeDetector.ref}
                    $collapsedHeight={collapsedHeight}
                    $showMore={showHiddenContent}
                >
                    {children}
                </TextWrapperContainer>
                {renderShowMore && renderShowMoreButton()}
                {actionLink && renderLink()}
            </TextContainer>
        </Wrapper>
    );
};
