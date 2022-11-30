import React from "react";
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
}
export declare const DropdownSearch: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
