import type { API, FileInfo } from "jscodeshift";
import { Theme } from "../common";
interface Options {
    mapping: Theme;
}
export default function transformer(file: FileInfo, api: API, options: Options): string;
export {};
