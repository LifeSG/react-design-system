// @catalog
/**
 * CSP source expression (`'sha256-...'`) for the inline script rendered by
 * `ThemeProvider`. Add it to `script-src` as an alternative to passing a
 * `nonce`, e.g. for statically generated pages where a per-request nonce is not
 * available. It is computed from the script at build time, so it stays correct
 * across library upgrades.
 *
 * @keywords csp, script-src, content security policy
 */
export const FDS_INLINE_SCRIPT_CSP_HASH = "__FDS_INLINE_SCRIPT_CSP_HASH__";
