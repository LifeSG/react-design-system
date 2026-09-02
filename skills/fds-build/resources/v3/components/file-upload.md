# FileUpload

Import: `import { FileUpload } from "@lifesg/react-design-system/file-upload"`

## When to use

-   Forms that require users to attach one or more files (e.g. supporting documents, ID scans, images).
-   Use `sortable` when file order matters for downstream processing.
-   Use `editableFileItems` when image files need alt-text or descriptions.
-   Use `readOnly` on review or summary screens to display uploaded files without allowing changes.

## Usage

```tsx
import { FileUpload } from "@lifesg/react-design-system/file-upload";

<FileUpload
    title="Upload supporting documents"
    description="PDF, JPG, or PNG. Max 5 MB each."
    accept=".pdf,.jpg,.png"
    fileItems={fileItems}
    onChange={(files) => {}}
    onDelete={(item) => {}}
/>;
```

## Props — `FileItemProps`

| Prop                    | Type                        | Default | Description                                                                                                                                                                 |
| ----------------------- | --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | Unique identifier used to target delete, edit, and sort operations.                                                                                                         |
| `name` \*               | `string`                    | —       | The display name of the file                                                                                                                                                |
| `type` \*               | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                                                       |
| `size` \*               | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                                                                   |
| `description`           | `string`                    | —       | The alt text or description of the file                                                                                                                                     |
| `progress`              | `number`                    | —       | Upload progress expressed as a fraction between 0 and 1. When provided, a progress indicator is rendered on the file item.                                                  |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate an upload failure. Accepts a plain string or a React node for richer error display.                                        |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry. When not provided, a PDF icon is displayed for PDF files only; other file types show no default icon. |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                                                                     |

## Props — `FileInputProps`

| Prop        | Type                                 | Default | Description                                                      |
| ----------- | ------------------------------------ | ------- | ---------------------------------------------------------------- |
| `accept`    | `string`                             | —       | Defines the file types that is accepted                          |
| `capture`   | `boolean \| "user" \| "environment"` | —       | Specifies which camera to use for capture of image or video data |
| `multiple`  | `boolean`                            | —       | Specifies if user is allowed to select more than one file.       |
| `disabled`  | `boolean`                            | —       | —                                                                |
| `id`        | `string`                             | —       | —                                                                |
| `className` | `string`                             | —       | —                                                                |
| `name`      | `string`                             | —       | —                                                                |

## Props — `FileUploadProps`

| Prop                       | Type                                     | Default    | Description                                                                                                                                                                    |
| -------------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                    | `string \| JSX.Element`                  | —          | Heading rendered at the top of the component. Accepts a plain string or a JSX element for rich formatting.                                                                     |
| `description`              | `string \| JSX.Element`                  | —          | Supporting text rendered below `title`. Accepts a plain string or a JSX element for rich formatting.                                                                           |
| `styleType`                | `FileUploadStyle`                        | "bordered" | Visual style variant for the component.                                                                                                                                        |
| `maxFiles`                 | `number`                                 | —          | Maximum number of files the component will accept. Once `fileItems.length` reaches this value, uploading is disabled until an item is removed.                                 |
| `warning`                  | `string \| JSX.Element`                  | —          | Warning message rendered inside the component. Accepts a plain string or a JSX element for rich formatting.                                                                    |
| `fileItems`                | `FileItemProps[]`                        | —          | Controlled list of file items displayed in the file list. Update this array in response to `onChange`, `onDelete`, `onEdit`, and `onSort` to reflect the current upload state. |
| `editableFileItems`        | `boolean`                                | false      | When `true`, image file items render an editable description field. Editing triggers `onEdit` with the updated `FileItemProps`.                                                |
| `fileDescriptionMaxLength` | `number`                                 | —          | Character limit for the description input on editable image file items. Only applies when `editableFileItems` is `true`.                                                       |
| `descriptionRequired`      | `boolean`                                | true       | When `false`, the save button on an editable file item is enabled even when the description field is empty.                                                                    |
| `descriptionLabel`         | `FormLabelProps`                         | —          | Overrides the default label and subtext for the description input field on editable file items.                                                                                |
| `sortable`                 | `boolean`                                | false      | When `true`, file items can be reordered via drag-and-drop. The reordered list is emitted via `onSort`.                                                                        |
| `errorMessage`             | `string \| JSX.Element`                  | —          | General error message rendered below the file list. Accepts a plain string or a JSX element for rich formatting.                                                               |
| `readOnly`                 | `boolean`                                | —          | When `true`, the upload button and drop zone are hidden and file items are rendered without delete or edit controls.                                                           |
| `customLabels`             | `{ uploadButtonLabel?: string }`         | —          | Overrides default label text for elements within the component.                                                                                                                |
| `onChange`                 | `((files: File[]) => void)`              | —          | Called with the newly uploaded files. Receives only the files that fit within the remaining `maxFiles` slots.                                                                  |
| `onEdit`                   | `((fileItem: FileItemProps) => void)`    | —          | Called when the user saves an edited description on a file item.                                                                                                               |
| `onDelete`                 | `((fileItem: FileItemProps) => void)`    | —          | Called when the user clicks the delete button on a file item.                                                                                                                  |
| `onSort`                   | `((fileItems: FileItemProps[]) => void)` | —          | Called after the user reorders file items via drag-and-drop. Only fired when `sortable` is `true`.                                                                             |
| `accept`                   | `string`                                 | —          | Defines the file types that is accepted                                                                                                                                        |
| `capture`                  | `boolean \| "user" \| "environment"`     | —          | Specifies which camera to use for capture of image or video data                                                                                                               |
| `multiple`                 | `boolean`                                | —          | Specifies if user is allowed to select more than one file.                                                                                                                     |
| `disabled`                 | `boolean`                                | —          | —                                                                                                                                                                              |
| `id`                       | `string`                                 | —          | —                                                                                                                                                                              |
| `className`                | `string`                                 | —          | —                                                                                                                                                                              |
| `name`                     | `string`                                 | —          | —                                                                                                                                                                              |

