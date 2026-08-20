import type React from "react";
interface ThumbProps extends React.HTMLAttributes<HTMLDivElement> {
    focused: boolean | undefined;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
}
export declare const Thumb: (props: ThumbProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
interface TrackProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
}
export declare const Track: (props: TrackProps & React.RefAttributes<HTMLDivElement>) => React.ReactElement | null;
export {};
