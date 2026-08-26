"use client";
import { Tab } from "@lifesg/react-design-system/tab";

export default function Story() {
    return (
        <div className="story-column-container">
            <Tab.Context>
                <Tab.TabList
                    data-testid="standalone-tabs"
                    fullWidthIndicatorLine
                >
                    <Tab.TabListItem title="Section A" />
                    <Tab.TabListItem title="Section B" />
                    <Tab.TabListItem title="Section C" />
                    <Tab.TabListItem title="Section D" />
                </Tab.TabList>
                <Tab.Panel index={0} data-testid="tab-content-a">
                    <div className="story-padding">Contents of A</div>
                </Tab.Panel>
                <Tab.Panel index={1} data-testid="tab-content-b">
                    <div className="story-padding">Contents of B</div>
                </Tab.Panel>
                <Tab.Panel index={2} data-testid="tab-content-c">
                    <div className="story-padding">Contents of C</div>
                </Tab.Panel>
                <Tab.Panel index={3} data-testid="tab-content-d">
                    <div className="story-padding">Contents of D</div>
                </Tab.Panel>
            </Tab.Context>
        </div>
    );
}
