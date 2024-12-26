<template>
  <button>dad</button>
  <popover
    :show-mask="true"
    :guide="true"
    :block="false"
    position="right"
  >
    <view>
      popover
    </view>
    <template #actions>
      <view>adc</view>
    </template>
  </popover>

  <verify-code :delay="60"  @start="handleCodeButtonStart"></verify-code>
</template>

<script lang="ts" setup>

function handleCodeButtonStart(next: () => void) {
  next()
}
</script>