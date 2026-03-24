import { PlaceholderImageIcon } from "@lifesg/react-icons";
import clsx from "clsx";

import { Placeholder } from "./image-placeholder.style";

export interface ImagePlaceholderProps {
    className?: string | undefined;
}

export const ImagePlaceholder = ({ className }: ImagePlaceholderProps) => {
    return (
        <Placeholder className={clsx(className)}>
            <PlaceholderImageIcon />
        </Placeholder>
    );
};
