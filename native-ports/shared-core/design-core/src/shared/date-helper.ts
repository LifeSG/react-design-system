import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export function toDayjs(date?: string): Dayjs {
    return date ? dayjs(date) : dayjs();
}
