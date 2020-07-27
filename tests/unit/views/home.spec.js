import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Header from "@/components/Header.vue";
import List from "@/components/List.vue";
const wrapper = shallowMount(Home);

describe("Home", () => {
  it("Component exist Header", () => {
    const header = wrapper.findComponent(Header);
    expect(header.exists()).toBe(true);
  });

  it("Component exist List", () => {
    const list = wrapper.findComponent(List);
    expect(list.exists()).toBe(true);
  });

  it("exist data", () => {
    const { notice } = wrapper.vm.$data;
    expect(notice).toBe(Array);
  });

  it("transmit data", async () => {
    const data = {
      id: 1,
      description: "You are the beast",
      relevance: 3
    };

    wrapper.findComponent(Header).vm.$emit("emit-notice", data);
    const { notice } = wrapper.vm.$data;
    
    expect(notice).toEqual({
      id: 1,
      description: "You are the beast",
      relevance: 3
    })
  });
});
