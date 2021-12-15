<template>
  <div class="mission-item">
    <img
      class="mission-item-thumb"
      v-if="!!mission.thumb_url"
      v-bind:src="mission.thumb_url"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 100 80"
      height="80px"
      viewBox="0 0 24 24"
      width="100px"
      fill="#00b894"
      style="align-self: center"
      v-else
    >
      <g>
        <rect fill="none" height="80" width="100" />
        <g>
          <path
            d="M8.9,6.07L7.48,4.66L9,3h6l1.83,2H20c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16L20,17.17V7h-4.05l-1.83-2H9.88 L8.9,6.07z M20.49,23.31L18.17,21H4c-1.1,0-2-0.9-2-2V7c0-0.59,0.27-1.12,0.68-1.49l-2-2L2.1,2.1l19.8,19.8L20.49,23.31z M9.19,12.02C9.08,12.33,9,12.65,9,13c0,1.66,1.34,3,3,3c0.35,0,0.67-0.08,0.98-0.19L9.19,12.02z M16.17,19l-1.68-1.68 C13.76,17.75,12.91,18,12,18c-2.76,0-5-2.24-5-5c0-0.91,0.25-1.76,0.68-2.49L4.17,7H4v12H16.17z M14.81,11.98l2.07,2.07 C16.96,13.71,17,13.36,17,13c0-2.76-2.24-5-5-5c-0.36,0-0.71,0.04-1.06,0.12l2.07,2.07C13.85,10.49,14.51,11.15,14.81,11.98z"
          />
        </g>
      </g>
    </svg>

    <div class="mission-item-content">
      <h1 class="mission-item-title">{{ mission.name }}</h1>
      <div style="display: flex; flex-wrap: wrap; flex: 1">
        <h4 class="mission-item-subtitle">Status: {{ stage }}</h4>
        <h4 class="mission-item-subtitle" v-if="!!mission.due_date">
          Disponivel até: {{ available_at }}
        </h4>
      </div>
      <h4 v-if="!!progress" class="mission-item-progressbar-title">
        Progresso da missão
      </h4>
      <div v-if="!!progress" class="mission-item-progress-bar">
        <div v-bind:style="'width: ' + progress + '%'" />
      </div>
    </div>
    <button
      id="button-mission-detail"
      name="button-mission-detail"
      class="mission-item-button"
      v-on:click="onClickMissionItem"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 28 28"
        height="28px"
        viewBox="0 0 24 24"
        width="28px"
        fill="#fff"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    mission: {
      id: String,
      name: String,
      thumb_url: String,
      status: String,
      due_date: {
        available_at: Number,
      },
      enrollment: {
        id: String,
        percentage: Number,
      },
    },
  },
  computed: {
    available_at: function () {
      return new Date(this.mission.due_date.available_at).toLocaleDateString(
        "pt-BR"
      );
    },
    stage: function () {
      return (
        {
          IN_PROGRESS: "Em progresso",
          NOT_STARTED: "Não iniciado",
          COMPLETED: "Completo",
          BLOCKED: "Bloqueado",
        }[this.mission.status] || "Não especificado"
      );
    },
    progress: function () {
      return this?.mission?.enrollment?.percentage || null;
    },
  },
  methods: {
    onClickMissionItem: function () {
      this.$router.push(`/mission/${this.mission.id}`);
    },
  },
};
</script>
<style>
.mission-item {
  display: flex;
  flex-direction: row;
  min-height: 160px;
  width: 80%;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.55) 0px 5px 15px;
}

.mission-item-thumb {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100px;
  object-fit: cover;
}

.mission-item-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
}

.mission-item-title {
  font-size: 1.6rem;
}

.mission-item-subtitle {
  min-width: 100px;
  color: #636e72;
  flex: 1;
  margin-top: 5px;
}

.mission-item-progressbar-title {
  color: #636e72;
  margin-bottom: 5px;
}

.mission-item-progress-bar {
  width: 100%;
  background-color: var(--secondaryColor);
  border-radius: 13px;
  height: 25px;
  padding: 5px;
}

.mission-item-progress-bar > div {
  background-color: #fff;
  width: 40%;
  height: 15px;
  border-radius: 10px;
}

.mission-item-button {
  width: 40px;
  background-color: var(--secondaryColor);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border: 0;
  cursor: pointer;
  background-position: center;
  transition: background 0.8s;
  justify-content: center;
  align-items: center;
}

.mission-item-button:hover {
  background: var(--secondaryColor)
    radial-gradient(circle, transparent 1%, var(--secondaryColor) 1%)
    center/15000%;
}
.mission-item-button:active {
  background-color: #fff;
  background-size: 100%;
  transition: background 0s;
}
</style>
