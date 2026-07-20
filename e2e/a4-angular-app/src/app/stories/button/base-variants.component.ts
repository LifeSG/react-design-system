import { Component } from "@angular/core";
import { ButtonComponent } from "@lifesg/react-design-system/core/angular";

@Component({
    selector: "story-button-base-variants",
    standalone: true,
    imports: [ButtonComponent],
    template: `
        <div class="story-column-container">
            @for (size of sizes; track size) {
            <div class="story-row-container">
                @for (style of styles; track style) {
                <app-button [sizeType]="size" [styleType]="style">
                    {{ size }} {{ style }}
                </app-button>
                }
                <app-button [sizeType]="size" [disabled]="true">
                    {{ size }} disabled
                </app-button>
            </div>
            }
        </div>
    `,
})
export class ButtonBaseVariantsStory {
    sizes = ["large", "default", "small"] as const;
    styles = ["default", "secondary", "light", "link"] as const;
}