## Custom labels

| Prop                             | Type     | Default          | Description                                       |
| -------------------------------- | -------- | ---------------- | ------------------------------------------------- |
| `customLabels.uploadButtonLabel` | `string` | `"Upload files"` | Label of the button that triggers the file dialog |

## FileItemProps

| Prop                    | Type                        | Required | Description                              |
| ----------------------- | --------------------------- | -------- | ---------------------------------------- |
| `id`                    | `string`                    | Yes      | Unique identifier for the file           |
| `name`                  | `string`                    | Yes      | File name displayed in the list          |
| `type`                  | `string`                    | Yes      | MIME type of the file                    |
| `size`                  | `number`                    | Yes      | File size in bytes                       |
| `description`           | `string`                    | —        | Alt text or description for the file     |
| `progress`              | `number`                    | —        | Upload progress from 0 to 1              |
| `errorMessage`          | `string \| React.ReactNode` | —        | Per-file error message                   |
| `thumbnailImageDataUrl` | `string`                    | —        | Thumbnail data URL rendered for the file |
| `truncateText`          | `boolean`                   | `true`   | Truncates long file names                |

## Props — `FileItemProps`

| Prop                    | Type                        | Default | Description                                                                                                                                                                 |
| ----------------------- | --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | Unique identifier used to target delete, edit, and sort operations.                                                                                                         |
| `name` \*               | `string`                    | —       | The display name of the file                                                                                                                                                |
| `type` \*               | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                                                       |
| `size` \*               | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                                                                   |
| `description`           | `string`                    | —       | The alt text or description of the file                                                                                                                                     |
| `progress`              | `number`                    | —       | Upload progress expressed as a fraction between 0 and 1. When provided, a progress indicator is rendered on the file item.                                                  |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate an upload failure. Accepts a plain string or a React node for richer error display.                                        |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry. When not provided, a PDF icon is displayed for PDF files only; other file types show no default icon. |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                                                                     |

## Props — `FileInputProps`

| Prop        | Type                                 | Default | Description                                                      |
| ----------- | ------------------------------------ | ------- | ---------------------------------------------------------------- |
| `accept`    | `string`                             | —       | Defines the file types that is accepted                          |
| `capture`   | `boolean \| "user" \| "environment"` | —       | Specifies which camera to use for capture of image or video data |
| `multiple`  | `boolean`                            | —       | Specifies if user is allowed to select more than one file.       |
| `disabled`  | `boolean`                            | —       | —                                                                |
| `id`        | `string`                             | —       | —                                                                |
| `className` | `string`                             | —       | —                                                                |
| `name`      | `string`                             | —       | —                                                                |

