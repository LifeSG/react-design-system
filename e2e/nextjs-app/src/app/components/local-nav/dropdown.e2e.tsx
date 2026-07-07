"use client";

import { LocalNavDropdown } from "@lifesg/react-design-system/local-nav";
import { Typography } from "@lifesg/react-design-system/typography";
import { useRef, useState } from "react";

const ITEMS = Array.from({ length: 8 }, (_, i) => ({
    id: `section-${i + 1}`,
    title: `Title ${i + 1}`,
}));

const LOREM_PARAGRAPH =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Integer sit amet lacus ac risus dapibus dictum. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.";

const TopContent = () => (
    <div
        data-testid="content-before"
        className="story-padding story-background"
    >
        <Typography.HeadingMD>Top content</Typography.HeadingMD>
        <Typography.BodyBL>{LOREM_PARAGRAPH}</Typography.BodyBL>
    </div>
);

const Content = () => (
    <div data-testid="content-after" className="story-background">
        {ITEMS.map((item) => (
            <div key={item.id}>
                <Typography.HeadingMD id={item.id}>
                    {item.title}
                </Typography.HeadingMD>
                <Typography.BodyBL>{LOREM_PARAGRAPH}</Typography.BodyBL>
            </div>
        ))}
    </div>
);

export default function Story() {
    const [selectedItemIndex] = useState<number>(-1);
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
                onNavItemSelect={() => {}}
            />
            <div className="story-padding">
                <Content />
            </div>
        </div>
    );
}
