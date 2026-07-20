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
            >
                {{ size }} {{ style }}
            </Button>
            <Button :size-type="size" disabled> {{ size }} disabled </Button>
        </div>
    </div>
</template>
