export interface NavItemProps {
    handleClick?: any;
    isSelected?: boolean;
    title: string;
    renderTitle?: (props: NavItemProps) => React.ReactNode;
}

export interface LocalNavPropsBase {
    onNavItemClickCb?: (...args: any[]) => (e?: React.MouseEvent) => any;
    titleList: string[];
    visibleSectionIndex: number;
}
