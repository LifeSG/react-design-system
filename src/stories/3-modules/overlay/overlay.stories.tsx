import React, { useState } from "react";
import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, Overlay } from "src/components";
import { OverlayProps } from "src/components/types";
import { SimpleModal } from "./doc-elements";

export default {
    title: "modules/Overlay",
    component: Overlay,
    argTypes: {
        show: {
            description: "Toggle the appearance",
        },
        rootId: {
            description:
                "Identifier of the HTML element that the Overlay will be rendered in. Specify if you intend for the Overlay to be placed in the root level",
            control: {
                type: null,
            },
        },
        backgroundOpacity: {
            description: "The opacity value of the Overlay",
        },
        backgroundBlur: {
            description: "To specify a blur effect to the contents under",
        },
        disableTransition: {
            description: "Toggle the animation of the appearance and dismissal",
        },
        enableOverlayClick: {
            description:
                "If set to true, the click action on the Overlay will be interactive",
        },
        stacked: {
            description:
                "Specifies if the overlay is stacked. Stacked overlays assume that it is triggered by an existing overlay",
        },
        id: {
            description: "The unique identifier of the `Overlay`",
        },
        onOverlayClick: {
            description:
                "Call back when click on Overlay. Will only work if `enableOverlayClick` is true",
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Overlay</Title>
                    <Description>
                        Adds a dimmed layer over the application.
                    </Description>
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories includePrimary={true} title="Variants" />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<OverlayProps> = (args) => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);
    return (
        <>
            <Button.Default onClick={openModal}>Open</Button.Default>
            <Overlay {...args} show={show} onOverlayClick={closeModal}>
                <SimpleModal show={show} />
            </Overlay>
        </>
    );
};

export const Default = Template.bind({});

Default.args = {
    enableOverlayClick: true,
};

Default.parameters = {
    docs: {
        source: {
            // Note: The code block identation is intended
            code: `
<>
	<Button.Default onClick={openModal}>Open</Button.Default>
	<Overlay
		visible={show}
		onTouchOverlay={closeModal}
		{...args}
	>
		<SimpleModal show={show} />
	</Overlay>
</>`,
        },
    },
};
