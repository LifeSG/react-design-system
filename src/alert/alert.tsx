import { AlertProps } from "./types";
import { ActionLinkText, TextContainer, Wrapper } from "./alert.style";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { TickCircleFillIcon } from "@lifesg/react-icons/tick-circle-fill";
import { ExclamationTriangleFillIcon } from "@lifesg/react-icons/exclamation-triangle-fill";
import { ExclamationCircleFillIcon } from "@lifesg/react-icons/exclamation-circle-fill";
import { ICircleFillIcon } from "@lifesg/react-icons/i-circle-fill";

export const Alert = ({
    type,
    className,
    children,
    actionLink,
    actionLinkIcon,
    size = "default",
    showIcon = false,
    ...otherProps
}: AlertProps): JSX.Element => {
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
                $size={size}
                {...actionLink}
            >
                {actionLink.children}
                {renderLinkType()}
            </ActionLinkText>
        );
    };

    const renderIcon = () => {
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
            $size={size}
            data-testid={otherProps["data-testid"]}
        >
            {showIcon && renderIcon()}
            <TextContainer>
                {children}
                {actionLink && renderLink()}
            </TextContainer>
        </Wrapper>
    );
};
