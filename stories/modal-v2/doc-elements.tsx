import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import { Button } from "src/button";
import { Checkbox } from "src/checkbox";
import { ModalV2 } from "src/modal-v2";
import { Colour, Font } from "src/theme";
import { Typography } from "src/typography";

type DivProps = ComponentPropsWithoutRef<"div">;
type LabelProps = ComponentPropsWithoutRef<"label">;

const options = css`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
`;

const label = css`
    ${Font["body-baseline-regular"]}
    color: ${Colour.text};
    cursor: pointer;

    display: flex;
    gap: 0.25rem;
    align-items: center;
`;

const Options = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(options, className)} />
);

const Label = ({ className, children, ...props }: LabelProps) => (
    <label {...props} className={clsx(label, className)}>
        {children}
    </label>
);

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
