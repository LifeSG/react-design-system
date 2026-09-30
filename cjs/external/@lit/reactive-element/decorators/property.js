"use strict";var t=require("../reactive-element.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e={attribute:!0,type:String,converter:t.defaultConverter,reflect:!1,hasChanged:t.notEqual},r=(t=e,r,o)=>{const{kind:s,metadata:a}=o;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(o.name,t),"accessor"===s){const{name:e}=o;return{set(o){const s=r.get.call(this);r.set.call(this,o),this.requestUpdate(e,s,t)},init(r){return void 0!==r&&this.C(e,void 0,t,r),r}}}if("setter"===s){const{name:e}=o;return function(o){const s=this[e];r.call(this,o),this.requestUpdate(e,s,t)}}throw Error("Unsupported decorator location: "+s)};exports.property=function(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,o)},exports.standardProperty=r;
//# sourceMappingURL=property.js.map
