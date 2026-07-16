/**
 * Shared stylesheet for Lit Shadow DOM components.
 *
 * Imports the pre-compiled Linaria CSS (hashed class names) and adopts it
 * into each component's Shadow DOM via adoptedStyleSheets.
 */
import componentCSS from "../../styles/linaria/styles.css?inline";

const _sheet = new CSSStyleSheet();
_sheet.replaceSync(componentCSS);

export const fdsComponentStyles = _sheet;
