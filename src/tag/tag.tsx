import { TagProps } from "./types";
import { Label, Wrapper } from "./tag.style";

export const Tag = ({
    type,
    colorType = "black",
    children,
    interactive = false,
    icon,
    iconPosition = "left",
    ...otherProps
}: TagProps): JSX.Element => {
    return (
        <Wrapper
            as={interactive ? "button" : "div"}
            $type={type}
            $color={colorType}
            $interactive={interactive}
            {...otherProps}
        >
            {iconPosition === "left" && icon}
            <Label>{children}</Label>
            {iconPosition === "right" && icon}
        </Wrapper>
    );
};
