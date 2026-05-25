"use client";

import { Form } from "@lifesg/react-design-system/form";

const failingFetch = (): Promise<never[]> =>
    Promise.reject(new Error("Something went wrong"));

export default function Story() {
    return (
        <Form.PredictiveTextInput
            data-testid="pti-error-state"
            fetchOptions={failingFetch}
        />
    );
}
