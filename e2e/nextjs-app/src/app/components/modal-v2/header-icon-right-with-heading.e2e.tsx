"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <ModalV2 show>
            <ModalV2.Card>
                <ModalV2.Header title="Signature" closeButtonPosition="right" />
                <ModalV2.Content>
                    <Typography.BodyBL data-testid="header-content">
                        Header with close button on the right and heading title
                    </Typography.BodyBL>
                </ModalV2.Content>
                <ModalV2.Footer
                    primaryButton={<Button>Save</Button>}
                    secondaryButton={
                        <Button styleType="secondary">Clear</Button>
                    }
                />
            </ModalV2.Card>
        </ModalV2>
    );
}
