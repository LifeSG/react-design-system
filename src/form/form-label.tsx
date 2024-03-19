import { TextProps } from "../text";
import { PopoverAddon } from "./form-label-addon";
import { ErrorMessage, Label, Subtitle } from "./form-label.style";
import { FormLabelProps } from "./types";

export const FormLabel = ({
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
        switch (addon.type) {
            case "popover":
                return <PopoverAddon addon={addon} />;
            default:
                return null;
        }
    };

    return (
        <Label {...otherProps}>
            {children}
            {addon && addon.type && renderAddon()}
            {typeof subtitle === "string" ? (
                <Subtitle
                    as="span"
                    data-testid={testId ? `${testId}-subtitle` : "subtitle"}
                    {...otherProps}
                >
                    {subtitle}
                </Subtitle>
            ) : (
                subtitle
            )}
        </Label>
    );
};

export const FormErrorMessage = (props: TextProps): JSX.Element => {
    return <ErrorMessage weight="semibold" {...props} />;
};
