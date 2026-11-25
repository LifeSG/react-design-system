"use strict";var e=require("../@lit/reactive-element/reactive-element.js"),t=require("../lit-html/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=globalThis;class r extends e.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=t.render(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return t.noChange}}r._$litElement$=!0,r.finalized=!0,n.litElementHydrateSupport?.({LitElement:r});const s=n.litElementPolyfillSupport;s?.({LitElement:r}),(n.litElementVersions??=[]).push("4.2.1"),exports.ReactiveElement=e.ReactiveElement,exports.defaultConverter=e.defaultConverter,exports.notEqual=e.notEqual,exports.html=t.html,exports.noChange=t.noChange,exports.nothing=t.nothing,exports.render=t.render,exports.LitElement=r;
//# sourceMappingURL=lit-element.js.map
