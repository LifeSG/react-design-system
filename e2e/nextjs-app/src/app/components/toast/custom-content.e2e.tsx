"use client";

import { Toast } from "@lifesg/react-design-system/toast";
import { Typography } from "@lifesg/react-design-system/typography";

export default function Story() {
    return (
        <Toast
            data-testid="toast-info"
            type="info"
            title={
                <Typography.HeadingXS weight="regular">
                    This is a <strong>custom title</strong>
                </Typography.HeadingXS>
            }
            label={
                <Typography.BodyMD>
                    This is a custom description with a
                    <Typography.LinkMD href="#"> link</Typography.LinkMD>.
                </Typography.BodyMD>
            }
            fixed={false}
        />
    );
}
