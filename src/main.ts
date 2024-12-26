import { createSSRApp } from "vue";
import App from "./App.vue";

// import 'uni-comps-vue3/package/index.css'
// import 'uno.css'
import 'uni-comps-vue3/package/index.css'

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
