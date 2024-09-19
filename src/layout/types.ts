export interface CommonLayoutProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
    stretch?: boolean;
}

export type ContainerType = "flex" | "flex-column" | "grid";

export interface ContainerProps extends CommonLayoutProps {
    /** The type of display style. Values: "flex" | "flex-column" | "grid" */
    type?: ContainerType | undefined;
}

export interface SectionProps extends CommonLayoutProps {}

export type DivRef = React.Ref<HTMLDivElement>;

export interface ContentProps extends ContainerProps {}
