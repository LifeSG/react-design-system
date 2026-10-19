// Shared by measure-nav.mjs. Each probe is a parent-overrides-child pair: the
// parent passes a class to a child component and sets a property the child's own
// class also sets. Which one wins depends on CSS order. Probes whose element is
// not on the current page are skipped.
export const PROBES = [
    // ErrorDisplay -> Typography.HeadingMD: parent margin-bottom 16px, child 0
    {
        id: "error-display title",
        selector: '[data-testid="error-display--title"]',
        property: "marginBottom",
        intended: "16px",
    },
    // Menu.Section -> Typography.BodyXS: parent colour text-subtler, child text
    {
        id: "menu label",
        selector: '[data-testid="menu-section"]',
        labelOf: true,
        property: "color",
        intendedVar: "--fds-colour-text-subtler",
    },
    // Timeline -> Typography.HeadingSM: parent margin-bottom 1rem, child 0
    {
        id: "timeline title",
        selector: '[data-testid="timeline-title"]',
        property: "marginBottom",
        intended: "16px",
    },
    // Toast -> Typography.BodyMD: parent colour inherit, child text
    {
        id: "toast description",
        selector: '[data-testid="toast-success"] p',
        property: "color",
        intendedInherit: true,
    },
    // Footer -> Typography.BodyMD: parent margin-bottom 16px, child 0
    {
        id: "footer download label",
        selector: '[data-testid="download-app-section"] > :first-child',
        property: "marginBottom",
        intended: "16px",
    },
    // SmartAppBanner -> Button (small): parent padding 0.5rem, child padding 0 16px-ish
    {
        id: "banner button",
        selector: '[data-testid="smart-app-banner-proceed-container"] button',
        property: "paddingLeft",
        intended: "8px",
    },
];

// Returns [{ id, value, intended, ok }] for the probes present on the page.
export async function runProbes(page) {
    const out = [];
    for (const probe of PROBES) {
        if (!(await page.$(probe.selector))) continue;
        const r = await page.$eval(
            probe.selector,
            (el, p) => {
                // alpha.14 renders the menu label as a sibling referenced by aria-labelledby
                if (p.labelOf)
                    el = document.getElementById(
                        el.getAttribute("aria-labelledby")
                    );
                const value = getComputedStyle(el)[p.property];
                let intended = p.intended;
                if (p.intendedVar) {
                    const t = document.createElement("span");
                    t.style.color = `var(${p.intendedVar})`;
                    el.parentElement.appendChild(t);
                    intended = getComputedStyle(t).color;
                    t.remove();
                } else if (p.intendedInherit) {
                    intended = getComputedStyle(el.parentElement)[p.property];
                }
                return { value, intended };
            },
            probe
        );
        out.push({ id: probe.id, ...r, ok: r.value === r.intended });
    }
    return out;
}

// Order in which library components' rules appear in document.styleSheets.
export async function componentOrder(page, classMap) {
    return page.evaluate((map) => {
        const seq = [];
        const visit = (rules) => {
            for (const rule of rules) {
                if (rule.cssRules) visit(rule.cssRules);
                const m = rule.selectorText?.match(/\.([a-z][a-z0-9]{5,})/);
                const comp = m && map[m[1]];
                if (comp && seq[seq.length - 1] !== comp) seq.push(comp);
            }
        };
        for (const sheet of document.styleSheets) {
            try {
                visit(sheet.cssRules);
            } catch {
                /* cross-origin */
            }
        }
        return seq.join(">");
    }, classMap);
}
