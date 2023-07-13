import { TagProps } from "./types";
import { Label, Wrapper } from "./tag.style";

export const Tag = ({
    type,
    colorType = "black",
    children,
    interactive = false,
    icon,
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
            {icon}
            <Label>{children}</Label>
        </Wrapper>
    );
};
