<template>
  <div class="steps-container">
    <h2 id="step-title">Etapas</h2>
    <h3 style="text-align: center" v-if="!steps">
      Nenhuma etapa encontrada para essa missão :(
    </h3>
    <step-item v-for="step in steps" :step="step" :key="step.id" />
  </div>
</template>

<script>
import StepItem from "./StepItem.vue";

export default {
  components: { StepItem },
  props: {
    steps: Array,
  },
};
</script>


<style>
.steps-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  min-height: 160px;
  margin: 25px;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px;
}
.steps-container #step-title {
  color: var(--secondaryColor);
  text-align: center;
}
</style>
