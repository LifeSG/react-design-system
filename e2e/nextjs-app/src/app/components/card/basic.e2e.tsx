"use client";
import { Card } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <div>
            <Card data-testid="card-default-text">
                This is string content with default text styling.
            </Card>
        </div>
    );
}
