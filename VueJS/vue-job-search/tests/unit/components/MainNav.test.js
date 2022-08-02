import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav.vue", () => {
  it("renders a navbar", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Vue Careers");
  });

  describe("when the user is logged out", () => {
    it("prompts the user to login", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          };
        },
      });

      const loginButton = wrapper.find("[data-test='action-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });

  describe("when the user is logged in", () => {
    it("shows the user's profile image", () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          };
        },
      });

      const loginButton = wrapper.find("[data-test='action-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
