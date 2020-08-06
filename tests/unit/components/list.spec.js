import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";
const wrapper = shallowMount(List);

const data = {
  id: 1,
  description: "You are the beast",
  relevance: 3,
};

const data2 = {
  id: 2,
  description: "You are really the beast?",
  relevance: 3,
};

describe("List", () => {
  it("Component is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("create list", () => {
    wrapper.vm.newNotices = data;
    const { arrList, newNotices } = wrapper.vm.$data;
    arrList.push(newNotices);
    expect(arrList.length).toBe(1);
  });
});
