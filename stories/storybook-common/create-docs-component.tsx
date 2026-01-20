/**
 * Creates a documentation-only component for Storybook ArgsTable on-the-fly.
 *
 * This is needed because Storybook's ArgsTable cannot extract prop types directly
 * from TypeScript interfaces. By creating a component wrapper, we make the props
 * visible to Storybook's docgen.
 *
 * Note: We use regular functions instead of React.FC because React.FC automatically
 * makes the `children` prop optional, which would misrepresent required props.
 *
 * The types parameter is only for TypeScript - it's not used at runtime.
 * Pass an empty object cast to your props type.
 *
 * @example
 * ```tsx
 * // In your MDX file:
 * import { createDocsComponent } from '../storybook-common/create-docs-component';
 * import type { FilterItemProps } from 'src/filter/types';
 *
 * <ArgsTable of={createDocsComponent<FilterItemProps>()} />
 * ```
 */
export function createDocsComponent<TProps>(
    types?: TProps
): (props: TProps) => null {
    return function DocsComponent(_props: TProps): null {
        return null;
    };
}
