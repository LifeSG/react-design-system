import { StyledComponentProps, getCollection } from "../helpers";
import { DefaultComponents } from "./specs/default-components.tokens";
import { PaComponents } from "./specs/pa-components-tokens";
import { ButtonThemeToken, ComponentProps, Components } from "./types";

const ComponentSpec = {
    collections: {
        default: DefaultComponents,
        pa: PaComponents,
    },
    defaultValue: "default",
};

export const getComponents = (key: keyof Components) => {
    return (props: StyledComponentProps): ButtonThemeToken | undefined => {
        const theme = props.theme;
        const components: Components = getCollection(
            ComponentSpec,
            theme?.components
        );

        const component = components[key];

        return component;
    };
};

export const ComponentSet: {
    [key in keyof Components]: (
        props: StyledComponentProps
    ) => ComponentProps | undefined;
} = {
    Button: getComponents("Button"),
};