## Props — `FileUploadProps`

| Prop                       | Type                                     | Default    | Description                                                                                                                                                                    |
| -------------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                    | `string \| JSX.Element`                  | —          | Heading rendered at the top of the component. Accepts a plain string or a JSX element for rich formatting.                                                                     |
| `description`              | `string \| JSX.Element`                  | —          | Supporting text rendered below `title`. Accepts a plain string or a JSX element for rich formatting.                                                                           |
| `styleType`                | `FileUploadStyle`                        | "bordered" | Visual style variant for the component.                                                                                                                                        |
| `maxFiles`                 | `number`                                 | —          | Maximum number of files the component will accept. Once `fileItems.length` reaches this value, uploading is disabled until an item is removed.                                 |
| `warning`                  | `string \| JSX.Element`                  | —          | Warning message rendered inside the component. Accepts a plain string or a JSX element for rich formatting.                                                                    |
| `fileItems`                | `FileItemProps[]`                        | —          | Controlled list of file items displayed in the file list. Update this array in response to `onChange`, `onDelete`, `onEdit`, and `onSort` to reflect the current upload state. |
| `editableFileItems`        | `boolean`                                | false      | When `true`, image file items render an editable description field. Editing triggers `onEdit` with the updated `FileItemProps`.                                                |
| `fileDescriptionMaxLength` | `number`                                 | —          | Character limit for the description input on editable image file items. Only applies when `editableFileItems` is `true`.                                                       |
| `descriptionRequired`      | `boolean`                                | true       | When `false`, the save button on an editable file item is enabled even when the description field is empty.                                                                    |
| `descriptionLabel`         | `FormLabelProps`                         | —          | Overrides the default label and subtext for the description input field on editable file items.                                                                                |
| `sortable`                 | `boolean`                                | false      | When `true`, file items can be reordered via drag-and-drop. The reordered list is emitted via `onSort`.                                                                        |
| `errorMessage`             | `string \| JSX.Element`                  | —          | General error message rendered below the file list. Accepts a plain string or a JSX element for rich formatting.                                                               |
| `readOnly`                 | `boolean`                                | —          | When `true`, the upload button and drop zone are hidden and file items are rendered without delete or edit controls.                                                           |
| `customLabels`             | `{ uploadButtonLabel?: string }`         | —          | Overrides default label text for elements within the component.                                                                                                                |
| `onChange`                 | `((files: File[]) => void)`              | —          | Called with the newly uploaded files. Receives only the files that fit within the remaining `maxFiles` slots.                                                                  |
| `onEdit`                   | `((fileItem: FileItemProps) => void)`    | —          | Called when the user saves an edited description on a file item.                                                                                                               |
| `onDelete`                 | `((fileItem: FileItemProps) => void)`    | —          | Called when the user clicks the delete button on a file item.                                                                                                                  |
| `onSort`                   | `((fileItems: FileItemProps[]) => void)` | —          | Called after the user reorders file items via drag-and-drop. Only fired when `sortable` is `true`.                                                                             |
| `accept`                   | `string`                                 | —          | Defines the file types that is accepted                                                                                                                                        |
| `capture`                  | `boolean \| "user" \| "environment"`     | —          | Specifies which camera to use for capture of image or video data                                                                                                               |
| `multiple`                 | `boolean`                                | —          | Specifies if user is allowed to select more than one file.                                                                                                                     |
| `disabled`                 | `boolean`                                | —          | —                                                                                                                                                                              |
| `id`                       | `string`                                 | —          | —                                                                                                                                                                              |
| `className`                | `string`                                 | —          | —                                                                                                                                                                              |
| `name`                     | `string`                                 | —          | —                                                                                                                                                                              |

## Props — `FileItemProps`

| Prop                    | Type                        | Default | Description                                                                                                                                                                 |
| ----------------------- | --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | Unique identifier used to target delete, edit, and sort operations.                                                                                                         |
| `name` \*               | `string`                    | —       | The display name of the file                                                                                                                                                |
| `type` \*               | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                                                       |
| `size` \*               | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                                                                   |
| `description`           | `string`                    | —       | The alt text or description of the file                                                                                                                                     |
| `progress`              | `number`                    | —       | Upload progress expressed as a fraction between 0 and 1. When provided, a progress indicator is rendered on the file item.                                                  |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate an upload failure. Accepts a plain string or a React node for richer error display.                                        |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry. When not provided, a PDF icon is displayed for PDF files only; other file types show no default icon. |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                                                                     |

