import {
    Component,
    input,
    output,
    ViewEncapsulation,
    ChangeDetectionStrategy,
} from "@angular/core";
import { dayCell } from "@lifesg/flagship-styles";

@Component({
    selector: "app-day-cell",
    standalone: true,
    templateUrl: "./day-cell.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayCellComponent {
    readonly date = input.required<string>();
    readonly day = input.required<number>();
    readonly currentMonth = input(true);
    readonly today = input(false);
    readonly disabled = input(false);
    readonly selectedStart = input(false);
    readonly selectedEnd = input(false);
    readonly inRange = input(false);

    readonly daySelect = output<{ date: string }>();

    readonly cls = dayCell;

    get cellClasses(): string {
        const classes = [this.cls.cell];
        if (!this.currentMonth()) classes.push(this.cls.otherMonth);
        if (this.today()) classes.push(this.cls.today);
        if (this.disabled()) classes.push(this.cls.disabled);
        if (this.selectedStart()) classes.push(this.cls.selectedStart);
        if (this.selectedEnd()) classes.push(this.cls.selectedEnd);
        if (this.inRange()) classes.push(this.cls.inRange);
        return classes.join(" ");
    }

    handleClick(): void {
        if (!this.disabled()) {
            this.daySelect.emit({ date: this.date() });
        }
    }
}
