"use client";
import { FullscreenImageCarousel } from "@lifesg/react-design-system/fullscreen-image-carousel";
import { DownloadIcon } from "@lifesg/react-icons/download";
import { PrinterIcon } from "@lifesg/react-icons/printer";
import { ShareIcon } from "@lifesg/react-icons/share";

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
                    customActions: [
                        {
                            icon: <PrinterIcon aria-hidden />,
                            ariaLabel: "Print image",
                            onClick: () => undefined,
                        },
                    ],
                },
            ]}
            show
            onClose={() => undefined}
            customActions={[
                {
                    icon: <DownloadIcon aria-hidden />,
                    ariaLabel: "Download image",
                    onClick: () => undefined,
                },
                {
                    icon: <ShareIcon aria-hidden />,
                    ariaLabel: "Share image",
                    onClick: () => undefined,
                },
            ]}
        />
    );
}
