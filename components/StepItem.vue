<template>
  <div class="step-item" v-bind:style="containerStyle">
    <h3>Etapa: {{ step.name }}</h3>
    <h4 v-bind:style="statusStyle">Status: {{ status }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      id: Number,
      name: String,
      status: String,
    },
  },
  computed: {
    containerStyle() {
      return (
        {
          COMPLETED: "border: 1.5px solid #78e08f;",
          FAILED: "border: 1.5px solid #ff4d4d;",
        }[this.step.status] || "border: 1.5px solid gray;"
      );
    },
    statusStyle() {
      return (
        {
          COMPLETED: "color: #78e08f;",
          FAILED: "color: #ff4d4d;",
        }[this.step.status] || "color: gray;"
      );
    },
    status() {
      return (
        {
          COMPLETED: "Completo!",
          FAILED: "Falhou!",
        }[this.step.status] || "Não iniciado"
      );
    },
  },
};
</script>

<style>
.step-item {
  margin: 10px 25px 10px 25px;
  min-height: 40px;
  padding: 10px;
  border-radius: 10px;
}

.step-item h4 {
  color: grey;
}
</style>
