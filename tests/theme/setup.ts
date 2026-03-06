/**
 * Setup theme CSS variables for testing
 */
export function setupThemeVariables() {
    const root = document.documentElement;
    root.style.setProperty("--fds-breakpoint-xxs-min", "0");
    root.style.setProperty("--fds-breakpoint-xxs-max", "320px");
    root.style.setProperty("--fds-breakpoint-xs-min", "321px");
    root.style.setProperty("--fds-breakpoint-xs-max", "375px");
    root.style.setProperty("--fds-breakpoint-sm-min", "376px");
    root.style.setProperty("--fds-breakpoint-sm-max", "480px");
    root.style.setProperty("--fds-breakpoint-md-min", "481px");
    root.style.setProperty("--fds-breakpoint-md-max", "768px");
    root.style.setProperty("--fds-breakpoint-lg-min", "769px");
    root.style.setProperty("--fds-breakpoint-lg-max", "1200px");
    root.style.setProperty("--fds-breakpoint-xl-min", "1201px");
    root.style.setProperty("--fds-breakpoint-xl-max", "1440px");
    root.style.setProperty("--fds-breakpoint-xxl-min", "1441px");
}
