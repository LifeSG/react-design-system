"use client";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";

export default function Story() {
    return (
        <FullscreenImageCarousel
            items={[
                {
                    src: "https://picsum.photos/id/157/1600/900",
                    alt: "First image",
                    fileName: "image-1.jpg",
                    fileSize: "1.2 MB",
                },
                {
                    src: "https://picsum.photos/id/163/900/300",
                    alt: "Second image",
                    fileName: "image-2.jpg",
                    fileSize: "2.5 MB",
                },
                {
                    src: "https://picsum.photos/id/369/1000/1000",
                    alt: "Third image",
                    fileName: "image-3.jpg",
                    fileSize: "1.8 MB",
                },
            ]}
            show
            hideNavigation
            hideCounter
            hideMagnifier
            hideThumbnail
            onClose={() => undefined}
        />
    );
}
