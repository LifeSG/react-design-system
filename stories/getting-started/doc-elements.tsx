import { Markdown } from "@storybook/addon-docs/blocks";
import { useState } from "react";
import type { ThemeType } from "src/theme";
import { DocAlert } from "stories/storybook-common";

const THEME_TO_DISPLAY_NAME_MAPPING: Record<ThemeType, string> = {
    "a11y-playground": "A11y Playground",
    bookingsg: "BookingSG",
    ccube: "CCube",
    imda: "IMDA",
    lifesg: "LifeSG",
    mylegacy: "MyLegacy",
    oneservice: "OneService",
    pa: "PA",
    rbs: "RBS",
    "sgw-digital-lobby": "SGW Digital Lobby",
    spf: "SPF",
    supportgowhere: "SupportGoWhere",
};

const THEME_TO_FONT_MAPPING: Record<ThemeType, string> = {
    "a11y-playground": "atkinson-hyperlegible-next",
    bookingsg: "plus-jakarta-sans",
    ccube: "open-sans",
    imda: "montserrat",
    lifesg: "open-sans",
    mylegacy: "open-sans",
    oneservice: "open-sans",
    pa: "lato",
    rbs: "open-sans",
    "sgw-digital-lobby": "libre-franklin",
    spf: "public-sans",
    supportgowhere: "libre-franklin",
};

const ThemePicker = ({
    theme,
    setTheme,
}: {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}) => {
    return (
        <label>
            Current theme:{" "}
            <select
                name="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value as ThemeType)}
            >
                {Object.entries(THEME_TO_DISPLAY_NAME_MAPPING).map(
                    ([key, value]) => (
                        <option key={value} value={key}>
                            {value}
                        </option>
                    )
                )}
            </select>
        </label>
    );
};

export const Installation = () => {
    const [theme, setTheme] = useState<ThemeType>("lifesg");
    return (
        <div>
            <Markdown>
                {`
### 2. Pick the theme

The next set of instructions will differ based on your theme, so select the theme you want to use in your application from the dropdown below.
`}
            </Markdown>
            <p>
                <ThemePicker theme={theme} setTheme={setTheme} />
            </p>
            <Markdown>
                {`
### 3. Set up the base stylesheets

The library depends on custom CSS for fonts and certain components to work properly. You will need to load the corresponding stylesheets in your app.
`}
            </Markdown>
            <Markdown>
                {`
Add this into the \`head\` of your html file:

\`\`\`tsx
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v3/css/main.css"
/>
<link
    rel="stylesheet"
    type="text/css"
    href="https://assets.life.gov.sg/react-design-system/v3/css/${THEME_TO_FONT_MAPPING[theme]}.css"
/>
\`\`\`

Or if you are importing to an existing css file:

\`\`\`css
@import url("https://assets.life.gov.sg/react-design-system/v3/css/main.css");
@import url("https://assets.life.gov.sg/react-design-system/v3/css/${THEME_TO_FONT_MAPPING[theme]}.css");
\`\`\`

### 4. Load the theme stylesheet

In your application's JavaScript entrypoint, import the theme stylesheet.

\`\`\`tsx
import "@lifesg/react-design-system/theme/styles/${theme}.css";
\`\`\`

Or if you are importing to an existing css file:
`}
            </Markdown>
            <DocAlert>
                This requires your framework or build tool to support imports
                from node_modules in CSS files
            </DocAlert>
            <Markdown>
                {`
\`\`\`css
@import "@lifesg/react-design-system/theme/styles/${theme}.css";
\`\`\`

### 5. Configure the theme

Wrap your application in the \`ThemeProvider\` and pass in the theme as a prop.

\`\`\`tsx
import { ThemeProvider } from "@lifesg/react-design-system/theme";

const App = () => {
    return (
        <ThemeProvider theme="${theme}">
            <Component />
        </ThemeProvider>
    );
};
\`\`\`
`}
            </Markdown>
        </div>
    );
};
