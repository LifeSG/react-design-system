import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { ShellComponent } from "./app/shell.component";
import { AppComponent } from "./app/app.component";
import { StoryRouterComponent } from "./app/components/story-router.component";

const routes: Routes = [
    { path: "components/:component/:story", component: StoryRouterComponent },
    { path: "**", component: AppComponent },
];

bootstrapApplication(ShellComponent, {
    providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
