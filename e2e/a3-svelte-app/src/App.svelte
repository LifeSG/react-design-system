<script lang="ts">
    import { DateRangeInput, Button } from "@lifesg/react-design-system/svelte";
    import type { DateRangeValue } from "@lifesg/react-design-system/svelte";
    import StoryRouter from "./components/StoryRouter.svelte";

    function handleChange(value: DateRangeValue) {
        console.log("DateRange changed:", value);
    }

    const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    const isStoryRoute = window.location.pathname.startsWith(`${base}/components/`);
</script>

{#if isStoryRoute}
    <StoryRouter />
{:else}
<main>
    <h1>Approach 3 — Svelte 5</h1>
    <p class="subtitle">1:1 native port (all logic local)</p>

    <section>
        <h2>DateRangeInput</h2>

        <h3>Default</h3>
        <DateRangeInput label="Select dates" onchange={handleChange} />

        <h3>With initial values</h3>
        <DateRangeInput
            label="Pre-filled"
            startDate="2025-01-15"
            endDate="2025-01-25"
            onchange={handleChange}
        />

        <h3>Disabled</h3>
        <DateRangeInput
            label="Disabled"
            startDate="2025-03-01"
            endDate="2025-03-10"
            disabled
        />

        <h3>Error</h3>
        <DateRangeInput label="With error" error />
    </section>

    <section>
        <h2>Button</h2>

        <h3>Style Types</h3>
        <div class="button-row">
            <Button>Default</Button>
            <Button styleType="secondary">Secondary</Button>
            <Button styleType="light">Light</Button>
            <Button styleType="link">Link</Button>
        </div>

        <h3>Danger Variants</h3>
        <div class="button-row">
            <Button danger>Default Danger</Button>
            <Button styleType="secondary" danger>Secondary Danger</Button>
            <Button styleType="light" danger>Light Danger</Button>
            <Button styleType="link" danger>Link Danger</Button>
        </div>

        <h3>Sizes</h3>
        <div class="button-row">
            <Button sizeType="large">Large</Button>
            <Button sizeType="default">Default</Button>
            <Button sizeType="small">Small</Button>
        </div>

        <h3>Disabled</h3>
        <div class="button-row">
            <Button disabled>Disabled</Button>
            <Button styleType="secondary" disabled>Disabled Secondary</Button>
        </div>

        <h3>Loading</h3>
        <div class="button-row">
            <Button loading>Loading</Button>
            <Button styleType="secondary" loading>Loading Secondary</Button>
        </div>
    </section>
</main>

<style>
    :global(body) {
        font-family: system-ui, -apple-system, sans-serif;
        margin: 0;
        padding: 24px;
    }

    main {
        max-width: 800px;
        margin: 0 auto;
    }

    .subtitle {
        color: #666;
        margin-top: -8px;
    }

    section {
        margin-bottom: 40px;
    }

    h2 {
        border-bottom: 1px solid #ddd;
        padding-bottom: 8px;
        margin-top: 32px;
    }

    h3 {
        margin-top: 16px;
        margin-bottom: 8px;
        font-size: 14px;
        color: #666;
    }

    .button-row {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 12px;
    }
</style>
{/if}
