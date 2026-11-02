import type { ProgressIndicatorProps } from "./types";
/**
 * A horizontal step-progress bar that tracks a user's position through a
 * multi-step flow.
 *
 * Use `ProgressIndicator` when you need to communicate progress through an
 * ordered sequence of steps.
 * @keywords multi-step, step, stepper, wizard, workflow
 */
export declare const ProgressIndicator: <T>({ steps, currentIndex, displayExtractor, className, ...otherProps }: ProgressIndicatorProps<T>) => import("react/jsx-runtime").JSX.Element | null;
