"use client";
import { Tab } from "@lifesg/react-design-system/tab";

export default function Story() {
    return (
        <div className="story-column-container">
            <Tab>
                <Tab.Item title="Section A" data-testid="tab-panel-a">
                    <div className="story-padding" data-testid="tab-content-a">
                        Contents of A
                    </div>
                </Tab.Item>
                <Tab.Item title="Section B" data-testid="tab-panel-b">
                    <div className="story-padding" data-testid="tab-content-b">
                        Contents of B
                    </div>
                </Tab.Item>
                <Tab.Item title="Section C" data-testid="tab-panel-c">
                    <div className="story-padding" data-testid="tab-content-c">
                        Contents of C
                    </div>
                </Tab.Item>
            </Tab>
        </div>
    );
}
