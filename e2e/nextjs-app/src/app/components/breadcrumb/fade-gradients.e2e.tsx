"use client";
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";

export default function Story() {
    const longLinks = [
        {
            children: "Services and Government Resources Section",
            href: "https://life.gov.sg/services",
        },
        {
            children: "Healthcare and Medical Services Department",
            href: "https://life.gov.sg/healthcare",
        },
        {
            children: "Specialist Medical Consultation Services",
            href: "https://life.gov.sg/medical",
        },
        {
            children: "Cardiology and Heart Disease Treatment",
            href: "https://life.gov.sg/specialists",
        },
        { children: "Current Page" },
    ];

    const fadeColorLeft = ["red", "orange"];
    const fadeColorRight = ["blue", "green"];
    const fadeColor = { left: fadeColorLeft, right: fadeColorRight };

    return (
        <div className="story-column-container">
            <div>
                <h3>Fade Left</h3>
                <Breadcrumb
                    data-testid="breadcrumb-fade-left"
                    links={longLinks}
                    fadePosition="both"
                    fadeColor={fadeColor}
                />
            </div>
            <div>
                <h3>Fade Right</h3>
                <Breadcrumb
                    data-testid="breadcrumb-fade-right"
                    links={longLinks}
                    fadePosition="both"
                    fadeColor={fadeColor}
                />
            </div>
            <div>
                <h3>Fade Both Sides</h3>
                <Breadcrumb
                    data-testid="breadcrumb-fade-both"
                    links={longLinks}
                    fadePosition="both"
                    fadeColor={fadeColor}
                />
            </div>
        </div>
    );
}
