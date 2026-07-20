<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent, type Component } from "vue";
import {
    applyE2EDateMock,
    type E2EDateMockGlobal,
} from "../../../shared/date-mock";

const stories: Record<
    string,
    Record<string, () => Promise<{ default: Component }>>
> = {
    button: {
        "base-variants": () => import("../stories/button/BaseVariants.vue"),
        "base-loading": () => import("../stories/button/BaseLoading.vue"),
        "base-danger": () => import("../stories/button/BaseDanger.vue"),
        "base-icon-button": () =>
            import("../stories/button/BaseIconButton.vue"),
    },
};

const StoryComponent = ref<Component | null>(null);
const error = ref<string | null>(null);

onMounted(async () => {
    const path = window.location.pathname;
    const match = path.match(/^\/components\/([^/]+)\/([^/]+)\/?$/);

    if (!match) return;

    const [, component, story] = match;
    const params = new URLSearchParams(window.location.search);

    // Apply theme
    document.body.setAttribute(
        "data-fds-theme",
        params.get("theme") || "lifesg"
    );

    // Apply color mode
    if (params.get("mode") === "dark") {
        document.body.setAttribute("data-fds-theme-mode", "dark");
    }

    // Apply date mock
    const now = params.get("now");
    if (now) {
        applyE2EDateMock(now, globalThis as unknown as E2EDateMockGlobal);
    }

    const componentStories = stories[component];
    if (!componentStories) {
        error.value = `Component "${component}" not found`;
        return;
    }

    const storyLoader = componentStories[story];
    if (!storyLoader) {
        error.value = `Story "${story}" not found for component "${component}"`;
        return;
    }

    const module = await storyLoader();
    StoryComponent.value = module.default;
});
</script>

<template>
    <div v-if="error" data-testid="story-error">{{ error }}</div>
    <div v-else-if="StoryComponent" data-testid="story-layout">
        <component :is="StoryComponent" />
    </div>
</template>
