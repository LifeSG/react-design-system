"use client";

import { Button, ModalV2, Typography } from "@lifesg/react-design-system";

export default function Story() {
    return (
        <ModalV2 show data-testid="modal">
            <ModalV2.Card fullscreen>
                <ModalV2.CloseButton />
                <ModalV2.Content>
                    <Typography.BodyBL data-testid="fullscreen-content">
                        Lorem ipsum dolor sit amet consectetur
                    </Typography.BodyBL>
                </ModalV2.Content>
                <ModalV2.Footer
                    primaryButton={<Button>Log out</Button>}
                    secondaryButton={
                        <Button styleType="secondary">Continue</Button>
                    }
                />
            </ModalV2.Card>
        </ModalV2>
    );
}
