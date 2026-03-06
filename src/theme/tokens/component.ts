export const Button = {
    radius: "var(--fds-button-radius)",
    "default-colour-bg": "var(--fds-button-default-colour-bg)",
    "default-colour-bg-hover": "var(--fds-button-default-colour-bg-hover)",
    "default-colour-text": "var(--fds-button-default-colour-text)",
    "secondary-colour-border": "var(--fds-button-secondary-colour-border)",
    "secondary-colour-text": "var(--fds-button-secondary-colour-text)",
    "light-colour-text": "var(--fds-button-light-colour-text)",
    "link-colour-text": "var(--fds-button-link-colour-text)",
} as const;

export const Animation = {
    "loading-dots-spinner-colour":
        "var(--fds-animation-loading-dots-spinner-colour)",
} as const;

export const Navbar = {
    "full-height": "var(--fds-navbar-full-height)",
    "full-logo-height": "var(--fds-navbar-full-logo-height)",
    "compressed-height": "var(--fds-navbar-compressed-height)",
    "compressed-logo-height": "var(--fds-navbar-compressed-logo-height)",
    "mobile-height": "var(--fds-navbar-mobile-height)",
    "mobile-logo-height": "var(--fds-navbar-mobile-logo-height)",
    "colour-bg": "var(--fds-navbar-colour-bg)",
    "colour-icon": "var(--fds-navbar-colour-icon)",
    "link-colour-text": "var(--fds-navbar-link-colour-text)",
    "link-colour-text-hover": "var(--fds-navbar-link-colour-text-hover)",
    "link-colour-text-selected-hover":
        "var(--fds-navbar-link-colour-text-selected-hover)",
} as const;

export const Footer = {
    "colour-bg": "var(--fds-footer-colour-bg)",
    "colour-text": "var(--fds-footer-colour-text)",
    "link-colour-text": "var(--fds-footer-link-colour-text)",
    "link-colour-text-hover": "var(--fds-footer-link-colour-text-hover)",
    "disclaimer-link-colour-text":
        "var(--fds-footer-disclaimer-link-colour-text)",
    "disclaimer-link-colour-text-hover":
        "var(--fds-footer-disclaimer-link-colour-text-hover)",
} as const;

export const Component = {
    ...Button,
    ...Animation,
    ...Navbar,
    ...Footer,
} as const;
