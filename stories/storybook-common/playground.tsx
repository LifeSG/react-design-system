import { Canvas, Controls } from "@storybook/addon-docs/blocks";
import type { ComponentProps } from "react";

import { Tabs } from "./tabs";

type StoryOf = ComponentProps<typeof Canvas>["of"];

interface PlaygroundTabItem {
    title: string;
    of: StoryOf;
}

type PlaygroundProps =
    | { of: StoryOf; tabs?: never }
    | { tabs: PlaygroundTabItem[]; of?: never };

const PlaygroundCanvasControls = ({ of: story }: { of: StoryOf }) => (
    <div>
        <Canvas of={story} />
        <div className="controls-only">
            <Controls of={story} />
        </div>
    </div>
);

export const Playground = ({
    of: story,
    tabs,
}: PlaygroundProps): JSX.Element => {
    if (tabs) {
        return (
            <Tabs
                tabs={tabs.map(({ title, of }) => ({
                    title,
                    component: <PlaygroundCanvasControls of={of} />,
                }))}
            />
        );
    }
    return <PlaygroundCanvasControls of={story} />;
};
