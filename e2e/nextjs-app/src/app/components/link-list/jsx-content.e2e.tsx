"use client";
import { LinkList } from "@lifesg/react-design-system/link-list";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <LinkList
                data-testid="link-list"
                items={[
                    {
                        title: (
                            <span>
                                JSX <strong>title</strong> item
                            </span>
                        ),
                        href: "#",
                    },
                    {
                        title: (
                            <span>
                                Item with <em>JSX</em> description
                            </span>
                        ),
                        description: (
                            <span>
                                A <strong>rich</strong> description
                            </span>
                        ),
                        href: "#",
                    },
                    {
                        title: "Plain title with JSX description",
                        description: (
                            <span>
                                Description with <em>emphasis</em>
                            </span>
                        ),
                        href: "#",
                    },
                ]}
            />
        </div>
    );
}
