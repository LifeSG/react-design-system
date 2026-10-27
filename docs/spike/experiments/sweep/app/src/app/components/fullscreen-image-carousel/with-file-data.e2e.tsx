"use client";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";

export default function Story() {
    return (
        <FullscreenImageCarousel
            items={[
                {
                    src: "https://fastly.picsum.photos/id/157/1600/900.jpg?hmac=oYsrYA8RknCGVBIHMp0Dia0AbJej4tbwxYkmzGocYEk",
                    alt: "First image",
                    fileName: "image-1.jpg",
                    fileSize: "1.2 MB",
                },
                {
                    src: "https://fastly.picsum.photos/id/163/900/300.jpg?hmac=RIuy_lcPbBZZ0RGl4Tw9mCmczSi-5e1bLfddMePzLS0",
                    alt: "Second image",
                    fileName: "image-2.jpg",
                    fileSize: "2.5 MB",
                },
                {
                    src: "https://fastly.picsum.photos/id/369/1000/1000.jpg?hmac=bxgR5xTb1LF0GjOxAf1jg_Cgc4ouWACvK9wUt0UOMuw",
                    alt: "Third image",
                    fileName: "image-3.jpg",
                    fileSize: "1.8 MB",
                },
                {
                    src: "https://fastly.picsum.photos/id/445/300/300.jpg?hmac=5O-DNt4KzxZfuV5dgp9fNb7_sc3Tg6ZKtH6Bv6oktOQ",
                    alt: "Fourth image",
                    fileName: "image-4.jpg",
                    fileSize: "3.1 MB",
                },
            ]}
            show
            onClose={() => undefined}
            onDelete={() => undefined}
        />
    );
}
