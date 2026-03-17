"use client";

import { MaskedInput } from "@lifesg/react-design-system/masked-input";

export default function Story() {
    return <MaskedInput value="S1234567D" maskRange={[2, 5]} readOnly />;
}
