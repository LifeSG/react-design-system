# FileDownload

Import: `import { FileDownload } from "@lifesg/react-design-system/file-download"`

## Sub-components

-   `FileItemProps` — shape of each item in `fileItems`

## Props

| Prop            | Type                                                     | Default      | Description                               |
| --------------- | -------------------------------------------------------- | ------------ | ----------------------------------------- |
| `fileItems` \*  | `FileItemProps[]`                                        | —            | The files to be rendered                  |
| `onDownload` \* | `(file: FileItemDownloadProps) => void \| Promise<void>` | —            | Called when a file item is clicked        |
| `title`         | `string \| JSX.Element`                                  | —            | A title to be displayed for the component |
| `description`   | `string \| JSX.Element`                                  | —            | The description to be displayed           |
| `styleType`     | `"bordered" \| "no-border"`                              | `"bordered"` | The style type for the component          |
| `id`            | `string`                                                 | —            | The unique id of the component            |
| `className`     | `string`                                                 | —            | The class selector of the component       |
| `data-testid`   | `string`                                                 | —            | The test identifier for the component     |

`*` = required

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

## Rules

-   `fileItems` and `onDownload` are required.
-   On `FileItemProps`: `id`, `name`, `mimeType`, and `filePath` are required.
