import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
const wrapper = shallowMount(Header);
const { id, description, relevance, isEmpty } = wrapper.vm.$data;

describe("Header", () => {
  it("Component is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("notice data exist", () => {
    expect(id).toBe(1);
    expect(description).toBe("");
    expect(relevance).toBe(null);
  });

  it("submit notice", () => {
    setData(wrapper);

    expect(wrapper.vm.isDisabled).toBe(false);

    const btnSubmit = wrapper.find("button");
    wrapper.vm.submit();

    const data = wrapper.emitted("emit-notice");
  
    expect(btnSubmit.classes()).toContain("btn-submit");
    expect(...data[0]).toEqual({
      id: 1,
      description: "You are the beast",
      relevance: 3
    });
  });
  
  const setData = wrapper => wrapper.setData({
    id: 1,
    description: "You are the beast",
    relevance: 3
  })
});
