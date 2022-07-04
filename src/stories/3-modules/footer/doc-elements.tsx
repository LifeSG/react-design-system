import React from "react";
import { Footer } from "src/components";
import { FooterProps } from "src/components/types";

const BOTTOM_ONLY_PROPS: FooterProps = {
    lastUpdated: new Date(),
};

export const BottomOnlyStory = () => <Footer {...BOTTOM_ONLY_PROPS} />;

const CUSTOM_PROPS: FooterProps = {
    lastUpdated: new Date(),
    children: (
        <div style={{ background: "yellow", padding: "1rem 1.25rem" }}>
            Hello world
        </div>
    ),
};

export const CustomStory = () => <Footer {...CUSTOM_PROPS} />;
