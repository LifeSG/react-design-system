// Register web components before Vue mounts
import "@lifesg/react-design-system/web-components";

import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
