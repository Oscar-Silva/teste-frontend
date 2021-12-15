import { mount } from "@vue/test-utils";
import StepItem from "@/components/StepItem.vue";
import missions from "@/functions/missions.json";

describe("Component - StepItem", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(StepItem, {
      propsData: {
        step: missions[0].steps[0],
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("Render Step labels", () => {
    const wrapper = mount(StepItem, {
      propsData: {
        step: missions[0].steps[0],
      },
    });

    const title = wrapper.find("h3");
    expect(title.text()).toMatch(missions[0].steps[0].name);
  });
});
