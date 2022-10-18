export interface CommonLayoutProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    "data-testid"?: string | undefined;
}

export interface SectionProps extends CommonLayoutProps {}

export type ContainerType = "flex" | "grid";

export interface ContainerProps extends CommonLayoutProps {
    /** The type of display style. Values: "flex" | "grid" */
    type?: ContainerType | undefined;
}

export interface ContentProps extends ContainerProps {}

export type DivRef = React.Ref<HTMLDivElement>;
