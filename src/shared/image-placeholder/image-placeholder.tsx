import { PlaceholderImageIcon } from "@lifesg/react-icons";
import { Placeholder } from "./image-placeholder.style";

export interface ImagePlaceholderProps {
    className?: string | undefined;
}

export const ImagePlaceholder = (props: ImagePlaceholderProps) => {
    return (
        <Placeholder {...props}>
            <PlaceholderImageIcon />
        </Placeholder>
    );
};
