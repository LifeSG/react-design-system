import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../src/button";
import { Checkbox } from "../../src/checkbox";
import { Mode } from "../../src/filter";
import { Form } from "../../src/form";

const Wrapper = styled.div`
    padding: 1rem;
`;

const CheckboxWithLabel = ({
    checked,
    children,
    onChange,
}: {
    checked: boolean;
    children: React.ReactNode;
    onChange: () => void;
}) => {
    return (
        <label
            style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
                padding: "0 0.5rem",
            }}
        >
            <Checkbox
                displaySize="small"
                checked={checked}
                onChange={onChange}
            />
            <span style={{ marginLeft: "0.5rem" }}>{children}</span>
        </label>
    );
};

interface Props<T> {
    mode: Mode;
    value: T;
    onChange: (val: T) => void;
}

export const SearchFilter = ({ mode, value, onChange }: Props<string>) => {
    return (
        <Wrapper>
            <Form.InputGroup
                autoFocus={mode === "fullscreen"}
                placeholder="Search with keyword"
                addon={{
                    type: "custom",
                    attributes: {
                        children: <MagnifierIcon />,
                    },
                }}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </Wrapper>
    );
};

export const CheckboxFilter = ({
    value,
    onChange,
}: Props<Record<string, boolean>>) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Wrapper>
            {Array(expanded ? 8 : 5)
                .fill(null)
                .map((_, i) => {
                    const opt = `opt${i + 1}`;
                    return (
                        <CheckboxWithLabel
                            key={i}
                            checked={value[opt]}
                            onChange={() =>
                                onChange({ ...value, [opt]: !value[opt] })
                            }
                        >
                            Label {i + 1}
                        </CheckboxWithLabel>
                    );
                })}
            <Button.Small
                styleType="link"
                onClick={() => setExpanded(!expanded)}
            >
                View {expanded ? "less" : "more"}
            </Button.Small>
        </Wrapper>
    );
};
