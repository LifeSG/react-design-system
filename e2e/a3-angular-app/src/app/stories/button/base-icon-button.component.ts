import { Component } from "@angular/core";
import { ButtonComponent } from "@lifesg/react-design-system/angular";

@Component({
    selector: "story-button-base-icon-button",
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
                    [attr.aria-label]="size + ' ' + style"
                >
                    &#9733;
                </app-button>
                }
                <app-button
                    [sizeType]="size"
                    [disabled]="true"
                    [attr.aria-label]="size + ' disabled'"
                >
                    &#9733;
                </app-button>
            </div>
            }
        </div>
    `,
})
export class ButtonBaseIconButtonStory {
    sizes = ["large", "default", "small"] as const;
    styles = ["default", "secondary", "light", "link"] as const;
}
