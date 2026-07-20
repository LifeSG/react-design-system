<script lang="ts">
    import { type Component } from "svelte";
    import { applyE2EDateMock, type E2EDateMockGlobal } from "../../../shared/date-mock";

    // Story registry - maps component/story to Svelte components
    const stories: Record<string, Record<string, () => Promise<{ default: Component }>>> = {
        button: {
            "base-variants": () => import("../stories/button/base-variants.svelte"),
            "base-loading": () => import("../stories/button/base-loading.svelte"),
            "base-danger": () => import("../stories/button/base-danger.svelte"),
            "base-icon-button": () => import("../stories/button/base-icon-button.svelte"),
        },
    };

    let StoryComponent: Component | null = $state(null);
    let error: string | null = $state(null);

    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            mode: params.get("mode") || "light",
            theme: params.get("theme") || "lifesg",
            now: params.get("now"),
        };
    }

    function applyDateMock(now: string | null) {
        if (now) {
            applyE2EDateMock(now, globalThis as unknown as E2EDateMockGlobal);
        }
    }

    async function loadStory() {
        const path = window.location.pathname;
        const match = path.match(/^\/components\/([^/]+)\/([^/]+)\/?$/);

        if (!match) {
            // Not a story route - show nothing (demo mode handled by App.svelte)
            return;
        }

        const [, component, story] = match;
        const params = getQueryParams();

        // Apply theme
        document.body.setAttribute("data-fds-theme", params.theme);

        // Apply color mode
        if (params.mode === "dark") {
            document.body.setAttribute("data-fds-theme-mode", "dark");
        }

        // Apply date mock
        applyDateMock(params.now);

        const componentStories = stories[component];
        if (!componentStories) {
            error = `Component "${component}" not found`;
            return;
        }

        const storyLoader = componentStories[story];
        if (!storyLoader) {
            error = `Story "${story}" not found for component "${component}"`;
            return;
        }

        const module = await storyLoader();
        StoryComponent = module.default;
    }

    loadStory();
</script>

{#if error}
    <div data-testid="story-error">{error}</div>
{:else if StoryComponent}
    <div data-testid="story-layout">
        <StoryComponent />
    </div>
{/if}
