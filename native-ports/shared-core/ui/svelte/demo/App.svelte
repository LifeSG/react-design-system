<script lang="ts">
    import DateRangeInput from "@lib/date-range-input/DateRangeInput.svelte";
    import Button from "@lib/button/Button.svelte";
    import type { DateRangeValue } from "@lib/date-range-input/types";

    function handleChange(value: DateRangeValue) {
        console.log("DateRange changed:", value);
    }
</script>

<main>
    <h1>Svelte 5 — Flagship Components</h1>

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

        <h3>Icon + Text</h3>
        <div class="button-row">
            <Button>
                {#snippet icon()}
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                {/snippet}
                Icon Left
            </Button>
            <Button iconPosition="right">
                {#snippet icon()}
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                {/snippet}
                Icon Right
            </Button>
        </div>

        <h3>Icon Only</h3>
        <div class="button-row">
            <Button aria-label="Settings" sizeType="large">
                {#snippet icon()}
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53a7.76 7.76 0 0 0 .07-1 7.76 7.76 0 0 0-.07-.97l2.11-1.63a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.15 7.15 0 0 0-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.15 7.15 0 0 0-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.49.49 0 0 0 .12.64L4.57 11a7.9 7.9 0 0 0 0 1.97l-2.11 1.66a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1a7.15 7.15 0 0 0 1.69.98l.38 2.65c.05.24.26.42.49.42h4c.24 0 .44-.18.49-.42l.38-2.65a7.15 7.15 0 0 0 1.69-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.49.49 0 0 0-.12-.64l-2.11-1.66z" />
                    </svg>
                {/snippet}
            </Button>
            <Button aria-label="Close">
                {#snippet icon()}
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                {/snippet}
            </Button>
            <Button aria-label="Close" sizeType="small">
                {#snippet icon()}
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                {/snippet}
            </Button>
        </div>
    </section>
</main>

<style>
    :global(body) {
        font-family: system-ui, -apple-system, sans-serif;
        margin: 0;
        padding: 24px;
        background: var(--fds-colour-bg);
        color: var(--fds-colour-text);
    }

    main {
        max-width: 800px;
        margin: 0 auto;
    }

    section {
        margin-bottom: 40px;
    }

    h1 {
        margin-bottom: 32px;
    }

    h2 {
        border-bottom: 1px solid var(--fds-colour-border);
        padding-bottom: 8px;
        margin-top: 32px;
    }

    h3 {
        margin-top: 16px;
        margin-bottom: 8px;
        font-size: 14px;
        color: var(--fds-colour-text-subtlest);
    }

    .button-row {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 12px;
    }
</style>
