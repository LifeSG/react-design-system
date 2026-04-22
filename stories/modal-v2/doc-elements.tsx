import { useState } from "react";
import { Button } from "src/button";
import { Checkbox } from "src/checkbox";
import { ModalV2 } from "src/modal-v2";
import { Colour, Font } from "src/theme";
import { Typography } from "src/typography";
import styled from "styled-components";

const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    ${Font["body-baseline-regular"]}
    color: ${Colour.text};
    cursor: pointer;

    display: flex;
    gap: 0.25rem;
    align-items: center;
`;

interface OptionProps {
    checked: boolean;
    onToggle: () => void;
    children: string;
}

const Option = ({ checked, onToggle, children }: OptionProps) => {
    return (
        <Label>
            <Checkbox checked={checked} onChange={onToggle} />
            {children}
        </Label>
    );
};

export const SlotPlayground = () => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    const [closeButton, setCloseButton] = useState(true);
    const toggleCloseButton = () => setCloseButton(!closeButton);

    const [content, setContent] = useState(true);
    const toggleContent = () => setContent(!content);

    const [footer, setFooter] = useState(true);
    const toggleFooter = () => setFooter(!footer);

    return (
        <>
            <Options>
                <Option checked={closeButton} onToggle={toggleCloseButton}>
                    CloseButton
                </Option>
                <Option checked={content} onToggle={toggleContent}>
                    Content
                </Option>
                <Option checked={footer} onToggle={toggleFooter}>
                    Footer
                </Option>
            </Options>

            <Button.Default onClick={openModal}>Click to open</Button.Default>

            <ModalV2
                show={show}
                onOverlayClick={closeModal}
                onClose={closeModal}
            >
                <ModalV2.Card>
                    {closeButton && <ModalV2.CloseButton />}
                    {content && (
                        <ModalV2.Content>
                            <Typography.BodyBL>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Totam debitis explicabo rerum
                                velit quod recusandae, cum odio inventore
                                repellendus non quas quis praesentium suscipit,
                                soluta incidunt officiis omnis, quae error!
                            </Typography.BodyBL>
                        </ModalV2.Content>
                    )}
                    {footer && (
                        <ModalV2.Footer
                            primaryButton={
                                <Button.Default>Log out</Button.Default>
                            }
                            secondaryButton={
                                <Button.Default styleType="secondary">
                                    Continue
                                </Button.Default>
                            }
                        />
                    )}
                </ModalV2.Card>
            </ModalV2>
        </>
    );
};
