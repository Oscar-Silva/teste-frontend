import { mount } from "@vue/test-utils";
import MissionSteps from "@/components/MissionSteps.vue";
import missions from "@/functions/missions.json";

describe("Component - MissionSteps ", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(MissionSteps, {
      propsData: {
        mission: missions[0].steps,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
