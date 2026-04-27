"use client";
import { Breadcrumb } from "@lifesg/react-design-system/breadcrumb";

export default function Story() {
    const shortLinks = [
        { children: "Home", href: "https://life.gov.sg" },
        { children: "Current Page" },
    ];

    const mediumLinks = [
        { children: "Home", href: "https://life.gov.sg" },
        { children: "Category", href: "https://life.gov.sg/category" },
        { children: "Subcategory", href: "https://life.gov.sg/subcategory" },
        { children: "Item", href: "https://life.gov.sg/item" },
        { children: "Current Page" },
    ];

    const longLinks = [
        { children: "Home", href: "https://life.gov.sg" },
        { children: "Services", href: "https://life.gov.sg/services" },
        { children: "Healthcare", href: "https://life.gov.sg/healthcare" },
        { children: "Medical Services", href: "https://life.gov.sg/medical" },
        { children: "Specialists", href: "https://life.gov.sg/specialists" },
        { children: "Cardiology", href: "https://life.gov.sg/cardiology" },
        { children: "Appointments", href: "https://life.gov.sg/appointments" },
        { children: "Book Appointment", href: "https://life.gov.sg/book" },
        { children: "Current Page" },
    ];

    return (
        <div className="story-column-container">
            <div>
                <h3>Short Breadcrumb (2 items)</h3>
                <Breadcrumb data-testid="breadcrumb-short" links={shortLinks} />
            </div>
            <div>
                <h3>Medium Breadcrumb (5 items)</h3>
                <Breadcrumb
                    data-testid="breadcrumb-medium"
                    links={mediumLinks}
                />
            </div>
            <div>
                <h3>Long Breadcrumb (9 items)</h3>
                <Breadcrumb data-testid="breadcrumb-long" links={longLinks} />
            </div>
        </div>
    );
}
