import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";
const wrapper = shallowMount(List, {
  propsData: {
    arrList: [{
      id: 1,
      description: "You are the beast",
      relevance: 3
      },
      {
        id: 2,
        description: "You are the all beast",
        relevance: 4
      }
    ]
  }
});

describe("List", () => {
  it("Component is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });
});