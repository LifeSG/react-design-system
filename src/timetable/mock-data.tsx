import { Person2Icon } from "@lifesg/react-icons";
import { TimeTableProps } from "./types";

export const mockResourceListingResultsData = {
    page: 1,
    rowsPerPage: 8,
    totalPages: 2,
    totalRows: 30,
    resources: [
        {
            _provider: "rmbme",
            id: "Dy3E3RvQY0",
            title: "2Hr-interval",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/Dy3E3RvQY0/3be74a40-1932-4a44-b571-59259d3b256c/c988ab16-3dd2-4f17-9f88-c70958f2a338/9fecf77f-e454-4c86-815f-08d9eb2ec8a9_ActiveSG1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=2035d9424ac6a7db9a32c53bb056951917339626e209eb442176fb77c3534103&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "8",
            additionalDescription: [
                {
                    key: "Built-in amenities",
                    title: "Built-in amenities",
                    items: [
                        {
                            label: "DVD Player",
                        },
                        {
                            label: "LAN Point",
                        },
                    ],
                },
                {
                    key: "Available layouts",
                    title: "Available layouts",
                    description:
                        "Additional time may be added when checking for availability due to setup and teardown of layout.",
                    items: [
                        {
                            label: "Test createdAt (10 pax)",
                        },
                    ],
                },
                {
                    key: "View layout details",
                    title: "View layout details",
                    items: [
                        {
                            label: "Test createdAt (10 pax)",
                            description: [
                                {
                                    label: "Setup time",
                                    value: "15 minutes",
                                },
                                {
                                    label: "Teardown time",
                                    value: "15 minutes",
                                },
                            ],
                            imageUrls: [
                                "https://dev.rbs.ccubesg.io/rbs/api/v1/layout/mOkQkkAQYZ/layout-url?path=resource-layouts%2FmOkQkkAQYZ%2F3be74a40-1932-4a44-b571-59259d3b256c%2F2222f4a5-cf01-4f0e-990c-1df31c3f057e%2Foffice%20photo.jpg",
                            ],
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00",
                            endTime: "08:15",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                        {
                            startTime: "08:15",
                            endTime: "08:30",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                        {
                            startTime: "08:30",
                            endTime: "08:45",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                        {
                            startTime: "08:45",
                            endTime: "09:00",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                        {
                            startTime: "09:30",
                            endTime: "10:30",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                        {
                            startTime: "10:45",
                            endTime: "11:00",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                        {
                            startTime: "11:00",
                            endTime: "11:30",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                        {
                            startTime: "16:00",
                            endTime: "16:30",
                            status: "OCCUPIED",
                            label: "booking desc",
                        },
                    ],
                    startTime: "08:00",
                    endTime: "20:00",
                    interval: 120,
                },
            ],
            itemTemplate: "rooms-interval",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/Dy3E3RvQY0?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=Dy3E3RvQY0&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/Dy3E3RvQY0?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=Dy3E3RvQY0&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "ZlJQyXWP6z",
            title: "4 Hr interval",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/ZlJQyXWP6z/3be74a40-1932-4a44-b571-59259d3b256c/a2b46cf3-c488-4f63-a3d2-cbdf2300af76/9fecf77f-e454-4c86-815f-08d9eb2ec8a9_ActiveSG1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=6ab9c75269a4b5759ee55a3b9d05fa27b76f27528d87c2f9354c1f067234541e&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "12",
            availableAfterDays: "",
            capacity: "16",
            additionalDescription: [],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "16:00:00",
                            status: "OCCUPIED",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "20:00:00",
                    interval: 240,
                },
            ],
            itemTemplate: "rooms-interval",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/ZlJQyXWP6z?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=ZlJQyXWP6z&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/ZlJQyXWP6z?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=ZlJQyXWP6z&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "9znPmRxQBv",
            title: "acs",
            organisationId: "0B8E79PbpK",
            subtitle: "City",
            resourceSubtype: "[E2E]Room Type 1",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/9znPmRxQBv/3be74a40-1932-4a44-b571-59259d3b256c/4b9a9679-2004-44c0-bad2-9bc36aec0519/Screenshot%202024-03-19%20at%209.44.51%20AMScreenshot%202024-03-19%20at%209.44.51%20AMScreenshot%202024-03-19%20at%209.44.51%20AMScreenshot%202024-03-19%20at%209.44.51%20AMScreenshot%202024-03-19%20at%209.44.51%20AMScreenshot%202024-03-19%20at%209.44.51%20AMScreenshot%202024-03-19%20at%209.44.51%20AM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=ee8323f7150b897fb80a2edb1370a58947d25350f4bd77901e3dd37cb07cd4bc&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "30",
            availableAfterDays: "",
            capacity: "4",
            additionalDescription: [
                {
                    key: "Additional amenities",
                    title: "Additional services",
                    description: "Only available upon request.",
                    items: [
                        {
                            label: "002d37f7d618-test",
                        },
                    ],
                },
                {
                    key: "Available layouts",
                    title: "Available layouts",
                    description:
                        "Additional time may be added when checking for availability due to setup and teardown of layout.",
                    items: [
                        {
                            label: "layout x (4 pax)",
                        },
                    ],
                },
                {
                    key: "View layout details",
                    title: "View layout details",
                    items: [
                        {
                            label: "layout x (4 pax)",
                            description: [
                                {
                                    label: "Setup time",
                                    value: "15 minutes",
                                },
                                {
                                    label: "Teardown time",
                                    value: "15 minutes",
                                },
                            ],
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "13:00:00",
                            status: "OCCUPIED",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "17:00:00",
                            status: "OCCUPIED",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "21:00:00",
                    interval: 60,
                },
            ],
            itemTemplate: "rooms-interval",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/9znPmRxQBv?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=9znPmRxQBv&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/9znPmRxQBv?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=9znPmRxQBv&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "B0XrnV9rmz",
            title: "add-on hannah test 1",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/B0XrnV9rmz/3be74a40-1932-4a44-b571-59259d3b256c/2ddd56f0-5a22-462a-87b9-7bc145ef1b68/4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=3d34b079ac62f32a595dce5e389e92678d6a06edac59855ecb1749eaaaa484d5&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": true,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "5",
            additionalDescription: [
                {
                    key: "Additional amenities",
                    title: "Additional services",
                    description: "Only available upon request.",
                    items: [
                        {
                            label: "Coffee",
                        },
                        {
                            label: "AV Support",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00",
                            endTime: "08:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30",
                            endTime: "09:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00",
                            endTime: "09:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30",
                            endTime: "10:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00",
                            endTime: "10:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30",
                            endTime: "11:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00",
                            endTime: "13:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30",
                            endTime: "14:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00",
                            endTime: "13:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30",
                            endTime: "15:00",
                            status: "OCCUPIED",
                        },
                        {
                            startTime: "15:00",
                            endTime: "15:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30",
                            endTime: "16:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00",
                            endTime: "16:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30",
                            endTime: "17:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00",
                            endTime: "17:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30",
                            endTime: "18:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "07:00",
                    endTime: "18:00",
                },
            ],
            itemTemplate: "rooms-fixedSessions",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/B0XrnV9rmz?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=B0XrnV9rmz&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/B0XrnV9rmz?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=B0XrnV9rmz&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "bJxrj7JPqL",
            title: "Apple",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/bJxrj7JPqL/3be74a40-1932-4a44-b571-59259d3b256c/a3a8618a-8be3-4d59-bb75-71962e4e9ff3/hachi.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=bf0bae5559a13510eac9f528777a29eb41f3430037105256273a30662778b8ab&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": true,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "6",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Meeting",
                        },
                    ],
                },
                {
                    key: "Additional amenities",
                    title: "Additional services",
                    description: "Only available upon request.",
                    items: [
                        {
                            label: "MC Services",
                        },
                        {
                            label: "002d37f7d618-test",
                        },
                        {
                            label: "Barista Services",
                        },
                        {
                            label: "Coffee",
                        },
                        {
                            label: "a",
                        },
                    ],
                },
                {
                    key: "Available layouts",
                    title: "Available layouts",
                    description:
                        "Additional time may be added when checking for availability due to setup and teardown of layout.",
                    items: [
                        {
                            label: "Default (5 pax)",
                        },
                        {
                            label: "tt (1 pax)",
                        },
                        {
                            label: "With setup time (10 pax)",
                        },
                    ],
                },
                {
                    key: "View layout details",
                    title: "View layout details",
                    items: [
                        {
                            label: "Default (5 pax)",
                            description: [
                                {
                                    label: "Setup time",
                                    value: "None",
                                },
                                {
                                    label: "Teardown time",
                                    value: "None",
                                },
                            ],
                            imageUrls: [
                                "https://dev.rbs.ccubesg.io/rbs/api/v1/layout/Dy3E38OrY0/layout-url?path=resource-layouts%2FDy3E38OrY0%2F3be74a40-1932-4a44-b571-59259d3b256c%2F71193987-ece6-4351-b25f-410851a72daf%2Ftest%20with%20white%20space.png",
                            ],
                        },
                        {
                            label: "tt (1 pax)",
                            description: [
                                {
                                    label: "Setup time",
                                    value: "None",
                                },
                                {
                                    label: "Teardown time",
                                    value: "None",
                                },
                            ],
                            imageUrls: [
                                "https://dev.rbs.ccubesg.io/rbs/api/v1/layout/B0XrnDmQmz/layout-url?path=resource-layouts%2FB0XrnDmQmz%2F3be74a40-1932-4a44-b571-59259d3b256c%2Fafe6d37a-2cb6-402d-a8e8-ed5c1afc58ef%2Fwaffle.png",
                            ],
                        },
                        {
                            label: "With setup time (10 pax)",
                            description: [
                                {
                                    label: "Setup time",
                                    value: "30 minutes",
                                },
                                {
                                    label: "Teardown time",
                                    value: "30 minutes",
                                },
                            ],
                            imageUrls: [
                                "https://dev.rbs.ccubesg.io/rbs/api/v1/layout/5oJQMZGERj/layout-url?path=resource-layouts%2F5oJQMZGERj%2F3be74a40-1932-4a44-b571-59259d3b256c%2F376de4ea-c825-4eac-a947-aca2c4430012%2F769aacaa-f20a-40af-8eab-65d15bbb7c09.jpg",
                            ],
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00",
                            endTime: "08:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30",
                            endTime: "09:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00",
                            endTime: "09:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30",
                            endTime: "10:00",
                            status: "OCCUPIED",
                        },
                        {
                            startTime: "10:00",
                            endTime: "10:30",
                            status: "OCCUPIED",
                        },
                        {
                            startTime: "10:30",
                            endTime: "11:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00",
                            endTime: "13:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30",
                            endTime: "14:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00",
                            endTime: "14:30",
                            status: "DISABLED",
                        },
                        {
                            startTime: "14:30",
                            endTime: "15:00",
                            status: "DISABLED",
                        },
                        {
                            startTime: "15:00",
                            endTime: "15:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30",
                            endTime: "16:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00",
                            endTime: "16:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30",
                            endTime: "17:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00",
                            endTime: "17:30",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30",
                            endTime: "18:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00",
                    endTime: "18:00",
                },
            ],
            itemTemplate: "rooms-fixedSessions",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/bJxrj7JPqL?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=bJxrj7JPqL&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/bJxrj7JPqL?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=bJxrj7JPqL&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "mx0Ex4xE9Y",
            title: "apple+dragonfruit",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/mx0Ex4xE9Y/3be74a40-1932-4a44-b571-59259d3b256c/e0f84078-9e75-4136-9829-44fc3cb8f52f/9fecf77f-e454-4c86-815f-08d9eb2ec8a9_ActiveSG1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=a79860558fe680db2db7cd6882eed2788be9efb372135f22fd1d848e778f953b&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "12",
            availableAfterDays: "",
            capacity: "10",
            additionalDescription: [
                {
                    key: "Built-in amenities",
                    title: "Built-in amenities",
                    items: [
                        {
                            label: "Common built-in amenity",
                        },
                        {
                            label: "Chairs (Additional)",
                        },
                        {
                            label: "Phone phone",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00",
                            endTime: "09:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00",
                            endTime: "11:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00",
                            endTime: "12:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00",
                            endTime: "14:00",
                            status: "OCCUPIED",
                            label: "Jing Zhi",
                            action: [
                                {
                                    type: "SHOW_MODAL",
                                    continueOnError: true,
                                    payload: {
                                        message: "",
                                        cancelActionLabel: "",
                                        renderContent: {
                                            type: "html",
                                            html: '<style> .html-modal .titleH3Bold { font-family: Open Sans Bold; font-weight: 700; font-size: 1.375rem; line-height: 1.75rem; color: #282828; } .html-modal .titleH4 { font-family: Open Sans SemiBold; font-weight: 600; font-size: 1.125rem; line-height: 1.625rem; color: #686868; display: flex; align-items: center; margin-top: 0.5rem; } .html-modal .titleH4 img { height: 1.375rem; width: 1.375rem; vertical-align: middle; margin-right: 0.5rem; } .html-modal .small-title { font-family: Open Sans; font-weight: 600; font-size: 1rem; line-height: 1.5rem; margin-top: 2rem; color: #686868; } .html-modal .value { font-family: Open Sans; font-size: 1.125rem; line-height: 1.625rem; margin-top: 0.5rem; } .html-modal a { font-family: Open Sans SemiBold; font-weight: 600; color: #4855D4; } </style> <div class="html-modal"> <h3 class="titleH3Bold">Booking details for apple+dragonfruit</h3> <h3 class="titleH3Bold">19 Aug 2024, Mon 1:00pm - 2:00pm</h3> <h4 class="titleH4"><img src="https://dev.rbs.ccubesg.io/listing/img/pin2.svg">Eclipse</h4> <p class="small-title">Status</p><p class="value">Confirmed</p> <p class="small-title">Booking owner</p><p class="value">Jing Zhi</p><a href="mailto:jingzhi.t_dcube@scientecpeople.com">jingzhi.t_dcube@scientecpeople.com</a></br> <p class="small-title">Booking title</p><p class="value">Test Combined Reschedule</p> </div>',
                                        },
                                        confirmActionLabel: "Close",
                                    },
                                },
                            ],
                        },
                        {
                            startTime: "14:00",
                            endTime: "15:00",
                            status: "OCCUPIED",
                            label: "Jing Zhi",
                            action: [
                                {
                                    type: "SHOW_MODAL",
                                    continueOnError: true,
                                    payload: {
                                        message: "",
                                        cancelActionLabel: "",
                                        renderContent: {
                                            type: "html",
                                            html: '<style> .html-modal .titleH3Bold { font-family: Open Sans Bold; font-weight: 700; font-size: 1.375rem; line-height: 1.75rem; color: #282828; } .html-modal .titleH4 { font-family: Open Sans SemiBold; font-weight: 600; font-size: 1.125rem; line-height: 1.625rem; color: #686868; display: flex; align-items: center; margin-top: 0.5rem; } .html-modal .titleH4 img { height: 1.375rem; width: 1.375rem; vertical-align: middle; margin-right: 0.5rem; } .html-modal .small-title { font-family: Open Sans; font-weight: 600; font-size: 1rem; line-height: 1.5rem; margin-top: 2rem; color: #686868; } .html-modal .value { font-family: Open Sans; font-size: 1.125rem; line-height: 1.625rem; margin-top: 0.5rem; } .html-modal a { font-family: Open Sans SemiBold; font-weight: 600; color: #4855D4; } </style> <div class="html-modal"> <h3 class="titleH3Bold">Booking details for apple+dragonfruit</h3> <h3 class="titleH3Bold">19 Aug 2024, Mon 2:00pm - 3:00pm</h3> <h4 class="titleH4"><img src="https://dev.rbs.ccubesg.io/listing/img/pin2.svg">Eclipse</h4> <p class="small-title">Status</p><p class="value">Confirmed</p> <p class="small-title">Booking owner</p><p class="value">Jing Zhi</p><a href="mailto:jingzhi.t_dcube@scientecpeople.com">jingzhi.t_dcube@scientecpeople.com</a></br> <p class="small-title">Booking title</p><p class="value">Test1235125</p> </div>',
                                        },
                                        confirmActionLabel: "Close",
                                    },
                                },
                            ],
                        },
                        {
                            startTime: "15:00",
                            endTime: "16:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00",
                            endTime: "17:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00",
                            endTime: "18:00",
                            status: "DISABLED",
                        },
                        {
                            startTime: "18:00",
                            endTime: "19:00",
                            status: "OCCUPIED",
                            label: "",
                        },
                        {
                            startTime: "19:00",
                            endTime: "20:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00",
                            endTime: "21:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00",
                            endTime: "22:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00",
                    endTime: "22:00",
                },
            ],
            itemTemplate: "rooms-fixedSessions",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/mx0Ex4xE9Y?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=mx0Ex4xE9Y&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/mx0Ex4xE9Y?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=mx0Ex4xE9Y&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "RBP5eeePm6",
            title: "Coconut",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/RBP5eeePm6/3be74a40-1932-4a44-b571-59259d3b256c/0fae6789-9237-4306-bb33-db6d0af75b04/Double19.PNG%20%281%29.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=330bd9d1ae1640873d8e6628fd5797a8f32d447110e6d24f40f309e6c6f490a0&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": true,
            },
            unavailableAfterDays: "120",
            availableAfterDays: "",
            capacity: "12",
            additionalDescription: [],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:15:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "08:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:45:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:15:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "09:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:45:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:15:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "10:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:45:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:15:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "11:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:45:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "13:00:00",
                            status: "DISABLED",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:15:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "13:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:45:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:15:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "14:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:45:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "16:30:00",
                            status: "OCCUPIED",
                            label: "booking label",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "16:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:45:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:15:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "17:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:45:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "18:00:00",
                    interval: 15,
                },
            ],
            itemTemplate: "rooms-interval",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/RBP5eeePm6?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=RBP5eeePm6&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/RBP5eeePm6?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=RBP5eeePm6&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "DAPBjGgPqd",
            title: "Coconut Approval Required",
            organisationId: "0B8E79PbpK",
            subtitle: "GovTech Headquarters",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/DAPBjGgPqd/3be74a40-1932-4a44-b571-59259d3b256c/febf8918-25be-437a-bc7c-33abc09b63e6/Double19.PNG%20%281%29.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=f42fdd1ee37cb8c85b6aa1b12299c8cac79026a1b649037cffd835bdfcbfc350&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": true,
                "Manual start": true,
            },
            unavailableAfterDays: "30",
            availableAfterDays: "",
            capacity: "12",
            additionalDescription: [],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "16:30:00",
                            status: "OCCUPIED",
                            label: "a very long booking text that spans across the entire universe beyond the horizon into the blackhole transcending time and space",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "16:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:45:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:15:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "17:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:45:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "18:00:00",
                    interval: 15,
                },
            ],
            itemTemplate: "rooms-interval",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/DAPBjGgPqd?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=DAPBjGgPqd&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/DAPBjGgPqd?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=DAPBjGgPqd&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "ajlEo56PqA",
            title: "Default test",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: [
                "https://mol-dev-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/ajlEo56PqA/3be74a40-1932-4a44-b571-59259d3b256c/7e6e379a-2318-4b9c-885b-df45c47b926e/Square_-_black_simple.svg.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSOOIGMMFT%2F20240819%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240819T052315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAJv2SAwVoSPwMmO2O807cHLgX8nvXY1H0MpDoy8Xc3DzAiA5IPjHSx6AxZHWErHkEIGxCR5DAJUOAJEomVw2sVhw9irqAwg%2BEAIaDDUwMzc3OTU0NDEwMCIMaWFQ1Y1utrGnRt5zKscDV7EQ0Ur1oIbCtKQGh3T3qKebL%2BksKpPUEFIo7Svys2a91MSBqFh7CJiFF%2BZjLPGi10Oz9mg668pEQHde9LPmVNkxwDrYoerHXwW3BgNyNzB4OYuR8Q4C6gWDpr%2Fds5pdyZFHcL2pBoeuD96zyNlXWp368PU0pbB1U0N0Xh9jY4sjEdu%2FnaMFy9zzDEl3upQj3f7XBATFb1jWV0Xqubtd4jPuyBAIc7QAsG6s3na27fdyZQrsoX1tcp44190zOpzY5%2FO51%2BgkrhX0RDNS%2B1gDG6EwME%2FH727Pnzci8OO%2BSIoKdyrIEm4%2BkOpxZpI8SucM98RNE9LRVd%2FItYXtaQNrJjVlYM0IzEHJrJ0qyVLoKbmfEEmgKpTVd7aogdzViI5RGEOts%2BI1eRl2CLOjYRuVYKT6dplep1EYA%2FmeaJWdR4Azg5IWlAvQimZ1lBhUck%2B9qXswbIF%2BBwH2jmu9n9z6Uh7dVeP3enQ95Po8SSoRwJxA4CzMpgYVGS%2B59wTrPY7gAft%2Fdc2fWjIhdRMITTtZad3%2Bhp%2FSyLV14q69J7My44wI94K%2Fj7cCNMXmY6MsJBuFnjkq1%2BFQ%2B5ZZi8%2FweDoSFtGexlagUYEwxqaLtgY6pQFCrOyo2wcQqBHqu9mMp2Yg7FuzJn7o9Pw9LOqbxkEXfMDEdffdSsXnGxHq%2BelGL1YEeM6GAp57B1k6RSngsX%2BACZlVvmCA1oiHq6FLuNdCEefrbI9teD9LzQDZxKEouU4doZyA%2FZEnQi8YWbWJZvd1tluUT%2FRgYhgHhl%2FV%2Bqf3Mk%2FB7bHUJJMCE5UXcz45J4NCvwFUK2qzDRsS6eS4gpgLoHwo1YQ%3D&X-Amz-Signature=97fbd54ff50ccfba7e83cd7727cf7d52af5dc030f0f39730260c4c11c9dcb950&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": true,
            },
            unavailableAfterDays: "30",
            availableAfterDays: "",
            capacity: "12",
            additionalDescription: [],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00",
                            endTime: "09:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00",
                            endTime: "10:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00",
                            endTime: "11:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00",
                            endTime: "12:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00",
                            endTime: "14:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00",
                            endTime: "15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00",
                            endTime: "16:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00",
                            endTime: "17:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00",
                            endTime: "18:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00",
                            endTime: "19:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00",
                            endTime: "20:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00",
                            endTime: "21:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00",
                            endTime: "22:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00",
                    endTime: "22:00",
                },
            ],
            itemTemplate: "rooms-fixedSessions",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/ajlEo56PqA?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=ajlEo56PqA&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/ajlEo56PqA?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=ajlEo56PqA&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
        {
            _provider: "rmbme",
            id: "ewGEKbeQVa",
            title: "delet",
            organisationId: "0B8E79PbpK",
            subtitle: "Eclipse, Level 8",
            resourceSubtype: "test default fallback",
            resourceType: "Rooms",
            resourceTypeId: "kd6PRJPJzZ",
            images: null,
            tags: {
                "Approval required": false,
                "Manual start": true,
            },
            unavailableAfterDays: "9",
            availableAfterDays: "",
            capacity: "14",
            additionalDescription: [],
            timelines: [
                {
                    date: "2024-08-19",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:15:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "08:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:45:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:15:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "09:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:45:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:15:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "10:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:45:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:15:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "11:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:45:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "13:00:00",
                            status: "DISABLED",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:15:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "13:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:45:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:15:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "14:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:45:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:15:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "15:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:45:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:15:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "16:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:45:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:15:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:15:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "17:45:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:45:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "18:00:00",
                    interval: 15,
                },
            ],
            itemTemplate: "rooms-interval",
            callToActions: {
                desktop: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/ewGEKbeQVa?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Unavailable",
                                style: "default",
                                enabled: false,
                                visible: false,
                                icon: null,
                            },
                        },
                        actions: [],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=ewGEKbeQVa&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
                mobile: [
                    {
                        trigger: {
                            type: "BUTTON",
                            value: {
                                label: "Book",
                                style: "default",
                                enabled: true,
                                visible: true,
                                icon: null,
                            },
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/rbs/web/book/ewGEKbeQVa?date=2024-08-19&startTime=&endTime=",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                    {
                        trigger: {
                            type: "LIST_ITEM",
                            value: null,
                        },
                        actions: [
                            {
                                type: "REDIRECT",
                                payload: {
                                    path: "https://dev.rbs.ccubesg.io/listing/rbs/detail?provider=rmbme&resourceId=ewGEKbeQVa&selectedDate=2024-08-19&calendarMode=day",
                                },
                                continueOnError: null,
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

export const mockMapper: TimeTableProps = {
    date: "2024-08-19",
    timetableMinTime: "06:00",
    timetableMaxTime: "22:00",
    maxDate: "2024-08-31",
    minDate: "2024-08-01",
    totalRecords: mockResourceListingResultsData.totalRows,
    rowBars: mockResourceListingResultsData.resources.map((resource) => {
        return {
            id: resource.id,
            name: resource.title,
            rowMinTime: resource.timelines[0].startTime,
            rowMaxTime: resource.timelines[0].endTime,
            subtitle: (
                <>
                    <Person2Icon />
                    {resource.capacity}
                </>
            ),
            rowCells: resource.timelines[0].slots.map((slot) => {
                return {
                    //REVIEW: booking id? for onClick to render booking details
                    id: slot.id,
                    startTime: slot.startTime,
                    endTime: slot.endTime,
                    title: slot.label,
                    subtitle: slot.label,
                    status: slot.status,
                };
            }),
        };
    }),
    // headerVariant: "records-only",
    onNameClick: function (rowId: string): void {
        alert(`Clicked on ${rowId}`);
    },
    emptyContent: {
        illustrationScheme: "bookingsg",
        description:
            "There’s no data to show. You may need to adjust your search or filters. If you believe this is a mistake, try refreshing the page.",
    },
    isLoading: false,
};
