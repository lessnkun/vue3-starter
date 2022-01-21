<template>
  <div>
    <StackedLayout v-if="currentLayout === 1" :layout="layout">
      <div>
        Your app views here
        <a
          href="https://alexandromg.gumroad.com/l/SaasFrontends-Vue3?variant=Sandbox&_gl=1*1nhckoi*_ga*MTA3NDA3OTM4Ny4xNjQyMzU1ODQ3*_ga_6LJN6D94N6*MTY0MjM2NzI0OC40LjEuMTY0MjM2ODc0MC4w"
          class="text-xs underline text-gray-500"
        >(get the sandbox or essential editions for more views)</a>
        <!-- <router-view :key="currentWorkspaceId"></router-view> -->
      </div>
    </StackedLayout>
    <SidebarLayout v-else :layout="layout">
      <div>
        Your app views here
        <a
          href="https://alexandromg.gumroad.com/l/SaasFrontends-Vue3?variant=Sandbox&_gl=1*1nhckoi*_ga*MTA3NDA3OTM4Ny4xNjQyMzU1ODQ3*_ga_6LJN6D94N6*MTY0MjM2NzI0OC40LjEuMTY0MjM2ODc0MC4w"
          class="text-xs underline text-gray-500"
        >(get the sandbox or essential editions for more views)</a>
        <!-- <router-view :key="currentWorkspaceId"></router-view> -->
      </div>
    </SidebarLayout>
  </div>
</template>

<script setup lang="ts">
import SidebarLayout from "@/components/layouts/SidebarLayout.vue";
import StackedLayout from "@/components/layouts/StackedLayout.vue";
import store from "@/store";
import { ApplicationLayout } from "@/application/enums/shared/ApplicationLayout";
import { computed } from "vue";

defineProps({
  layout: String
})

// const currentWorkspaceId = computed((): string => {
//   return store.state.tenant.currentWorkspace?.id ?? "";
// })
const currentLayout = computed((): ApplicationLayout => {
  return store.state.app.layout;
})
</script>
