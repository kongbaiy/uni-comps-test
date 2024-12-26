<template>
    {{ msg }}
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref<string>('adc')
</script>