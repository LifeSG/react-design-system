"use client";

import { Form } from "@lifesg/react-design-system/form";
import type { PhoneNumberInputValue } from "@lifesg/react-design-system/phone-number-input";
import { useState } from "react";

const INITIAL_VALUE: PhoneNumberInputValue = {
    countryCode: "+994",
    number: "123456789",
};

export default function Story() {
    const [value, setValue] = useState<PhoneNumberInputValue>(INITIAL_VALUE);

    return (
        <div className="story-column-container">
            <Form.PhoneNumberInput
                data-testid="phone-number-input-searchable"
                label="Searchable"
                value={value}
                onChange={setValue}
                enableSearch
                optionSearchPlaceholder="Search country"
                placeholder="Enter phone number"
            />
        </div>
    );
}
