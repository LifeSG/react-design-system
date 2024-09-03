import { Person2Icon } from "@lifesg/react-icons";
import { TimeTableProps } from "./types";
import dayjs, { Dayjs } from "dayjs";

export const mockResourceListingResultsData = {
    page: 1,
    rowsPerPage: 8,
    totalPages: 2,
    totalRows: 10,
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
                            id: "jingzhi-id",
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

export const anotherMockData = {
    page: 1,
    rowsPerPage: 10,
    totalPages: 3,
    totalRows: 10,
    resources: [
        {
            _provider: "rmbme",
            id: "9l4P1dOr16",
            title: "Apple",
            organisationId: "ylWEXKQNDX",
            subtitle: "Mapletree Business City 10, Floor 8",
            resourceSubtype: "Conference Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/9l4P1dOr16/5d53aabc-48ab-4e38-8036-b3d000f7c123/e4fc7335-232b-4a2e-99a7-2d47d52d5663/apple-washington-size-113-per-piece-fruits-vegetables-fresh-produce-509590_1024x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=98ada84cc0f8bb9ebfff9b4ba372925ca44ad78293889b7aa47d543876b751bd&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": true,
                "Manual start": false,
            },
            unavailableAfterDays: "60",
            availableAfterDays: "",
            capacity: "3",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Event (Internal)",
                        },
                        {
                            label: "Event (External)",
                        },
                        {
                            label: "Annual General Meeting",
                        },
                    ],
                },
                {
                    key: "Built-in amenities",
                    title: "Built-in amenities",
                    items: [
                        {
                            label: "Chairs (Additional)",
                        },
                        {
                            label: "Deskphone",
                        },
                        {
                            label: "Chair",
                        },
                    ],
                },
                {
                    key: "Additional amenities",
                    title: "Additional services",
                    description: "Only available upon request.",
                    items: [
                        {
                            label: "Coffee",
                        },
                        {
                            label: "Barista Services",
                        },
                        {
                            label: "Tea",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            id: "RBP5g87Em6",
                            title: "Weekly Huddle #7",
                            label: "Shawn TAY (GOVTECH)",
                            hosts: [],
                            startTime: "11:00",
                            endTime: "12:00",
                            status: "OCCUPIED",
                            action: [
                                {
                                    type: "SHOW_MODAL",
                                    continueOnError: true,
                                    payload: {
                                        message: "",
                                        cancelActionLabel: "",
                                        renderContent: {
                                            type: "html",
                                            html: '<style> .html-modal .titleH3Bold { font-family: Open Sans Bold; font-weight: 700; font-size: 1.375rem; line-height: 1.75rem; color: #282828; } .html-modal .titleH4 { font-family: Open Sans SemiBold; font-weight: 600; font-size: 1.125rem; line-height: 1.625rem; color: #686868; display: flex; align-items: center; margin-top: 0.5rem; } .html-modal .titleH4 img { height: 1.375rem; width: 1.375rem; vertical-align: middle; margin-right: 0.5rem; } .html-modal .small-title { font-family: Open Sans; font-weight: 600; font-size: 1rem; line-height: 1.5rem; margin-top: 2rem; color: #686868; } .html-modal .value { font-family: Open Sans; font-size: 1.125rem; line-height: 1.625rem; margin-top: 0.5rem; } .html-modal a { font-family: Open Sans SemiBold; font-weight: 600; color: #4855D4; } </style> <div class="html-modal"> <h3 class="titleH3Bold">Booking details for Apple</h3> <h3 class="titleH3Bold">6 Sep 2024, Fri 11:00am - 12:00pm</h3> <h4 class="titleH4"><img src="https://rbs-stg.dwp.gov.sg/listing/img/pin2.svg">Mapletree Business City 10, Floor 8</h4> <p class="small-title">Status</p><p class="value">Confirmed</p> <p class="small-title">Booking owner</p><p class="value">Shawn TAY (GOVTECH)</p><a href="mailto:Shawn_TAY@tech.gov.sg">Shawn_TAY@tech.gov.sg</a></br> <p class="small-title">Booking title</p><p class="value">Weekly Huddle #7</p> </div>',
                                        },
                                        confirmActionLabel: "Close",
                                    },
                                },
                            ],
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "12:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:30:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "18:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:30:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "19:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:30:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "20:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:30:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00:00",
                            endTime: "21:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:30:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
                    interval: 30,
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/9l4P1dOr16?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=9l4P1dOr16&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/9l4P1dOr16?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=9l4P1dOr16&selectedDate=2024-09-06&calendarMode=day",
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
            id: "Dy3E3vRQY0",
            title: "Avocado",
            organisationId: "ylWEXKQNDX",
            subtitle: "Eclipse Building",
            resourceSubtype: "Conference Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/Dy3E3vRQY0/5d53aabc-48ab-4e38-8036-b3d000f7c123/a5bb9b71-289b-4216-a2cb-74e24451d200/Avocado2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=56a94f9a88cf5680133f2d96c5961aad53925ac97890707509c297c6d71c7042&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "18",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
                        },
                    ],
                },
                {
                    key: "Additional amenities",
                    title: "Additional services",
                    description: "Only available upon request.",
                    items: [
                        {
                            label: "Barista Services",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "12:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:30:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "18:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:30:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "19:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:30:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "20:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:30:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00:00",
                            endTime: "21:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:30:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
                    interval: 30,
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/Dy3E3vRQY0?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=Dy3E3vRQY0&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/Dy3E3vRQY0?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=Dy3E3vRQY0&selectedDate=2024-09-06&calendarMode=day",
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
            id: "GN9P0vME6K",
            title: "Banana",
            organisationId: "ylWEXKQNDX",
            subtitle: "Mapletree Business City 10, Floor 8",
            resourceSubtype: "Conference Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/GN9P0vME6K/5d53aabc-48ab-4e38-8036-b3d000f7c123/378a92b9-7901-4a55-8123-c8decb1477fb/Banana.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=6e438cfce49a468cc061d95b44f7ab775051001a917076b16fadb9e11fcad968&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
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
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
                        },
                    ],
                },
                {
                    key: "Additional amenities",
                    title: "Additional services",
                    description: "Only available upon request.",
                    items: [
                        {
                            label: "Coffee",
                        },
                        {
                            label: "Tea",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "12:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:30:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "18:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:30:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "19:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:30:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "20:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:30:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00:00",
                            endTime: "21:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:30:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
                    interval: 30,
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/GN9P0vME6K?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=GN9P0vME6K&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/GN9P0vME6K?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=GN9P0vME6K&selectedDate=2024-09-06&calendarMode=day",
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
            id: "mx0ExmWr9Y",
            title: "Cantaloupe",
            organisationId: "ylWEXKQNDX",
            subtitle: "Mapletree Business City 10, Floor 9",
            resourceSubtype: "Conference Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/mx0ExmWr9Y/5d53aabc-48ab-4e38-8036-b3d000f7c123/5fad9460-c166-4a82-9aed-0a4579af632c/Cantaloupe.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=af8510ba0a0872726a4ffb86efc6d264b48be9dc13569018e91b1a4441d0afb6&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "10",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
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
                            label: "Boardroom (10 pax)",
                        },
                        {
                            label: "Classroom (10 pax)",
                        },
                        {
                            label: "U-shape (10 pax)",
                        },
                    ],
                },
                {
                    key: "View layout details",
                    title: "View layout details",
                    items: [
                        {
                            label: "Boardroom (10 pax)",
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
                                "https://rbs-stg.dwp.gov.sg/rbs/api/v1/layout/9l4P1xbr16/layout-url?path=resource-layouts/9l4P1xbr16/5d53aabc-48ab-4e38-8036-b3d000f7c123/1e64e6e8-a4bf-4668-b4e0-c2c83dd75cdd/Boardroom.png",
                            ],
                        },
                        {
                            label: "Classroom (10 pax)",
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
                                "https://rbs-stg.dwp.gov.sg/rbs/api/v1/layout/mOkQkXAEYZ/layout-url?path=resource-layouts/mOkQkXAEYZ/5d53aabc-48ab-4e38-8036-b3d000f7c123/1e64e6e8-a4bf-4668-b4e0-c2c83dd75cdd/Classroom.png",
                            ],
                        },
                        {
                            label: "U-shape (10 pax)",
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
                                "https://rbs-stg.dwp.gov.sg/rbs/api/v1/layout/NgYrJodP0w/layout-url?path=resource-layouts/NgYrJodP0w/5d53aabc-48ab-4e38-8036-b3d000f7c123/1e64e6e8-a4bf-4668-b4e0-c2c83dd75cdd/U-shape.png",
                            ],
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
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
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
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
                            status: "DEFAULT",
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
                        {
                            startTime: "21:00:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/mx0ExmWr9Y?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=mx0ExmWr9Y&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/mx0ExmWr9Y?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=mx0ExmWr9Y&selectedDate=2024-09-06&calendarMode=day",
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
            id: "An0rbeOElJ",
            title: "Cherry",
            organisationId: "ylWEXKQNDX",
            subtitle: "Mapletree Business City 10, Floor 8",
            resourceSubtype: "Conference Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/An0rbeOElJ/5d53aabc-48ab-4e38-8036-b3d000f7c123/7053dc86-153f-4194-9ac1-73d2b07a6236/Cherry.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=5a94a0ec3089214927586c4f5add8b2162a31a0c84933728abf45608831f748a&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": true,
            },
            unavailableAfterDays: "90",
            availableAfterDays: "",
            capacity: "10",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "12:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:30:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "18:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:30:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "19:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:30:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "20:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:30:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00:00",
                            endTime: "21:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:30:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
                    interval: 30,
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/An0rbeOElJ?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=An0rbeOElJ&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/An0rbeOElJ?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=An0rbeOElJ&selectedDate=2024-09-06&calendarMode=day",
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
            id: "GN9P0vDE6K",
            title: "Dragonfruit",
            organisationId: "ylWEXKQNDX",
            subtitle: "Mapletree Business City 10, Floor 8",
            resourceSubtype: "Conference Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/GN9P0vDE6K/5d53aabc-48ab-4e38-8036-b3d000f7c123/02c7fa54-9d6a-4a50-892c-0d1071d94d5f/Dragonfruit.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=6a12f85542e0563c2d9a39181e5ac5ccc001fed925512a9bf495bc667795b5e4&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "10",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
                        },
                    ],
                },
                {
                    key: "Built-in amenities",
                    title: "Built-in amenities",
                    items: [
                        {
                            label: "Projector",
                        },
                        {
                            label: "Laser pointer",
                        },
                        {
                            label: "Table",
                        },
                        {
                            label: "Microphone",
                        },
                        {
                            label: "Chair",
                        },
                    ],
                },
                {
                    key: "Additional amenities",
                    title: "Additional services",
                    description: "Only available upon request.",
                    items: [
                        {
                            label: "Coffee",
                        },
                        {
                            label: "Tea",
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
                            label: "Classroom (12 pax)",
                        },
                        {
                            label: "Default (10 pax)",
                        },
                        {
                            label: "Cabaret (16 pax)",
                        },
                    ],
                },
                {
                    key: "View layout details",
                    title: "View layout details",
                    items: [
                        {
                            label: "Classroom (12 pax)",
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
                                "https://rbs-stg.dwp.gov.sg/rbs/api/v1/layout/9znPmNeQBv/layout-url?path=resource-layouts/9znPmNeQBv/5d53aabc-48ab-4e38-8036-b3d000f7c123/0ed1cf96-f8cf-4f5a-bb9f-b448a6246f1f/Classroom.png",
                            ],
                        },
                        {
                            label: "Default (10 pax)",
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
                                "https://rbs-stg.dwp.gov.sg/rbs/api/v1/layout/0B8E716Pbp/layout-url?path=resource-layouts/0B8E716Pbp/5d53aabc-48ab-4e38-8036-b3d000f7c123/021a5edb-99ba-4870-bb49-cf56762b652e/Boardroom.png",
                            ],
                        },
                        {
                            label: "Cabaret (16 pax)",
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
                                "https://rbs-stg.dwp.gov.sg/rbs/api/v1/layout/vmoQAgyr9D/layout-url?path=resource-layouts/vmoQAgyr9D/5d53aabc-48ab-4e38-8036-b3d000f7c123/7e99c61a-7102-4ba6-bb69-7619491b8509/Cabaret.png",
                            ],
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "12:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:30:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "18:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:30:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "19:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:30:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "20:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:30:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00:00",
                            endTime: "21:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:30:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
                    interval: 30,
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/GN9P0vDE6K?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=GN9P0vDE6K&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/GN9P0vDE6K?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=GN9P0vDE6K&selectedDate=2024-09-06&calendarMode=day",
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
            id: "vK4rGewQ02",
            title: "Durian",
            organisationId: "ylWEXKQNDX",
            subtitle: "Eclipse Building",
            resourceSubtype: "Meeting Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/vK4rGewQ02/5d53aabc-48ab-4e38-8036-b3d000f7c123/e7be5a59-bff3-43f0-b86c-f375775a054b/Durian.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=68d3552e5f82364ff858fb2a537f7ccc4c0d5fe5db054a9d24d990b74861bd7a&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "10",
            additionalDescription: [],
            timelines: [
                {
                    date: "2024-09-06",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "12:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:30:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "18:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:30:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "19:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:30:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "20:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:30:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00:00",
                            endTime: "21:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:30:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
                    interval: 30,
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/vK4rGewQ02?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=vK4rGewQ02&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/vK4rGewQ02?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=vK4rGewQ02&selectedDate=2024-09-06&calendarMode=day",
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
            id: "0B8E719Pbp",
            title: "Executive room 1",
            organisationId: "ylWEXKQNDX",
            subtitle: "Eclipse Building",
            resourceSubtype: "Executive Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: null,
            tags: {
                "Approval required": false,
                "Manual start": true,
            },
            unavailableAfterDays: "90",
            availableAfterDays: "",
            capacity: "5",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
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
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
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
                            status: "DEFAULT",
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
                        {
                            startTime: "21:00:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/0B8E719Pbp?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=0B8E719Pbp&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/0B8E719Pbp?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=0B8E719Pbp&selectedDate=2024-09-06&calendarMode=day",
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
            id: "vK4rGoMr02",
            title: "Executive room 6",
            organisationId: "ylWEXKQNDX",
            subtitle: "Eclipse Building",
            resourceSubtype: "Executive Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: null,
            tags: {
                "Approval required": true,
                "Manual start": false,
            },
            unavailableAfterDays: "90",
            availableAfterDays: "",
            capacity: "6",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
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
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
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
                            status: "DEFAULT",
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
                        {
                            startTime: "21:00:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/vK4rGoMr02?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=vK4rGoMr02&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/vK4rGoMr02?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=vK4rGoMr02&selectedDate=2024-09-06&calendarMode=day",
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
            id: "YRVPVjVPGe",
            title: "Grape",
            organisationId: "ylWEXKQNDX",
            subtitle: "Mapletree Business City 10, Floor 8",
            resourceSubtype: "Conference Room",
            resourceType: "Rooms",
            resourceTypeId: "vmoQAgr9Dl",
            images: [
                "https://mol-stg-rbs-backend-files.s3.ap-southeast-1.amazonaws.com/resource/YRVPVjVPGe/5d53aabc-48ab-4e38-8036-b3d000f7c123/b7635427-9512-4205-9c78-1480e4953c73/Grape.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXKS4ZZQSD7BMLLBM%2F20240903%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240903T023753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIgfBMojE3SRXwhEN4Z332Q6Wo0Qg3EMh2Y6qF1Yj0CpQwCIQCa3nEw%2BwK7TXMTgAzYZe%2BAzDWxerb%2Bdo5DS2ouNRyJJyrzAwi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDUwMzc3OTU0NDEwMCIMrVWU%2BpHyl02dUNsrKscDdFEBk11jllrTFNthtU%2Fc%2Bo09CAXSFvHTPiQZAM1Eboy8BUzx4TYmaV7BBR4KvuMTtbCk6DyLlSJATmJIJp90JIIXEAw0iJ%2FWdnF0E3%2BLtgXoYpL0eDeLZulu2YfIKFGdNBUFumdljKFORqJ5DjcFzE41WjuNwB%2B%2FE0KAUmruNP3ZHLLldW4CJI6w2tMk%2BJz8%2FqlXXVXa4wQMveyQg0KPXGbfPiUqaFSubr117ohi9t6r8S0kWBeDttTXoTDIkPAf4dVpJ%2FcpzxbWd0V30Geu6jQrFqAdZuptMplj4Imb4cSxoxL4EHMU2Alt4qMJxMoIUZR%2BkAr8uOl03GV2q8iUwqE8mEPIFT%2BDZh9avXKTJCeIIYSx325bAO3TfHAe89Sj456ZUQ8%2FNX8RPamm8lPO3ES8PDlDncN%2FuZztxbxL4olXHutwuhwn49zlLviT7KUV32JThtZFbyGJo2Wl8EhhOHT3jAnQ4RJCit%2BXpGVHnuMXc6H%2Ft4l09oTUxzYdHwyLBE%2BUH6FQMtEVvEcCILjmtsVd52tQ8DsqPkWnhdA9x5A9F7GpGMdCiT7C5CjlnMjxDb%2BNKFu5GSSDx7VLY9I1g5lAHn29ezIwm%2BbZtgY6pQE7VzZ8tdgt9RRMTCIhpPZLUQynKIC1yeqOT6ZenOyMzL6V8nunnwVSV4%2BiSrKj6r%2FmiGPbIZZp9RN2SIZdHiHk%2F1wdYKpsZ7kVNazpLFccBc6siBikiMUzU2%2FRRawKazkRFY6j5TKN%2B7mcLvfaUy8TFIPs7q1Z9sF9893LxH9HXmIirayN%2Byg7GW93ORK7i3uQ09SnTiABmJAkswGOu%2Br1cAjOa0s%3D&X-Amz-Signature=b44aaa42675bae307a1bfcc72475cc435b4d2e2db5abec6f3d99c6508bc0d05e&X-Amz-SignedHeaders=host&x-id=GetObject",
            ],
            tags: {
                "Approval required": false,
                "Manual start": false,
            },
            unavailableAfterDays: "",
            availableAfterDays: "",
            capacity: "10",
            additionalDescription: [
                {
                    key: "Booking usage",
                    title: "Booking usage",
                    items: [
                        {
                            label: "Internal meeting",
                        },
                        {
                            label: "External meeting",
                        },
                    ],
                },
                {
                    key: "Built-in amenities",
                    title: "Built-in amenities",
                    items: [
                        {
                            label: "Projector",
                        },
                        {
                            label: "Laser pointer",
                        },
                        {
                            label: "Chair",
                        },
                    ],
                },
            ],
            timelines: [
                {
                    date: "2024-09-06",
                    disabled: false,
                    slots: [
                        {
                            startTime: "08:00:00",
                            endTime: "08:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "08:30:00",
                            endTime: "09:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:00:00",
                            endTime: "09:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "09:30:00",
                            endTime: "10:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:00:00",
                            endTime: "10:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "10:30:00",
                            endTime: "11:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:00:00",
                            endTime: "11:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "11:30:00",
                            endTime: "12:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:00:00",
                            endTime: "12:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "12:30:00",
                            endTime: "13:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:00:00",
                            endTime: "13:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "13:30:00",
                            endTime: "14:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:00:00",
                            endTime: "14:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "14:30:00",
                            endTime: "15:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:00:00",
                            endTime: "15:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "15:30:00",
                            endTime: "16:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:00:00",
                            endTime: "16:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "16:30:00",
                            endTime: "17:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:00:00",
                            endTime: "17:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "17:30:00",
                            endTime: "18:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:00:00",
                            endTime: "18:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "18:30:00",
                            endTime: "19:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:00:00",
                            endTime: "19:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "19:30:00",
                            endTime: "20:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:00:00",
                            endTime: "20:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "20:30:00",
                            endTime: "21:00:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:00:00",
                            endTime: "21:30:00",
                            status: "DEFAULT",
                        },
                        {
                            startTime: "21:30:00",
                            endTime: "22:00:00",
                            status: "DEFAULT",
                        },
                    ],
                    startTime: "08:00:00",
                    endTime: "22:00:00",
                    interval: 30,
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/YRVPVjVPGe?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=YRVPVjVPGe&selectedDate=2024-09-06&calendarMode=day",
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
                                    path: "https://rbs-stg.dwp.gov.sg/rbs/web/book/YRVPVjVPGe?date=2024-09-06&startTime=&endTime=",
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
                                    path: "https://rbs-stg.dwp.gov.sg/listing/rbs/detail?provider=rmbme&resourceId=YRVPVjVPGe&selectedDate=2024-09-06&calendarMode=day",
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

const mockFetchData = (date: Dayjs) => {
    const isEven = date.day() % 2 === 0;

    if (isEven) {
        return mockResourceListingResultsData.resources.map((resource) => {
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
        });
    } else {
        return anotherMockData.resources.map((resource) => {
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
        });
    }
};

export const mockMapper = (currentDate?: string): TimeTableProps => {
    const date = dayjs(currentDate);

    return {
        date: date.format("YYYY-MM-DD"),
        minTime: "06:20",
        maxTime: "22:15",
        maxDate: date.add(1, "month").format("YYYY-MM-DD"),
        minDate: date.add(-11, "month").format("YYYY-MM-DD"),
        totalRecords: 10,
        rowBars: mockFetchData(date),
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
        disabledCellHoverContent: "Outside operating hours",
    };
};
