// Register web components before Vue mounts
import "../../web-components/index";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
