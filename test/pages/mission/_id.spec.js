import { mount } from "@vue/test-utils";
import MissionDetail from "@/pages/mission/_id.vue";

describe("Mission detail page", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(MissionDetail);
    expect(wrapper.vm).toBeTruthy();
  });
});
