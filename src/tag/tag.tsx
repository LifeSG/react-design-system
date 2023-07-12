import { TagProps } from "./types";
import { Label, Wrapper } from "./tag.style";

export const Tag = ({
    type,
    colorType = "black",
    children,
    interactive = false,
    icon,
    onClick,
    ...otherProps
}: TagProps): JSX.Element => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = (
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
    ) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <Wrapper
            as={interactive ? "button" : "div"}
            $type={type}
            $color={colorType}
            $interactive={interactive}
            onClick={handleClick}
            {...otherProps}
        >
            {icon}
            <Label>{children}</Label>
        </Wrapper>
    );
};
