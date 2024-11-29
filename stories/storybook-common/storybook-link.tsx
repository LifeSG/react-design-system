interface StorybookLinkProps {
    path: string;
    children: React.ReactNode;
}

export const StorybookLink = (props: StorybookLinkProps) => {
    const { path, children } = props;
    const storybookHref = "./?path=" + path;

    // because Storybook loads in an iframe, navigating to the href via
    // `window.location.href` does not work, instead, you'll have to do
    // `window.top.location.href`
    // it's just easier to open all internal links in a new tab
    return (
        <a target="_blank" rel="noreferrer" href={storybookHref}>
            {children}
        </a>
    );
};