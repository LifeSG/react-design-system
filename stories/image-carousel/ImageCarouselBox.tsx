import React, { useState } from "react";
import { Button } from "../../src/button";
import { ImageCarousel } from "../../src/image-carousel";

export const ImageCarouselBox = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <Button.Default
                onClick={() => {
                    setShow((old) => !old);
                }}
            >
                Show Modal
            </Button.Default>
            <ImageCarousel
                images={[
                    "https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/81468367_1055977134736744_9204822506895048704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=ag85pJtsbrsAX8-NEdw&_nc_ht=scontent.fhan19-1.fna&oh=00_AfBeJRq1mTK4UPR8c5Zcz70UoQGvNvT7CFD7oMK54_myTA&oe=657406C8",
                    "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/134308796_1670507973122188_1271955262438346132_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=JC1GsfC9i00AX8tgzCw&_nc_oc=AQl9yzHToSXqDoOPj0NSkg_h2STUpS9PWHrtqNtDCoSgBlmioMFKisf3znbKMkhd0H5JwPykFcIEPSH9rnx9m3TC&_nc_ht=scontent-sin6-2.xx&oh=00_AfCRg22pstdCtgpYhDlJJa0vWw-iuOBrqb175yPvxrzvZw&oe=657404C9",
                    "https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/81468367_1055977134736744_9204822506895048704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=ag85pJtsbrsAX8-NEdw&_nc_ht=scontent.fhan19-1.fna&oh=00_AfBeJRq1mTK4UPR8c5Zcz70UoQGvNvT7CFD7oMK54_myTA&oe=657406C8",
                    "https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/81468367_1055977134736744_9204822506895048704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=ag85pJtsbrsAX8-NEdw&_nc_ht=scontent.fhan19-1.fna&oh=00_AfBeJRq1mTK4UPR8c5Zcz70UoQGvNvT7CFD7oMK54_myTA&oe=657406C8",
                    "https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/81468367_1055977134736744_9204822506895048704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=ag85pJtsbrsAX8-NEdw&_nc_ht=scontent.fhan19-1.fna&oh=00_AfBeJRq1mTK4UPR8c5Zcz70UoQGvNvT7CFD7oMK54_myTA&oe=657406C8",
                    "https://upload.wikimedia.org/wikipedia/commons/8/88/Height_demonstration_diagram.png",
                    "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/134308796_1670507973122188_1271955262438346132_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=JC1GsfC9i00AX8tgzCw&_nc_oc=AQl9yzHToSXqDoOPj0NSkg_h2STUpS9PWHrtqNtDCoSgBlmioMFKisf3znbKMkhd0H5JwPykFcIEPSH9rnx9m3TC&_nc_ht=scontent-sin6-2.xx&oh=00_AfCRg22pstdCtgpYhDlJJa0vWw-iuOBrqb175yPvxrzvZw&oe=657404C9",
                    "https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/134308796_1670507973122188_1271955262438346132_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=JC1GsfC9i00AX8tgzCw&_nc_oc=AQl9yzHToSXqDoOPj0NSkg_h2STUpS9PWHrtqNtDCoSgBlmioMFKisf3znbKMkhd0H5JwPykFcIEPSH9rnx9m3TC&_nc_ht=scontent-sin6-2.xx&oh=00_AfCRg22pstdCtgpYhDlJJa0vWw-iuOBrqb175yPvxrzvZw&oe=657404C9",
                ]}
                show={show}
                onOverlayClick={() => setShow(false)}
            />
        </>
    );
};
