<template>
  <div id="main-container" class="container">
    <div id="list-missions">
      <div class="list-missions-header">
        <h1 id="list-missions-title">Skore - Missões</h1>
        <div class="search-bar-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="28px"
            viewBox="0 0 24 24"
            width="28px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
          <input
            class="search-bar"
            v-model="searchText"
            placeholder="Procure por missões"
          />
          <div class="status-picker-container">
            <label for="statusPicker">Status:</label>
            <div class="select">
              <select
                v-model="selectedStatus"
                name="statusPicker"
                id="statusPicker"
              >
                <option
                  v-for="item in optionsOfStatus"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center">
        <mission-item
          v-for="mission in filteredMissions"
          :key="mission.id"
          :mission="mission"
          class="mission-item-container"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MissionItem from "../components/MissionItem.vue";

export default {
  components: {
    MissionItem,
  },
  data: function () {
    return {
      searchText: "",
      optionsOfStatus: [
        {
          value: "ALL",
          label: "Todos",
        },
        {
          value: "IN_PROGRESS",
          label: "Em progresso",
        },
        {
          value: "NOT_STARTED",
          label: "Não iniciados",
        },
        {
          value: "COMPLETED",
          label: "Completos",
        },
        {
          value: "BLOCKED",
          label: "Bloqueados",
        },
      ],
      selectedStatus: "ALL",
      missions: [],
    };
  },
  computed: {
    filteredMissions: function () {
      return this.missions
        .filter(
          (m) =>
            m.status === this.selectedStatus || this.selectedStatus === "ALL"
        )
        .filter(
          (m) =>
            m.name.toUpperCase().includes(this.searchText.toUpperCase()) ||
            this.searchText.length === 0
        );
    },
  },
  methods: {
    async fetchListMissions() {
      const missions = await this.$axios.$get(
        `https://us-central1-challenge-334613.cloudfunctions.net/api/missions`
      );

      this.missions = missions;
    },
  },
  created() {
    this.fetchListMissions();
  },
};
</script>

<style>
@import "../assets/css/global.css";
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #dfe6e9;
}

#list-missions {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.mission-item-container {
  margin: 15px;
}

.search-bar-container {
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 10px;
  flex-wrap: wrap;
}

.search-bar {
  display: flex;
  flex: 1;
  flex-direction: row;
  caret-color: var(--primaryColor);
  background: transparent;
  border-width: 0px 0px 1px 0px;
  border-bottom-color: #fff;
  font-size: 22px;
  padding: 10px;
  margin-left: 10px;
  height: 45px;
  color: #fff;
}

.search-bar::placeholder {
  color: #fff;
  opacity: 0.8;
}

.list-missions-header {
  padding: 25px;
  background-color: var(--secondaryColor);
}

#list-missions-title {
  color: #fff;
  text-align: center;
}

.status-picker-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin-left: 25px;
  min-width: 100px;
}

@media (max-width: 500px) {
  .status-picker-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 25px;
    min-width: 100px;
  }
}

.status-picker-container label {
  font-size: 18px;
  margin: 10px 0 10px 0;
  color: #fff;
}

.select {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
}

.select option {
  font-size: 18px;
}

.select select {
  font-size: 16px;
  font-family: "Arial";
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 10px 15px;
  outline: 0;
  border: 1px solid #ffffff;
  border-radius: 7px;
  background: #00b894;
  color: #ffffff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select select::-ms-expand {
  display: none;
}
.select select:hover,
.select select:focus {
  color: #000000;
  background: #80cbbc;
}
.select select:disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>


