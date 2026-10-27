"use client";

import { PhoneNumberInput } from "@lifesg/react-design-system/phone-number-input";

export default function Story() {
    return (
        <div className="story-column-container">
            <PhoneNumberInput
                data-testid="phone-number-input-standalone-default"
                placeholder="Enter phone number"
            />

            <PhoneNumberInput
                data-testid="phone-number-input-standalone-selected"
                value={{ countryCode: "+65", number: "91234567" }}
            />

            <PhoneNumberInput
                data-testid="phone-number-input-standalone-error"
                value={{ countryCode: "+65", number: "91234567" }}
                error
            />

            <PhoneNumberInput
                data-testid="phone-number-input-standalone-disabled"
                value={{ countryCode: "+65", number: "91234567" }}
                disabled
            />

            <PhoneNumberInput
                data-testid="phone-number-input-standalone-readonly"
                value={{ countryCode: "+65", number: "91234567" }}
                readOnly
            />
        </div>
    );
}
