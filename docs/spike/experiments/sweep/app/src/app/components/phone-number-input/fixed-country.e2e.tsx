"use client";

import { Form } from "@lifesg/react-design-system/form";

export default function Story() {
    return (
        <div className="story-column-container">
            <Form.PhoneNumberInput
                data-testid="phone-number-input-fixed-country"
                label="Fixed country"
                value={{ countryCode: "+65", number: "91234567" }}
                fixedCountry
            />
        </div>
    );
}
