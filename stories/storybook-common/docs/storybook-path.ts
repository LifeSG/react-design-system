export const getStorybookHref = (path: string) => {
    const currentWindow = globalThis.window;
    const href =
        currentWindow?.top?.location.href || currentWindow?.location.href;

    if (!href) {
        return `?path=${path}`;
    }

    const url = new URL(href);
    url.hash = "";
    url.search = "";

    return `${url.toString()}?path=${path}`;
};
