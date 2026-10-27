"use client";
import { Tab } from "@lifesg/react-design-system/tab";

const LONG_TITLE = "This is a significantly longer label that will truncate";

export default function Story() {
    return (
        <div className="story-column-container">
            <Tab>
                <Tab.Item title={LONG_TITLE} data-testid="tab-panel-a">
                    <div className="story-padding" data-testid="tab-content-a">
                        Contents of A
                    </div>
                </Tab.Item>
                <Tab.Item title="Shorter label" data-testid="tab-panel-b">
                    <div className="story-padding" data-testid="tab-content-b">
                        Contents of B
                    </div>
                </Tab.Item>
            </Tab>
        </div>
    );
}
