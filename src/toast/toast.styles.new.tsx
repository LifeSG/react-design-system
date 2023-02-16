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
    padding: 16px;
    display: flex;
    flex-direction: column;
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
                                ? Color.Validation.Green.Background(props)
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
    display: inline-block;
    width: 100%;
    padding: 0;
`;

export const Title = styled(Text.H4)<StyleProps>`
    // display: flex;
    margin-top: -10px;
    margin-left: 6px;
    // margin-bottom: -40px;
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

export const Description = styled(Text.BodySmall && Text.Body)<StyleProps>`
    display: inline-block;
    margin-top: -28px;
    margin-left: 29px;
    margin-right: 60px;

    ${(props) => {
        let textColor: string;
        switch (props.$type) {
            case "success":
                textColor =
                    props.$theme === "light"
                        ? Color.Validation.Green.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            case "error":
                textColor =
                    props.$theme === "light"
                        ? Color.Validation.Red.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            case "warning":
                textColor =
                    props.$theme === "light"
                        ? Color.Validation.Orange.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            case "info":
                textColor =
                    props.$theme === "light"
                        ? Color.Validation.Blue.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
            default:
                textColor = Color.Validation.Green.Text(props);
                break;
        }
        return `
            color: ${textColor};
            // margin-left: 45px;

            p {
                ${TextStyleHelper.getTextStyle("XSmall", "light")}
               }
     `;
    }}
`;
export const CloseIcon = styled(CrossIcon)`
    height: 20px;
    width: 20px;
    margin-top: -2px;
`;

export const StyledIconButton = styled(IconButton)<StyleProps>`
    background: transparent;
    padding: 0;
    height: 20px;
    width: 20px;
    padding-top: 3px;
    // margin-right: -15rem;
    // margin-left: 2rem;
    float: right;

    ${(props) => {
        let iconColor: string;
        switch (props.$type) {
            case "success":
                iconColor =
                    props.$theme === "light"
                        ? Color.Validation.Green.Text(props)
                        : Color.Validation.Dark.Text(props);
                break;
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
            display: block;
        }

        :focus,
        :active {
            background: transparent;

        }`;
    }}
`;
