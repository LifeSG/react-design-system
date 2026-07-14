<script setup lang="ts">
import { ref, h } from "vue";
import {
    LsButton,
    LsModal,
    LsModalCard,
    LsModalCloseButton,
    LsModalContent,
    LsModalFooter,
} from "@lifesg/react-design-system/vue-veaury";

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
        <h1>Flagship Veaury — Vue 3 Example</h1>

        <!-- Theme toggle -->
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
            <h2>Button (via Veaury — library-wrapped)</h2>
            <p style="margin-bottom: 12px">
                Click count: <strong>{{ clickCount }}</strong>
            </p>

            <div style="display: flex; gap: 12px; flex-wrap: wrap">
                <LsButton @click="handleButtonClick">Default Button</LsButton>

                <LsButton styleType="secondary" @click="handleButtonClick"
                    >Secondary</LsButton
                >

                <LsButton styleType="light" @click="handleButtonClick"
                    >Light</LsButton
                >

                <LsButton :danger="true" @click="handleButtonClick"
                    >Danger</LsButton
                >

                <LsButton :disabled="true">Disabled</LsButton>

                <LsButton :loading="true">Loading...</LsButton>
            </div>
        </div>

        <!-- Modal Example -->
        <div class="example-section">
            <h2>Modal (via Veaury — library-wrapped)</h2>
            <p style="margin-bottom: 12px">
                The modal uses ModalV2 + Card/Content/Footer/CloseButton
                compound components, all pre-wrapped by the library using
                Veaury's <code>applyReactInVue()</code>.
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

            <LsModal
                :show="showModal"
                animationFrom="bottom"
                :enableOverlayClick="true"
                @overlayClick="closeModal"
            >
                <LsModalCard>
                    <LsModalCloseButton @close="closeModal" />
                    <LsModalContent>
                        <div>
                            <h3 style="margin-bottom: 12px">Confirm Action</h3>
                            <p>
                                Are you sure you want to proceed? This modal is
                                rendered using the React ModalV2 component
                                pre-wrapped via Veaury in the library.
                            </p>
                        </div>
                    </LsModalContent>
                    <LsModalFooter
                        :primaryButton="
                            h(
                                LsButton,
                                { onClick: closeModal },
                                () => 'Confirm'
                            )
                        "
                        :secondaryButton="
                            h(
                                LsButton,
                                { styleType: 'light', onClick: closeModal },
                                () => 'Cancel'
                            )
                        "
                    />
                </LsModalCard>
            </LsModal>
        </div>

        <!-- Info -->
        <div class="example-section">
            <h2>How this works (Approach 2 — Library-Wrapped Veaury)</h2>
            <ol>
                <li>
                    The library wraps React components with Veaury's
                    <code>applyReactInVue()</code> at build time
                </li>
                <li>
                    Consumers import pre-wrapped Vue components from
                    <code>@lifesg/react-design-system/vue</code>
                </li>
                <li>
                    No Veaury setup needed in the consumer project — standard
                    <code>@vitejs/plugin-vue</code> only
                </li>
                <li>
                    Props use original React names (<code>styleType</code> not
                    <code>styletype</code>) and real types (booleans, objects)
                </li>
                <li>
                    Events use Vue <code>@click</code> — Veaury bridges to
                    React's <code>onClick</code>
                </li>
                <li>
                    Theme is applied via
                    <code>data-fds-theme="lifesg"</code> on the body element
                    (same as Approach 1)
                </li>
            </ol>
        </div>
    </div>
</template>
