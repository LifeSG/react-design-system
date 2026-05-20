"use client";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";

export default function Story() {
    return (
        <FullscreenImageCarousel
            items={[
                {
                    src: "https://fastly.picsum.photos/id/157/1600/900.jpg?hmac=oYsrYA8RknCGVBIHMp0Dia0AbJej4tbwxYkmzGocYEk",
                },
                {
                    src: "https://fastly.picsum.photos/id/163/900/300.jpg?hmac=RIuy_lcPbBZZ0RGl4Tw9mCmczSi-5e1bLfddMePzLS0",
                },
                {
                    src: "https://fastly.picsum.photos/id/369/1000/1000.jpg?hmac=bxgR5xTb1LF0GjOxAf1jg_Cgc4ouWACvK9wUt0UOMuw",
                },
                {
                    src: "https://fastly.picsum.photos/id/445/300/300.jpg?hmac=5O-DNt4KzxZfuV5dgp9fNb7_sc3Tg6ZKtH6Bv6oktOQ",
                },
            ]}
            show
            onClose={() => undefined}
            onDelete={() => undefined}
        />
    );
}
