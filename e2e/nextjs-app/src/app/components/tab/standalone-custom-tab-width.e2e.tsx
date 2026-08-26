"use client";
import { Tab } from "@lifesg/react-design-system/tab";

export default function Story() {
    return (
        <div className="story-column-container">
            <Tab.Context>
                <Tab.TabList data-testid="standalone-tabs">
                    <Tab.TabListItem title="Section A" width="50%" />
                    <Tab.TabListItem title="Section B" width="50%" />
                </Tab.TabList>
                <Tab.Panel index={0} data-testid="tab-content-a">
                    <div className="story-padding">Contents of A</div>
                </Tab.Panel>
                <Tab.Panel index={1} data-testid="tab-content-b">
                    <div className="story-padding">Contents of B</div>
                </Tab.Panel>
            </Tab.Context>
        </div>
    );
}
