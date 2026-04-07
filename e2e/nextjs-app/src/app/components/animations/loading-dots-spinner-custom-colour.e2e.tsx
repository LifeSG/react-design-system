"use client";
import { LoadingDotsSpinner } from "@lifesg/react-design-system/animations";

export default function Story() {
    return (
        <LoadingDotsSpinner
            data-testid="loading-dots-spinner-custom-colour"
            color="#cd3434"
        />
    );
}
