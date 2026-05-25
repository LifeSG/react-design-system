"use client";

import { Form } from "@lifesg/react-design-system/form";
import { Layout } from "@lifesg/react-design-system/layout";

type Option = { value: string; label: string };

const mockFetch = async (): Promise<Option[]> => [];

export default function Story() {
    return (
        <Layout.Content data-testid="pti-grid-layout" type="grid">
            <Form.PredictiveTextInput
                data-testid="pti-grid-short"
                label="Shorter form input"
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                xxsCols={[1, 9]}
                lgCols={[1, 5]}
            />
            <Form.PredictiveTextInput
                data-testid="pti-grid-long"
                label="Longer form input"
                fetchOptions={mockFetch}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                xxsCols={[1, 9]}
            />
        </Layout.Content>
    );
}
