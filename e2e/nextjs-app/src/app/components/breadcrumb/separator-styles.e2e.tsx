"use client";
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";

export default function Story() {
    const links = [
        { children: "Home", href: "https://life.gov.sg" },
        { children: "Category", href: "https://life.gov.sg/category" },
        { children: "Subcategory", href: "https://life.gov.sg/subcategory" },
        { children: "Current Page" },
    ];

    return (
        <div className="story-column-container">
            <div>
                <h3>Chevron Separator</h3>
                <Breadcrumb
                    data-testid="breadcrumb-chevron"
                    links={links}
                    separatorStyle="chevron"
                />
            </div>
            <div>
                <h3>Slash Separator</h3>
                <Breadcrumb
                    data-testid="breadcrumb-slash"
                    links={links}
                    separatorStyle="slash"
                />
            </div>
        </div>
    );
}
