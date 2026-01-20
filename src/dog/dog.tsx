import { cx } from "@linaria/core";
import { Container, Eye, Eyes, Husky, Poodle } from "./dog.styles";
import { DogProps } from "./types";

export const Dog = ({ type, className, ...otherProps }: DogProps) => {
    const getType = () => {
        switch (type) {
            case "husky":
                return Husky;
            case "poodle":
                return Poodle;
        }
    };
    return (
        <Container className={cx(getType(), className)} {...otherProps}>
            <Eyes>
                <Eye />
                <Eye />
            </Eyes>
        </Container>
    );
};
