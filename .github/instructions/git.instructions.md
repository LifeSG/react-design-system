---
applyTo: "**"
---

# Git

Follow trunk-based development.
Use feature toggles over feature branching whenever possible.
The `master` branch should always be in a working state.

## Branch Naming Convention

When working on a ticket, use the ticket number as the branch name.
When working on other tasks, name the branch `misc-<description>`.
Release branches are named `release/sprint##-v#.#.#`
Use all lower kebab case for branch names.

## Commits

The commit message should be in the following format:

`[<PREFIX>][<INITIALS>] <SUMMARY>`

Where:

-   <PREFIX> is the ticket number or `MISC` for non-ticket related changes.
-   <INITIALS> are the initials of the person making the commit.
-   <SUMMARY> is a brief description of the changes made.

Additional bullet points can be added after the summary for more details for larger commits.

## Versioning / Changelog

We are adhering to semver for versioning.
Record meaningful changes between versions in the `CHANGELOG.md` file.

New changes are added under the `# x.x.x` section. The version number will be added when the next release is made.
Mark breaking changes with a **[BREAKING]** prefix.
Mark potentially breaking changes with a **[WARNING]** prefix (e.g. deprecating something).
