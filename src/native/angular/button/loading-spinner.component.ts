import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
} from "@angular/core";
import { loadingSpinner } from "../../styles";

@Component({
    selector: "app-loading-spinner",
    standalone: true,
    template: `
        <div [class]="cls.root">
            <div [class]="cls.ring"></div>
            <div [class]="cls.ring + ' ' + cls.ring2"></div>
            <div [class]="cls.ring + ' ' + cls.ring3"></div>
            <div [class]="cls.ring + ' ' + cls.ring4"></div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {
    readonly cls = loadingSpinner;
}
