# Contributing

When contributing components, do discuss with the designers as well as the team managing this repository.

Do also adhere to the guidelines mentioned below.

-   <a href="#contributor">As a contributor</a>
    -   <a href="#creating-branch">Creating a branch</a>
    -   <a href="#adding-components">Adding components</a>
    -   <a href="#previewing-components">Previewing components</a>
    -   <a href="#writing-stories">Writing stories</a>
    -   <a href="#writing-functional-tests">Writing functional tests</a>
    -   <a href="#linting">Linting</a>
    -   <a href="#pull-request">Creating pull requests</a>
-   <a href="#introducing-theme">Introducing a new theme</a>
    -   <a href="#theme-overview">Overview</a>
    -   <a href="#theme-steps">Steps</a>
-   <a href="#repo-owner">As a repository owner</a>
    -   <a href="#versioning">Version Management</a>
    -   <a href="#documenting-change">Documenting change</a>
    -   <a href="#updating">How to update this library?</a>

---

<a id="contributor"></a>

## As a contributor

<a id="creating-branch"></a>
<br />

### **1. Creating a branch**

Now that you are starting off, first create a branch with a short and easy description in **kebab-case**
e.g. `update-navbar-style`

<a id="adding-components"></a>
<br />

### **2. Adding components**

Components are to be added in the `src` directory in a structure like this

```
├── src
│	├── component-name
│	│	├── component-name.tsx
│	│	├── component-name.styles.ts
│	│	├── index.tsx
│	│	└── types.ts
│	└── index.ts
└── tests
	└── component-name
		└── component-name.spec.tsx
```

Where

-   `component-name.tsx` contains the component src
-   `component-name.styles.ts` contains the styled components of the component
-   `types.ts` the type definitions
-   `index.ts` to contain the exportable of the component and its typings. This is to be reexported to `src/index.ts`

Unit test files will sit in the `tests` folder bearing the same folder name as the component.

> File and folder structure are in `kebab-case`

<br />

#### **Common Conventions**

