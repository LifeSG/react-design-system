import React from "react";
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
    onClear?: () => void | undefined;
}
export declare const DropdownSearch: (props: Props & React.RefAttributes<HTMLInputElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export {};
