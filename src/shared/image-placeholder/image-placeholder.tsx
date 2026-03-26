import { PlaceholderImageIcon } from "@lifesg/react-icons";
import clsx from "clsx";

import * as styles from "./image-placeholder.styles";

export interface ImagePlaceholderProps {
    className?: string | undefined;
}

export const ImagePlaceholder = ({ className }: ImagePlaceholderProps) => {
    return (
        <div className={clsx(styles.placeholder, className)}>
            <PlaceholderImageIcon />
        </div>
    );
};
