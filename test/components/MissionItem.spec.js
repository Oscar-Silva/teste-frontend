import { mount } from "@vue/test-utils";
import missions from "@/functions/missions.json";
import MissionItem from "@/components/MissionItem.vue";

describe("Component - MissionItem", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(MissionItem, {
      propsData: {
        mission: missions[0],
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
