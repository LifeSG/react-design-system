export interface ISectionItem {
    sectionTitle: string;
    sectionData: JSX.Element;
}

export interface NavItemProps {
    handleClick?: any;
    isSelected?: boolean;
    section: ISectionItem;
    renderTitle?: (props: NavItemProps) => React.ReactNode;
}

export interface LocalNavPropsBase {
    onNavItemClickCb?: (...args: any[]) => (e?: React.MouseEvent) => any;
    sections: ISectionItem[];
    visibleSectionIndex: number;
}
