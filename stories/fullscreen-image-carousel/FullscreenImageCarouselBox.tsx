import React, { useState } from "react";
import { Button } from "../../src/button";
import { FullscreenImageCarousel } from "../../src/fullscreen-image-carousel";

export const FullscreenImageCarouselBox = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button.Default
                onClick={() => {
                    setShow((old) => !old);
                }}
            >
                Show Modal
            </Button.Default>
            <FullscreenImageCarousel
                images={[
                    "https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
                    "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1519557663006-e0423f3a092b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
                    "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1519557663006-e0423f3a092b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
                    "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1519557663006-e0423f3a092b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=800",
                    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
                    "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1519557663006-e0423f3a092b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ]}
                show={show}
                onOverlayClick={() => setShow(false)}
            />
        </>
    );
};
