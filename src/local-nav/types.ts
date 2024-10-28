export interface NavItemProps {
    handleClick?: any;
    isSelected?: boolean;
    title: string;
    id?: string;
    className?: string;
    renderTitle?: (props: NavItemProps) => React.ReactNode;
}

export interface LocalNavPropsBase {
    className?: string | undefined;
    id?: string | undefined;
    "data-testid"?: string | undefined;
    onNavItemClickCb?: (...args: any[]) => (e?: React.MouseEvent) => any;
    titleList: string[];
    visibleSectionIndex: number;
}