Here are some of the [common conventions](/CONVENTIONS.md#agreed-conventions) we recommend you to follow when developing
in this repository.

<a id="previewing-components"></a>
<br />

### **3. Previewing components**

You can preview the components you have created via Storybook.

Run Storybook

> `npm run storybook`

If the web page does not load automatically, you may go to this url

> `http://localhost:6006`

<a id="writing-stories"></a>
<br />

### **4. Writing stories**

It is very important to provide enough information for potential users to understand and use the components.

Some principles include:

-   Adding sufficient stories to describe the variations
-   Add additional usage information for others to understand and use the component correctly
-   Indicate the component properties clearly

The file naming convention is as such:

-   The component story `component-name.stories.mdx`
-   Supporting elements `doc-elements.tsx`
-   Component properties `props-table.tsx`

A suggested folder structure is as such:

```
└── stories
	└── component-name
		├── component-name.stories.mdx
		├── doc-elements.tsx
		├── props-table.tsx
		└── types.ts
```

<a id="writing-functional-tests"></a>
<br />

### **5. Writing functional tests**

Functional tests should be written for scenarios that are difficult to cover in unit tests:

-   Visual tests e.g. colour variants, hover styling
-   Interaction tests e.g. drag-and-drop, scrolling
-   Capturing the accessibility tree
-   Visual regression to ensure styles do not break unintentionally

The project uses Playwright as the testing framework and NextJS to host the components.

#### Prerequisites

-   For consistent rendering across environments, the Playwright server runs in a Docker container. The Docker daemon must be installed and running
-   Host networking must be enabled in Docker (Docker Desktop → Settings → Resources → Network → "Enable host networking")
-   Port 3000 must be free on the host machine

#### Project structure

The tests are set up in this structure

```
└── e2e
   ├── nextjs-app
   │   ├── src/proxy.ts
   │   └── src/app/components
   │       ├── [component]/[story]
   |       │   ├── layout.tsx
   |       │   └── page.tsx
   │       └── component-name
   |           ├── component-name.module.css
   │           └── story-name.e2e.tsx
   └── tests
       └── components
           └── component-name
               ├── __screenshots__
               └── component-name.e2e.spec.ts
```

Where

-   `nextjs-app` is a NextJS project
    -   `proxy.ts` is a middleware that configures strict CSP
    -   `[component]/[story]` dynamically renders a component example based on the route
    -   `component-name.module.css` hosts any specific styles needed for the component story
    -   `story-name.tsx` hosts a single component example
-   `tests` is the collection of functional tests and its utils
    -   `__screenshots__` contains the Playwright snapshots for the component
    -   `component-name.e2e.spec.ts` contains the Playwright test suite for the component

When the NextJS app is running, components can be accessed at http://localhost:3000/components/component-name/story-name

#### Dev mode

Dev mode has hot reload for faster feedback during test implementation.
Changes made in both the design system and in the NextJS app are picked up immediately.

Run:

```bash
npm run test-e2e
```

This opens the Playwright dashboard where you can individually run and debug tests, as well as update screenshots.

#### CI mode

CI mode uses actual builds to verify production behaviour.

Run:

```bash
npm run test-e2e-ci
```

> **Tip:** If tests are passing locally but failing in the CI pipeline, it is likely a strict CSP issue. Check the Playwright console for errors.

<a id="linting"></a>
<br />

### **6. Linting**

This repository uses ESLint for JS/TS and Stylelint for stylesheets. Run:

```bash
npm run lint         # checks JS/TS and CSS
npm run lint:css     # runs Stylelint on all `.css` files
npm run lint:css:fix # auto-fixable CSS issues
```

Linting is also wired into `lint-staged` so committed files are auto-checked.

<a id="pull-request"></a>
<br />

### **7. Creating pull requests**

Once you have committed and pushed your code, you are to create a pull request to have it approved to be in the `master` branch.

Add a meaningful title to your pull request and follow the template provided.

---

<a id="introducing-theme"></a>
<br />

## Introducing a new theme

<a id="theme-overview"></a>
<br />

### **Overview**

Each theme is a standalone CSS file that provides:

-   **Primitive colours** — the raw colour palette
-   **Semantic colours** — purpose-driven tokens that reference primitive colours
-   **Font** — font family, scale, and other typography settings
-   **Component tokens** — overrides for specific components (Button, Navbar, Footer, Animation)
-   Other tokens such as radius and shadow

Themes reuse shared presets via CSS mixins where possible, only defining values inline when they need to differ from the defaults. If inline values will be reused across themes, pull them out into new mixins.

<a id="theme-steps"></a>
<br />

### **Steps**

#### **1. Create the theme CSS file**

Add a new file at `src/theme/styles/<theme-name>.css`. Use an existing theme as a starting point — `ccube.css` is a good reference for a standard theme, and `wise.css` for font presets.

The file structure is:

```css
@import url("./presets/default.css");

[data-fds-theme="<theme-name>"] {
    /* ... */
}

[data-fds-theme="<theme-name>"][data-fds-theme-mode="dark"] {
    /* ... */
}
```

> **Tip:** If the theme's tokens follow the defaults, use the shared mixins. Only define values inline when they need to differ.

#### **2. Register the theme name**

Add the new theme name (in alphabetical order) to the `THEME_TYPES` array in `src/theme/types.ts`.

#### **3. (Optional) Add a font preset**

If the theme supports multiple fonts, create a font preset CSS file at `src/theme/styles/presets/fonts/<preset-name>.css`:

The file structure is:

```css
@define-mixin font-<preset-name> {
    --fds-font-family-heading: "<Font Name>";
    --fds-font-family-body: "<Font Name>";
    --fds-font-variant: normal;
    /* ... */
}
```

Then in the theme CSS file, import the font preset and apply it via the font preset selector:

```css
@import url("./presets/fonts/<preset-name>.css");

[data-fds-theme="<theme-name>"][data-fds-theme-font="<preset-name>"] {
    @mixin font-<preset-name>;
}
```

Add the preset name (in alphabetical order) to the `THEME_FONT_PRESETS` array in `src/theme/types.ts`.

#### **4. (If applicable) Provide asset files**

Static assets such as font files, logo images, and other media are hosted on S3 at `https://assets.life.gov.sg/react-design-system/`. These files are not stored in the repository itself. Provide any new asset files to the repository maintainers for upload.

**Fonts:** If the theme uses a font that is not already hosted, provide the font files in `woff2` format. The maintainers will also create a CSS stylesheet with the `@font-face` declarations (e.g. `https://assets.life.gov.sg/react-design-system/v3/css/<font-name>.css`).

Provide a variable font, and subset fonts where possible to minimise file size.

**Logos:** If the theme needs custom logos for the Navbar or Footer (see step 5), provide the logo image files (SVG preferred).

#### **5. (If applicable) Update theme-specific components**

Some components have theme-specific customisation. If applicable, update the following:

-   **Navbar** logo — `src/navbar/navbar-logo-data.ts`
-   **Footer** logo and copyright text — `src/footer/footer-helper.ts`
-   **Footer** disclaimer links — `src/footer/footer-disclaimer-links-data.tsx`

#### **6. Load theme in Storybook and E2E tests**

**Storybook**

-   Import the new theme stylesheet (and new font stylesheet if applicable)
-   Register the new theme in the theme switcher
-   Document the colour tokens in `stories/theme/colour` and font tokens in `stories/theme/font` (if applicable)

**E2E NextJS app**

-   Import the new theme stylesheet (and new font stylesheet if applicable)
-   Generate the baseline screenshots for the Navbar and Footer
-   Update the screenshot for the theme colours in light and dark mode

#### **7. Verify**

Run Storybook, and:

-   Preview the tokens under `Foundations > Colours` and `Foundations > Font`
-   Switch to the new theme to verify the visual output
-   Check both light and dark mode

---

<a id="repo-owner"></a>
<br />

## As a repository owner

<a id="versioning"></a>
<br />

### **1. Version management**

There are different types of versions that we can include in the design system.

For larger features/changes such as migrations, we would introduce
alpha versions to inform others of the potential breakages in these versions. We can denote alpha versions as such

```
v1.x.x-alpha.x

e.g.
v1.2.0-alpha.2
```

Where `v1.2.0` is the version that we will eventually release to.

> It is advisable to work in a separate branch for alpha releases so as not to disrupt the `master` branch which is
> always a reflection of the latest in production

For all other changes, we follow the **canary release system**. This allows us to test new features/fixes before we roll out the official version to the other users. The version tags are as such:

-   `canary` v1.0.1-canary.1
-   `stable` v1.0.1

In terms of versioning, you may follow the guidelines as such:

-   If it is breaking change (not backward compatible), increase the major version (e.g. `x.0.0`)
-   If it is a regular enhancement, increase the minor version (e.g. `1.x.0`)
-   If it is a bug fix, increase thepatch version (e.g. `1.1.x`)

<a id="documenting-change"></a>
<br />

### **2. Documenting change**

Like all libraries, documenting changes are extremely important for users to note of the changes being made in the code. This is done in the [Changelog Wiki](https://github.com/LifeSG/react-design-system/wiki/Changelog). Some principles include:

-   Indicate version number and date of release
-   State the type if it is `New features` or `Bug fixes`
-   State purpose clearly. Indicate if it is Breaking change by indicating the tag `[BREAKING]`
-   If you would warn users of the change you can indicate using the tag `[WARNING]`

### **3. How to update this library?**

1. Create a branch with a signature as such `bump-v6.0.1-canary.1`
2. Update the version number in `package.json` and `package-lock.json`
3. Create a pull request to have it merged
4. Update the [Changelog Wiki](https://github.com/LifeSG/react-design-system/wiki/Changelog)
5. Code owner will proceed to create a release
