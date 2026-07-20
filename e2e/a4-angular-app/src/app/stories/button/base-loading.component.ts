import { Component } from "@angular/core";
import { ButtonComponent } from "@lifesg/react-design-system/core/angular";

@Component({
    selector: "story-button-base-loading",
    standalone: true,
    imports: [ButtonComponent],
    template: `
        <div class="story-column-container">
            @for (size of sizes; track size) {
            <div class="story-row-container">
                @for (style of styles; track style) {
                <app-button
                    [sizeType]="size"
                    [styleType]="style"
                    [loading]="true"
                >
                    {{ size }} {{ style }}
                </app-button>
                }
                <app-button
                    [sizeType]="size"
                    [disabled]="true"
                    [loading]="true"
                >
                    {{ size }} disabled
                </app-button>
            </div>
            }
        </div>
    `,
})
export class ButtonBaseLoadingStory {
    sizes = ["large", "default", "small"] as const;
    styles = ["default", "secondary", "light", "link"] as const;
}
