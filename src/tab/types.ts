export interface TabProps {
    children: JSX.Element | JSX.Element[];
    /** Specify the initial tab index that is to be displayed */
    initialActive?: number | undefined;
    /**
     * Specify the current tab index that is to be displayed. By specifying
     * this prop, the tab rendering will be manually controlled by you
     */
    currentActive?: number;
    className?: string | undefined;
    onTabClick?: ((title: string, index: number) => void) | undefined;
}

export interface TabItemProps {
    title: string;
    children: JSX.Element | JSX.Element[];
}

export interface TabLinkProps {
    title: string;
    counter?: number | undefined;
}
