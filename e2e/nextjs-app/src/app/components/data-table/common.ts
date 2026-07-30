export const headers = [
    {
        fieldKey: "title",
        label: "Title",
        keyColumn: true,
    },
    {
        fieldKey: "status",
        label: "Status",
    },
    {
        fieldKey: "time",
        label: "Time",
    },
];

export const buildRows = (length: number) =>
    Array.from({ length }, (_, index) => {
        const number = index + 1;

        return {
            id: number.toString(),
            title: `Title ${number}`,
            status: number % 2 === 0 ? "Completed" : "Pending",
            time: `07/Aug/2023 ${(number % 12) + 1}.30pm`,
        };
    });
