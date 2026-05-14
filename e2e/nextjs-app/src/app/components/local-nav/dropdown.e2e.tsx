"use client";

import { LocalNavDropdown } from "@lifesg/react-design-system/local-nav";
import { Typography } from "@lifesg/react-design-system/typography";
import { useRef, useState } from "react";

const ITEMS = [
    { id: "section-1", title: "Title 1" },
    { id: "section-2", title: "Title 2" },
    { id: "section-3", title: "Title 3" },
    { id: "section-4", title: "Title 4" },
];

const LOREM_PARAGRAPH =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Integer sit amet lacus ac risus dapibus dictum. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.";

const TopContent = () => (
    <div
        data-testid="content-before"
        className="story-padding story-background"
    >
        <Typography.HeadingMD>Top content</Typography.HeadingMD>
        <Typography.BodyBL>{LOREM_PARAGRAPH}</Typography.BodyBL>
        <Typography.BodyBL>{LOREM_PARAGRAPH}</Typography.BodyBL>
    </div>
);

const Content = () => (
    <div data-testid="content-after" className="story-background">
        {ITEMS.map((item) => (
            <section key={item.id}>
                <Typography.HeadingMD id={item.id}>
                    {item.title}
                </Typography.HeadingMD>
                <Typography.BodyBL>{LOREM_PARAGRAPH}</Typography.BodyBL>
                <Typography.BodyBL>{LOREM_PARAGRAPH}</Typography.BodyBL>
            </section>
        ))}
    </div>
);

export default function Story() {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);
    const dropdownRef = useRef<HTMLElement>(null);

    return (
        <div>
            <TopContent />
            <LocalNavDropdown
                ref={dropdownRef}
                data-testid="local-nav-dropdown"
                defaultLabel="Jump to section"
                items={ITEMS}
                selectedItemIndex={selectedItemIndex}
                stickyOffset={0}
                onNavItemSelect={(_e, item, index) => {
                    setSelectedItemIndex(index);
                    const id = item.id;
                    if (id) {
                        // Defer until after LocalNavDropdown closes and removes
                        // the body `overflow: hidden` lock, otherwise the
                        // smooth scroll is cancelled.
                        requestAnimationFrame(() => {
                            const element = document.getElementById(id);
                            if (!element) return;
                            const stickyHeight =
                                dropdownRef.current?.getBoundingClientRect()
                                    .height ?? 0;
                            const top =
                                element.getBoundingClientRect().top +
                                window.scrollY -
                                stickyHeight;
                            window.scrollTo({ top, behavior: "smooth" });
                        });
                    }
                }}
            />
            <div className="story-padding">
                <Content />
            </div>
        </div>
    );
}
