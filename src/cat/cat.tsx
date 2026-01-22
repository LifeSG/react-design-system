import { cx } from "@linaria/core";
import { Container, Eye, Eyes, Siamese, Tabby } from "./cat.styles";
import { Title } from "./kitty/kitty.styles";
import { CatProps } from "./types";

export const Cat = ({
    type,
    className,
    size = "medium",
    ...otherProps
}: CatProps) => {
    const getType = () => {
        switch (type) {
            case "tabby":
                return Tabby;
            case "siamese":
                return Siamese;
        }
    };
    return (
        <Container
            className={cx(getType(), className)}
            size={size}
            {...otherProps}
        >
            <Eyes>
                <Eye />
                <Eye />
            </Eyes>
            <Title />
        </Container>
    );
};
