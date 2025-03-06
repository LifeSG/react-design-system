const createSubItems = (length, depth, prefix = '') =>
    Array.from({ length }, (_, index) => {
        const currentIndex = index + 1;
        const label = prefix ? `${prefix}.${currentIndex}` : `${currentIndex}`;
        const value = { id: label, name: label };
        const key = label;

        return depth > 1
            ? { label, value, key, subItems: createSubItems(length, depth - 1, label) }
            : { label, value, key };
    });

export const bigOptions = createSubItems(46, 3);

export const options = [
    {
        label: "1",
        value: { id: 1, name: "1" },
        key: "1",
        subItems: [
            {
                label: "1.1",
                value: { id: 11, name: "1.1" },
                key: "11",
            },
            {
                label: "1.2",
                value: { id: 12, name: "1.2" },
                key: "12",
                subItems: [
                    {
                        label: "1.2.1",
                        value: { id: 121, name: "1.2.1" },
                        key: "121",
                    },
                    {
                        label: "1.2.2",
                        value: { id: 122, name: "1.2.2" },
                        key: "122",
                    },
                    {
                        label: "1.2.3",
                        value: { id: 123, name: "1.2.3" },
                        key: "123",
                    },
                ],
            },
            {
                label: "1.3",
                value: { id: 13, name: "1.3" },
                key: "13",
                subItems: [
                    {
                        label: "1.3.1",
                        value: { id: 131, name: "1.3.1" },
                        key: "131",
                    },
                ],
            },
        ],
    },
    {
        label: "2",
        value: { id: 2, name: "2" },
        key: "2",
        subItems: [
            {
                label: "2.1",
                value: { id: 21, name: "2.1" },
                key: "21",
            },
            {
                label: "2.2",
                value: { id: 22, name: "2.2" },
                key: "22",
            },
        ],
    },
    {
        label: "3",
        value: { id: 3, name: "3" },
        key: "3",
    },
];

export const twoTierOptions = [
    {
        label: "Level 7",
        value: { id: "1001", name: "L7" },
        key: "1001",
        subItems: [
            {
                label: "Teh Peng",
                value: { id: "2001", name: "Teh Peng" },
                key: "2001",
            },
            {
                label: "Milo",
                value: { id: "2002", name: "Milo" },
                key: "2002",
            },
            {
                label: "Horlick",
                value: { id: "2003", name: "Horlick" },
                key: "2003",
            },
        ],
    },
    {
        label: "Level 8",
        value: { id: "1002", name: "L8" },
        key: "1002",
        subItems: [
            {
                label: "FGD",
                value: { id: "2100", name: "FGD" },
                key: "2100",
            },
            {
                label: "Bumblebee",
                value: { id: "2102", name: "Bumblebee" },
                key: "2102",
            },
            {
                label: "Drone",
                value: { id: "2103", name: "Drone" },
                key: "2103",
            },
        ],
    },
    {
        label: "Level 9",
        value: { id: "1003", name: "L9" },
        key: "1003",
        subItems: [
            {
                label: "Ang Ku Kueh",
                value: { id: "2200", name: "Ang Ku Kueh" },
                key: "2200",
            },
            {
                label: "Soon Kueh",
                value: { id: "2202", name: "Soon Kueh" },
                key: "2202",
            },
            {
                label: "Huat Kueh",
                value: { id: "2203", name: "Huat Kueh" },
                key: "2203",
            },
        ],
    },
];

const LONG_TEXT =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin dolor ut est rutrum vulputate.";

export const longLabelOptions = [
    {
        label: LONG_TEXT,
        value: 1,
        key: "1",
    },
    {
        label: LONG_TEXT,
        value: 2,
        key: "2",
        subItems: [
            {
                label: LONG_TEXT,
                value: 1,
                key: "1",
                subItems: [],
            },
            {
                label: LONG_TEXT,
                value: 2,
                key: "2",
                subItems: [
                    {
                        label: LONG_TEXT,
                        value: 1,
                        key: "1",
                    },
                ],
            },
        ],
    },
];

export const searchOptions = [
    {
        label: "Fruits",
        value: "1",
        key: "1",
        subItems: [
            {
                label: "Avocado",
                value: "1.1",
                key: "10",
            },
            {
                label: "Berries",
                value: "1.2",
                key: "20",
                subItems: [
                    {
                        label: "Banana",
                        value: "1.2.1",
                        key: "100",
                    },
                    {
                        label: "Blueberry",
                        value: "1.2.2",
                        key: "200",
                    },
                ],
            },
            {
                label: "Not berries",
                value: "1.3",
                key: "30",
                subItems: [
                    {
                        label: "Strawberry",
                        value: "1.3.1",
                        key: "100",
                    },
                    {
                        label: "Raspberry",
                        value: "1.3.2",
                        key: "200",
                    },
                ],
            },
        ],
    },
    {
        label: "Dairy",
        value: "2",
        key: "2",
        subItems: [
            {
                label: "Milk",
                value: "2.1",
                key: "10",
                subItems: [
                    {
                        label: "Banana milk",
                        value: "2.1.1",
                        key: "100",
                    },

                    {
                        label: "Skimmed milk",
                        value: "2.1.2",
                        key: "200",
                    },
                ],
            },
            {
                label: "Cheese",
                value: "2.2",
                key: "20",
                subItems: [
                    {
                        label: "Cheddar",
                        value: "2.2.1",
                        key: "100",
                    },

                    {
                        label: "Mozzarella",
                        value: "2.2.2",
                        key: "200",
                    },
                ],
            },
        ],
    },
    {
        label: "Toiletries",
        value: "3",
        key: "3",
        subItems: [
            {
                label: "Toilet paper",
                value: "3.1",
                key: "10",
            },
            {
                label: "Shampoo",
                value: "3.2",
                key: "20",
            },
        ],
    },
];
