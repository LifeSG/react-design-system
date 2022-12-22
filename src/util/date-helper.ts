export namespace DateHelper {
    export const clampDay = (
        day: string,
        month: string,
        year: string
    ): string => {
        const dayNumber = parseInt(day);
        const monthNumber = parseInt(month);
        const yearNumber = parseInt(year);

        if (dayNumber == 0) {
            return "1";
        }

        switch (monthNumber) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                if (dayNumber > 31) {
                    return "31";
                }
                break;
            }
            case 4:
            case 6:
            case 9:
            case 11:
                if (dayNumber > 30) {
                    return "30";
                }
                break;
            case 2:
                if (isLeapYear(yearNumber)) {
                    if (dayNumber > 29) {
                        return "29";
                    }
                } else {
                    if (dayNumber > 28) {
                        return "28";
                    }
                }
                break;
            default:
                break;
        }

        return day;
    };
    export const clampMonth = (month: string): string => {
        const monthNumber = parseInt(month);

        if (monthNumber == 0) {
            return "1";
        }

        if (monthNumber > 12) {
            return "12";
        }
        return month;
    };
    export const isLeapYear = (year: number): boolean => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
}
