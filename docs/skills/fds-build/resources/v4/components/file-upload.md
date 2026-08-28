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

## Props

| Prop                       | Type                                   | Default      | Description                                                             |
| -------------------------- | -------------------------------------- | ------------ | ----------------------------------------------------------------------- |
| `fileItems`                | `FileItemProps[]`                      | —            | Files currently displayed in the list                                   |
| `title`                    | `string \| JSX.Element`                | —            | Title displayed above the upload area                                   |
| `description`              | `string \| JSX.Element`                | —            | Supporting text inside the upload area                                  |
| `styleType`                | `"bordered" \| "no-border"`            | `"bordered"` | Visual style of the component                                           |
| `maxFiles`                 | `number`                               | —            | Maximum number of files allowed                                         |
| `warning`                  | `string \| JSX.Element`                | —            | Warning message shown below the upload area                             |
| `errorMessage`             | `string \| JSX.Element`                | —            | General error message for the component                                 |
| `editableFileItems`        | `boolean`                              | —            | Allows users to edit descriptions on image file items                   |
| `fileDescriptionMaxLength` | `number`                               | —            | Maximum length of the image file description                            |
| `descriptionRequired`      | `boolean`                              | `true`       | When `false`, the save button is enabled even with an empty description |
| `descriptionLabel`         | `FormLabelProps`                       | —            | Overrides the default label and subtext for the description field       |
| `sortable`                 | `boolean`                              | —            | Allows users to reorder file items via drag                             |
| `readOnly`                 | `boolean`                              | —            | Shows uploaded files without the upload area                            |
| `disabled`                 | `boolean`                              | —            | Disables the component                                                  |
| `id`                       | `string`                               | —            | Unique identifier of the component                                      |
| `name`                     | `string`                               | —            | Name attribute of the component                                         |
| `className`                | `string`                               | —            | Class selector of the component                                         |
| `onChange`                 | `(files: File[]) => void`              | —            | Called when files are added via drag-drop or click                      |
| `onEdit`                   | `(fileItem: FileItemProps) => void`    | —            | Called when a file item description is updated                          |
| `onDelete`                 | `(fileItem: FileItemProps) => void`    | —            | Called when a file item's delete button is clicked                      |
| `onSort`                   | `(fileItems: FileItemProps[]) => void` | —            | Called when files are reordered via drag                                |

Also inherits additional props from the HTML `<input type="file">` element (e.g. `accept`).

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
