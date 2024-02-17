
import type { setBlockTracking } from 'vue';

import type { Card } from '#build/components';

import type { Card } from '#build/components';
<script setup lang="ts">
  interface CardProps {
    card: {
      img: string;
      title: string;
      author: string;
    }
  }

  const props = defineProps<CardProps>()
</script>

<template>
  <div class="card">
    <img :src="card.img" alt="" />
    <h3>{{ card.title }}</h3>
    <p>{{ card.author }}</p>

  </div>
</template>

<style scoped>
  .card {
    box-shadow: 1px 1px 5px black;
    background: white;
    width: 30%;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .content {
    padding: 10px;
  }

  p {
    margin-top: 10px;
  }
</style>