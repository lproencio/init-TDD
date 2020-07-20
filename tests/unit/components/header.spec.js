import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
const wrapper = shallowMount(Header, {
  propsData: {
    notice: {},
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
    expect(wrapper.props("notice")).toBe({id:Number, description: String, relevance:Number});
  });
  
});
