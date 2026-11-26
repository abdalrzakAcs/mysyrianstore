import{c as t}from"./index-gk-08sYv.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=t("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);function c(e){const r=Number(e.delivery_lat),o=Number(e.delivery_lng);if(Number.isFinite(r)&&Number.isFinite(o)&&!(r===0&&o===0))return`https://www.google.com/maps/search/?api=1&query=${r},${o}`;const s=(e.delivery_address||"").trim();return s?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s)}`:null}export{n as M,c as o};
