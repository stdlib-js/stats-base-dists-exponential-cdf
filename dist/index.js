"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=i(function(R,u){
var o=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/constants-float64-pinf/dist');function a(e,r){return o(r)||r<0||r===v?NaN:e<0?0:1-q(-r*e)}u.exports=a
});var s=i(function(g,c){
var N=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/constants-float64-pinf/dist');function F(e){if(p(e)||e<0||e===x)return N(NaN);return r;function r(t){return t<0?0:1-y(-e*t)}}c.exports=F
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=n(),P=s();I(f,"factory",P);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
