import { cx } from "@linaria/core";
import {
    Container,
    Eye,
    Eyes,
    LionButton,
    Siamese,
    Tabby,
    TigerContainer,
} from "./cat.styles";
import { DDATA, Title } from "./kitty/kitty.styles";
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
            <Title>{DDATA}</Title>
        </Container>
    );
};

export const Lion = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props}>
            <div>Roar! I am a Lion!</div>
            <LionButton>Roar</LionButton>
        </div>
    );
};

export const Tiger = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return <TigerContainer size="small" {...props} />;
};
