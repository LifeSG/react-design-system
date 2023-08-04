export const options = [
    {
        label: "Category 1",
        value: { id: 101, name: "category 1" },
        key: "999",
        subItems: [
            {
                label: "Sub Category A",
                value: {
                    id: 102,
                    name: "Sub category a",
                },
                key: "820",
                subItems: [
                    {
                        label: "Option 1",
                        value: {
                            id: 10001,
                            name: "Option-1",
                        },
                        key: "100",
                    },
                    {
                        label: "Option 2",
                        value: {
                            id: 10002,
                            name: "Option-2",
                        },
                        key: "101",
                    },
                    {
                        label: "Option 3",
                        value: {
                            id: 10003,
                            name: "Option-3",
                        },
                        key: "102",
                    },
                ],
            },
            {
                label: "Sub Category B",
                value: { id: 700, name: "sub category b" },
                key: "821",
                subItems: [
                    {
                        label: "Option ",
                        value: {
                            id: 23,
                            name: "Sub option 2",
                        },
                        key: "103",
                    },
                ],
            },
            {
                label: "Sub category C",
                value: {
                    id: 512,
                    name: "Sub category 3",
                },
                key: "822",
                subItems: [
                    {
                        label: "Honey",
                        value: {
                            id: 502,
                            name: "honey",
                        },
                        key: "104",
                    },
                    {
                        label: "Nuts",
                        value: {
                            id: 221,
                            name: "nuts",
                        },
                        key: "105",
                    },
                    {
                        label: "Butter",
                        value: {
                            id: 221,
                            name: "butter",
                        },
                        key: "105",
                    },
                ],
            },
            {
                label: "Truncated the long category label in nested select component, it will truncated into two line content only.",
                value: {
                    id: 12,
                    name: "Sub category a",
                },
                key: "510",
                subItems: [
                    {
                        label: "i'm truncated content if the content more than 2 line. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, deserunt!",
                        value: {
                            id: 102,
                            name: "Truncated the long content label in nested select component, it will truncated into two line content only.",
                        },
                        key: "23",
                    },
                ],
            },
        ],
    },
    {
        label: "Hive",
        value: { id: 487, name: "hive" },
        key: "32",
        subItems: [
            {
                label: "Level 8",
                value: { id: 502, name: "Leavel 8" },
                key: "100",
            },
            {
                label: "Level 9 ",
                value: { id: 501, name: "level 9" },
                key: "101",
                subItems: [
                    {
                        label: "Tutu kueh",
                        value: {
                            id: 402,
                            name: "tutu kueh",
                        },
                        key: "900",
                    },
                    {
                        label: "Lychee",
                        value: {
                            id: 123,
                            name: "lychee",
                        },
                        key: "901",
                    },
                    {
                        label: "Mao Shan Wang",
                        value: {
                            id: 123,
                            name: "mao shan wang",
                        },
                        key: "902",
                    },
                ],
            },
            {
                label: "Base",
                value: { id: 401, name: "Earth" },
                key: "102",
                subItems: [
                    {
                        label: "Uranus",
                        value: {
                            id: 402,
                            name: "Uranus",
                        },
                        key: "903",
                    },
                    {
                        label: "Neptune",
                        value: {
                            id: 123,
                            name: "Neptune",
                        },
                        key: "904",
                    },
                ],
            },
        ],
    },
];
