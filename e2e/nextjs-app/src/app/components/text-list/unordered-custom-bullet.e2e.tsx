"use client";

import { StarIcon } from "@lifesg/react-icons";
import { TextList } from "@lifesg/react-design-system/text-list";

export default function Story() {
    return (
        <div data-testid="text-list-unordered-custom-bullet">
            <TextList.Ul size="body-baseline" bulletType={<StarIcon />}>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
            </TextList.Ul>
        </div>
    );
}
