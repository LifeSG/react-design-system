import{ReactiveElement as e}from"../@lit/reactive-element/reactive-element.js";export{defaultConverter,notEqual}from"../@lit/reactive-element/reactive-element.js";import{render as t,noChange as n}from"../lit-html/lit-html.js";export{html,nothing}from"../lit-html/lit-html.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=globalThis;class s extends e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=t(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n}}s._$litElement$=!0,s.finalized=!0,r.litElementHydrateSupport?.({LitElement:s});const i=r.litElementPolyfillSupport;i?.({LitElement:s}),(r.litElementVersions??=[]).push("4.2.1");export{s as LitElement,e as ReactiveElement,n as noChange,t as render};
//# sourceMappingURL=lit-element.js.map
