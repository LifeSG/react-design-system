import { useCallback, useEffect, useRef, useState } from "react";
import {
    Container,
    Input,
    Label,
    // SubLabel,
    TextContainer,
} from "./toggle.styles";
import { ToggleProps } from "./types";
import { ToggleIcon, ToggleIconType } from "../shared/toggle-icon/toggle-icon";

export const Toggle = ({
    type = "checkbox",
    indicator,
    checked,
    styleType = "default",
    children,
    // subLabel,
    disabled,
    error,
    name,
    id,
    className,
    "data-testid": testId,
    onChange,
}: ToggleProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState<boolean>(checked);
    const [inputId] = useState<string>(
        id ? `${id}-input` : crypto.randomUUID()
    );
    const inputRef = useRef<HTMLInputElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!disabled) {
                switch (type) {
                    case "checkbox":
                        {
                            if (!selected) {
                                setSelected((prevSelected) => {
                                    return !prevSelected;
                                });
                            }
                        }
                        break;
                    case "radio":
                    case "yes":
                    case "no":
                        {
                            if (!selected) {
                                setSelected(true);
                            }
                        }
                        break;
                }

                if (onChange) onChange(event);
            }
        },
        []
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderIndicator = () => {
        let toggleIconType: ToggleIconType;

        switch (type) {
            case "yes":
                toggleIconType = "tick";
                break;
            case "no":
                toggleIconType = "cross";
                break;
            case "checkbox":
            case "radio":
                toggleIconType = type;
                break;
        }

        return (
            <ToggleIcon
                type={toggleIconType}
                active={selected}
                disabled={disabled}
            />
        );
    };

    // TODO: Reinstate later
    // const renderSubLabel = () => {
    //     if (!subLabel) {
    //         return null;
    //     }

    //     let component: string | JSX.Element;

    //     if (typeof subLabel === "string") {
    //         component = subLabel;
    //     } else if (typeof subLabel === "function") {
    //         component = subLabel();
    //     }

    //     return (
    //         <SubLabel disabled={disabled} $selected={selected}>
    //             {component}
    //         </SubLabel>
    //     );
    // };

    return (
        <Container
            $selected={selected}
            $disabled={disabled}
            role={type === "checkbox" ? "checkbox" : "radio"}
            className={className}
            $styleType={styleType}
            $error={error}
            $indicator={indicator}
            // $hasSubLabel={!!subLabel}
            id={id}
            data-testid={testId}
        >
            {indicator && renderIndicator()}
            <Input
                ref={inputRef}
                name={name}
                id={inputId}
                type={type === "checkbox" ? "checkbox" : "radio"}
                data-testid="toggle-input"
                disabled={disabled}
                onChange={handleOnChange}
                checked={selected}
            />
            <TextContainer>
                <Label
                    htmlFor={inputId}
                    $selected={selected}
                    $indicator={indicator}
                    $disabled={disabled}
                    data-testid="toggle-label"
                >
                    {children}
                </Label>
                {/* {subLabel && renderSubLabel()}  */}
            </TextContainer>
        </Container>
    );
};
