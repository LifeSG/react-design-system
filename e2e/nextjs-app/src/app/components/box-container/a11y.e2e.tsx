"use client";

import { BoxContainer } from "@lifesg/react-design-system/box-container";

export default function Story() {
    return (
        <div data-testid="box-container-story">
            <BoxContainer
                title="Supporting documents"
                displayState="warning"
                expanded
            >
                <button>
                    Upload your latest statement and proof of address.
                </button>
            </BoxContainer>
        </div>
    );
}
