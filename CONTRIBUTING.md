# Contributing

When contributing components, do discuss with the designers as well as the team managing this repository.

Do also adhere to the guidelines mentioned below.

-   <a href="#contributor">As a contributor</a>
    -   <a href="#creating-branch">Creating a branch</a>
    -   <a href="#adding-components">Adding components</a>
    -   <a href="#previewing-components">Previewing components</a>
    -   <a href="#writing-stories">Writing stories</a>
    -   <a href="#pull-request">Creating pull requests</a>
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

Now that you are starting off, first create a branch following these conventions:

-   If you have a ticket, `<ticket_num>-a-short-description` (e.g. `MOL-1234-fix-navbar`)
-   If you do not have a ticket, `just-a-short-description` (e.g. `fix-navbar`)

> Note that branches are to be created in kebab-case

<a id="adding-components"></a>
<br />

### **2. Adding components**

Components are to be added in the `src` directory in a structure like this

```
├── src
│	├── component-name
│	│	├── component-name.tsx
│	│	├── component-name.style.tsx
│	│	├── index.tsx
│	│	└── types.ts
│	└── index.ts
└── tests
	└── component-name
		└── component-name.spec.tsx
```

Where

-   `component-name.tsx` contains the component src
-   `component-name.style.tsx` contains the styled components of the component
-   `types.ts` the type definitions
-   `index.ts` to contain the exportable of the component and its typings. This is to be reexported to `src/index.ts`

Tests files will sit in the `tests` folder bearing the same folder name as the component.

> File and folder structure are in `kebab-case`

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

-   Properly describing and documenting your props
-   Adding sufficient stories to describe the variations

<a id="pull-request"></a>
<br />

### **5. Creating pull requests**

Once you have committed and pushed your code, you are to create a pull request to have it approved to be in the `master` branch.

Simply create a pull request with a meaningful title and description of the change. This will be used in the `Changelog` document when the code owner publishes a new version.

An example of a good title is

```
Add a new event handler prop for <ComponentName>
```

Some of the changes could result in some breaking changes or things to note for users of the component. You can add the `[WARNING]` or `[BREAKING]` indicator so that the repository owner can help indicate these in the `Changelog` document.

```
[BREAKING] Rename `data` prop for <ComponentName> for better clarity
```

---

<a id="repo-owner"></a>
<br />

## As a repository owner

<a id="versioning"></a>
<br />

### **1. Version management**

The design system follows a **canary release system**. This allows us to test new features/fixes before we roll out the official version to the other users. The version tags are as such:

-   `canary` v6.0.1-canary.1
-   `stable` v6.0.1

In terms of versioning, you may follow the guidelines as such:

-   If it is breaking change (not backward compatible), increase the major version (e.g. `x.0.0`)
-   If it is a regular enhancement, increase the minor version (e.g. `6.x.0`)
-   If it is a bug fix, increase thepatch version (e.g. `6.1.x`)

<a id="documenting-change"></a>
<br />

### **2. Documenting change**

Like all libraries, documenting changes are extremely important for users to note of the changes being made in the code. This is done in `CHANGELOG.md`. Some principles include:

-   Indicate version number and date of release
-   State the type if it is `New features`, `Improvements` or `Bug fixes`
-   State purpose clearly. Indicate if it is Breaking change by indicating the tag `[BREAKING]`
-   If you would warn users of the change you can indicate using the tag `[WARNING]`

### **3. How to update this library?**

1. Create a branch with a signature as such `bump-v6.0.1-canary.1`
2. Update the `CHANGELOG.md`
3. Create a pull request to have it merged
