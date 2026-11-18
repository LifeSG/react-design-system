import "@lifesg/react-design-system/theme/styles/a11y-playground.css";
import "@lifesg/react-design-system/theme/styles/bookingsg.css";
import "@lifesg/react-design-system/theme/styles/careercompass.css";
import "@lifesg/react-design-system/theme/styles/ccube.css";
import "@lifesg/react-design-system/theme/styles/imda.css";
import "@lifesg/react-design-system/theme/styles/lifesg.css";
import "@lifesg/react-design-system/theme/styles/lta.css";
import "@lifesg/react-design-system/theme/styles/mylegacy.css";
import "@lifesg/react-design-system/theme/styles/oneservice.css";
import "@lifesg/react-design-system/theme/styles/pa.css";
import "@lifesg/react-design-system/theme/styles/rbs.css";
import "@lifesg/react-design-system/theme/styles/sgw-digital-lobby.css";
import "@lifesg/react-design-system/theme/styles/smgs.css";
import "@lifesg/react-design-system/theme/styles/spf.css";
import "@lifesg/react-design-system/theme/styles/sportsg-orange.css";
import "@lifesg/react-design-system/theme/styles/supportgowhere.css";
import "@lifesg/react-design-system/theme/styles/tote-board.css";
import "@lifesg/react-design-system/theme/styles/vica.css";
import "@lifesg/react-design-system/theme/styles/websg.css";
import "@lifesg/react-design-system/theme/styles/wise.css";
import "@lifesg/react-design-system/theme/styles/wogaa.css";

import { headers } from "next/headers";
import type React from "react";

import styles from "./layout.module.css";
import { Providers } from "./providers";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const nonce = (await headers()).get("x-nonce");

    return (
        <Providers nonce={nonce || undefined}>
            <div data-testid="story-layout" className={styles["story-layout"]}>
                {children}
            </div>
        </Providers>
    );
}
