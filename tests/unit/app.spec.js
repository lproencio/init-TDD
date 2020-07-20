import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Home from "@/views/Home.vue";

describe("App", () => {
  it("Component is mounted", () => {
    const wrapper = shallowMount(App);
    const home = wrapper.findComponent(Home);
    expect(home.exists()).toBe(true);
  });
});
