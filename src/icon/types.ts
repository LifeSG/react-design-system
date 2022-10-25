import React from "react";

export type IconType =
    | "address-book"
    | "alert"
    | "arrow-up"
    | "arrow-left"
    | "arrow-right"
    | "arrow-down"
    | "bookmark"
    | "bookmark-solid"
    | "calendar"
    | "calendar-add"
    | "camera"
    | "caret-down-lg"
    | "caret-down-sm"
    | "chevron-up"
    | "chevron-left"
    | "chevron-right"
    | "chevron-down"
    | "clock"
    | "cross"
    | "cross-encased"
    | "document"
    | "document-with-pencil"
    | "external"
    | "fax"
    | "filter"
    | "inbox"
    | "info"
    | "language"
    | "link"
    | "location"
    | "location-solid"
    | "location-unknown"
    | "lock"
    | "mail"
    | "mail-read"
    | "mail-unread"
    | "map"
    | "menu"
    | "minus"
    | "pencil"
    | "phone"
    | "pin"
    | "play"
    | "plus"
    | "refresh"
    | "retry"
    | "search"
    | "share"
    | "sort-high-low"
    | "sort-low-high"
    | "star"
    | "tick"
    | "ticket"
    | "trash-bin"
    | "upload"
    | "users"
    | "web";

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
    type: IconType;
}

export interface IconSvgProps {
    id?: string | undefined;
    className?: string | undefined;
}
