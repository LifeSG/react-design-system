import { LocalNavItemProps } from "./types";

export interface LocalNavItemComponentProps {
    handleClick: React.MouseEventHandler<HTMLLIElement>;
    isSelected: boolean;
    item: LocalNavItemProps;
    renderItem?:
        | ((
              item: LocalNavItemProps,
              renderProps: { selected: boolean }
          ) => React.ReactNode)
        | undefined;
}
