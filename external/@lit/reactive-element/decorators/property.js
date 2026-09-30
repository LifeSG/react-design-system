import{notEqual as t,defaultConverter as e}from"../reactive-element.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r={attribute:!0,type:String,converter:e,reflect:!1,hasChanged:t},o=(t=r,e,o)=>{const{kind:a,metadata:s}=o;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),n.set(o.name,t),"accessor"===a){const{name:r}=o;return{set(o){const a=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,a,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===a){const{name:r}=o;return function(o){const a=this[r];e.call(this,o),this.requestUpdate(r,a,t)}}throw Error("Unsupported decorator location: "+a)};function a(t){return(e,r)=>"object"==typeof r?o(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}export{a as property,o as standardProperty};
//# sourceMappingURL=property.js.map