## Props — `FileInputProps`

| Prop        | Type                                 | Default | Description                                                      |
| ----------- | ------------------------------------ | ------- | ---------------------------------------------------------------- |
| `accept`    | `string`                             | —       | Defines the file types that is accepted                          |
| `capture`   | `boolean \| "user" \| "environment"` | —       | Specifies which camera to use for capture of image or video data |
| `multiple`  | `boolean`                            | —       | Specifies if user is allowed to select more than one file.       |
| `disabled`  | `boolean`                            | —       | —                                                                |
| `id`        | `string`                             | —       | —                                                                |
| `className` | `string`                             | —       | —                                                                |
| `name`      | `string`                             | —       | —                                                                |

## Props — `FileUploadProps`

| Prop                       | Type                                     | Default    | Description                                                                                                                                                                    |
| -------------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                    | `string \| JSX.Element`                  | —          | Heading rendered at the top of the component. Accepts a plain string or a JSX element for rich formatting.                                                                     |
| `description`              | `string \| JSX.Element`                  | —          | Supporting text rendered below `title`. Accepts a plain string or a JSX element for rich formatting.                                                                           |
| `styleType`                | `FileUploadStyle`                        | "bordered" | Visual style variant for the component.                                                                                                                                        |
| `maxFiles`                 | `number`                                 | —          | Maximum number of files the component will accept. Once `fileItems.length` reaches this value, uploading is disabled until an item is removed.                                 |
| `warning`                  | `string \| JSX.Element`                  | —          | Warning message rendered inside the component. Accepts a plain string or a JSX element for rich formatting.                                                                    |
| `fileItems`                | `FileItemProps[]`                        | —          | Controlled list of file items displayed in the file list. Update this array in response to `onChange`, `onDelete`, `onEdit`, and `onSort` to reflect the current upload state. |
| `editableFileItems`        | `boolean`                                | false      | When `true`, image file items render an editable description field. Editing triggers `onEdit` with the updated `FileItemProps`.                                                |
| `fileDescriptionMaxLength` | `number`                                 | —          | Character limit for the description input on editable image file items. Only applies when `editableFileItems` is `true`.                                                       |
| `descriptionRequired`      | `boolean`                                | true       | When `false`, the save button on an editable file item is enabled even when the description field is empty.                                                                    |
| `descriptionLabel`         | `FormLabelProps`                         | —          | Overrides the default label and subtext for the description input field on editable file items.                                                                                |
| `sortable`                 | `boolean`                                | false      | When `true`, file items can be reordered via drag-and-drop. The reordered list is emitted via `onSort`.                                                                        |
| `errorMessage`             | `string \| JSX.Element`                  | —          | General error message rendered below the file list. Accepts a plain string or a JSX element for rich formatting.                                                               |
| `readOnly`                 | `boolean`                                | —          | When `true`, the upload button and drop zone are hidden and file items are rendered without delete or edit controls.                                                           |
| `customLabels`             | `{ uploadButtonLabel?: string }`         | —          | Overrides default label text for elements within the component.                                                                                                                |
| `onChange`                 | `((files: File[]) => void)`              | —          | Called with the newly uploaded files. Receives only the files that fit within the remaining `maxFiles` slots.                                                                  |
| `onEdit`                   | `((fileItem: FileItemProps) => void)`    | —          | Called when the user saves an edited description on a file item.                                                                                                               |
| `onDelete`                 | `((fileItem: FileItemProps) => void)`    | —          | Called when the user clicks the delete button on a file item.                                                                                                                  |
| `onSort`                   | `((fileItems: FileItemProps[]) => void)` | —          | Called after the user reorders file items via drag-and-drop. Only fired when `sortable` is `true`.                                                                             |
| `accept`                   | `string`                                 | —          | Defines the file types that is accepted                                                                                                                                        |
| `capture`                  | `boolean \| "user" \| "environment"`     | —          | Specifies which camera to use for capture of image or video data                                                                                                               |
| `multiple`                 | `boolean`                                | —          | Specifies if user is allowed to select more than one file.                                                                                                                     |
| `disabled`                 | `boolean`                                | —          | —                                                                                                                                                                              |
| `id`                       | `string`                                 | —          | —                                                                                                                                                                              |
| `className`                | `string`                                 | —          | —                                                                                                                                                                              |
| `name`                     | `string`                                 | —          | —                                                                                                                                                                              |

