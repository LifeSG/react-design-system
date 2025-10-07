import { PopoverAddon } from "./form-label-addon";
import {
    ErrorMessage,
    Label,
    LabelContainer,
    Subtitle,
} from "./form-label.style";
import { FormLabelProps } from "./types";

export const FormLabel = ({
    id,
    children,
    addon,
    subtitle,
    "data-testid": testId,
    className,
    style,
    ...otherProps
}: FormLabelProps): JSX.Element => {
    // -------------------------------------------------------------------------
    // RENDER FUNCTIONS
    // -------------------------------------------------------------------------
    const renderAddon = () => {
        switch (addon?.type) {
            case "popover":
                return <PopoverAddon addon={addon} />;
            default:
                return null;
        }
    };

    if (!children && !subtitle) {
        return <></>;
    }

    return (
        <LabelContainer
            className={className}
            style={style}
            data-testid={testId}
        >
            {children && (
                <Label id={id} {...otherProps}>
                    {children}
                    {addon && addon.type && renderAddon()}
                </Label>
            )}
            {typeof subtitle === "string" ? (
                <Subtitle
                    id={id ? `${id}-subtitle` : undefined}
                    data-testid={testId ? `${testId}-subtitle` : "subtitle"}
                >
                    {subtitle}
                </Subtitle>
            ) : (
                subtitle
            )}
        </LabelContainer>
    );
};

export const FormErrorMessage = (
    props: React.HTMLAttributes<HTMLElement>
): JSX.Element => {
    return <ErrorMessage {...props} />;
};
