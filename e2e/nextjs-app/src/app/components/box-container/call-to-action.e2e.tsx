"use client";
import { BoxContainer } from "@lifesg/react-design-system/box-container";
import { Button } from "@lifesg/react-design-system/button";

export default function Story() {
    const handleEdit = () => {
        console.log("Edit button clicked");
    };

    return (
        <BoxContainer
            title="Container with call-to-action"
            callToActionComponent={
                <Button.Default
                    styleType="light"
                    onClick={handleEdit}
                    data-testid="cta-button"
                >
                    Edit
                </Button.Default>
            }
            data-testid="box-container-cta"
        >
            <div style={{ padding: "2rem" }}>
                <p>This container has a call-to-action button in the header.</p>
            </div>
        </BoxContainer>
    );
}
