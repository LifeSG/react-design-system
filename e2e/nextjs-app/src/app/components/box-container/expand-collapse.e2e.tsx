"use client";
import { BoxContainer } from "@lifesg/react-design-system/box-container";

export default function Story() {
    return (
        <div className="story-column-container">
            <BoxContainer
                title="Title"
                collapsible={true}
                expanded={false}
                data-testid="box-container-collapsed"
            >
                <div
                    style={{ padding: "2rem" }}
                    data-testid="content-collapsed"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
            </BoxContainer>

            <BoxContainer
                title="Title"
                collapsible={true}
                expanded={true}
                data-testid="box-container-expanded"
            >
                <div style={{ padding: "2rem" }} data-testid="content-expanded">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
            </BoxContainer>
        </div>
    );
}
