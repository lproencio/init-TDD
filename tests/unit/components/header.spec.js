import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
const wrapper = shallowMount(Header, {
  propsData: {
    id: Number,
    description: String,
    relevance: Number
  }
});

describe("Header", () => {
  it("Component is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("notice data exist", () => {
    const { id, description, relevance } = wrapper.vm.$data;
    expect(id).toBe(Number);
    expect(description).toBe(String);
    expect(relevance).toBe(Number);
  });

  it("submit notice", () => {
    const btnSubmit = wrapper.find("button");
    setData(wrapper);
    wrapper.vm.submit();

    const data = wrapper.emitted("emit-notice")
  
    expect(btnSubmit.classes()).toContain("btn-submit");
    expect(...data).toEqual([{
      id: 1,
      description: "You are the beast",
      relevance: 3
    }])
  });
  
  const setData = wrapper =>  wrapper.setData({
    id: 1,
    description: "You are the beast",
    relevance: 3
  })
});
