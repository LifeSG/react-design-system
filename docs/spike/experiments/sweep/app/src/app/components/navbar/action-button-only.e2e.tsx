"use client";

import { Navbar } from "@lifesg/react-design-system/navbar";

export default function Story() {
    return (
        <Navbar
            actionButtons={{
                desktop: [
                    {
                        args: {
                            children: "Logout",
                            styleType: "secondary",
                        },
                        type: "button",
                    },
                ],
            }}
            items={{
                desktop: [],
                mobile: [],
            }}
            selectedId="home"
        />
    );
}
