# FileDownload

Import: `import { FileDownload } from "@lifesg/react-design-system/file-download"`

## Sub-components

-   `FileItemProps` — shape of each item in `fileItems`

## FileItemProps

| Prop                    | Type                        | Default | Description                                   |
| ----------------------- | --------------------------- | ------- | --------------------------------------------- |
| `id` \*                 | `string`                    | —       | The unique identifier of the file             |
| `name` \*               | `string`                    | —       | The name of the file                          |
| `mimeType` \*           | `string`                    | —       | The MIME type of the file                     |
| `filePath` \*           | `string`                    | —       | The remote path of the file                   |
| `size`                  | `number`                    | —       | The size of the file in bytes                 |
| `errorMessage`          | `string \| React.ReactNode` | —       | Custom error message when file download fails |
| `thumbnailImageDataUrl` | `string`                    | —       | The thumbnail of the file                     |
| `truncateText`          | `boolean`                   | `true`  | Indicates if text should be truncated         |
| `ready`                 | `boolean`                   | `true`  | Indicates if the file is ready for download   |

## Props — `FileItemDownloadProps`

| Prop                    | Type                        | Default | Description                                                                                                                           |
| ----------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | —                                                                                                                                     |
| `name` \*               | `string`                    | —       | The display name of the file.                                                                                                         |
| `mimeType` \*           | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                 |
| `size`                  | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                             |
| `filePath` \*           | `string`                    | —       | The remote path or URL used to fetch the file for download.                                                                           |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate a download failure. Accepts a plain string or a React node for richer error display. |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry.                                                                 |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                               |
| `ready`                 | `boolean`                   | true    | Indicates the file is available and ready to be downloaded.                                                                           |

## Props — `FileDownloadProps`

| Prop            | Type                                                     | Default    | Description                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | `string \| JSX.Element`                                  | —          | Optional heading rendered above the file list. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                |
| `description`   | `string \| JSX.Element`                                  | —          | Optional text rendered beneath the title. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                     |
| `fileItems` \*  | `FileItemDownloadProps[]`                                | —          | The list of file items to display. When empty, no file cards are rendered.                                                                                                                                                                                                              |
| `styleType`     | `FileDownloadStyle`                                      | "bordered" | Controls whether the component is wrapped in a dashed border.                                                                                                                                                                                                                           |
| `className`     | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `id`            | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `onDownload` \* | `(file: FileItemDownloadProps) => void \| Promise<void>` | —          | Called when the user triggers a download for an individual file item. May return a `Promise` to handle async download logic; the component awaits resolution. If the callback throws or the promise rejects, the item is marked as failed and the error UI is shown for that file card. |

## Props — `FileItemDownloadProps`

| Prop                    | Type                        | Default | Description                                                                                                                           |
| ----------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | —                                                                                                                                     |
| `name` \*               | `string`                    | —       | The display name of the file.                                                                                                         |
| `mimeType` \*           | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                 |
| `size`                  | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                             |
| `filePath` \*           | `string`                    | —       | The remote path or URL used to fetch the file for download.                                                                           |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate a download failure. Accepts a plain string or a React node for richer error display. |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry.                                                                 |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                               |
| `ready`                 | `boolean`                   | true    | Indicates the file is available and ready to be downloaded.                                                                           |

## Props — `FileDownloadProps`

| Prop            | Type                                                     | Default    | Description                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | `string \| JSX.Element`                                  | —          | Optional heading rendered above the file list. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                |
| `description`   | `string \| JSX.Element`                                  | —          | Optional text rendered beneath the title. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                     |
| `fileItems` \*  | `FileItemDownloadProps[]`                                | —          | The list of file items to display. When empty, no file cards are rendered.                                                                                                                                                                                                              |
| `styleType`     | `FileDownloadStyle`                                      | "bordered" | Controls whether the component is wrapped in a dashed border.                                                                                                                                                                                                                           |
| `className`     | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `id`            | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `onDownload` \* | `(file: FileItemDownloadProps) => void \| Promise<void>` | —          | Called when the user triggers a download for an individual file item. May return a `Promise` to handle async download logic; the component awaits resolution. If the callback throws or the promise rejects, the item is marked as failed and the error UI is shown for that file card. |

## Props — `FileItemDownloadProps`

| Prop                    | Type                        | Default | Description                                                                                                                           |
| ----------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | —                                                                                                                                     |
| `name` \*               | `string`                    | —       | The display name of the file.                                                                                                         |
| `mimeType` \*           | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                 |
| `size`                  | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                             |
| `filePath` \*           | `string`                    | —       | The remote path or URL used to fetch the file for download.                                                                           |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate a download failure. Accepts a plain string or a React node for richer error display. |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry.                                                                 |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                               |
| `ready`                 | `boolean`                   | true    | Indicates the file is available and ready to be downloaded.                                                                           |

## Props — `FileDownloadProps`

| Prop            | Type                                                     | Default    | Description                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | `string \| JSX.Element`                                  | —          | Optional heading rendered above the file list. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                |
| `description`   | `string \| JSX.Element`                                  | —          | Optional text rendered beneath the title. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                     |
| `fileItems` \*  | `FileItemDownloadProps[]`                                | —          | The list of file items to display. When empty, no file cards are rendered.                                                                                                                                                                                                              |
| `styleType`     | `FileDownloadStyle`                                      | "bordered" | Controls whether the component is wrapped in a dashed border.                                                                                                                                                                                                                           |
| `className`     | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `id`            | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `onDownload` \* | `(file: FileItemDownloadProps) => void \| Promise<void>` | —          | Called when the user triggers a download for an individual file item. May return a `Promise` to handle async download logic; the component awaits resolution. If the callback throws or the promise rejects, the item is marked as failed and the error UI is shown for that file card. |

