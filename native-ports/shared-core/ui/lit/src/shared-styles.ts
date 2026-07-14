/**
 * Shared stylesheet from @lifesg/flagship-styles.
 *
 * The theme CSS (lifesg.css) sets CSS custom properties on
 * [data-fds-theme="lifesg"] — that lives on the document <body> so the
 * properties inherit into every Shadow DOM tree.
 *
 * The component CSS (styles.css) uses those custom properties and is
 * adopted into each component's Shadow DOM via adoptedStyleSheets.
 */
import componentCSS from "@lifesg/flagship-styles/styles.css?inline";

const _sheet = new CSSStyleSheet();
_sheet.replaceSync(componentCSS);

export const fdsComponentStyles = _sheet;
