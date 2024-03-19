import { createContext, useContext, useReducer } from "react";

// =============================================================================
// TYPINGS
// =============================================================================
export interface ImageDimension {
    src: string;
    width: number;
    height: number;
}

export interface FullscreenImageCarouselState {
    imagesDimension: ImageDimension[];
}

interface FullscreenImageCarouselContextType {
    state?: FullscreenImageCarouselState;
    saveImageDimension: React.Dispatch<IFullscreenImageCarouselAction>;
}

export type TFullscreenImageCarouselActionType = "save-image-dimension";

export interface IFullscreenImageCarouselAction {
    type: TFullscreenImageCarouselActionType;
    payload?: ImageDimension;
}

// =============================================================================
// REDUCER
// =============================================================================

export const fullscreenImageCarouselReducer = (
    state: FullscreenImageCarouselState,
    action: IFullscreenImageCarouselAction
): FullscreenImageCarouselState => {
    switch (action.type) {
        case "save-image-dimension":
            if (action.payload) {
                return {
                    imagesDimension: [...state.imagesDimension, action.payload],
                };
            }

            return state;
        default:
            return state;
    }
};

// =============================================================================
// Hook
// =============================================================================
export const useFullscreenImageCarousel = () => {
    const context = useContext(FullscreenImageCarouselContext);

    const saveImageDimension = (dimension: ImageDimension) => {
        context.saveImageDimension({
            type: "save-image-dimension",
            payload: dimension,
        });
    };

    return {
        saveImageDimension,
        state: context.state,
    };
};

// =============================================================================
// CONTEXT
// =============================================================================

export const DEFAULT_VALUES: FullscreenImageCarouselState = {
    imagesDimension: [],
};

export const FullscreenImageCarouselContext =
    createContext<FullscreenImageCarouselContextType>({
        state: DEFAULT_VALUES,
        saveImageDimension: () => null,
    });
