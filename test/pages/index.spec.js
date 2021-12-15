import { mount } from "@vue/test-utils";
import missions from "@/functions/missions.json";
import ListMissions from "@/pages/index.vue";

describe("Page index - List of missions", () => {
  const wrapper = mount(ListMissions, {
    data() {
      return {
        missions,
      };
    },
  });
  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("Filter missions by status", () => {
    wrapper.vm.$data.searchText = "";
    wrapper.vm.$data.selectedStatus = wrapper.vm.$data.optionsOfStatus[1].value;

    expect(
      wrapper.vm.filteredMissions.every(
        (m) => m.status === wrapper.vm.$data.selectedStatus
      )
    ).toBeTruthy();
  });

  test("Filter missions by name", () => {
    wrapper.vm.$data.searchText = "Backend";
    wrapper.vm.$data.selectedStatus = "ALL";

    expect(
      wrapper.vm.filteredMissions.every((m) =>
        m.name.includes(wrapper.vm.$data.searchText)
      )
    ).toBeTruthy();
  });
});