## Props — `FileItemProps`

| Prop                    | Type                        | Default | Description                                                                                                                                                                 |
| ----------------------- | --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | Unique identifier used to target delete, edit, and sort operations.                                                                                                         |
| `name` \*               | `string`                    | —       | The display name of the file                                                                                                                                                |
| `type` \*               | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                                                       |
| `size` \*               | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                                                                   |
| `description`           | `string`                    | —       | The alt text or description of the file                                                                                                                                     |
| `progress`              | `number`                    | —       | Upload progress expressed as a fraction between 0 and 1. When provided, a progress indicator is rendered on the file item.                                                  |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate an upload failure. Accepts a plain string or a React node for richer error display.                                        |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry. When not provided, a PDF icon is displayed for PDF files only; other file types show no default icon. |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                                                                     |

## Props — `FileInputProps`

| Prop        | Type                                 | Default | Description                                                      |
| ----------- | ------------------------------------ | ------- | ---------------------------------------------------------------- |
| `accept`    | `string`                             | —       | Defines the file types that is accepted                          |
| `capture`   | `boolean \| "user" \| "environment"` | —       | Specifies which camera to use for capture of image or video data |
| `multiple`  | `boolean`                            | —       | Specifies if user is allowed to select more than one file.       |
| `disabled`  | `boolean`                            | —       | —                                                                |
| `id`        | `string`                             | —       | —                                                                |
| `className` | `string`                             | —       | —                                                                |
| `name`      | `string`                             | —       | —                                                                |

## Props — `FileUploadProps`

| Prop                       | Type                                     | Default    | Description                                                                                                                                                                    |
| -------------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                    | `string \| JSX.Element`                  | —          | Heading rendered at the top of the component. Accepts a plain string or a JSX element for rich formatting.                                                                     |
| `description`              | `string \| JSX.Element`                  | —          | Supporting text rendered below `title`. Accepts a plain string or a JSX element for rich formatting.                                                                           |
| `styleType`                | `FileUploadStyle`                        | "bordered" | Visual style variant for the component.                                                                                                                                        |
| `maxFiles`                 | `number`                                 | —          | Maximum number of files the component will accept. Once `fileItems.length` reaches this value, uploading is disabled until an item is removed.                                 |
| `warning`                  | `string \| JSX.Element`                  | —          | Warning message rendered inside the component. Accepts a plain string or a JSX element for rich formatting.                                                                    |
| `fileItems`                | `FileItemProps[]`                        | —          | Controlled list of file items displayed in the file list. Update this array in response to `onChange`, `onDelete`, `onEdit`, and `onSort` to reflect the current upload state. |
| `editableFileItems`        | `boolean`                                | false      | When `true`, image file items render an editable description field. Editing triggers `onEdit` with the updated `FileItemProps`.                                                |
| `fileDescriptionMaxLength` | `number`                                 | —          | Character limit for the description input on editable image file items. Only applies when `editableFileItems` is `true`.                                                       |
| `descriptionRequired`      | `boolean`                                | true       | When `false`, the save button on an editable file item is enabled even when the description field is empty.                                                                    |
| `descriptionLabel`         | `FormLabelProps`                         | —          | Overrides the default label and subtext for the description input field on editable file items.                                                                                |
| `sortable`                 | `boolean`                                | false      | When `true`, file items can be reordered via drag-and-drop. The reordered list is emitted via `onSort`.                                                                        |
| `errorMessage`             | `string \| JSX.Element`                  | —          | General error message rendered below the file list. Accepts a plain string or a JSX element for rich formatting.                                                               |
| `readOnly`                 | `boolean`                                | —          | When `true`, the upload button and drop zone are hidden and file items are rendered without delete or edit controls.                                                           |
| `customLabels`             | `{ uploadButtonLabel?: string }`         | —          | Overrides default label text for elements within the component.                                                                                                                |
| `onChange`                 | `((files: File[]) => void)`              | —          | Called with the newly uploaded files. Receives only the files that fit within the remaining `maxFiles` slots.                                                                  |
| `onEdit`                   | `((fileItem: FileItemProps) => void)`    | —          | Called when the user saves an edited description on a file item.                                                                                                               |
| `onDelete`                 | `((fileItem: FileItemProps) => void)`    | —          | Called when the user clicks the delete button on a file item.                                                                                                                  |
| `onSort`                   | `((fileItems: FileItemProps[]) => void)` | —          | Called after the user reorders file items via drag-and-drop. Only fired when `sortable` is `true`.                                                                             |
| `accept`                   | `string`                                 | —          | Defines the file types that is accepted                                                                                                                                        |
| `capture`                  | `boolean \| "user" \| "environment"`     | —          | Specifies which camera to use for capture of image or video data                                                                                                               |
| `multiple`                 | `boolean`                                | —          | Specifies if user is allowed to select more than one file.                                                                                                                     |
| `disabled`                 | `boolean`                                | —          | —                                                                                                                                                                              |
| `id`                       | `string`                                 | —          | —                                                                                                                                                                              |
| `className`                | `string`                                 | —          | —                                                                                                                                                                              |
| `name`                     | `string`                                 | —          | —                                                                                                                                                                              |

