<script setup lang="ts">
import { ref } from "vue";

const showModal = ref(false);
const clickCount = ref(0);
const themeMode = ref<"light" | "dark">(
    (document.body.getAttribute("data-fds-theme-mode") as
        | "light"
        | "dark"
        | null) ?? "light"
);

const setThemeMode = (mode: "light" | "dark") => {
    themeMode.value = mode;
    document.body.setAttribute("data-fds-theme", "lifesg");
    document.body.setAttribute("data-fds-theme-mode", mode);
};

const handleButtonClick = () => {
    clickCount.value++;
};

const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<template>
    <div>
        <h1>Flagship Web Components — Vue 3 Example</h1>

        <div
            class="example-section"
            style="display: flex; align-items: center; gap: 12px"
        >
            <strong>Theme mode:</strong>
            <button
                type="button"
                @click="setThemeMode('light')"
                :style="{ fontWeight: themeMode === 'light' ? '700' : '400' }"
                style="
                    padding: 6px 12px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                "
            >
                Light
            </button>
            <button
                type="button"
                @click="setThemeMode('dark')"
                :style="{ fontWeight: themeMode === 'dark' ? '700' : '400' }"
                style="
                    padding: 6px 12px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                "
            >
                Dark
            </button>
        </div>

        <!-- Button Examples -->
        <div class="example-section">
            <h2>Button (lifesg-button)</h2>
            <p style="margin-bottom: 12px">
                Click count: <strong>{{ clickCount }}</strong>
            </p>

            <div style="display: flex; gap: 12px; flex-wrap: wrap">
                <lifesg-button
                    label="Default Button"
                    @button-click="handleButtonClick"
                />

                <lifesg-button
                    label="Secondary"
                    styletype="secondary"
                    @button-click="handleButtonClick"
                />

                <lifesg-button
                    label="Light"
                    styletype="light"
                    @button-click="handleButtonClick"
                />

                <lifesg-button
                    label="Danger"
                    styletype="default"
                    :danger="true"
                    @button-click="handleButtonClick"
                />

                <lifesg-button label="Disabled" :disabled="true" />

                <lifesg-button label="Loading..." :loading="true" />
            </div>
        </div>

        <!-- Modal Example -->
        <div class="example-section">
            <h2>Modal (lifesg-modal)</h2>
            <p style="margin-bottom: 12px">
                The modal uses the actual ModalV2 +
                Card/Content/Footer/CloseButton slots from the React library.
            </p>
            <button
                @click="openModal"
                style="
                    padding: 8px 16px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                "
            >
                Open Modal
            </button>

            <lifesg-modal
                :show="showModal"
                heading="Confirm Action"
                content="Are you sure you want to proceed? This modal is rendered using the React ModalV2 component wrapped as a custom element."
                animationfrom="bottom"
                @modal-close="closeModal"
            />
        </div>

        <!-- Info -->
        <div class="example-section">
            <h2>How this works</h2>
            <ol>
                <li>
                    React components are wrapped as custom elements using
                    <code>HTMLElement</code> + <code>ReactDOM.createRoot</code>
                </li>
                <li>
                    Vue treats any <code>&lt;lifesg-*&gt;</code> tag as a custom
                    element (configured in <code>vite.config.ts</code>)
                </li>
                <li>
                    Props are passed as HTML attributes; events are dispatched
                    as
                    <code>CustomEvent</code> with <code>composed: true</code>
                </li>
                <li>
                    Theme is applied via
                    <code>data-fds-theme="lifesg"</code> on the body element
                </li>
                <li>
                    The modal uses the real ModalV2 +
                    Card/Content/Footer/CloseButton composition from the React
                    library internally
                </li>
            </ol>
        </div>
    </div>
</template>
