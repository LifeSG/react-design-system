import styled from "styled-components";
import { Color } from "../color/color";
import { NotificationTheme, NotificationType } from "./types";
import { IconButton } from "../icon-button";
import { TextStyleHelper } from "../text";
import { Text } from "../text";
import { CrossIcon } from "@lifesg/react-icons/cross";

interface StyleProps {
    $type: NotificationType;
    $theme: NotificationTheme;
}

export const Wrapper = styled.div<StyleProps>`
    width: 100%;
    padding: 16px;
    border-radius: 8px;

    ${(props) => {
        switch (props.$type) {
            case "success":
                return `
                    background: ${
                        props.$theme === "light"
                            ? Color.Validation.Green.Background(props)
                            : Color.Validation.Dark.Background(props)
                    };
                    border: ${
                        props.$theme === "light"
                            ? `1pt solid ${Color.Validation.Green.Border(
                                  props
                              )}`
                            : Color.Validation.Dark.Border(props)
                    }
                    };
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Green.Text(props)
                            : Color.Validation.Green.Text(props)
                    };
                    svg {
                        font-size: 24px !important;
                        color: ${Color.Validation.Green.Icon(props)}
                    }
                `;
            case "error":
                return `
                    background: ${
                        props.$theme === "light"
                            ? Color.Validation.Red.Background(props)
                            : Color.Validation.Dark.Background(props)
                    };
                    border: ${
                        props.$theme === "light"
                            ? `1pt solid ${Color.Validation.Red.Border(props)}`
                            : Color.Validation.Dark.Border(props)
                    }
                    };
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Red.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                    svg {
                        font-size: 24px !important;
                        color:${
                            props.$theme === "light"
                                ? Color.Validation.Red.Icon(props)
                                : Color.Validation.Red.Border(props)
                        }
                    }   
                `;
            case "warning":
                return `
                    background: ${
                        props.$theme === "light"
                            ? Color.Validation.Orange.Background(props)
                            : Color.Validation.Dark.Background(props)
                    };
                    border: ${
                        props.$theme === "light"
                            ? `1pt solid ${Color.Validation.Orange.Border(
                                  props
                              )}`
                            : Color.Validation.Dark.Border(props)
                    }
                    };
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Orange.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                    svg {
                        color: ${Color.Validation.Orange.Icon(props)}
                    }
                `;
            case "info":
                return `
                        background: ${
                            props.$theme === "light"
                                ? Color.Validation.Blue.Background(props)
                                : Color.Validation.Dark.Background(props)
                        };
                        border: ${
                            props.$theme === "light"
                                ? `1pt solid ${Color.Validation.Blue.Border(
                                      props
                                  )}`
                                : Color.Validation.Dark.Border(props)
                        }
                        };
                        color: ${
                            props.$theme === "light"
                                ? Color.Validation.Blue.Text(props)
                                : Color.Validation.Dark.Text(props)
                        };
                        svg {
                            color:${
                                props.$theme === "light"
                                    ? Color.Validation.Blue.Icon(props)
                                    : Color.Validation.Blue.Border(props)
                            }
                        }
                    `;
            default:
                return `
                    background: ${
                        props.$theme === "light"
                            ? Color.Validation.Green.Background(props)
                            : Color.Validation.Dark.Background(props)
                    };
                    border: ${
                        props.$theme === "light"
                            ? `1pt solid ${Color.Validation.Green.Border(
                                  props
                              )}`
                            : Color.Validation.Dark.Border(props)
                    };
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Green.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                    svg {
                        color: ${Color.Validation.Green.Icon(props)}
                    }
                `;
        }
    }}
`;

export const Container = styled.div`
    display: flex;
`;

export const IconContainer = styled.div`
    max-width: 48px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 8px;
    flex-grow: 2;
`;

export const Title = styled(Text.H4)<StyleProps>`
    display: flex;

    ${TextStyleHelper.getTextStyle("Body", "semibold")};
    ${(props) => {
        switch (props.$type) {
            case "success":
                return `
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Green.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                `;
            case "info":
                return `
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Blue.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                `;
            case "error":
                return `
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Red.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                `;
            case "warning":
                return `
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Orange.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                `;
            default:
                return `
                    color: ${
                        props.$theme === "light"
                            ? Color.Validation.Green.Text(props)
                            : Color.Validation.Dark.Text(props)
                    };
                `;
        }
    }}
`;

export const Description = styled(Text.Body)<StyleProps>`
    display: flex;
`;
export const CloseIcon = styled(CrossIcon)`
    height: 18px;
    width: 18px;
    margin-top: 8px;
`;

export const StyledIconButton = styled(IconButton)<StyleProps>`
    padding: 0;
    height: 20px;
    width: 20px;

    ${(props) => {
        let iconColor: string;
        switch (props.$type) {
            case "success":
                iconColor =
                    props.$theme === "light"
                        ? Color.Validation.Green.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            case "error":
                iconColor =
                    props.$theme === "light"
                        ? Color.Validation.Red.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            case "warning":
                iconColor =
                    props.$theme === "light"
                        ? Color.Validation.Orange.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            case "info":
                iconColor =
                    props.$theme === "light"
                        ? Color.Validation.Blue.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            default:
                iconColor = Color.Validation.Green.Text(props);
                break;
        }
        return `

        svg {
            color: ${iconColor};
        }`;
    }}
`;
