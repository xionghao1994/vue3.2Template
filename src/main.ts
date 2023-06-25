import { createApp } from "vue";
import components from "./components";
import "./style/global.scss";
import "./types/base.d";
import App from "./App.vue";
import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

const app = createApp(App);
app.use(router).use(store).use(components).mount("#app");
