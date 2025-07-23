import { PopoverAddon } from "./form-label-addon";
import {
    ErrorMessage,
    Label,
    LabelContainer,
    Subtitle,
} from "./form-label.style";
import { FormLabelProps } from "./types";

export const FormLabel = ({
    id: labelId,
    children,
    addon,
    subtitle,
    "data-testid": testId,
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

    return (
        <LabelContainer>
            <Label {...otherProps}>
                {children}
                {addon && addon.type && renderAddon()}
            </Label>
            {typeof subtitle === "string" ? (
                <Subtitle
                    id={labelId ? `${labelId}-subtitle` : "subtitle"}
                    data-testid={testId ? `${testId}-subtitle` : "subtitle"}
                    {...otherProps}
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
