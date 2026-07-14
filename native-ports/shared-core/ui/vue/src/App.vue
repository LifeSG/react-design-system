<script setup lang="ts">
import { ref } from "vue";
import DateRangeInput from "./components/date-range-input/DateRangeInput.vue";
import Button from "./components/button/Button.vue";
import type { DateRangeValue } from "./components/date-range-input/types";

const output1 = ref<DateRangeValue | null>(null);
const output2 = ref<DateRangeValue | null>(null);
const output3 = ref<DateRangeValue | null>(null);
const output4 = ref<DateRangeValue | null>(null);

function handleChange1(value: DateRangeValue) {
    output1.value = value;
}

function handleChange2(value: DateRangeValue) {
    output2.value = value;
}

function handleChange3(value: DateRangeValue) {
    output3.value = value;
}

function handleChange4(value: DateRangeValue) {
    output4.value = value;
}
</script>

<template>
    <div class="app">
        <header class="app-header">
            <h1>Vue 3 Port - Design System Components</h1>
            <p class="subtitle">
                Native port of React design system components
            </p>
        </header>

        <main class="examples">
            <!-- ============================== -->
            <!-- DateRangeInput Examples         -->
            <!-- ============================== -->
            <h2 class="section-title">DateRangeInput</h2>

            <!-- Example 1: Default -->
            <section class="example">
                <h3>1. Default</h3>
                <p class="description">
                    Empty date range input with Done/Cancel confirmation.
                </p>
                <DateRangeInput
                    label="Select date range"
                    @change="handleChange1"
                />
                <div v-if="output1" class="output">
                    <code>{{ JSON.stringify(output1) }}</code>
                </div>
            </section>

            <!-- Example 2: With initial values -->
            <section class="example">
                <h3>2. With Initial Values</h3>
                <p class="description">
                    Pre-filled with 2026-07-01 to 2026-07-15.
                </p>
                <DateRangeInput
                    label="Trip dates"
                    start-date="2026-07-01"
                    end-date="2026-07-15"
                    @change="handleChange2"
                />
                <div v-if="output2" class="output">
                    <code>{{ JSON.stringify(output2) }}</code>
                </div>
            </section>

            <!-- Example 3: Disabled -->
            <section class="example">
                <h3>3. Disabled</h3>
                <p class="description">
                    Input is disabled and cannot be interacted with.
                </p>
                <DateRangeInput
                    label="Locked range"
                    start-date="2026-07-01"
                    end-date="2026-07-15"
                    :disabled="true"
                    @change="handleChange3"
                />
                <div v-if="output3" class="output">
                    <code>{{ JSON.stringify(output3) }}</code>
                </div>
            </section>

            <!-- Example 4: Error state -->
            <section class="example">
                <h3>4. Error State</h3>
                <p class="description">Input displayed with error styling.</p>
                <DateRangeInput
                    label="Invalid range"
                    :error="true"
                    @change="handleChange4"
                />
                <div v-if="output4" class="output">
                    <code>{{ JSON.stringify(output4) }}</code>
                </div>
            </section>

            <!-- ============================== -->
            <!-- Button Examples                 -->
            <!-- ============================== -->
            <h2 class="section-title" style="margin-top: 32px">Button</h2>

            <!-- Style types -->
            <section class="example">
                <h3>Style Types</h3>
                <div class="button-row">
                    <Button style-type="default">Default</Button>
                    <Button style-type="secondary">Secondary</Button>
                    <Button style-type="light">Light</Button>
                    <Button style-type="link">Link</Button>
                </div>
            </section>

            <!-- Danger variants -->
            <section class="example">
                <h3>Danger Variants</h3>
                <div class="button-row">
                    <Button style-type="default" :danger="true">Default</Button>
                    <Button style-type="secondary" :danger="true"
                        >Secondary</Button
                    >
                    <Button style-type="light" :danger="true">Light</Button>
                    <Button style-type="link" :danger="true">Link</Button>
                </div>
            </section>

            <!-- Sizes -->
            <section class="example">
                <h3>Sizes</h3>
                <div class="button-row" style="align-items: center">
                    <Button size-type="large">Large</Button>
                    <Button size-type="default">Default</Button>
                    <Button size-type="small">Small</Button>
                </div>
            </section>

            <!-- Disabled -->
            <section class="example">
                <h3>Disabled</h3>
                <div class="button-row">
                    <Button :disabled="true">Disabled</Button>
                    <Button :disabled="true" :focusable-when-disabled="true"
                        >Focusable when disabled</Button
                    >
                </div>
            </section>

            <!-- Loading -->
            <section class="example">
                <h3>Loading</h3>
                <div class="button-row">
                    <Button :loading="true">Loading...</Button>
                    <Button :loading="true" style-type="secondary"
                        >Loading...</Button
                    >
                </div>
            </section>

            <!-- Icon + text -->
            <section class="example">
                <h3>Icon + Text</h3>
                <div class="button-row">
                    <Button>
                        <template #icon>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </template>
                        Add Item
                    </Button>
                    <Button icon-position="right" style-type="secondary">
                        <template #icon>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </template>
                        Next
                    </Button>
                </div>
            </section>

            <!-- Icon-only -->
            <section class="example">
                <h3>Icon Only</h3>
                <div class="button-row">
                    <Button aria-label="Add">
                        <template #icon>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </template>
                    </Button>
                    <Button style-type="secondary" aria-label="Settings">
                        <template #icon>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <circle cx="12" cy="12" r="3" />
                                <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
                                />
                            </svg>
                        </template>
                    </Button>
                    <Button
                        style-type="light"
                        size-type="small"
                        aria-label="Close"
                    >
                        <template #icon>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </template>
                    </Button>
                </div>
            </section>
        </main>
    </div>
</template>

<style>
.app {
    max-width: 640px;
    margin: 0 auto;
    padding: 40px 24px 80px;
}

.app-header {
    margin-bottom: 40px;
}

.app-header h1 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 0 8px;
    color: var(--fds-colour-text);
}

.subtitle {
    color: var(--fds-colour-text-subtler);
    margin: 0;
    font-size: 14px;
}

.section-title {
    font-size: 1.375rem;
    font-weight: 700;
    margin: 0 0 24px;
    color: var(--fds-colour-text);
    padding-bottom: 8px;
    border-bottom: 1px solid var(--fds-colour-border);
}

.examples {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.example {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.example h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    color: var(--fds-colour-text);
}

.description {
    margin: 0;
    font-size: 14px;
    color: var(--fds-colour-text-subtler);
}

.output {
    margin-top: 4px;
    padding: 8px 12px;
    background: var(--fds-colour-bg);
    border: 1px solid var(--fds-colour-border);
    border-radius: var(--fds-radius-md);
}

.output code {
    font-size: 0.8125rem;
    color: var(--fds-colour-text-primary);
    word-break: break-all;
}

.button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
</style>
