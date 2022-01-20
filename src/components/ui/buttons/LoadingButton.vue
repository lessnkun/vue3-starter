<template>
  <ButtonPrimary
    class="relative justify-center"
    type="button"
    :disabled="loading"
    :class="{
      'base-spinner cursor-not-allowed': loading,
    }"
  >
    <slot />
  </ButtonPrimary>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";

export default defineComponent({
  name: 'LoadingButton',
  components: {
    ButtonPrimary
  },
  setup() {
    const loading = ref(false);
    function start() {
      loading.value = true;
    }
    function stop() {
      loading.value = false;
    }

    return {
      loading,
      start,
      stop
    }
  }
})
</script>
