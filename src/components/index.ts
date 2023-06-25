import { App } from "vue";
import button from "@/components/app-button/index.vue";

const components = {
  install(app: App) {
    app.component("app-button", button);
  },
};
export default components;
