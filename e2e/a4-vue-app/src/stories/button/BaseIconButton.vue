<script setup lang="ts">
import { Button } from "@lifesg/react-design-system/core/vue";

const sizes = ["large", "default", "small"] as const;
const styles = ["default", "secondary", "light", "link"] as const;
</script>

<template>
    <div class="story-column-container">
        <div v-for="size in sizes" :key="size" class="story-row-container">
            <Button
                v-for="style in styles"
                :key="style"
                :size-type="size"
                :style-type="style"
                icon-only
                :aria-label="`${size} ${style}`"
            >
                &#9733;
            </Button>
            <Button
                :size-type="size"
                disabled
                icon-only
                :aria-label="`${size} disabled`"
            >
                &#9733;
            </Button>
        </div>
    </div>
</template>