## Props — `FileItemProps`

| Prop                    | Type                        | Default | Description                                                                                                                                                                 |
| ----------------------- | --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | Unique identifier used to target delete, edit, and sort operations.                                                                                                         |
| `name` \*               | `string`                    | —       | The display name of the file                                                                                                                                                |
| `type` \*               | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                                                       |
| `size` \*               | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                                                                   |
| `description`           | `string`                    | —       | The alt text or description of the file                                                                                                                                     |
| `progress`              | `number`                    | —       | Upload progress expressed as a fraction between 0 and 1. When provided, a progress indicator is rendered on the file item.                                                  |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate an upload failure. Accepts a plain string or a React node for richer error display.                                        |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry. When not provided, a PDF icon is displayed for PDF files only; other file types show no default icon. |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                                                                     |

## Props — `FileInputProps`

| Prop        | Type                                 | Default | Description                                                      |
| ----------- | ------------------------------------ | ------- | ---------------------------------------------------------------- |
| `accept`    | `string`                             | —       | Defines the file types that is accepted                          |
| `capture`   | `boolean \| "user" \| "environment"` | —       | Specifies which camera to use for capture of image or video data |
| `multiple`  | `boolean`                            | —       | Specifies if user is allowed to select more than one file.       |
| `disabled`  | `boolean`                            | —       | —                                                                |
| `id`        | `string`                             | —       | —                                                                |
| `className` | `string`                             | —       | —                                                                |
| `name`      | `string`                             | —       | —                                                                |

## Props — `FileUploadProps`

