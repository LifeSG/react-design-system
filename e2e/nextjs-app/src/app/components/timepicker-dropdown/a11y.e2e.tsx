"use client";

import { TimepickerDropdown } from "@lifesg/react-design-system/shared/timepicker-dropdown/timepicker-dropdown";

export default function Story() {
    return (
        <TimepickerDropdown
            value="10:30"
            show
            format="24hr"
            onChange={() => {}}
            onCancel={() => {}}
        />
    );
}
