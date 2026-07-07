"use client";
import { ErrorDisplay } from "@lifesg/react-design-system/error-display";

export default function Story() {
    return (
        <ErrorDisplay
            type="404"
            title="My Custom 404"
            description={
                <>
                    You can pass a <strong>JSX component</strong> here as well
                </>
            }
        />
    );
}
