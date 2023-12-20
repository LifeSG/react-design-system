import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "src/alert";
import { Button } from "src/button";
import { Text } from "src/text";
import { UneditableSection } from "src/uneditable-section";
import { SAMPLE_ITEMS } from "./doc-elements";

type Component = typeof UneditableSection;

const meta: Meta<Component> = {
    title: "Modules/UneditableSection",
    component: UneditableSection,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <UneditableSection
                title="Your personal information"
                description="Retrieved on 27 Jun 2023"
                items={SAMPLE_ITEMS}
            />
        );
    },
};

export const WithCustomContent: StoryObj<Component> = {
    render: () => {
        return (
            <UneditableSection
                title="Your personal information"
                description="Retrieved on 27 Jun 2023"
                items={SAMPLE_ITEMS}
                topSection={
                    <div style={{ marginBottom: "2rem" }}>
                        <Button.Default styleType="light">
                            Pull latest records
                        </Button.Default>
                    </div>
                }
                bottomSection={
                    <div>
                        <Alert type="warning">
                            This will serves as a warning or disclaimer to
                            users.
                        </Alert>
                    </div>
                }
            />
        );
    },
};

export const ComposingFromScratch: StoryObj<Component> = {
    render: () => {
        return (
            <UneditableSection>
                <div
                    style={{
                        gridColumn: "span 8",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "2rem",
                        }}
                    >
                        <Text.H3>My custom content</Text.H3>
                        <Button.Default styleType="light">
                            Pull latest records
                        </Button.Default>
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <Alert type="warning">
                            This will serves as a warning or disclaimer to
                            users.
                        </Alert>
                    </div>
                    <Text.Body style={{ marginBottom: "2rem" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam pellentesque enim eu neque gravida, ut pulvinar
                        magna tristique. Aenean sed malesuada arcu. Integer
                        convallis dapibus suscipit.
                    </Text.Body>
                    <UneditableSection.ItemSection>
                        <UneditableSection.Item
                            label="Name (as in NRIC or passport)"
                            value="Tom Tan Li Ho"
                            displayWidth="half"
                        />
                        <UneditableSection.Item
                            label="NRIC or FIN"
                            value="S••••534J"
                            displayWidth="half"
                        />
                        <UneditableSection.Item
                            label="Residential Address"
                            value="Block 287, #05-11, Tampines street 22, Singapore 534788"
                        />
                    </UneditableSection.ItemSection>
                    <Text.H3 style={{ marginBottom: "2rem" }}>
                        Another section
                    </Text.H3>
                    <UneditableSection.ItemSection>
                        <UneditableSection.Item
                            label="Spoken languages"
                            value="English, Mandarin, French"
                        />
                    </UneditableSection.ItemSection>
                </div>
            </UneditableSection>
        );
    },
};
