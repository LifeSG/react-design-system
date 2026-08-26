"use client";
import { Tab } from "@lifesg/react-design-system/tab";

import styles from "./tab.module.css";

export default function Story() {
    return (
        <div className="story-column-container">
            <Tab.Context>
                <div className={styles["right-aligned-tab-list"]}>
                    <Tab.TabList data-testid="standalone-tabs">
                        <Tab.TabListItem title="Section A" />
                        <Tab.TabListItem title="Section B" />
                        <Tab.TabListItem title="Section C" />
                    </Tab.TabList>
                </div>
                <Tab.Panel index={0} data-testid="tab-content-a">
                    <div className="story-padding">Contents of A</div>
                </Tab.Panel>
                <Tab.Panel index={1} data-testid="tab-content-b">
                    <div className="story-padding">Contents of B</div>
                </Tab.Panel>
                <Tab.Panel index={2} data-testid="tab-content-c">
                    <div className="story-padding">Contents of C</div>
                </Tab.Panel>
            </Tab.Context>
        </div>
    );
}
