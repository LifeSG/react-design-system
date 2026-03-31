"use client";

import { Markup } from "@lifesg/react-design-system/markup";

export default function Story() {
    return (
        <div data-testid="markup-root">
            <Markup baseTextSize="heading-xs" data-testid="markup-markup">
                <p>
                    This paragraph contains a <strong>bold phrase</strong> and
                    an{" "}
                    <a href="#">
                        inline link
                        <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12h14"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                d="M12 5l7 7-7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </a>
                    .
                </p>

                <ul>
                    <li>First bullet item</li>
                    <li>Second bullet item</li>
                </ul>

                <ol>
                    <li>First numbered item</li>
                    <li>Second numbered item</li>
                </ol>
            </Markup>
        </div>
    );
}
