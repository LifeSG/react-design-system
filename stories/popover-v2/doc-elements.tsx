import { HTMLAttributes } from "react";

export const POPOVER_CONTENT =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis felis vitae libero ullamcorper tristique eu in ante. Curabitur tempor mauris ac commodo convallis. Sed id aliquet nisi. In scelerisque dictum diam ac malesuada. Vivamus efficitur nec massa sit amet suscipit. Aenean at dictum nisl. Mauris eget facilisis lectus. Nunc sed neque quis est auctor consequat. Suspendisse nec arcu enim. Pellentesque vehicula lectus ullamcorper fermentum pharetra. Pellentesque diam enim, ullamcorper a tincidunt sed, tempus ac nisi. Phasellus dignissim interdum ligula bibendum ornare. Morbi ut lorem tempor, rhoncus lectus quis, consequat turpis. Aenean at purus consectetur, tempor mauris nec, facilisis lorem. Maecenas id pellentesque tellus, nec pellentesque metus. Vestibulum volutpat elit sed ante facilisis, sit amet hendrerit tortor semper. Nullam dignissim pretium nunc facilisis mollis. Phasellus nulla magna, ultricies dignissim nibh in, sagittis aliquam est. Vestibulum mi ligula, bibendum ut magna ut, aliquam rutrum felis. Quisque tristique tortor ut dignissim malesuada.";

export const CustomPopover = (props: HTMLAttributes<HTMLElement>) => {
    return (
        <div
            style={{
                height: "60vh",
                background: "aliceblue",
                padding: "1rem",
                ...props.style,
            }}
        >
            This is the start of custom content
            <div style={{ height: "100vh" }} />
            This is the end of custom content
        </div>
    );
};
