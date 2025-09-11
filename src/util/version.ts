import { version } from "react";

export const isReact19 = () => {
    const pieces = version.split(".");
    const major = parseInt(pieces[0], 10);

    return major >= 19;
};
