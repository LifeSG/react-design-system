Spike 01 / theme delivery. Each route renders the consumer pairs (timeline: parent's
layer later; textarea: parent's layer earlier, F10) and differs only in how the theme
stylesheet reaches the page:

-   cdn-link: theme as a <link rel="stylesheet"> to a static copy in public/, rendered in
    the page, as the e2e app does with its /cdn assets. No bundled theme import.
-   many-themes: all 20 theme stylesheets imported, as the e2e story layout does; each
    repeats the order statement.
-   runtime-switch: lifesg and bookingsg both imported; a button toggles the
    ThemeProvider theme. Measured before and after the click.
-   nested-layout: the root of the route group renders a library component (Divider), and
    the theme is imported in a nested layout below it, the likely real-app shape of
    F12's theme-late.
