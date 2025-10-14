import { UneditableSectionItemProps } from "src/uneditable-section";

export const SAMPLE_ITEMS: UneditableSectionItemProps[] = [
    {
        label: "Name (as in NRIC or passport)",
        value: "Tom Tan Li Ho",
        displayWidth: "half",
    },
    {
        label: "NRIC or FIN",
        value: "S1234534J",
        displayWidth: "half",
        maskRange: [1, 4],
        maskState: "masked",
    },
    {
        label: "Date of birth",
        value: "6 November 1992",
        displayWidth: "half",
    },
    {
        label: "Residential Address",
        value: "Block 287, #05-11, Tampines street 22, Singapore 534788",
        displayWidth: "half",
    },
    {
        label: "Ethnicity",
        value: "Chinese",
    },
];
