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

<a id="pull-request"></a>
<br />

### **5. Creating pull requests**

Once you have committed and pushed your code, you are to create a pull request to have it approved to be in the `master` branch.

Add a meaningful title to your pull request and follow the template provided.

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
