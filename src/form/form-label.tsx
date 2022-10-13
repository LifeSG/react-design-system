import { TextProps } from "../text";
import { PopoverAddon } from "./form-label-addon";
import { ErrorMessage, Label, SubLabel } from "./form-label.style";
import { FormLabelProps } from "./types";

export const FormLabel = ({
    children,
    addon,
    subtitle,
    ...otherProps
}: FormLabelProps): JSX.Element => {
    // -------------------------------------------------------------------------
    // RENDER FUNCTIONS
    // -------------------------------------------------------------------------
    const renderAddon = () => {
        switch (addon.type) {
            case "popover":
                return addon && <PopoverAddon addon={addon} />;
            default:
                return null;
        }
    };

    return (
        <Label {...otherProps}>
            {children}
            {addon && addon.type && renderAddon()}
            {typeof subtitle === "string" ? (
                <SubLabel {...otherProps}>{subtitle}</SubLabel>
            ) : (
                subtitle
            )}
        </Label>
    );
};

export const FormErrorMessage = (props: TextProps): JSX.Element => {
    return <ErrorMessage weight="semibold" {...props} />;
};
