"use client";
import { LinkList } from "@lifesg/react-design-system/link-list";

export default function Story() {
    return (
        <LinkList
            data-testid="link-list"
            items={[
                {
                    title: (
                        <span>
                            Custom{" "}
                            <span className="highlight-text">
                                &nbsp;content
                            </span>{" "}
                            title
                        </span>
                    ),
                    description: "I am a plain description with JSX title",
                    href: "#",
                },
                {
                    title: "Plain title with JSX description",
                    description: (
                        <span>
                            Description with{" "}
                            <span className="highlight-text">
                                &nbsp;highlighted
                            </span>{" "}
                            content
                        </span>
                    ),
                    href: "#",
                },
            ]}
        />
    );
}
