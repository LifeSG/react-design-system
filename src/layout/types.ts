interface CommonLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
    stretch?: boolean | undefined;
}

export type ContainerType = "flex" | "flex-column" | "grid";

export interface ContainerProps extends CommonLayoutProps {
    /** The type of display style. Values: "flex" | "flex-column" | "grid" */
    type?: ContainerType | undefined;
}

export interface SectionProps extends CommonLayoutProps {}

export interface ContentProps extends ContainerProps {}
