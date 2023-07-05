import { PillProps } from "./types";
import { Content, Wrapper } from "./pill.style";

export const Pill = ({
    type,
    colorType = "black",
    className,
    children,
    ...otherProps
}: PillProps): JSX.Element => {
    return (
        <Wrapper
            className={className}
            data-testid={otherProps["data-testid"]}
            $type={type}
            $color={colorType}
        >
            <Content>{children}</Content>
        </Wrapper>
    );
};
