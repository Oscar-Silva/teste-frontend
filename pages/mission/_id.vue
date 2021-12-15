
<template>
  <div class="mission-detail-container">
    <div class="mission-detail-header">
      <button
        class="mission-detail-header back-button"
        v-on:click="backToMissionsPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </button>

      <div class="content">
        <img v-if="!!mission.thumb_url" v-bind:src="mission.thumb_url" />
        <div class="text-data">
          <h2>{{ mission.name }}</h2>
          <h4 v-if="!!mission.due_date">Disponivel até: {{ available_at }}</h4>
          <h4>Status: {{ stage }}</h4>
        </div>
      </div>
    </div>

    <div style="display: flex; margin-top: 25px; justify-content: center">
      <mission-steps v-bind:steps="steps" />
    </div>
  </div>
</template>

<script>
import MissionSteps from "@/components/MissionSteps.vue";

export default {
  components: {
    MissionSteps,
  },
  data: () => ({
    loading: true,
    mission: {},
  }),
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
    steps: function () {
      return this?.mission?.steps?.map((s) => ({
        ...s,
        status:
          this.mission.status === "COMPLETED"
            ? "COMPLETED"
            : this?.mission?.enrollment?.completed_steps[
                this?.mission?.enrollment?.completed_steps?.findIndex(
                  (cs) => cs?.step_id === s?.id
                )
              ]?.status,
      }));
    },
  },
  methods: {
    async fetchMissionDetail() {
      this.loading = true;
      const missionDetail = await this.$axios.$get(
        `https://us-central1-challenge-334613.cloudfunctions.net/api/missions/${this.$route.params.id}`
      );
      this.loading = false;
      this.mission = missionDetail;
    },
    backToMissionsPage() {
      this.$router.push(`/`);
    },
  },
  created() {
    this.fetchMissionDetail();
  },
};
</script>

<style>
@import "../../assets/css/global.css";
.mission-detail-container {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: var(--primaryColor);
}

.mission-detail-header {
  background-color: var(--secondaryColor);
  width: 100vw;
  height: 200px;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  border-bottom: 2.5px solid #fff;
  display: flex;
  justify-content: center;
}

.mission-detail-header .content {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: center;
}

.mission-detail-header img {
  width: 140px;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.mission-detail-header .text-data {
  display: flex;
  flex-direction: column;
  padding-left: 15px;
}

.mission-detail-header .text-data h2 {
  color: #fff;
  margin-bottom: 15px;
}

.mission-detail-header .text-data h4 {
  color: #ffffff;
  margin-top: 5px;
}

.mission-detail-header .back-button {
  cursor: pointer;
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-color: var(--secondaryColor);
  border: 2.5px solid #fff;
  position: absolute;
  top: 168px;
  left: 2.5%;
  justify-content: center;
  align-items: center;
}
.mission-detail-header .back-button:hover {
  opacity: 0.9;
}
</style>
