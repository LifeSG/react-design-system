import {
    Component,
    OnInit,
    ViewContainerRef,
    ViewChild,
    Type,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
    applyE2EDateMock,
    type E2EDateMockGlobal,
} from "../../../../shared/date-mock";

import { ButtonBaseVariantsStory } from "../stories/button/base-variants.component";
import { ButtonBaseLoadingStory } from "../stories/button/base-loading.component";
import { ButtonBaseDangerStory } from "../stories/button/base-danger.component";
import { ButtonBaseIconButtonStory } from "../stories/button/base-icon-button.component";

const STORY_MAP: Record<string, Record<string, Type<unknown>>> = {
    button: {
        "base-variants": ButtonBaseVariantsStory,
        "base-loading": ButtonBaseLoadingStory,
        "base-danger": ButtonBaseDangerStory,
        "base-icon-button": ButtonBaseIconButtonStory,
    },
};

@Component({
    selector: "app-story-router",
    standalone: true,
    template: `
        @if (error) {
        <div data-testid="story-error">{{ error }}</div>
        } @else {
        <div data-testid="story-layout">
            <ng-container #storyHost></ng-container>
        </div>
        }
    `,
})
export class StoryRouterComponent implements OnInit {
    @ViewChild("storyHost", { read: ViewContainerRef, static: true })
    storyHost!: ViewContainerRef;

    error: string | null = null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        const component = this.route.snapshot.paramMap.get("component");
        const story = this.route.snapshot.paramMap.get("story");

        if (!component || !story) {
            this.error = "Missing component or story parameter";
            return;
        }

        // Apply query params
        const params = this.route.snapshot.queryParamMap;
        const theme = params.get("theme") || "lifesg";
        const mode = params.get("mode");
        const now = params.get("now");

        document.body.setAttribute("data-fds-theme", theme);
        if (mode === "dark") {
            document.body.setAttribute("data-fds-theme-mode", "dark");
        }
        if (now) {
            applyE2EDateMock(now, globalThis as unknown as E2EDateMockGlobal);
        }

        // Load story
        const componentStories = STORY_MAP[component];
        if (!componentStories) {
            this.error = `Component "${component}" not found`;
            return;
        }

        const storyComponent = componentStories[story];
        if (!storyComponent) {
            this.error = `Story "${story}" not found for component "${component}"`;
            return;
        }

        this.storyHost.createComponent(storyComponent);
    }
}
