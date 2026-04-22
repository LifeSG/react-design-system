import { useState } from "react";
import { Button } from "src/button";
import { Card } from "src/card";
import { Colour } from "src/theme";
import styled from "styled-components";

interface Props {
    onShowOptions: () => void;
    onHideOptions: () => void;
}

export const ComponentWithFloatingElement = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <Parent>
            <Button.Default
                onClick={() => {
                    setOpen(!open);
                    if (open) {
                        props.onHideOptions?.();
                    } else {
                        props.onShowOptions?.();
                    }
                }}
            >
                Toggle
            </Button.Default>
            {open && <Dropdown>Floating content</Dropdown>}
        </Parent>
    );
};

const Parent = styled.div`
    position: relative;
`;

const Dropdown = styled(Card)`
    position: absolute;
    top: calc(100% + 16px);
    height: 100px;
    background-color: ${Colour["bg"]};
`;
