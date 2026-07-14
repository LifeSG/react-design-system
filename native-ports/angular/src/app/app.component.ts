import { Component, signal } from "@angular/core";
import { DateRangeInputComponent } from "./components/date-range-input/date-range-input.component";
import { ButtonComponent } from "./components/button/button.component";
import type { DateRangeValue } from "./components/shared/types";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [DateRangeInputComponent, ButtonComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    readonly output1 = signal("");
    readonly output2 = signal("");

    handleChange1(event: DateRangeValue): void {
        this.output1.set(JSON.stringify(event, null, 2));
    }

    handleChange2(event: DateRangeValue): void {
        this.output2.set(JSON.stringify(event, null, 2));
    }
}
