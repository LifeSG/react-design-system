import dayjs from "dayjs";
import { generateCalendar } from "../../src/util/calendar-helper";

describe("GeneratCalendar", () => {
    it("should receive dayjs format value ", () => {
        const dayjsObject = dayjs();

        expect(generateCalendar(dayjsObject)).toBeTruthy();
    });
});
