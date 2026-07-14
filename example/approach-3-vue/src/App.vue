<script setup lang="ts">
import { ref } from "vue";
import { DateRangeInput, Button } from "@lifesg/react-design-system/vue";
import type { DateRangeValue } from "@lifesg/react-design-system/vue";

const output = ref<DateRangeValue | null>(null);

function handleChange(value: DateRangeValue) {
    output.value = value;
    console.log("DateRange changed:", value);
}
</script>

<template>
    <div class="app">
        <h1>Approach 3 — Vue 3</h1>
        <p class="subtitle">1:1 native port (all logic local)</p>

        <h2>DateRangeInput</h2>

        <section class="example">
            <h3>Default</h3>
            <DateRangeInput label="Select dates" @change="handleChange" />
        </section>

        <section class="example">
            <h3>With initial values</h3>
            <DateRangeInput
                label="Pre-filled"
                start-date="2025-01-15"
                end-date="2025-01-25"
                @change="handleChange"
            />
        </section>

        <section class="example">
            <h3>Disabled</h3>
            <DateRangeInput
                label="Disabled"
                start-date="2025-03-01"
                end-date="2025-03-10"
                :disabled="true"
            />
        </section>

        <section class="example">
            <h3>Error</h3>
            <DateRangeInput label="With error" :error="true" />
        </section>

        <h2 style="margin-top: 32px">Button</h2>

        <section class="example">
            <h3>Style Types</h3>
            <div class="button-row">
                <Button style-type="default">Default</Button>
                <Button style-type="secondary">Secondary</Button>
                <Button style-type="light">Light</Button>
                <Button style-type="link">Link</Button>
            </div>
        </section>

        <section class="example">
            <h3>Danger Variants</h3>
            <div class="button-row">
                <Button style-type="default" :danger="true">Default</Button>
                <Button style-type="secondary" :danger="true">Secondary</Button>
                <Button style-type="light" :danger="true">Light</Button>
                <Button style-type="link" :danger="true">Link</Button>
            </div>
        </section>

        <section class="example">
            <h3>Sizes</h3>
            <div class="button-row">
                <Button size-type="large">Large</Button>
                <Button size-type="default">Default</Button>
                <Button size-type="small">Small</Button>
            </div>
        </section>

        <section class="example">
            <h3>Disabled</h3>
            <div class="button-row">
                <Button :disabled="true">Disabled</Button>
                <Button :disabled="true" style-type="secondary"
                    >Disabled Secondary</Button
                >
            </div>
        </section>

        <section class="example">
            <h3>Loading</h3>
            <div class="button-row">
                <Button :loading="true">Loading</Button>
                <Button :loading="true" style-type="secondary">Loading</Button>
            </div>
        </section>

        <div v-if="output" class="output">
            <code>Last change: {{ JSON.stringify(output) }}</code>
        </div>
    </div>
</template>

<style>
.app {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
    font-family: system-ui, -apple-system, sans-serif;
}

.subtitle {
    color: #666;
    margin-top: -8px;
}

h2 {
    border-bottom: 1px solid #ddd;
    padding-bottom: 8px;
}

h3 {
    font-size: 14px;
    color: #666;
    margin-top: 16px;
    margin-bottom: 8px;
}

.example {
    margin-bottom: 16px;
}

.button-row {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
}

.output {
    margin-top: 24px;
    padding: 12px;
    background: #f5f5f5;
    border-radius: 4px;
}

.output code {
    font-size: 13px;
}
</style>
