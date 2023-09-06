import { UneditableSectionItemProps } from "./types";
import { Container } from "./section-item.styles";
import { FormLabel } from "../form/form-label";
import { Text } from "../text";

export const UneditableSectionItem = ({
    label,
    value,
    displayWidth = "full",
}: UneditableSectionItemProps) => {
    return (
        <Container $widthStyle={displayWidth}>
            <FormLabel>{label}</FormLabel>
            <Text.Body>{value}</Text.Body>
        </Container>
    );
};