| Prop                       | Type                                     | Default    | Description                                                                                                                                                                    |
| -------------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                    | `string \| JSX.Element`                  | —          | Heading rendered at the top of the component. Accepts a plain string or a JSX element for rich formatting.                                                                     |
| `description`              | `string \| JSX.Element`                  | —          | Supporting text rendered below `title`. Accepts a plain string or a JSX element for rich formatting.                                                                           |
| `styleType`                | `FileUploadStyle`                        | "bordered" | Visual style variant for the component.                                                                                                                                        |
| `maxFiles`                 | `number`                                 | —          | Maximum number of files the component will accept. Once `fileItems.length` reaches this value, uploading is disabled until an item is removed.                                 |
| `warning`                  | `string \| JSX.Element`                  | —          | Warning message rendered inside the component. Accepts a plain string or a JSX element for rich formatting.                                                                    |
| `fileItems`                | `FileItemProps[]`                        | —          | Controlled list of file items displayed in the file list. Update this array in response to `onChange`, `onDelete`, `onEdit`, and `onSort` to reflect the current upload state. |
| `editableFileItems`        | `boolean`                                | false      | When `true`, image file items render an editable description field. Editing triggers `onEdit` with the updated `FileItemProps`.                                                |
| `fileDescriptionMaxLength` | `number`                                 | —          | Character limit for the description input on editable image file items. Only applies when `editableFileItems` is `true`.                                                       |
| `descriptionRequired`      | `boolean`                                | true       | When `false`, the save button on an editable file item is enabled even when the description field is empty.                                                                    |
| `descriptionLabel`         | `FormLabelProps`                         | —          | Overrides the default label and subtext for the description input field on editable file items.                                                                                |
| `sortable`                 | `boolean`                                | false      | When `true`, file items can be reordered via drag-and-drop. The reordered list is emitted via `onSort`.                                                                        |
| `errorMessage`             | `string \| JSX.Element`                  | —          | General error message rendered below the file list. Accepts a plain string or a JSX element for rich formatting.                                                               |
| `readOnly`                 | `boolean`                                | —          | When `true`, the upload button and drop zone are hidden and file items are rendered without delete or edit controls.                                                           |
| `customLabels`             | `{ uploadButtonLabel?: string }`         | —          | Overrides default label text for elements within the component.                                                                                                                |
| `onChange`                 | `((files: File[]) => void)`              | —          | Called with the newly uploaded files. Receives only the files that fit within the remaining `maxFiles` slots.                                                                  |
| `onEdit`                   | `((fileItem: FileItemProps) => void)`    | —          | Called when the user saves an edited description on a file item.                                                                                                               |
| `onDelete`                 | `((fileItem: FileItemProps) => void)`    | —          | Called when the user clicks the delete button on a file item.                                                                                                                  |
| `onSort`                   | `((fileItems: FileItemProps[]) => void)` | —          | Called after the user reorders file items via drag-and-drop. Only fired when `sortable` is `true`.                                                                             |
| `accept`                   | `string`                                 | —          | Defines the file types that is accepted                                                                                                                                        |
| `capture`                  | `boolean \| "user" \| "environment"`     | —          | Specifies which camera to use for capture of image or video data                                                                                                               |
| `multiple`                 | `boolean`                                | —          | Specifies if user is allowed to select more than one file.                                                                                                                     |
| `disabled`                 | `boolean`                                | —          | —                                                                                                                                                                              |
| `id`                       | `string`                                 | —          | —                                                                                                                                                                              |
| `className`                | `string`                                 | —          | —                                                                                                                                                                              |
| `name`                     | `string`                                 | —          | —                                                                                                                                                                              |

## Props — `FileItemProps`

| Prop                    | Type                        | Default | Description                                                                                                                                                                 |
| ----------------------- | --------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | Unique identifier used to target delete, edit, and sort operations.                                                                                                         |
| `name` \*               | `string`                    | —       | The display name of the file                                                                                                                                                |
| `type` \*               | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                                                       |
| `size` \*               | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                                                                   |
| `description`           | `string`                    | —       | The alt text or description of the file                                                                                                                                     |
| `progress`              | `number`                    | —       | Upload progress expressed as a fraction between 0 and 1. When provided, a progress indicator is rendered on the file item.                                                  |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate an upload failure. Accepts a plain string or a React node for richer error display.                                        |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry. When not provided, a PDF icon is displayed for PDF files only; other file types show no default icon. |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                                                                     |

## Props — `FileInputProps`

| Prop        | Type                                 | Default | Description                                                      |
| ----------- | ------------------------------------ | ------- | ---------------------------------------------------------------- |
| `accept`    | `string`                             | —       | Defines the file types that is accepted                          |
| `capture`   | `boolean \| "user" \| "environment"` | —       | Specifies which camera to use for capture of image or video data |
| `multiple`  | `boolean`                            | —       | Specifies if user is allowed to select more than one file.       |
| `disabled`  | `boolean`                            | —       | —                                                                |
| `id`        | `string`                             | —       | —                                                                |
| `className` | `string`                             | —       | —                                                                |
| `name`      | `string`                             | —       | —                                                                |

## Props — `FileUploadProps`

