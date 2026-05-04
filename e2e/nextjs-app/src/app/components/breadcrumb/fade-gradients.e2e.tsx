"use client";
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";
import styles from "./breadcrumb.module.css";

export default function Story() {
    const longLinks = [
        {
            children: "Home Page with Very Long Navigation Text",
            href: "https://life.gov.sg",
        },
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
        { children: "Current Page with Long Descriptive Title" },
    ];

    const fadeColorLeft = ["red", "orange"];
    const fadeColorRight = ["blue", "green"];

    return (
        <div className={`story-column-container ${styles["container-gap"]}`}>
            <div>
                <h3>Fade Left Only</h3>
                <Breadcrumb
                    data-testid="breadcrumb-fade-left"
                    links={longLinks}
                    fadePosition="left"
                    fadeColor={{ left: fadeColorLeft }}
                />
            </div>
            <div>
                <h3>Fade Right Only</h3>
                <Breadcrumb
                    data-testid="breadcrumb-fade-right"
                    links={longLinks}
                    fadePosition="right"
                    fadeColor={{ right: fadeColorRight }}
                />
            </div>
            <div>
                <h3>Fade Both Sides</h3>
                <Breadcrumb
                    data-testid="breadcrumb-fade-both"
                    links={longLinks}
                    fadePosition="both"
                    fadeColor={{ left: fadeColorLeft, right: fadeColorRight }}
                />
            </div>
        </div>
    );
}
