import { PlaceholderImageIcon } from "@lifesg/react-icons";
import React, { useEffect, useState } from "react";
import { LoadingDots } from "../animations";
import { ImageBox } from "./stateful-image.style";

interface Props
    extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "children"> {
    children?: (params: {
        loading: boolean;
        error: Event | string;
        src: string;
        placeholder?: string;
    }) => React.ReactNode;
}

export const StatefulImage = (props: Props) => {
    const { src, children, placeholder, ...rest } = props;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Event | string>();

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setLoading(false);
        };
        img.onerror = (e: Event | string) => {
            setLoading(false);
            setError(e);
        };
    }, []);

    if (children) {
        return (
            <React.Fragment>{children({ loading, error, src })}</React.Fragment>
        );
    }

    if (error) {
        return placeholder ? (
            <ImageBox src={placeholder} {...rest} />
        ) : (
            <PlaceholderImageIcon style={{ width: "100%", height: "100%" }} />
        );
    }

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                {...rest}
            >
                <LoadingDots className="h-full" />
            </div>
        );
    }

    return <ImageBox src={src} {...rest} />;
};