| Prop                       | Type                                     | Default    | Description                                                                                                                                                                    |
| -------------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`                    | `string \| JSX.Element`                  | —          | Heading rendered at the top of the component. Accepts a plain string or a JSX element for rich formatting.                                                                     |
| `description`              | `string \| JSX.Element`                  | —          | Supporting text rendered below `title`. Accepts a plain string or a JSX element for rich formatting.                                                                           |
| `styleType`                | `FileUploadStyle`                        | "bordered" | Visual style variant for the component.                                                                                                                                        |
| `maxFiles`                 | `number`                                 | —          | Maximum number of files the component will accept. Once `fileItems.length` reaches this value, uploading is disabled until an item is removed.                                 |
| `warning`                  | `string \| JSX.Element`                  | —          | Warning message rendered inside the component. Accepts a plain string or a JSX element for rich formatting.                                                                    |
| `fileItems`                | `FileItemProps[]`                        | —          | Controlled list of file items displayed in the file list. Update this array in response to `onChange`, `onDelete`, `onEdit`, and `onSort` to reflect the current upload state. |
| `editableFileItems`        | `boolean`                                | false      | When `true`, image file items render an editable description field. Editing triggers `onEdit` with the updated `FileItemProps`.                                                |
| `fileDescriptionMaxLength` | `number`                                 | —          | Character limit for the description input on editable image file items. Only applies when `editableFileItems` is `true`.                                                       |
| `descriptionRequired`      | `boolean`                                | true       | When `false`, the save button on an editable file item is enabled even when the description field is empty.                                                                    |
| `descriptionLabel`         | `FormLabelProps`                         | —          | Overrides the default label and subtext for the description input field on editable file items.                                                                                |
| `sortable`                 | `boolean`                                | false      | When `true`, file items can be reordered via drag-and-drop. The reordered list is emitted via `onSort`.                                                                        |
| `errorMessage`             | `string \| JSX.Element`                  | —          | General error message rendered below the file list. Accepts a plain string or a JSX element for rich formatting.                                                               |
| `readOnly`                 | `boolean`                                | —          | When `true`, the upload button and drop zone are hidden and file items are rendered without delete or edit controls.                                                           |
| `customLabels`             | `{ uploadButtonLabel?: string }`         | —          | Overrides default label text for elements within the component.                                                                                                                |
| `onChange`                 | `((files: File[]) => void)`              | —          | Called with the newly uploaded files. Receives only the files that fit within the remaining `maxFiles` slots.                                                                  |
| `onEdit`                   | `((fileItem: FileItemProps) => void)`    | —          | Called when the user saves an edited description on a file item.                                                                                                               |
| `onDelete`                 | `((fileItem: FileItemProps) => void)`    | —          | Called when the user clicks the delete button on a file item.                                                                                                                  |
| `onSort`                   | `((fileItems: FileItemProps[]) => void)` | —          | Called after the user reorders file items via drag-and-drop. Only fired when `sortable` is `true`.                                                                             |
| `accept`                   | `string`                                 | —          | Defines the file types that is accepted                                                                                                                                        |
| `capture`                  | `boolean \| "user" \| "environment"`     | —          | Specifies which camera to use for capture of image or video data                                                                                                               |
| `multiple`                 | `boolean`                                | —          | Specifies if user is allowed to select more than one file.                                                                                                                     |
| `disabled`                 | `boolean`                                | —          | —                                                                                                                                                                              |
| `id`                       | `string`                                 | —          | —                                                                                                                                                                              |
| `className`                | `string`                                 | —          | —                                                                                                                                                                              |
| `name`                     | `string`                                 | —          | —                                                                                                                                                                              |

## Rules

-   Always manage `fileItems` state in the parent — the component does not store files internally.
-   Always handle `onChange` to convert incoming `File[]` into `FileItemProps[]` and add them to state.
-   Always handle `onDelete` to remove the corresponding item from state.
-   Use `maxFiles` to enforce the maximum number of attachments allowed by the backend.
-   Use `progress` on individual `FileItemProps` to show per-file upload progress.
-   Use `errorMessage` on individual `FileItemProps` to surface per-file upload errors.
-   Use the component-level `errorMessage` for overall validation errors (e.g. "At least one file is required").
-   Use `accept` (inherited from `<input type="file">`) to restrict file types to what the backend accepts.

## Anti-patterns

-   Do not use without wiring `onChange` and `onDelete` — the list will not update.
-   Do not store files in component state inside the same component that renders `FileUpload` — hoist state to the form level.
-   Do not skip `id`, `name`, `type`, and `size` in `FileItemProps` — they are required fields.
-   Do not use `editableFileItems` for non-image files — description editing only applies to images.
