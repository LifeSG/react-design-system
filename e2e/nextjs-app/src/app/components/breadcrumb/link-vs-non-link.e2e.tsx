"use client";
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";

export default function Story() {
    const allLinksExceptLast = [
        { children: "Home", href: "https://life.gov.sg" },
        { children: "Services", href: "https://life.gov.sg/services" },
        { children: "Healthcare", href: "https://life.gov.sg/healthcare" },
        { children: "Current Page" }, // No href - should be non-link
    ];

    const mixedLinkTypes = [
        { children: "Home", href: "https://life.gov.sg" },
        { children: "Non-clickable Category" }, // No href - should be non-link
        {
            children: "Clickable Subcategory",
            href: "https://life.gov.sg/subcategory",
        },
        { children: "Another Non-clickable" }, // No href - should be non-link
        { children: "Current Page" }, // No href - should be non-link
    ];

    const noLinksAtAll = [
        { children: "Non-link Home" }, // No href
        { children: "Non-link Category" }, // No href
        { children: "Current Page" }, // No href
    ];

    return (
        <div className="story-column-container">
            <div>
                <h3>All Links Except Last</h3>
                <Breadcrumb
                    data-testid="breadcrumb-standard-pattern"
                    links={allLinksExceptLast}
                />
            </div>
            <div>
                <h3>Mixed Link and Non-link Items</h3>
                <Breadcrumb
                    data-testid="breadcrumb-mixed-types"
                    links={mixedLinkTypes}
                />
            </div>
            <div>
                <h3>All Non-link Items</h3>
                <Breadcrumb
                    data-testid="breadcrumb-no-links"
                    links={noLinksAtAll}
                />
            </div>
        </div>
    );
}
