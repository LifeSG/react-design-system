import React from "react";

export const hasValidChildren = (children: React.ReactNode): boolean => {
    return React.Children.toArray(children).some((child) => {
        if (typeof child === "string") {
            return child.trim() !== "";
        }
        return child != null;
    });
};
