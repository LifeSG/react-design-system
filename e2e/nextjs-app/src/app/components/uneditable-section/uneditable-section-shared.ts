import { UneditableSectionItemProps } from "@lifesg/react-design-system/uneditable-section";

export const items: UneditableSectionItemProps[] = [
    {
        displayWidth: "half",
        label: "Name (as in NRIC or passport)",
        value: "Tom Tan Li Ho",
    },
    {
        displayWidth: "half",
        label: "NRIC or FIN",
        maskRange: [1, 4],
        maskState: "masked",
        value: "S1234534J",
    },
    {
        displayWidth: "half",
        label: "Date of birth",
        value: "6 November 1992",
    },
    {
        displayWidth: "half",
        label: "Residential Address",
        value: "Block 287, #05-11, Tampines Street 22, Singapore 534788",
    },
    {
        label: "Ethnicity",
        value: "Chinese",
    },
];
