import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";
import Header from "@/components/Header.vue";
import Home from "@/views/Home.vue";
const wrapper = shallowMount(List);
const home = shallowMount(Home);

describe("List", () => {
  it("Component is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("data is received", () => {
    const data = {
      id: 1,
      description: "You are the beast",
      relevance: 3
    };

    home.findComponent(Header).vm.$emit("emit-notice", data);
    const { noticeList } = wrapper.vm.$props;

    afterAll(() => {
      expect(noticeList).toEqual(data);
    });
  });
  
});