## Props — `FileItemDownloadProps`

| Prop                    | Type                        | Default | Description                                                                                                                           |
| ----------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | —                                                                                                                                     |
| `name` \*               | `string`                    | —       | The display name of the file.                                                                                                         |
| `mimeType` \*           | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                 |
| `size`                  | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                             |
| `filePath` \*           | `string`                    | —       | The remote path or URL used to fetch the file for download.                                                                           |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate a download failure. Accepts a plain string or a React node for richer error display. |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry.                                                                 |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                               |
| `ready`                 | `boolean`                   | true    | Indicates the file is available and ready to be downloaded.                                                                           |

## Props — `FileDownloadProps`

| Prop            | Type                                                     | Default    | Description                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | `string \| JSX.Element`                                  | —          | Optional heading rendered above the file list. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                |
| `description`   | `string \| JSX.Element`                                  | —          | Optional text rendered beneath the title. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                     |
| `fileItems` \*  | `FileItemDownloadProps[]`                                | —          | The list of file items to display. When empty, no file cards are rendered.                                                                                                                                                                                                              |
| `styleType`     | `FileDownloadStyle`                                      | "bordered" | Controls whether the component is wrapped in a dashed border.                                                                                                                                                                                                                           |
| `className`     | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `id`            | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `onDownload` \* | `(file: FileItemDownloadProps) => void \| Promise<void>` | —          | Called when the user triggers a download for an individual file item. May return a `Promise` to handle async download logic; the component awaits resolution. If the callback throws or the promise rejects, the item is marked as failed and the error UI is shown for that file card. |

## Props — `FileItemDownloadProps`

| Prop                    | Type                        | Default | Description                                                                                                                           |
| ----------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | —                                                                                                                                     |
| `name` \*               | `string`                    | —       | The display name of the file.                                                                                                         |
| `mimeType` \*           | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                 |
| `size`                  | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                             |
| `filePath` \*           | `string`                    | —       | The remote path or URL used to fetch the file for download.                                                                           |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate a download failure. Accepts a plain string or a React node for richer error display. |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry.                                                                 |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                               |
| `ready`                 | `boolean`                   | true    | Indicates the file is available and ready to be downloaded.                                                                           |

## Props — `FileDownloadProps`

| Prop            | Type                                                     | Default    | Description                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | `string \| JSX.Element`                                  | —          | Optional heading rendered above the file list. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                |
| `description`   | `string \| JSX.Element`                                  | —          | Optional text rendered beneath the title. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                     |
| `fileItems` \*  | `FileItemDownloadProps[]`                                | —          | The list of file items to display. When empty, no file cards are rendered.                                                                                                                                                                                                              |
| `styleType`     | `FileDownloadStyle`                                      | "bordered" | Controls whether the component is wrapped in a dashed border.                                                                                                                                                                                                                           |
| `className`     | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `id`            | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `onDownload` \* | `(file: FileItemDownloadProps) => void \| Promise<void>` | —          | Called when the user triggers a download for an individual file item. May return a `Promise` to handle async download logic; the component awaits resolution. If the callback throws or the promise rejects, the item is marked as failed and the error UI is shown for that file card. |

## Props — `FileItemDownloadProps`

| Prop                    | Type                        | Default | Description                                                                                                                           |
| ----------------------- | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id` \*                 | `string`                    | —       | —                                                                                                                                     |
| `name` \*               | `string`                    | —       | The display name of the file.                                                                                                         |
| `mimeType` \*           | `string`                    | —       | The MIME type of the file (e.g. `"application/pdf"`).                                                                                 |
| `size`                  | `number`                    | —       | The size of the file in bytes. Displayed as formatted text when provided.                                                             |
| `filePath` \*           | `string`                    | —       | The remote path or URL used to fetch the file for download.                                                                           |
| `errorMessage`          | `string \| React.ReactNode` | —       | Error message shown on the file item to indicate a download failure. Accepts a plain string or a React node for richer error display. |
| `thumbnailImageDataUrl` | `string`                    | —       | URL or data URL for a thumbnail image shown alongside the file entry.                                                                 |
| `truncateText`          | `boolean`                   | true    | Truncates long file names with an ellipsis when `true`.                                                                               |
| `ready`                 | `boolean`                   | true    | Indicates the file is available and ready to be downloaded.                                                                           |

## Props — `FileDownloadProps`

| Prop            | Type                                                     | Default    | Description                                                                                                                                                                                                                                                                             |
| --------------- | -------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | `string \| JSX.Element`                                  | —          | Optional heading rendered above the file list. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                |
| `description`   | `string \| JSX.Element`                                  | —          | Optional text rendered beneath the title. Accepts a plain string or a JSX element for rich content.                                                                                                                                                                                     |
| `fileItems` \*  | `FileItemDownloadProps[]`                                | —          | The list of file items to display. When empty, no file cards are rendered.                                                                                                                                                                                                              |
| `styleType`     | `FileDownloadStyle`                                      | "bordered" | Controls whether the component is wrapped in a dashed border.                                                                                                                                                                                                                           |
| `className`     | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `id`            | `string`                                                 | —          | —                                                                                                                                                                                                                                                                                       |
| `onDownload` \* | `(file: FileItemDownloadProps) => void \| Promise<void>` | —          | Called when the user triggers a download for an individual file item. May return a `Promise` to handle async download logic; the component awaits resolution. If the callback throws or the promise rejects, the item is marked as failed and the error UI is shown for that file card. |

## Rules

-   `fileItems` and `onDownload` are required.
-   On `FileItemProps`: `id`, `name`, `mimeType`, and `filePath` are required.
