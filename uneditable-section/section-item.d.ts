/// <reference types="react" />
import { UneditableSectionItemProps } from "./types";
export interface UneditableSectionItemComponentProps extends UneditableSectionItemProps {
    onMask?: (() => void) | undefined;
    onUnmask?: (() => void) | undefined;
    onTryAgain?: (() => void) | undefined;
}
export declare const UneditableSectionItem: ({ label, value, displayWidth, maskState, maskLoadingState, maskChar, maskRange, unmaskRange, maskRegex, disableMaskUnmask, maskTransformer, onMask, onUnmask, onTryAgain, }: UneditableSectionItemComponentProps) => JSX.Element;
