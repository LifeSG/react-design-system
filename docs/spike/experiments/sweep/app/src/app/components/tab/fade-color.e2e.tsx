"use client";
import { Tab } from "@lifesg/react-design-system/tab";

const LONG_TITLE = (i: number) =>
    `Lorem ipsum dolor sit amet consectetur adipiscing elit ${i}`;

export default function Story() {
    return (
        <div className="story-column-container">
            <Tab fadeColor={["#3C91EC"]}>
                <Tab.Item title={LONG_TITLE(1)} data-testid="tab-panel-a">
                    <div className="story-padding" data-testid="tab-content-a">
                        Contents of A
                    </div>
                </Tab.Item>
                <Tab.Item title={LONG_TITLE(2)} data-testid="tab-panel-b">
                    <div className="story-padding" data-testid="tab-content-b">
                        Contents of B
                    </div>
                </Tab.Item>
                <Tab.Item title={LONG_TITLE(3)} data-testid="tab-panel-c">
                    <div className="story-padding" data-testid="tab-content-c">
                        Contents of C
                    </div>
                </Tab.Item>
                <Tab.Item title={LONG_TITLE(4)} data-testid="tab-panel-d">
                    <div className="story-padding" data-testid="tab-content-d">
                        Contents of D
                    </div>
                </Tab.Item>
            </Tab>
        </div>
    );
}
