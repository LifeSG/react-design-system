<script setup lang="ts">
import { loadingSpinner as cls } from "@lifesg/flagship-styles";
</script>

<template>
    <div :class="cls.root">
        <div :class="[cls.ring]"></div>
        <div :class="[cls.ring, cls.ring2]"></div>
        <div :class="[cls.ring, cls.ring3]"></div>
        <div :class="[cls.ring, cls.ring4]"></div>
    </div>
</template>
