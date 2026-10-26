"use client";
// All 20 theme stylesheets, as e2e/nextjs-app's story layout imports them.
import "@lifesg/react-design-system/theme/styles/a11y-playground.css";
import "@lifesg/react-design-system/theme/styles/bookingsg.css";
import "@lifesg/react-design-system/theme/styles/careercompass.css";
import "@lifesg/react-design-system/theme/styles/ccube.css";
import "@lifesg/react-design-system/theme/styles/imda.css";
import "@lifesg/react-design-system/theme/styles/lifesg.css";
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

import { ThemeProvider } from "@lifesg/react-design-system/theme";

import { Pairs } from "../../consumer/pairs";

export default function Page() {
    return (
        <ThemeProvider>
            <Pairs />
        </ThemeProvider>
    );
}
