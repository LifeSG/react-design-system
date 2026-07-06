/// <reference types="vite/client" />

// Declare custom elements so Vue/TS doesn't warn about unknown tags
declare module "vue" {
    export interface GlobalComponents {
        "lifesg-button": {
            label?: string;
            styletype?: string;
            sizetype?: string;
            danger?: boolean;
            disabled?: boolean;
            loading?: boolean;
        };
        "lifesg-modal": {
            show?: boolean;
            "animation-from"?: string;
        };
    }
}

export {};
