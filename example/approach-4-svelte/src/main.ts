import "@lifesg/react-design-system/styles/theme/lifesg.css";
import "@lifesg/react-design-system/styles/styles.css";
import { mount } from "svelte";
import App from "./App.svelte";

mount(App, { target: document.getElementById("app")! });
