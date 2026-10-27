"use client";

import { Form } from "@lifesg/react-design-system/form";

const pendingFetch = (): Promise<never[]> => new Promise(() => {});

export default function Story() {
    return (
        <Form.PredictiveTextInput
            data-testid="pti-loading"
            fetchOptions={pendingFetch}
        />
    );
}
