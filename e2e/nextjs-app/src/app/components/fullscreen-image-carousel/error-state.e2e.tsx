"use client";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";

export default function Story() {
    return (
        <FullscreenImageCarousel
            items={[
                { src: "data:image/gif,invalid" },
                { src: "data:image/gif,invalid" },
            ]}
            show
            onClose={() => undefined}
        />
    );
}
