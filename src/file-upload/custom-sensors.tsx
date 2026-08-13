import {
    KeyboardSensor as LibKeyboardSensor,
    MouseSensor as LibMouseSensor,
} from "@dnd-kit/core";

export class MouseSensor extends LibMouseSensor {
    public static readonly activators = [
        {
            eventName: "onMouseDown" as const,
            handler: ({ nativeEvent: event }: React.MouseEvent) => {
                return shouldHandleEvent(event.target as HTMLElement);
            },
        },
    ];
}

export class KeyboardSensor extends LibKeyboardSensor {
    public static readonly activators = [
        {
            eventName: "onKeyDown" as const,
            handler: ({ nativeEvent: event }: React.KeyboardEvent<Element>) => {
                return shouldHandleEvent(event.target as HTMLElement);
            },
        },
    ];
}

function shouldHandleEvent(element: HTMLElement | null) {
    let current = element;
    while (current) {
        if (current.dataset && current.dataset.noDnd) {
            return false;
        }
        current = current.parentElement;
    }

    return true;
}
