<template>
  <div>
    <Header />
    <div class="pt-6 min-h-screen">
      <div id="mindMapContainer"></div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/front/Header.vue";
import MindMap from "simple-mind-map";
import Footer from "@/components/front/Footer.vue";
import { useMeta } from "@/modules/vue-meta";
import i18n from "@/locale/i18n";

const mindMap = new MindMap({
  el: document.getElementById('mindMapContainer'),
  data: {
    "data": {
        "text": "根节点"
    },
    "children": []
  }
});

useMeta({ title: i18n.global.t("front.pricing.title") })

</script>