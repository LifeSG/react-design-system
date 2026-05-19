"use client";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";

export default function Story() {
    return (
        <FullscreenImageCarousel
            items={[
                {
                    src: "https://picsum.photos/id/157/1600/900",
                    alt: "First image",
                    fileName: `Long file name - Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Morbi venenatis neque felis, 
                    ac tempor erat iaculis et. Nam elementum at lectus et
                    dapibus.`,
                    fileSize: "1.2 MB",
                },
            ]}
            show
            onClose={() => undefined}
            onDelete={() => undefined}
        />
    );
}
