import { KeyboardSensor as LibKeyboardSensor, MouseSensor as LibMouseSensor } from "@dnd-kit/core";
export declare class MouseSensor extends LibMouseSensor {
    static activators: {
        eventName: "onMouseDown";
        handler: ({ nativeEvent: event }: React.MouseEvent) => boolean;
    }[];
}
export declare class KeyboardSensor extends LibKeyboardSensor {
    static activators: {
        eventName: "onKeyDown";
        handler: ({ nativeEvent: event }: React.KeyboardEvent<Element>) => boolean;
    }[];
}
