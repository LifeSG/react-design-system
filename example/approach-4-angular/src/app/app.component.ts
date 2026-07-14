import { Component, signal } from "@angular/core";
import {
    ButtonComponent,
    DateRangeInputComponent,
} from "@lifesg/react-design-system/core/angular";
import type { DateRangeValue } from "@lifesg/react-design-system/core/angular";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [DateRangeInputComponent, ButtonComponent],
    templateUrl: "./app.component.html",
    styles: [
        `
            .app {
                max-width: 800px;
                margin: 0 auto;
            }
            .subtitle {
                color: #666;
                margin-top: -8px;
            }
            h2 {
                border-bottom: 1px solid #ddd;
                padding-bottom: 8px;
                margin-top: 32px;
            }
            h3 {
                font-size: 14px;
                color: #666;
                margin-top: 16px;
                margin-bottom: 8px;
            }
            .button-row {
                display: flex;
                gap: 12px;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 12px;
            }
            .output {
                margin-top: 8px;
                padding: 8px 12px;
                background: #f5f5f5;
                border-radius: 4px;
                font-size: 13px;
            }
            section {
                margin-bottom: 16px;
            }
        `,
    ],
})
export class AppComponent {
    readonly output = signal("");

    handleChange(event: DateRangeValue): void {
        this.output.set(JSON.stringify(event, null, 2));
    }
}
