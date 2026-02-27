"use client";
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";

export default function Story() {
    return (
        <Breadcrumb
            links={[
                { children: "Link", href: "https://life.gov.sg" },
                { children: "No Link" },
                { children: "Last", href: "https://life.gov.sg" },
            ]}
            fadeColor={{
                left: ["red", "orange"],
                right: ["blue", "green"],
            }}
        />
    );
}
