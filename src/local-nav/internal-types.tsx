import { LocalNavItemProps } from "./types";

export interface LocalNavItemComponentProps {
    handleClick: any;
    isSelected: boolean;
    item: LocalNavItemProps;
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: { selected: boolean }
          ) => React.ReactNode)
        | undefined;
}
