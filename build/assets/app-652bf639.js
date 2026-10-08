/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="186";const ii="",Yt="srgb",ws="srgb-linear",Cs="linear",nt="srgb";const Io="300 es";function mu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ps(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _u(){const r=Ps("canvas");return r.style.display="block",r}const Uo={};function Ds(...r){const e="THREE."+r.shift();console.log(e,...r)}function Yl(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Pe(...r){r=Yl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function $e(...r){r=Yl(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ir(...r){const e=r.join(" ");e in Uo||(Uo[e]=!0,Pe(...r))}function gu(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const xu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fo=1234567;const Dr=Math.PI/180,Nr=180/Math.PI;function Wn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[r&255]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function qe(r,e,t){return Math.max(e,Math.min(t,r))}function $a(r,e){return(r%e+e)%e}function vu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Su(r,e,t){return r!==e?(t-r)/(e-r):0}function Lr(r,e,t){return(1-t)*r+t*e}function Mu(r,e,t,n){return Lr(r,e,1-Math.exp(-t*n))}function yu(r,e=1){return e-Math.abs($a(r,e*2)-e)}function Eu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Tu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function bu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Au(r,e){return r+Math.random()*(e-r)}function Ru(r){return r*(.5-Math.random())}function wu(r){r!==void 0&&(Fo=r);let e=Fo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cu(r){return r*Dr}function Pu(r){return r*Nr}function Du(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Lu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Iu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Uu(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*d,o*u,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fu={DEG2RAD:Dr,RAD2DEG:Nr,generateUUID:Wn,clamp:qe,euclideanModulo:$a,mapLinear:vu,inverseLerp:Su,lerp:Lr,damp:Mu,pingpong:yu,smoothstep:Eu,smootherstep:Tu,randInt:bu,randFloat:Au,randFloatSpread:Ru,seededRandom:wu,degToRad:Cu,radToDeg:Pu,isPowerOfTwo:Du,ceilPowerOfTwo:Lu,floorPowerOfTwo:Iu,setQuaternionFromProperEuler:Uu,normalize:it,denormalize:En},To=class To{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};To.prototype.isVector2=!0;let Ue=To;class pr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(f!==_||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*_;m<0&&(h=-h,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),w=Math.sin(T);p=Math.sin(p*T)/w,o=Math.sin(o*T)/w,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+_*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bo=class bo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(No.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(No.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bo.prototype.isVector3=!0;let X=bo;const Ks=new X,No=new pr,Ao=class Ao{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],w=i[4],S=i[7],M=i[2],b=i[5],A=i[8];return s[0]=a*_+o*T+l*M,s[3]=a*m+o*w+l*b,s[6]=a*p+o*S+l*A,s[1]=c*_+u*T+f*M,s[4]=c*m+u*w+f*b,s[7]=c*p+u*S+f*A,s[2]=h*_+d*T+g*M,s[5]=h*m+d*w+g*b,s[8]=h*p+d*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ao.prototype.isMatrix3=!0;let Ie=Ao;const Zs=new Ie,Oo=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){const r={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Cs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ws]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),r}const Ke=Nu();function Xn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ni;class Ou{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Ps("canvas")),Ni.width=e.width,Ni.height=e.height;const i=Ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bu=0;class Ja{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push($s(i[a].image)):s.push($s(i[a]))}else s=$s(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function $s(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ou.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Gu=0;const Js=new X;class kt extends Pi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=kt.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Wn(),this.name="",this.source=new Ja(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=300;kt.DEFAULT_ANISOTROPY=1;const Ro=class Ro{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(d+1)/2,M=(p+1)/2,b=(u+h)/4,A=(f+_)/4,x=(g+m)/4;return w>S&&w>M?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=A/n):S>M?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=b/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=A/s,i=x/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ro.prototype.isVector4=!0;let gt=Ro;class zu extends Pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new kt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ja(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kl extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ks=class ks{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ks().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,Hu)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Jn.crossVectors(n,tn),Jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Jn.crossVectors(n,tn)),Jn.normalize(),jr.crossVectors(tn,Jn),i[0]=Jn.x,i[4]=jr.x,i[8]=tn.x,i[1]=Jn.y,i[5]=jr.y,i[9]=tn.y,i[2]=Jn.z,i[6]=jr.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],w=n[7],S=n[11],M=n[15],b=i[0],A=i[4],x=i[8],E=i[12],D=i[1],I=i[5],F=i[9],z=i[13],U=i[2],k=i[6],Z=i[10],W=i[14],ae=i[3],Q=i[7],re=i[11],oe=i[15];return s[0]=a*b+o*D+l*U+c*ae,s[4]=a*A+o*I+l*k+c*Q,s[8]=a*x+o*F+l*Z+c*re,s[12]=a*E+o*z+l*W+c*oe,s[1]=u*b+f*D+h*U+d*ae,s[5]=u*A+f*I+h*k+d*Q,s[9]=u*x+f*F+h*Z+d*re,s[13]=u*E+f*z+h*W+d*oe,s[2]=g*b+_*D+m*U+p*ae,s[6]=g*A+_*I+m*k+p*Q,s[10]=g*x+_*F+m*Z+p*re,s[14]=g*E+_*z+m*W+p*oe,s[3]=T*b+w*D+S*U+M*ae,s[7]=T*A+w*I+S*k+M*Q,s[11]=T*x+w*F+S*Z+M*re,s[15]=T*E+w*z+S*W+M*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],T=l*d-c*h,w=o*d-c*f,S=o*h-l*f,M=a*d-c*u,b=a*h-l*u,A=a*f-o*u;return t*(_*T-m*w+p*S)-n*(g*T-m*M+p*b)+i*(g*w-_*M+p*A)-s*(g*S-_*b+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=t*o-n*a,w=t*l-i*a,S=t*c-s*a,M=n*l-i*o,b=n*c-s*o,A=i*c-s*l,x=u*_-f*g,E=u*m-h*g,D=u*p-d*g,I=f*m-h*_,F=f*p-d*_,z=h*p-d*m,U=T*z-w*F+S*I+M*D-b*E+A*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return e[0]=(o*z-l*F+c*I)*k,e[1]=(i*F-n*z-s*I)*k,e[2]=(_*A-m*b+p*M)*k,e[3]=(h*b-f*A-d*M)*k,e[4]=(l*D-a*z-c*E)*k,e[5]=(t*z-i*D+s*E)*k,e[6]=(m*S-g*A-p*w)*k,e[7]=(u*A-h*S+d*w)*k,e[8]=(a*F-o*D+c*x)*k,e[9]=(n*D-t*F-s*x)*k,e[10]=(g*b-_*S+p*T)*k,e[11]=(f*S-u*b-d*T)*k,e[12]=(o*E-a*I-l*x)*k,e[13]=(t*I-n*E+i*x)*k,e[14]=(_*w-g*M-m*T)*k,e[15]=(u*M-f*w+h*T)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,T=l*c,w=l*u,S=l*f,M=n.x,b=n.y,A=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+S)*M,i[2]=(g-w)*M,i[3]=0,i[4]=(d-S)*b,i[5]=(1-(h+p))*b,i[6]=(m+T)*b,i[7]=0,i[8]=(g+w)*A,i[9]=(m-T)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),l=Oi.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Sn.copy(this);const c=1/a,u=1/o,f=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===2e3)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ks.prototype.isMatrix4=!0;let dt=ks;const Oi=new X,Sn=new dt,Vu=new X(0,0,0),Hu=new X(1,1,1),Jn=new X,jr=new X,tn=new X,Go=new dt,zo=new pr;class ui{constructor(e=0,t=0,n=0,i=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wu=0;const ko=new X,Bi=new pr,On=new dt,es=new X,xr=new X,Xu=new X,qu=new pr,Vo=new X(1,0,0),Ho=new X(0,1,0),Wo=new X(0,0,1),Xo={type:"added"},Yu={type:"removed"},Gi={type:"childadded",child:null},Qs={type:"childremoved",child:null};class Dt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new X,t=new ui,n=new pr,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ie}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Vo,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return ko.copy(e).applyQuaternion(this.quaternion),this.position.add(ko.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vo,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(xr,es,this.up):On.lookAt(es,xr,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(On),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new X(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ri extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function ea(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=$a(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ea(a,s,e+1/3),this.g=ea(a,s,e),this.b=ea(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Zl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ke.workingToColorSpace(Gt.copy(this),e),Math.round(qe(Gt.r*255,0,255))*65536+Math.round(qe(Gt.g*255,0,255))*256+Math.round(qe(Gt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,s=Gt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Yt){Ke.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(ts);const n=Lr(Qn.h,ts.h,t),i=Lr(Qn.s,ts.s,t),s=Lr(Qn.l,ts.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new He;He.NAMES=Zl;class Zu extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mn=new X,Bn=new X,ta=new X,Gn=new X,zi=new X,ki=new X,qo=new X,na=new X,ia=new X,ra=new X,sa=new gt,aa=new gt,oa=new gt;class _n{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mn.subVectors(i,t),Bn.subVectors(n,t),ta.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Bn),l=Mn.dot(ta),c=Bn.dot(Bn),u=Bn.dot(ta),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return sa.setScalar(0),aa.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sa,s.x),a.addScaledVector(aa,s.y),a.addScaledVector(oa,s.z),a}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Bn.subVectors(e,t),Mn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Mn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;zi.subVectors(i,n),ki.subVectors(s,n),na.subVectors(e,n);const l=zi.dot(na),c=ki.dot(na);if(l<=0&&c<=0)return t.copy(n);ia.subVectors(e,i);const u=zi.dot(ia),f=ki.dot(ia);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(zi,a);ra.subVectors(e,s);const d=zi.dot(ra),g=ki.dot(ra);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ki,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return qo.subVectors(s,i),o=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(qo,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(zi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),is.subVectors(this.max,vr),Vi.subVectors(e.a,vr),Hi.subVectors(e.b,vr),Wi.subVectors(e.c,vr),jn.subVectors(Hi,Vi),ei.subVectors(Wi,Hi),gi.subVectors(Vi,Wi);let t=[0,-jn.z,jn.y,0,-ei.z,ei.y,0,-gi.z,gi.y,jn.z,0,-jn.x,ei.z,0,-ei.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-ei.y,ei.x,0,-gi.y,gi.x,0];return!la(t,Vi,Hi,Wi,is)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Vi,Hi,Wi,is))?!1:(rs.crossVectors(jn,ei),t=[rs.x,rs.y,rs.z],la(t,Vi,Hi,Wi,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new X,new X,new X,new X,new X,new X,new X,new X],yn=new X,ns=new qr,Vi=new X,Hi=new X,Wi=new X,jn=new X,ei=new X,gi=new X,vr=new X,is=new X,rs=new X,xi=new X;function la(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){xi.fromArray(r,s);const o=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const At=new X,ss=new Ue;let $u=0;class Un extends Pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class $l extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jl extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ju=new qr,Sr=new X,ca=new X;class ja{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ju.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(ca)),this.expandByPoint(Sr.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qu=0;const dn=new dt,ua=new Dt,Xi=new X,nn=new qr,Mr=new qr,Pt=new X;class hn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?Jl:$l)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(nn.min,Mr.min),nn.expandByPoint(Pt),Pt.addVectors(nn.max,Mr.max),nn.expandByPoint(Pt)):(nn.expandByPoint(Mr.min),nn.expandByPoint(Mr.max))}nn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),Pt.add(Xi)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new X,l[x]=new X;const c=new X,u=new X,f=new X,h=new Ue,d=new Ue,g=new Ue,_=new X,m=new X;function p(x,E,D){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,D),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,D),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[x].add(_),o[E].add(_),o[D].add(_),l[x].add(m),l[E].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,E=T.length;x<E;++x){const D=T[x],I=D.start,F=D.count;for(let z=I,U=I+F;z<U;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new X,S=new X,M=new X,b=new X;function A(x){M.fromBufferAttribute(i,x),b.copy(M);const E=o[x];w.copy(E),w.sub(M.multiplyScalar(M.dot(E))).normalize(),S.crossVectors(b,E);const I=S.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,I)}for(let x=0,E=T.length;x<E;++x){const D=T[x],I=D.start,F=D.count;for(let z=I,U=I+F;z<U;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Un(h,u,f)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ju{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Xt=new X;class Ls{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ds("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ds("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ha=new X,eh=new X,th=new Ie;class ni{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ha.subVectors(n,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ha),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||th.getNormalMatrix(e),i=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let nh=0;class mr extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ql extends mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qi;const yr=new X,Yi=new X,Ki=new X,Zi=new Ue,Er=new Ue,jl=new dt,as=new X,Tr=new X,os=new X,Yo=new Ue,fa=new Ue,Ko=new Ue;class ih extends Dt{constructor(e=new Ql){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ju(t,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Ls(n,3,0,!1)),qi.setAttribute("uv",new Ls(n,2,3,!1))}this.geometry=qi,this.material=e,this.center=new Ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),jl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ls(as.set(-.5,-.5,0),Ki,a,Yi,i,s),ls(Tr.set(.5,-.5,0),Ki,a,Yi,i,s),ls(os.set(.5,.5,0),Ki,a,Yi,i,s),Yo.set(0,0),fa.set(1,0),Ko.set(1,1);let o=e.ray.intersectTriangle(as,Tr,os,!1,yr);if(o===null&&(ls(Tr.set(-.5,.5,0),Ki,a,Yi,i,s),fa.set(0,1),o=e.ray.intersectTriangle(as,os,Tr,!1,yr),o===null))return;const l=e.ray.origin.distanceTo(yr);l<e.near||l>e.far||t.push({distance:l,point:yr.clone(),uv:_n.getInterpolation(yr,as,Tr,os,Yo,fa,Ko,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ls(r,e,t,n,i,s){Zi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Er.x=s*Zi.x-i*Zi.y,Er.y=i*Zi.x+s*Zi.y):Er.copy(Zi),r.copy(e),r.x+=Er.x,r.y+=Er.y,r.applyMatrix4(jl)}const kn=new X,da=new X,cs=new X,us=new X;class ec{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),us.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=us.dot(this.direction),l=-us.dot(cs),c=us.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(da).addScaledVector(cs,h),d}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,T=n.y-a.y,w=n.z-a.z,S=Math.abs(l),M=Math.abs(c),b=Math.abs(u);let A,x,E,D,I,F,z,U,k,Z,W,ae;if(S>=M&&S>=b?(E=l,F=f,k=g,ae=p,l>=0?(A=c,x=u,D=h,I=d,z=_,U=m,Z=T,W=w):(A=u,x=c,D=d,I=h,z=m,U=_,Z=w,W=T)):M>=b?(E=c,F=h,k=_,ae=T,c>=0?(A=u,x=l,D=d,I=f,z=m,U=g,Z=w,W=p):(A=l,x=u,D=f,I=d,z=g,U=m,Z=p,W=w)):(E=u,F=d,k=m,ae=w,u>=0?(A=l,x=c,D=f,I=h,z=g,U=_,Z=p,W=T):(A=c,x=l,D=h,I=f,z=_,U=g,Z=T,W=p)),E===0)return null;const Q=A/E,re=x/E,oe=1/E,ye=D-Q*F,be=I-re*F,ze=z-Q*k,De=U-re*k,Je=Z-Q*ae,te=W-re*ae,se=Je*De-te*ze,Se=ye*te-be*Je,Le=ze*be-De*ye;if(i){if(se<0||Se<0||Le<0)return null}else if((se<0||Se<0||Le<0)&&(se>0||Se>0||Le>0))return null;const xe=se+Se+Le;if(xe===0)return null;const Ne=oe*(se*F+Se*k+Le*ae);return(xe>0?Ne<0:Ne>0)?null:this.at(Ne/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eo extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zo=new dt,vi=new ec,hs=new ja,$o=new X,fs=new X,ds=new X,ps=new X,pa=new X,ms=new X,Jo=new X,_s=new X;class Kt extends Dt{constructor(e=new hn,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(pa.fromBufferAttribute(f,e),a?ms.addScaledVector(pa,u):ms.addScaledVector(pa.sub(t),u))}t.add(ms)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(hs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(hs,$o)===null||vi.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Zo.copy(s).invert(),vi.copy(e.ray).applyMatrix4(Zo),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,M=w;S<M;S+=3){const b=o.getX(S),A=o.getX(S+1),x=o.getX(S+2);i=gs(this,p,e,n,c,u,f,b,A,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);i=gs(this,a,e,n,c,u,f,T,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=T,M=w;S<M;S+=3){const b=S,A=S+1,x=S+2;i=gs(this,p,e,n,c,u,f,b,A,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,w=m+1,S=m+2;i=gs(this,a,e,n,c,u,f,T,w,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function rh(r,e,t,n,i,s,a,o){let l;if(e.side===1?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===0,o),l===null)return null;_s.copy(o),_s.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:r}}function gs(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,fs),r.getVertexPosition(l,ds),r.getVertexPosition(c,ps);const u=rh(r,e,t,n,fs,ds,ps,Jo);if(u){const f=new X;_n.getBarycoord(Jo,fs,ds,ps,f),i&&(u.uv=_n.getInterpolatedAttribute(i,o,l,c,f,new Ue)),s&&(u.uv1=_n.getInterpolatedAttribute(s,o,l,c,f,new Ue)),a&&(u.normal=_n.getInterpolatedAttribute(a,o,l,c,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};_n.getNormal(fs,ds,ps,h.normal),u.face=h,u.barycoord=f}return u}class sh extends kt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,u=1003,f,h){super(null,a,o,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Si=new ja,ah=new Ue(.5,.5),xs=new X;class to{constructor(e=new ni,t=new ni,n=new ni,i=new ni,s=new ni,a=new ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],w=s[13],S=s[14],M=s[15];if(i[0].setComponents(c-a,d-u,p-g,M-T).normalize(),i[1].setComponents(c+a,d+u,p+g,M+T).normalize(),i[2].setComponents(c+o,d+f,p+_,M+w).normalize(),i[3].setComponents(c-o,d-f,p-_,M-w).normalize(),n)i[4].setComponents(l,h,m,S).normalize(),i[5].setComponents(c-l,d-h,p-m,M-S).normalize();else if(i[4].setComponents(c-l,d-h,p-m,M-S).normalize(),t===2e3)i[5].setComponents(c+l,d+h,p+m,M+S).normalize();else if(t===2001)i[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=ah.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xs.x=i.normal.x>0?e.max.x:e.min.x,xs.y=i.normal.y>0?e.max.y:e.min.y,xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tc extends kt{constructor(e=[],t=301,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ma extends kt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Or extends kt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,u=1026,f=1){if(u!==1026&&u!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ja(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class oh extends Or{constructor(e,t=1014,n=301,i,s,a=1003,o=1003,l,c=1026){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yr extends hn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function g(_,m,p,T,w,S,M,b,A,x,E){const D=S/A,I=M/x,F=S/2,z=M/2,U=b/2,k=A+1,Z=x+1;let W=0,ae=0;const Q=new X;for(let re=0;re<Z;re++){const oe=re*I-z;for(let ye=0;ye<k;ye++){const be=ye*D-F;Q[_]=be*T,Q[m]=oe*w,Q[p]=U,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(ye/A),f.push(1-re/x),W+=1}}for(let re=0;re<x;re++)for(let oe=0;oe<A;oe++){const ye=h+oe+k*re,be=h+oe+k*(re+1),ze=h+(oe+1)+k*(re+1),De=h+(oe+1)+k*re;l.push(ye,be,De),l.push(be,ze,De),ae+=6}o.addGroup(d,ae,E),d+=ae,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class no extends hn{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,d=2*f+h,g=n*2+s,_=i+1,m=new X,p=new X;for(let T=0;T<=g;T++){let w=0,S=0,M=0,b=0;if(T<=n){const E=T/n,D=E*Math.PI/2;S=-u-e*Math.cos(D),M=e*Math.sin(D),b=-e*Math.cos(D),w=E*f}else if(T<=n+s){const E=(T-n)/s;S=-u+E*t,M=e,b=0,w=f+E*h}else{const E=(T-n-s)/n,D=E*Math.PI/2;S=u+e*Math.sin(D),M=e*Math.cos(D),b=e*Math.sin(D),w=f+h+E*f}const A=Math.max(0,Math.min(1,w/d));let x=0;T===0?x=.5/i:T===g&&(x=-.5/i);for(let E=0;E<=i;E++){const D=E/i,I=D*Math.PI*2,F=Math.sin(I),z=Math.cos(I);p.x=-M*z,p.y=S,p.z=M*F,o.push(p.x,p.y,p.z),m.set(-M*z,b,M*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(D+x,A)}if(T>0){const E=(T-1)*_;for(let D=0;D<i;D++){const I=E+D,F=E+D+1,z=T*_+D,U=T*_+D+1;a.push(I,F,z),a.push(F,U,z)}}}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Is extends hn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;T(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function T(){const S=new X,M=new X;let b=0;const A=(t-e)/n;for(let x=0;x<=s;x++){const E=[],D=x/s,I=D*(t-e)+e;for(let F=0;F<=i;F++){const z=F/i,U=z*l+o,k=Math.sin(U),Z=Math.cos(U);M.x=I*k,M.y=-D*n+m,M.z=I*Z,f.push(M.x,M.y,M.z),S.set(k,A,Z).normalize(),h.push(S.x,S.y,S.z),d.push(z,1-D),E.push(g++)}_.push(E)}for(let x=0;x<i;x++)for(let E=0;E<s;E++){const D=_[E][x],I=_[E+1][x],F=_[E+1][x+1],z=_[E][x+1];(e>0||E!==0)&&(u.push(D,I,z),b+=3),(t>0||E!==s-1)&&(u.push(I,F,z),b+=3)}c.addGroup(p,b,0),p+=b}function w(S){const M=g,b=new Ue,A=new X;let x=0;const E=S===!0?e:t,D=S===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,m*D,0),h.push(0,D,0),d.push(.5,.5),g++;const I=g;for(let F=0;F<=i;F++){const U=F/i*l+o,k=Math.cos(U),Z=Math.sin(U);A.x=E*Z,A.y=m*D,A.z=E*k,f.push(A.x,A.y,A.z),h.push(0,D,0),b.x=k*.5+.5,b.y=Z*.5*D+.5,d.push(b.x,b.y),g++}for(let F=0;F<i;F++){const z=M+F,U=I+F;S===!0?u.push(U,U+1,z):u.push(U+1,U,z),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kr extends hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*h-a;for(let w=0;w<c;w++){const S=w*f-s;g.push(S,-T,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const w=T+c*p,S=T+c*(p+1),M=T+1+c*(p+1),b=T+1+c*p;d.push(w,S,b),d.push(S,M,b)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class io extends hn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new X,h=new X,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],w=p/n,S=a+w*o,M=e*Math.cos(S),b=Math.sqrt(e*e-M*M);let A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const E=x/t,D=i+E*s;f.x=-b*Math.cos(D),f.y=M,f.z=b*Math.sin(D),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(E+A,1-w),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const w=u[p][T+1],S=u[p][T],M=u[p+1][T],b=u[p+1][T+1];(p!==0||a>0)&&d.push(w,S,b),(p!==n-1||l<Math.PI)&&d.push(S,M,b)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function lr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Qo(i))i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Qo(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function qt(r){const e={};for(let t=0;t<r.length;t++){const n=lr(r[t]);for(const i in n)e[i]=n[i]}return e}function Qo(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function lh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ic(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ch={clone:lr,merge:qt};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(i.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fh extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Da extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dh extends Da{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ph extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mh extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rc extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class _h extends rc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _a=new dt,jo=new X,el=new X;class gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;jo.setFromMatrixPosition(e.matrixWorld),t.position.copy(jo),el.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(el),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_a,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vs=new X,Ss=new pr,wn=new X;class sc extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vs,Ss,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ss,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vs,Ss,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,Ss,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ti=new X,tl=new Ue,nl=new Ue;class mn extends sc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ro extends sc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xh extends gh{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const $i=-90,Ji=1;class Sh extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mn($i,Ji,e,t);i.layers=this.layers,this.add(i);const s=new mn($i,Ji,e,t);s.layers=this.layers,this.add(s);const a=new mn($i,Ji,e,t);a.layers=this.layers,this.add(a);const o=new mn($i,Ji,e,t);o.layers=this.layers,this.add(o);const l=new mn($i,Ji,e,t);l.layers=this.layers,this.add(l);const c=new mn($i,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mh extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const il=new dt;class yh{constructor(e,t,n=0,i=1/0){this.ray=new ec(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return il.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(il),this}intersectObject(e,t=!0,n=[]){return La(e,this,n,t),n.sort(rl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)La(e[i],this,n,t);return n.sort(rl),n}}function rl(r,e){return r.distance-e.distance}function La(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)La(s[a],e,t,!0)}}class Eh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const wo=class wo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};wo.prototype.isMatrix2=!0;let sl=wo;function al(r,e,t,n){const i=Th(n);switch(t){case 1021:return r*e;case 1028:return r*e/i.components*i.byteLength;case 1029:return r*e/i.components*i.byteLength;case 1030:return r*e*2/i.components*i.byteLength;case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case 1023:return r*e*4/i.components*i.byteLength;case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Th(r){switch(r){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ac(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bh(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$h=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Ah,alphahash_pars_fragment:Rh,alphamap_fragment:wh,alphamap_pars_fragment:Ch,alphatest_fragment:Ph,alphatest_pars_fragment:Dh,aomap_fragment:Lh,aomap_pars_fragment:Ih,batching_pars_vertex:Uh,batching_vertex:Fh,begin_vertex:Nh,beginnormal_vertex:Oh,bsdfs:Bh,iridescence_fragment:Gh,bumpmap_pars_fragment:zh,clipping_planes_fragment:kh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Hh,clipping_planes_vertex:Wh,color_fragment:Xh,color_pars_fragment:qh,color_pars_vertex:Yh,color_vertex:Kh,common:Zh,cube_uv_reflection_fragment:$h,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:jh,emissivemap_fragment:ef,emissivemap_pars_fragment:tf,colorspace_fragment:nf,colorspace_pars_fragment:rf,envmap_fragment:sf,envmap_common_pars_fragment:af,envmap_pars_fragment:of,envmap_pars_vertex:lf,envmap_physical_pars_fragment:vf,envmap_vertex:cf,fog_vertex:uf,fog_pars_vertex:hf,fog_fragment:ff,fog_pars_fragment:df,gradientmap_pars_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:gf,lights_pars_begin:xf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Mf,lights_phong_fragment:yf,lights_phong_pars_fragment:Ef,lights_physical_fragment:Tf,lights_physical_pars_fragment:bf,lights_fragment_begin:Af,lights_fragment_maps:Rf,lights_fragment_end:wf,lightprobes_pars_fragment:Cf,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:If,map_fragment:Uf,map_pars_fragment:Ff,map_particle_fragment:Nf,map_particle_pars_fragment:Of,metalnessmap_fragment:Bf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:zf,morphcolor_vertex:kf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:Kf,normal_vertex:Zf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Qf,clearcoat_pars_fragment:jf,iridescence_pars_fragment:ed,opaque_fragment:td,packing:nd,premultiplied_alpha_fragment:id,project_vertex:rd,dithering_fragment:sd,dithering_pars_fragment:ad,roughnessmap_fragment:od,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ud,shadowmap_vertex:hd,shadowmask_pars_fragment:fd,skinbase_vertex:dd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:_d,specularmap_fragment:gd,specularmap_pars_fragment:xd,tonemapping_fragment:vd,tonemapping_pars_fragment:Sd,transmission_fragment:Md,transmission_pars_fragment:yd,uv_pars_fragment:Ed,uv_pars_vertex:Td,uv_vertex:bd,worldpos_vertex:Ad,background_vert:Rd,background_frag:wd,backgroundCube_vert:Cd,backgroundCube_frag:Pd,cube_vert:Dd,cube_frag:Ld,depth_vert:Id,depth_frag:Ud,distance_vert:Fd,distance_frag:Nd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:Gd,linedashed_frag:zd,meshbasic_vert:kd,meshbasic_frag:Vd,meshlambert_vert:Hd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:qd,meshnormal_vert:Yd,meshnormal_frag:Kd,meshphong_vert:Zd,meshphong_frag:$d,meshphysical_vert:Jd,meshphysical_frag:Qd,meshtoon_vert:jd,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:rp,sprite_vert:sp,sprite_frag:ap},me={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Dn={basic:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qt([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qt([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qt([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:qt([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:qt([me.lights,me.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Dn.physical={uniforms:qt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ms={r:0,b:0,g:0},op=new dt,oc=new Ie;oc.set(-1,0,0,0,1,0,0,0,1);function lp(r,e,t,n,i,s){const a=new He(0);let o=i===!0?0:1,l,c,u=null,f=0,h=null;function d(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const S=T.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(T){let w=!1;const S=d(T);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(T,w){const S=d(w);S&&(S.isCubeTexture||S.mapping===306)?(c===void 0&&(c=new Kt(new Yr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:lr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(op.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(oc),c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==nt,(u!==S||f!==S.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Kt(new Kr(2,2),new bn({name:"BackgroundMaterial",uniforms:lr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB(Ms,ic(r)),t.buffers.color.setClear(Ms.r,Ms.g,Ms.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:_,dispose:p}}function cp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(I,F,z,U,k){let Z=!1;const W=f(I,U,z,F);s!==W&&(s=W,c(s.object)),Z=d(I,U,z,k),Z&&g(I,U,z,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(I,F,z,U),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function u(I){return r.deleteVertexArray(I)}function f(I,F,z,U){const k=U.wireframe===!0;let Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);const W=I.isInstancedMesh===!0?I.id:0;let ae=Z[W];ae===void 0&&(ae={},Z[W]=ae);let Q=ae[z.id];Q===void 0&&(Q={},ae[z.id]=Q);let re=Q[k];return re===void 0&&(re=h(l()),Q[k]=re),re}function h(I){const F=[],z=[],U=[];for(let k=0;k<t;k++)F[k]=0,z[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:U,object:I,attributes:{},index:null}}function d(I,F,z,U){const k=s.attributes,Z=F.attributes;let W=0;const ae=z.getAttributes();for(const Q in ae)if(ae[Q].location>=0){const oe=k[Q];let ye=Z[Q];if(ye===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),oe===void 0||oe.attribute!==ye||ye&&oe.data!==ye.data)return!0;W++}return s.attributesNum!==W||s.index!==U}function g(I,F,z,U){const k={},Z=F.attributes;let W=0;const ae=z.getAttributes();for(const Q in ae)if(ae[Q].location>=0){let oe=Z[Q];oe===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));const ye={};ye.attribute=oe,oe&&oe.data&&(ye.data=oe.data),k[Q]=ye,W++}s.attributes=k,s.attributesNum=W,s.index=U}function _(){const I=s.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const z=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;z[I]=1,U[I]===0&&(r.enableVertexAttribArray(I),U[I]=1),k[I]!==F&&(r.vertexAttribDivisor(I,F),k[I]=F)}function T(){const I=s.newAttributes,F=s.enabledAttributes;for(let z=0,U=F.length;z<U;z++)F[z]!==I[z]&&(r.disableVertexAttribArray(z),F[z]=0)}function w(I,F,z,U,k,Z,W){W===!0?r.vertexAttribIPointer(I,F,z,k,Z):r.vertexAttribPointer(I,F,z,U,k,Z)}function S(I,F,z,U){_();const k=U.attributes,Z=z.getAttributes(),W=F.defaultAttributeValues;for(const ae in Z){const Q=Z[ae];if(Q.location>=0){let re=k[ae];if(re===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){const oe=re.normalized,ye=re.itemSize,be=e.get(re);if(be===void 0)continue;const ze=be.buffer,De=be.type,Je=be.bytesPerElement,te=De===r.INT||De===r.UNSIGNED_INT||re.gpuType===1013;if(re.isInterleavedBufferAttribute){const se=re.data,Se=se.stride,Le=re.offset;if(se.isInstancedInterleavedBuffer){for(let xe=0;xe<Q.locationSize;xe++)p(Q.location+xe,se.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<Q.locationSize;xe++)m(Q.location+xe);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let xe=0;xe<Q.locationSize;xe++)w(Q.location+xe,ye/Q.locationSize,De,oe,Se*Je,(Le+ye/Q.locationSize*xe)*Je,te)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<Q.locationSize;se++)p(Q.location+se,re.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<Q.locationSize;se++)m(Q.location+se);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let se=0;se<Q.locationSize;se++)w(Q.location+se,ye/Q.locationSize,De,oe,ye*Je,ye/Q.locationSize*se*Je,te)}}else if(W!==void 0){const oe=W[ae];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(Q.location,oe);break;case 3:r.vertexAttrib3fv(Q.location,oe);break;case 4:r.vertexAttrib4fv(Q.location,oe);break;default:r.vertexAttrib1fv(Q.location,oe)}}}}T()}function M(){E();for(const I in n){const F=n[I];for(const z in F){const U=F[z];for(const k in U){const Z=U[k];for(const W in Z)u(Z[W].object),delete Z[W];delete U[k]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const z in F){const U=F[z];for(const k in U){const Z=U[k];for(const W in Z)u(Z[W].object),delete Z[W];delete U[k]}}delete n[I.id]}function A(I){for(const F in n){const z=n[F];for(const U in z){const k=z[U];if(k[I.id]===void 0)continue;const Z=k[I.id];for(const W in Z)u(Z[W].object),delete Z[W];delete k[I.id]}}}function x(I){for(const F in n){const z=n[F],U=I.isInstancedMesh===!0?I.id:0,k=z[U];if(k!==void 0){for(const Z in k){const W=k[Z];for(const ae in W)u(W[ae].object),delete W[ae];delete k[Z]}delete z[U],Object.keys(z).length===0&&delete n[F]}}}function E(){D(),a=!0,s!==i&&(s=i,c(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function up(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function hp(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==1023&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==1009&&A!==1015&&!x&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Pe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:S,maxSamples:M,samples:b}}function fp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ni,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,w=T*4;let S=p.clippingState||null;l.value=S,S=u(g,h,w,d);for(let M=0;M!==w;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=d;w!==_;++w,S+=4)a.copy(f[w]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const er=4,dp=6,pp=20,mp=256,br=new ro,ol=new He;let ga=null,xa=0,va=0,Sa=!1;const _p=new X,Mi=new X;class ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=_p}=s;ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,xa,va),this._renderer.xr.enabled=Sa,e.scissorTest=!1,Qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:ws,depthBuffer:!1},i=cl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gp(s)),this._blurMaterial=vp(s,e,t),this._ggxMaterial=xp(s,e,t)}return i}_compileMaterial(e){const t=new Kt(new hn,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,i,s){const l=new mn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ol),f.toneMapping=0,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kt(new Yr,new eo({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(ol),p=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const M=this._cubeSize;Qi(i,S*M,w>2?M:0,M,M),f.setRenderTarget(i),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ul());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-er?n-g+er:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Qi(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Qi(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,br)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],f=3*u*(i>this._lodMax-er?i-this._lodMax+er:0),h=4*(this._cubeSize-u);Qi(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,br)}}function gp(r){const e=[],t=[];let n=r;const i=r-er+1+dp;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),_=new Float32Array(d*h*f);for(let p=0;p<f;p++){const T=p%3*2/3-1,w=p>2?0:-1,S=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];g.set(S,d*h*p);for(let M=0;M<h;M++){const b=u[M*2]*2-1,A=u[M*2+1]*2-1;p===0?Mi.set(1,A,b):p===1?Mi.set(-b,1,-A):p===2?Mi.set(-b,A,1):p===3?Mi.set(-1,A,-b):p===4?Mi.set(-b,-1,A):Mi.set(b,A,-1),Mi.toArray(_,(p*h+M)*d)}}const m=new hn;m.setAttribute("position",new Un(g,d)),m.setAttribute("outputDirection",new Un(_,d)),t.push(new Kt(m,null)),n>er&&n--}return{lodMeshes:t,sizeLods:e}}function cl(r,e,t){const n=new Tn(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xp(r,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vp(r,e,t){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:pp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ul(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lc extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new tc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Yr(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new Kt(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Sp(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===303||d===304)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new lc(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,g=d===303||d===304,_=d===301||d===302;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new ll(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const T=h.image;return g&&T&&T.height>0||_&&T&&l(T)?(n===null&&(n=new ll(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===303?h.mapping=301:d===304&&(h.mapping=302),h}function l(h){let d=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&d++;return d===g}function c(h){const d=h.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Mp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ir("WebGLRenderer: "+n+" extension not supported."),i}}}function yp(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const T=d.array;_=d.version;for(let w=0,S=T.length;w<S;w+=3){const M=T[w+0],b=T[w+1],A=T[w+2];h.push(M,b,b,A,A,M)}}else{const T=g.array;_=g.version;for(let w=0,S=T.length/3-1;w<S;w+=3){const M=w+0,b=w+1,A=w+2;h.push(M,b,b,A,A,M)}}const m=new(g.count>=65535?Jl:$l)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ep(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let _=0;for(let m=0;m<d;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Tp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bp(r,e,t){const n=new WeakMap,i=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var d=D;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let M=o.attributes.position.count*S,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*b*4*f),x=new Kl(A,M,b,f);x.type=1015,x.needsUpdate=!0;const E=S*4;for(let I=0;I<f;I++){const F=p[I],z=T[I],U=w[I],k=M*b*4*I;for(let Z=0;Z<F.count;Z++){const W=Z*E;g===!0&&(i.fromBufferAttribute(F,Z),A[k+W+0]=i.x,A[k+W+1]=i.y,A[k+W+2]=i.z,A[k+W+3]=0),_===!0&&(i.fromBufferAttribute(z,Z),A[k+W+4]=i.x,A[k+W+5]=i.y,A[k+W+6]=i.z,A[k+W+7]=0),m===!0&&(i.fromBufferAttribute(U,Z),A[k+W+8]=i.x,A[k+W+9]=i.y,A[k+W+10]=i.z,A[k+W+11]=U.itemSize===4?i.w:1)}}h={count:f,texture:x,size:new Ue(M,b)},n.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Ap(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Rp={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function wp(r,e,t,n,i,s){const a=new Tn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new hn;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));const u=new fh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Kt(c,u),h=new ro(-1,1,1,-1,0,1);let d=null,g=null,_=!1,m,p=null,T=[],w=!1;this.setSize=function(S,M){a.setSize(S,M),o!==null&&o.setSize(S,M),l!==null&&l.setSize(S,M);for(let b=0;b<T.length;b++){const A=T[b];A.setSize&&A.setSize(S,M)}},this.setEffects=function(S){T=S,w=T.length>0&&T[0].isRenderPass===!0;const M=a.width,b=a.height;T.length>0&&o===null&&(o=new Tn(M,b,{type:1016,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(M,b,{type:1016,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<T.length;A++){const x=T[A];x.setSize&&x.setSize(M,b)}},this.begin=function(S,M){if(_||S.toneMapping===0&&T.length===0)return!1;if(p=M,M!==null){const b=M.width,A=M.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return w===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=0,!0},this.hasRenderPass=function(){return w},this.end=function(S,M){S.toneMapping=m,_=!0;let b=a,A=o;for(let x=0;x<T.length;x++){const E=T[x];E.enabled!==!1&&(E.render(S,A,b,M),E.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},Ke.getTransfer(d)===nt&&(u.defines.SRGB_TRANSFER="");const x=Rp[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(f,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const cc=new kt,Ia=new Or(1,1),uc=new Kl,hc=new ku,fc=new tc,fl=[],dl=[],pl=new Float32Array(16),ml=new Float32Array(9),_l=new Float32Array(4);function _r(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=fl[i];if(s===void 0&&(s=new Float32Array(i),fl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Hs(r,e){let t=dl[e];t===void 0&&(t=new Int32Array(e),dl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function Dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function Lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function Ip(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;_l.set(n),r.uniformMatrix2fv(this.addr,!1,_l),Ct(t,n)}}function Up(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;ml.set(n),r.uniformMatrix3fv(this.addr,!1,ml),Ct(t,n)}}function Fp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(wt(t,n))return;pl.set(n),r.uniformMatrix4fv(this.addr,!1,pl),Ct(t,n)}}function Np(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function Bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function zp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function Hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function Wp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ia.compareFunction=t.isReversedDepthBuffer()?518:515,s=Ia):s=cc,t.setTexture2D(e||s,i)}function Xp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hc,i)}function qp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fc,i)}function Yp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uc,i)}function Kp(r){switch(r){case 5126:return Cp;case 35664:return Pp;case 35665:return Dp;case 35666:return Lp;case 35674:return Ip;case 35675:return Up;case 35676:return Fp;case 5124:case 35670:return Np;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return Gp;case 5125:return zp;case 36294:return kp;case 36295:return Vp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(r,e){r.uniform1fv(this.addr,e)}function $p(r,e){const t=_r(e,this.size,2);r.uniform2fv(this.addr,t)}function Jp(r,e){const t=_r(e,this.size,3);r.uniform3fv(this.addr,t)}function Qp(r,e){const t=_r(e,this.size,4);r.uniform4fv(this.addr,t)}function jp(r,e){const t=_r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function em(r,e){const t=_r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tm(r,e){const t=_r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nm(r,e){r.uniform1iv(this.addr,e)}function im(r,e){r.uniform2iv(this.addr,e)}function rm(r,e){r.uniform3iv(this.addr,e)}function sm(r,e){r.uniform4iv(this.addr,e)}function am(r,e){r.uniform1uiv(this.addr,e)}function om(r,e){r.uniform2uiv(this.addr,e)}function lm(r,e){r.uniform3uiv(this.addr,e)}function cm(r,e){r.uniform4uiv(this.addr,e)}function um(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Ia:a=cc;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function hm(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hc,s[a])}function fm(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||fc,s[a])}function dm(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||uc,s[a])}function pm(r){switch(r){case 5126:return Zp;case 35664:return $p;case 35665:return Jp;case 35666:return Qp;case 35674:return jp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return dm}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}}class _m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function gl(r,e){r.seq.push(e),r.map[e.id]=e}function xm(r,e,t){const n=r.name,i=n.length;for(Ma.lastIndex=0;;){const s=Ma.exec(n),a=Ma.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){gl(t,c===void 0?new mm(o,r,e):new _m(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new gm(o),gl(t,f)),t=f}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);xm(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function xl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const vm=37297;let Sm=0;function Mm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const vl=new Ie;function ym(r){Ke._getMatrix(vl,Ke.workingColorSpace,r);const e=`mat3( ${vl.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case Cs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Sl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Mm(r.getShaderSource(e),o)}else return s}function Em(r,e){const t=ym(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Tm={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function bm(r,e){const t=Tm[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ys=new X;function Am(){Ke.getLuminanceCoefficients(ys);const r=ys.x.toFixed(4),e=ys.y.toFixed(4),t=ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function wm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function wr(r){return r!==""}function Ml(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(r){return r.replace(Pm,Lm)}const Dm=new Map;function Lm(r,e){let t=Ge[e];if(t===void 0){const n=Dm.get(e);if(n!==void 0)t=Ge[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ua(t)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(r){return r.replace(Im,Um)}function Um(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Fm={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Nm(r){return Fm[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Om={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Bm(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Om[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Gm={302:"ENVMAP_MODE_REFRACTION"};function zm(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Gm[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const km={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Vm(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":km[r.combine]||"ENVMAP_BLENDING_NONE"}function Hm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Nm(t),c=Bm(t),u=zm(t),f=Vm(t),h=Hm(t),d=Rm(t),g=wm(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ge.tonemapping_pars_fragment:"",t.toneMapping!==0?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Em("linearToOutputTexel",t.outputColorSpace),Am(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=Ua(a),a=Ml(a,t),a=yl(a,t),o=Ua(o),o=Ml(o,t),o=yl(o,t),a=El(a),o=El(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=T+m+a,S=T+p+o,M=xl(i,i.VERTEX_SHADER,w),b=xl(i,i.FRAGMENT_SHADER,S);i.attachShader(_,M),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(I){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(M)||"",U=i.getShaderInfoLog(b)||"",k=F.trim(),Z=z.trim(),W=U.trim();let ae=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,b);else{const re=Sl(i,M,"vertex"),oe=Sl(i,b,"fragment");$e("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+re+`
`+oe)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(Z===""||W==="")&&(Q=!1);Q&&(I.diagnostics={runnable:ae,programLog:k,vertexShader:{log:Z,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(M),i.deleteShader(b),x=new Ts(i,_),E=Cm(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(_,vm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let Xm=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ym(e),t.set(e,n)),n}}class Ym{constructor(e){this.id=Xm++,this.code=e,this.usedTimes=0}}function Km(r){return r===1030||r===37490||r===36285}function Zm(r,e,t,n,i,s){const a=new Qa,o=new qm,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,D,I,F,z){const U=I.fog,k=F.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ae=e.get(x.envMap||Z,W),Q=ae&&ae.mapping===306?ae.image.height:null,re=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ye=oe!==void 0?oe.length:0;let be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let ze,De,Je,te;if(re){const ue=Dn[re];ze=ue.vertexShader,De=ue.fragmentShader}else{ze=x.vertexShader,De=x.fragmentShader;const ue=o.getVertexShaderStage(x),pe=o.getFragmentShaderStage(x);o.update(x,ue,pe),Je=ue.id,te=pe.id}const se=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,Ne=!!x.map,St=!!x.matcap,ke=!!ae,Ye=!!x.aoMap,tt=!!x.lightMap,Ve=!!x.bumpMap&&x.wireframe===!1,st=!!x.normalMap,Mt=!!x.displacementMap,Ft=!!x.emissiveMap,at=!!x.metalnessMap,pt=!!x.roughnessMap,G=x.anisotropy>0,Tt=x.clearcoat>0,Qe=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,V=x.sheen>0,K=x.transmission>0,j=G&&!!x.anisotropyMap,le=Tt&&!!x.clearcoatMap,ce=Tt&&!!x.clearcoatNormalMap,ne=Tt&&!!x.clearcoatRoughnessMap,ie=v&&!!x.iridescenceMap,he=v&&!!x.iridescenceThicknessMap,Ae=V&&!!x.sheenColorMap,de=V&&!!x.sheenRoughnessMap,fe=!!x.specularMap,we=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Fe=K&&!!x.transmissionMap,B=K&&!!x.thicknessMap,R=!!x.gradientMap,C=!!x.alphaMap,L=x.alphaTest>0,H=!!x.alphaHash,O=!!x.extensions;let J=0;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(J=r.toneMapping);const ee={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:De,defines:x.defines,customVertexShaderID:Je,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:St,envMap:ke,envMapMode:ke&&ae.mapping,envMapCubeUVHeight:Q,aoMap:Ye,lightMap:tt,bumpMap:Ve,normalMap:st,displacementMap:Mt,emissiveMap:Ft,normalMapObjectSpace:st&&x.normalMapType===1,normalMapTangentSpace:st&&x.normalMapType===0,packedNormalMap:st&&x.normalMapType===0&&Km(x.normalMap.format),metalnessMap:at,roughnessMap:pt,anisotropy:G,anisotropyMap:j,clearcoat:Tt,clearcoatMap:le,clearcoatNormalMap:ce,clearcoatRoughnessMap:ne,dispersion:Qe,retroreflection:P,iridescence:v,iridescenceMap:ie,iridescenceThicknessMap:he,sheen:V,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:fe,specularColorMap:we,specularIntensityMap:Ce,transmission:K,transmissionMap:Fe,thicknessMap:B,gradientMap:R,opaque:x.transparent===!1&&x.blending===1&&x.alphaToCoverage===!1,alphaMap:C,alphaTest:L,alphaHash:H,combine:x.combine,mapUv:Ne&&g(x.map.channel),aoMapUv:Ye&&g(x.aoMap.channel),lightMapUv:tt&&g(x.lightMap.channel),bumpMapUv:Ve&&g(x.bumpMap.channel),normalMapUv:st&&g(x.normalMap.channel),displacementMapUv:Mt&&g(x.displacementMap.channel),emissiveMapUv:Ft&&g(x.emissiveMap.channel),metalnessMapUv:at&&g(x.metalnessMap.channel),roughnessMapUv:pt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:le&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:we&&g(x.specularColorMap.channel),specularIntensityMapUv:Ce&&g(x.specularIntensityMap.channel),transmissionMapUv:Fe&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:C&&g(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(st||G),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Ne||C),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&st===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:be,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:J,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:O&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(E,x),T(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function T(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const E=d[x.type];let D;if(E){const I=Dn[E];D=ch.clone(I.uniforms)}else D=x.uniforms;return D}function S(x,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new Wm(r,E,x,i),c.push(D),u.set(E,D)),D}function M(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:A}}function $m(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Jm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function bl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Al(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,_,m,p){let T=r[e];return T===void 0?(T={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},r[e]=T):(T.id=h.id,T.object=h,T.geometry=d,T.material=g,T.materialVariant=a(h),T.groupOrder=_,T.renderOrder=h.renderOrder,T.z=m,T.group=p),e++,T}function l(h,d,g,_,m,p,T){T.reversedDepth===!0&&(m=-m);const w=o(h,d,g,_,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function c(h,d,g,_,m,p){const T=o(h,d,g,_,m,p);g.transmission>0?n.unshift(T):g.transparent===!0?i.unshift(T):t.unshift(T)}function u(h,d){t.length>1&&t.sort(h||Jm),n.length>1&&n.sort(d||bl),i.length>1&&i.sort(d||bl)}function f(){for(let h=e,d=r.length;h<d;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function Qm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Al,r.set(n,[a])):i>=s.length?(a=new Al,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function jm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new He};break;case"SpotLight":t={position:new X,direction:new X,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function e_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let t_=0;function n_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function i_(r){const e=new jm,t=e_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new dt,a=new dt;function o(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,w=0,S=0,M=0,b=0,A=0,x=0,E=0,D=0;c.sort(n_);for(let F=0,z=c.length;F<z;F++){const U=c[F],k=U.color,Z=U.intensity,W=U.distance;let ae=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===1030?ae=U.shadow.map.texture:ae=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=k.r*Z,f+=k.g*Z,h+=k.b*Z;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(U.sh.coefficients[Q],Z);D++}else if(U.isSunLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,oe=t.get(U);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[g]=oe,n.sunShadowMap[g]=ae;const ye=re.getViewportCount();for(let be=0;be<ye;be++)n.sunShadowMatrix[_+be]=re.getMatrix(be),n.sunShadowCascade[_+be]=re._cascadeData[be];_+=ye,g++}n.sun[d]=Q,d++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const re=U.shadow,oe=t.get(U);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,n.directionalShadow[m]=oe,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=U.shadow.matrix,M++}n.directional[m]=Q,m++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(k).multiplyScalar(Z),Q.distance=W,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,n.spot[T]=Q;const re=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,re.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[T]=re.matrix,U.castShadow){const oe=t.get(U);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,n.spotShadow[T]=oe,n.spotShadowMap[T]=ae,A++}T++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(k).multiplyScalar(Z),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),n.rectArea[w]=Q,w++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const re=U.shadow,oe=t.get(U);oe.shadowIntensity=re.intensity,oe.shadowBias=re.bias,oe.shadowNormalBias=re.normalBias,oe.shadowRadius=re.radius,oe.shadowMapSize=re.mapSize,oe.shadowCameraNear=re.camera.near,oe.shadowCameraFar=re.camera.far,n.pointShadow[p]=oe,n.pointShadowMap[p]=ae,n.pointShadowMatrix[p]=U.shadow.matrix,b++}n.point[p]=Q,p++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(Z),Q.groundColor.copy(U.groundColor).multiplyScalar(Z),n.hemi[S]=Q,S++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==T||I.rectAreaLength!==w||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==A||I.numSpotMaps!==x||I.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=m,n.spot.length=T,n.rectArea.length=w,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=D,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=T,I.rectAreaLength=w,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=A,I.numSpotMaps=x,I.numLightProbes=D,n.version=t_++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let T=0,w=c.length;T<w;T++){const S=c[T];if(S.isSunLight){const M=n.sun[f];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(S.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const M=n.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Rl(r){const e=new i_(r),t=[],n=[],i=[];function s(h){f.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function r_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Rl(r),e.set(i,[o])):s>=a.length?(o=new Rl(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o_=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],l_=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],wl=new dt,Ar=new X,ya=new X;function c_(r,e,t){let n=new to;const i=new Ue,s=new Ue,a=new gt,o=new ph,l=new mh,c={},u=t.maxTextureSize,f={0:1,1:0,2:2},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:s_,fragmentShader:a_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Kt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(b,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===2&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const E=r.getRenderTarget(),D=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),F=r.state;F.setBlending(0),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&A.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=b.length;U<k;U++){const Z=b[U],W=Z.shadow;if(W===void 0){Pe("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ae=W.getFrameExtents();i.multiply(ae),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ae.x),i.x=s.x*ae.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ae.y),i.y=s.y*ae.y,W.mapSize.y=s.y));const Q=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Q,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===3){if(Z.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Tn(i.x,i.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new Or(i.x,i.y,1015),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=1026,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=1003,W.map.depthTexture.magFilter=1003}else Z.isPointLight?(W.map=new lc(i.x),W.map.depthTexture=new oh(i.x,1014)):(W.map=new Tn(i.x,i.y),W.map.depthTexture=new Or(i.x,i.y,1014)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=1026,this.type===1?(W.map.depthTexture.compareFunction=Q?518:515,W.map.depthTexture.minFilter=1006,W.map.depthTexture.magFilter=1006):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=1003,W.map.depthTexture.magFilter=1003);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const re=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Z.isPointLight!==!0&&W.updateMatrices(Z,x);for(let oe=0;oe<re;oe++){const ye=W.getCamera(oe);if(Z.isPointLight){const be=W.camera,ze=W.matrix,De=Z.distance||be.far;De!==be.far&&(be.far=De,be.updateProjectionMatrix()),Ar.setFromMatrixPosition(Z.matrixWorld),be.position.copy(Ar),ya.copy(be.position),ya.add(o_[oe]),be.up.copy(l_[oe]),be.lookAt(ya),be.updateMatrixWorld(),ze.makeTranslation(-Ar.x,-Ar.y,-Ar.z),wl.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),W._frustum.setFromProjectionMatrix(wl,be.coordinateSystem,be.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,oe),r.clear();else{oe===0&&(r.setRenderTarget(W.map),r.clear());const be=W.getViewport(oe);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),F.viewport(a)}n=W.getFrustum(oe),S(A,x,ye,Z,this.type)}W.isPointLightShadow!==!0&&this.type===3&&T(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,D,I)};function T(b,A){const x=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Tn(i.x,i.y,{format:1030,type:1016}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,x,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,x,d,_,null)}function w(b,A,x,E){let D=null;const I=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)D=I;else if(D=x.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=D.uuid,z=A.uuid;let U=c[F];U===void 0&&(U={},c[F]=U);let k=U[z];k===void 0&&(k=D.clone(),U[z]=k,A.addEventListener("dispose",M)),D=k}if(D.visible=A.visible,D.wireframe=A.wireframe,E===3?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:f[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=r.properties.get(D);F.light=x}return D}function S(b,A,x,E,D){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===3)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const z=e.update(b),U=b.material;if(Array.isArray(U)){const k=z.groups;for(let Z=0,W=k.length;Z<W;Z++){const ae=k[Z],Q=U[ae.materialIndex];if(Q&&Q.visible){const re=w(b,Q,E,D);b.onBeforeShadow(r,b,A,x,z,re,ae),r.renderBufferDirect(x,null,z,re,b,ae),b.onAfterShadow(r,b,A,x,z,re,ae)}}}else if(U.visible){const k=w(b,U,E,D);b.onBeforeShadow(r,b,A,x,z,k,null),r.renderBufferDirect(x,null,z,k,b,null),b.onAfterShadow(r,b,A,x,z,k,null)}}const F=b.children;for(let z=0,U=F.length;z<U;z++)S(F[z],A,x,E,D)}function M(b){b.target.removeEventListener("dispose",M);for(const x in c){const E=c[x],D=b.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function u_(r,e){function t(){let B=!1;const R=new gt;let C=null;const L=new gt(0,0,0,0);return{setMask:function(H){C!==H&&!B&&(r.colorMask(H,H,H,H),C=H)},setLocked:function(H){B=H},setClear:function(H,O,J,ee,ue){ue===!0&&(H*=ee,O*=ee,J*=ee),R.set(H,O,J,ee),L.equals(R)===!1&&(r.clearColor(H,O,J,ee),L.copy(R))},reset:function(){B=!1,C=null,L.set(-1,0,0,0)}}}function n(){let B=!1,R=!1,C=null,L=null,H=null;return{setReversed:function(O){if(R!==O){const J=e.get("EXT_clip_control");O?J.clipControlEXT(J.LOWER_LEFT_EXT,J.ZERO_TO_ONE_EXT):J.clipControlEXT(J.LOWER_LEFT_EXT,J.NEGATIVE_ONE_TO_ONE_EXT),R=O;const ee=H;H=null,this.setClear(ee)}},getReversed:function(){return R},setTest:function(O){O?se(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(O){C!==O&&!B&&(r.depthMask(O),C=O)},setFunc:function(O){if(R&&(O=xu[O]),L!==O){switch(O){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}L=O}},setLocked:function(O){B=O},setClear:function(O){H!==O&&(H=O,R&&(O=1-O),r.clearDepth(O))},reset:function(){B=!1,C=null,L=null,H=null,R=!1}}}function i(){let B=!1,R=null,C=null,L=null,H=null,O=null,J=null,ee=null,ue=null;return{setTest:function(pe){B||(pe?se(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(pe){R!==pe&&!B&&(r.stencilMask(pe),R=pe)},setFunc:function(pe,Oe,We){(C!==pe||L!==Oe||H!==We)&&(r.stencilFunc(pe,Oe,We),C=pe,L=Oe,H=We)},setOp:function(pe,Oe,We){(O!==pe||J!==Oe||ee!==We)&&(r.stencilOp(pe,Oe,We),O=pe,J=Oe,ee=We)},setLocked:function(pe){B=pe},setClear:function(pe){ue!==pe&&(r.clearStencil(pe),ue=pe)},reset:function(){B=!1,R=null,C=null,L=null,H=null,O=null,J=null,ee=null,ue=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,g=[],_=null,m=!1,p=null,T=null,w=null,S=null,M=null,b=null,A=null,x=new He(0,0,0),E=0,D=!1,I=null,F=null,z=null,U=null,k=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ae=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=ae>=1):Q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=ae>=2);let re=null,oe={};const ye=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),ze=new gt().fromArray(ye),De=new gt().fromArray(be);function Je(B,R,C,L){const H=new Uint8Array(4),O=r.createTexture();r.bindTexture(B,O),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let J=0;J<C;J++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(R,0,r.RGBA,1,1,L,0,r.RGBA,r.UNSIGNED_BYTE,H):r.texImage2D(R+J,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,H);return O}const te={};te[r.TEXTURE_2D]=Je(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(3),Ve(!1),st(1),se(r.CULL_FACE),Ye(0);function se(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function Se(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function Le(B,R){return h[B]!==R?(r.bindFramebuffer(B,R),h[B]=R,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=R),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=R),!0):!1}function xe(B,R){let C=g,L=!1;if(B){C=d.get(R),C===void 0&&(C=[],d.set(R,C));const H=B.textures;if(C.length!==H.length||C[0]!==r.COLOR_ATTACHMENT0){for(let O=0,J=H.length;O<J;O++)C[O]=r.COLOR_ATTACHMENT0+O;C.length=H.length,L=!0}}else C[0]!==r.BACK&&(C[0]=r.BACK,L=!0);L&&r.drawBuffers(C)}function Ne(B){return _!==B?(r.useProgram(B),_=B,!0):!1}const St={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};St[103]=r.MIN,St[104]=r.MAX;const ke={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function Ye(B,R,C,L,H,O,J,ee,ue,pe){if(B===0){m===!0&&(Se(r.BLEND),m=!1);return}if(m===!1&&(se(r.BLEND),m=!0),B!==5){if(B!==p||pe!==D){if((T!==100||M!==100)&&(r.blendEquation(r.FUNC_ADD),T=100,M=100),pe)switch(B){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:$e("WebGLState: Invalid blending: ",B);break}else switch(B){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case 3:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",B);break}w=null,S=null,b=null,A=null,x.set(0,0,0),E=0,p=B,D=pe}return}H=H||R,O=O||C,J=J||L,(R!==T||H!==M)&&(r.blendEquationSeparate(St[R],St[H]),T=R,M=H),(C!==w||L!==S||O!==b||J!==A)&&(r.blendFuncSeparate(ke[C],ke[L],ke[O],ke[J]),w=C,S=L,b=O,A=J),(ee.equals(x)===!1||ue!==E)&&(r.blendColor(ee.r,ee.g,ee.b,ue),x.copy(ee),E=ue),p=B,D=!1}function tt(B,R){B.side===2?Se(r.CULL_FACE):se(r.CULL_FACE);let C=B.side===1;R&&(C=!C),Ve(C),B.blending===1&&B.transparent===!1?Ye(0):Ye(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const L=B.stencilWrite;o.setTest(L),L&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ft(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(B){I!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),I=B)}function st(B){B!==0?(se(r.CULL_FACE),B!==F&&(B===1?r.cullFace(r.BACK):B===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),F=B}function Mt(B){B!==z&&(W&&r.lineWidth(B),z=B)}function Ft(B,R,C){B?(se(r.POLYGON_OFFSET_FILL),(U!==R||k!==C)&&(U=R,k=C,a.getReversed()&&(R=-R),r.polygonOffset(R,C))):Se(r.POLYGON_OFFSET_FILL)}function at(B){B?se(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function pt(B){B===void 0&&(B=r.TEXTURE0+Z-1),re!==B&&(r.activeTexture(B),re=B)}function G(B,R,C){C===void 0&&(re===null?C=r.TEXTURE0+Z-1:C=re);let L=oe[C];L===void 0&&(L={type:void 0,texture:void 0},oe[C]=L),(L.type!==B||L.texture!==R)&&(re!==C&&(r.activeTexture(C),re=C),r.bindTexture(B,R||te[B]),L.type=B,L.texture=R)}function Tt(){const B=oe[re];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function v(){try{r.texSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function V(){try{r.texSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function j(){try{r.compressedTexSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function le(){try{r.texStorage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function ce(){try{r.texStorage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function ne(){try{r.texImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function ie(){try{r.texImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function he(B){return f[B]!==void 0?f[B]:r.getParameter(B)}function Ae(B,R){f[B]!==R&&(r.pixelStorei(B,R),f[B]=R)}function de(B){ze.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),ze.copy(B))}function fe(B){De.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),De.copy(B))}function we(B,R){let C=c.get(R);C===void 0&&(C=new WeakMap,c.set(R,C));let L=C.get(B);L===void 0&&(L=r.getUniformBlockIndex(R,B.name),C.set(B,L))}function Ce(B,R){const L=c.get(R).get(B);l.get(R)!==L&&(r.uniformBlockBinding(R,L,B.__bindingPointIndex),l.set(R,L))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},re=null,oe={},h={},d=new WeakMap,g=[],_=null,m=!1,p=null,T=null,w=null,S=null,M=null,b=null,A=null,x=new He(0,0,0),E=0,D=!1,I=null,F=null,z=null,U=null,k=null,ze.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Se,bindFramebuffer:Le,drawBuffers:xe,useProgram:Ne,setBlending:Ye,setMaterial:tt,setFlipSided:Ve,setCullFace:st,setLineWidth:Mt,setPolygonOffset:Ft,setScissorTest:at,activeTexture:pt,bindTexture:G,unbindTexture:Tt,compressedTexImage2D:Qe,compressedTexImage3D:P,texImage2D:ne,texImage3D:ie,pixelStorei:Ae,getParameter:he,updateUBOMapping:we,uniformBlockBinding:Ce,texStorage2D:le,texStorage3D:ce,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:K,compressedTexSubImage3D:j,scissor:de,viewport:fe,reset:Fe}}function h_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return g?new OffscreenCanvas(P,v):Ps("canvas")}function m(P,v,V){let K=1;const j=Qe(P);if((j.width>V||j.height>V)&&(K=V/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const le=Math.floor(K*j.width),ce=Math.floor(K*j.height);h===void 0&&(h=_(le,ce));const ne=v?_(le,ce):h;return ne.width=le,ne.height=ce,ne.getContext("2d").drawImage(P,0,0,le,ce),Pe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+le+"x"+ce+")."),ne}else return"data"in P&&Pe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function p(P){return P.generateMipmaps}function T(P){r.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(P,v,V,K,j,le=!1){if(P!==null){if(r[P]!==void 0)return r[P];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce;K&&(ce=e.get("EXT_texture_norm16"),ce||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=v;if(v===r.RED&&(V===r.FLOAT&&(ne=r.R32F),V===r.HALF_FLOAT&&(ne=r.R16F),V===r.UNSIGNED_BYTE&&(ne=r.R8),V===r.UNSIGNED_SHORT&&ce&&(ne=ce.R16_EXT),V===r.SHORT&&ce&&(ne=ce.R16_SNORM_EXT)),v===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.R8UI),V===r.UNSIGNED_SHORT&&(ne=r.R16UI),V===r.UNSIGNED_INT&&(ne=r.R32UI),V===r.BYTE&&(ne=r.R8I),V===r.SHORT&&(ne=r.R16I),V===r.INT&&(ne=r.R32I)),v===r.RG&&(V===r.FLOAT&&(ne=r.RG32F),V===r.HALF_FLOAT&&(ne=r.RG16F),V===r.UNSIGNED_BYTE&&(ne=r.RG8),V===r.UNSIGNED_SHORT&&ce&&(ne=ce.RG16_EXT),V===r.SHORT&&ce&&(ne=ce.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RG8UI),V===r.UNSIGNED_SHORT&&(ne=r.RG16UI),V===r.UNSIGNED_INT&&(ne=r.RG32UI),V===r.BYTE&&(ne=r.RG8I),V===r.SHORT&&(ne=r.RG16I),V===r.INT&&(ne=r.RG32I)),v===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),V===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),V===r.UNSIGNED_INT&&(ne=r.RGB32UI),V===r.BYTE&&(ne=r.RGB8I),V===r.SHORT&&(ne=r.RGB16I),V===r.INT&&(ne=r.RGB32I)),v===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),V===r.UNSIGNED_INT&&(ne=r.RGBA32UI),V===r.BYTE&&(ne=r.RGBA8I),V===r.SHORT&&(ne=r.RGBA16I),V===r.INT&&(ne=r.RGBA32I)),v===r.RGB&&(V===r.UNSIGNED_SHORT&&ce&&(ne=ce.RGB16_EXT),V===r.SHORT&&ce&&(ne=ce.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),v===r.RGBA){const ie=le?Cs:Ke.getTransfer(j);V===r.FLOAT&&(ne=r.RGBA32F),V===r.HALF_FLOAT&&(ne=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ne=ie===nt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ce&&(ne=ce.RGBA16_EXT),V===r.SHORT&&ce&&(ne=ce.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(P,v){let V;return P?v===null||v===1014||v===1020?V=r.DEPTH24_STENCIL8:v===1015?V=r.DEPTH32F_STENCIL8:v===1012&&(V=r.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===1014||v===1020?V=r.DEPTH_COMPONENT24:v===1015?V=r.DEPTH_COMPONENT32F:v===1012&&(V=r.DEPTH_COMPONENT16),V}function b(P,v){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==1003&&P.minFilter!==1006?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function A(P){const v=P.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function x(P){const v=P.target;v.removeEventListener("dispose",x),I(v)}function E(P){const v=n.get(P);if(v.__webglInit===void 0)return;const V=P.source,K=d.get(V);if(K){const j=K[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(P),Object.keys(K).length===0&&d.delete(V)}n.remove(P)}function D(P){const v=n.get(P);r.deleteTexture(v.__webglTexture);const V=P.source,K=d.get(V);delete K[v.__cacheKey],a.memory.textures--}function I(P){const v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let j=0;j<v.__webglFramebuffer[K].length;j++)r.deleteFramebuffer(v.__webglFramebuffer[K][j]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=P.textures;for(let K=0,j=V.length;K<j;K++){const le=n.get(V[K]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(P)}let F=0;function z(){F=0}function U(){return F}function k(P){F=P}function Z(){const P=F;return P>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,P}function W(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function ae(P,v){const V=n.get(P);if(P.isVideoTexture&&G(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const K=P.image;if(K===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(V,P,v);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+v)}function Q(P,v){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Se(V,P,v);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+v)}function re(P,v){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Se(V,P,v);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+v)}function oe(P,v){const V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){Le(V,P,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+v)}const ye={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},be={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},ze={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function De(P,v){if(v.type===1015&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===1006||v.magFilter===1007||v.magFilter===1005||v.magFilter===1008||v.minFilter===1006||v.minFilter===1007||v.minFilter===1005||v.minFilter===1008)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ye[v.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ye[v.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ye[v.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,be[v.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,be[v.minFilter]),v.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===1003||v.minFilter!==1005&&v.minFilter!==1008||v.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Je(P,v){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const le=W(v);if(le!==P.__cacheKey){j[le]===void 0&&(j[le]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[le].usedTimes++;const ce=j[P.__cacheKey];ce!==void 0&&(j[P.__cacheKey].usedTimes--,ce.usedTimes===0&&D(v)),P.__cacheKey=le,P.__webglTexture=j[le].texture}return V}function te(P,v,V){return Math.floor(Math.floor(P/V)/v)}function se(P,v,V,K){const le=P.updateRanges;if(le.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,V,K,v.data);else{le.sort((Ae,de)=>Ae.start-de.start);let ce=0;for(let Ae=1;Ae<le.length;Ae++){const de=le[ce],fe=le[Ae],we=de.start+de.count,Ce=te(fe.start,v.width,4),Fe=te(de.start,v.width,4);fe.start<=we+1&&Ce===Fe&&te(fe.start+fe.count-1,v.width,4)===Ce?de.count=Math.max(de.count,fe.start+fe.count-de.start):(++ce,le[ce]=fe)}le.length=ce+1;const ne=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),he=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ae=0,de=le.length;Ae<de;Ae++){const fe=le[Ae],we=Math.floor(fe.start/4),Ce=Math.ceil(fe.count/4),Fe=we%v.width,B=Math.floor(we/v.width),R=Ce,C=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,Fe,B,R,C,V,K,v.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ne),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function Se(P,v,V){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);const j=Je(P,v),le=v.source;t.bindTexture(K,P.__webglTexture,r.TEXTURE0+V);const ce=n.get(le);if(le.version!==ce.__version||j===!0){if(t.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const C=Ke.getPrimaries(Ke.workingColorSpace),L=v.colorSpace===ii?null:Ke.getPrimaries(v.colorSpace),H=v.colorSpace===ii||C===L?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,H)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=m(v.image,!1,i.maxTextureSize);ie=Tt(v,ie);const he=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type);let de=S(v.internalFormat,he,Ae,v.normalized,v.colorSpace,v.isVideoTexture);De(K,v);let fe;const we=v.mipmaps,Ce=v.isVideoTexture!==!0,Fe=ce.__version===void 0||j===!0,B=le.dataReady,R=b(v,ie);if(v.isDepthTexture)de=M(v.format===1027,v.type),Fe&&(Ce?t.texStorage2D(r.TEXTURE_2D,1,de,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,de,ie.width,ie.height,0,he,Ae,null));else if(v.isDataTexture)if(we.length>0){Ce&&Fe&&t.texStorage2D(r.TEXTURE_2D,R,de,we[0].width,we[0].height);for(let C=0,L=we.length;C<L;C++)fe=we[C],Ce?B&&t.texSubImage2D(r.TEXTURE_2D,C,0,0,fe.width,fe.height,he,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,C,de,fe.width,fe.height,0,he,Ae,fe.data);v.generateMipmaps=!1}else Ce?(Fe&&t.texStorage2D(r.TEXTURE_2D,R,de,ie.width,ie.height),B&&se(v,ie,he,Ae)):t.texImage2D(r.TEXTURE_2D,0,de,ie.width,ie.height,0,he,Ae,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ce&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,R,de,we[0].width,we[0].height,ie.depth);for(let C=0,L=we.length;C<L;C++)if(fe=we[C],v.format!==1023)if(he!==null)if(Ce){if(B)if(v.layerUpdates.size>0){const H=al(fe.width,fe.height,v.format,v.type);for(const O of v.layerUpdates){const J=fe.data.subarray(O*H/fe.data.BYTES_PER_ELEMENT,(O+1)*H/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,C,0,0,O,fe.width,fe.height,1,he,J)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,C,0,0,0,fe.width,fe.height,ie.depth,he,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,C,de,fe.width,fe.height,ie.depth,0,fe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,C,0,0,0,fe.width,fe.height,ie.depth,he,Ae,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,C,de,fe.width,fe.height,ie.depth,0,he,Ae,fe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ce&&Fe&&t.texStorage2D(r.TEXTURE_2D,R,de,we[0].width,we[0].height);for(let C=0,L=we.length;C<L;C++)fe=we[C],v.format!==1023?he!==null?Ce?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,C,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,C,de,fe.width,fe.height,0,fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?B&&t.texSubImage2D(r.TEXTURE_2D,C,0,0,fe.width,fe.height,he,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,C,de,fe.width,fe.height,0,he,Ae,fe.data)}else if(v.isDataArrayTexture)if(Ce){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,R,de,ie.width,ie.height,ie.depth),B)if(v.layerUpdates.size>0){const C=al(ie.width,ie.height,v.format,v.type);for(const L of v.layerUpdates){const H=ie.data.subarray(L*C/ie.data.BYTES_PER_ELEMENT,(L+1)*C/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,L,ie.width,ie.height,1,he,Ae,H)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Ae,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ie.width,ie.height,ie.depth,0,he,Ae,ie.data);else if(v.isData3DTexture)Ce?(Fe&&t.texStorage3D(r.TEXTURE_3D,R,de,ie.width,ie.height,ie.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Ae,ie.data)):t.texImage3D(r.TEXTURE_3D,0,de,ie.width,ie.height,ie.depth,0,he,Ae,ie.data);else if(v.isFramebufferTexture){if(Fe)if(Ce)t.texStorage2D(r.TEXTURE_2D,R,de,ie.width,ie.height);else{let C=ie.width,L=ie.height;for(let H=0;H<R;H++)t.texImage2D(r.TEXTURE_2D,H,de,C,L,0,he,Ae,null),C>>=1,L>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){const C=r.canvas;if(C.hasAttribute("layoutsubtree")||C.setAttribute("layoutsubtree","true"),ie.parentNode!==C){C.appendChild(ie),f.add(v),C.onpaint=L=>{const H=L.changedElements;for(const O of f)H.includes(O.image)&&(O.needsUpdate=!0)},C.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{const H=r.RGBA,O=r.RGBA,J=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,H,O,J,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ce&&Fe){const C=Qe(we[0]);t.texStorage2D(r.TEXTURE_2D,R,de,C.width,C.height)}for(let C=0,L=we.length;C<L;C++)fe=we[C],Ce?B&&t.texSubImage2D(r.TEXTURE_2D,C,0,0,he,Ae,fe):t.texImage2D(r.TEXTURE_2D,C,de,he,Ae,fe);v.generateMipmaps=!1}else if(Ce){if(Fe){const C=Qe(ie);t.texStorage2D(r.TEXTURE_2D,R,de,C.width,C.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Ae,ie)}else t.texImage2D(r.TEXTURE_2D,0,de,he,Ae,ie);p(v)&&T(K),ce.__version=le.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Le(P,v,V){if(v.image.length!==6)return;const K=Je(P,v),j=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const le=n.get(j);if(j.version!==le.__version||K===!0){t.activeTexture(r.TEXTURE0+V);const ce=Ke.getPrimaries(Ke.workingColorSpace),ne=v.colorSpace===ii?null:Ke.getPrimaries(v.colorSpace),ie=v.colorSpace===ii||ce===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const he=v.isCompressedTexture||v.image[0].isCompressedTexture,Ae=v.image[0]&&v.image[0].isDataTexture,de=[];for(let O=0;O<6;O++)!he&&!Ae?de[O]=m(v.image[O],!0,i.maxCubemapSize):de[O]=Ae?v.image[O].image:v.image[O],de[O]=Tt(v,de[O]);const fe=de[0],we=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type),Fe=S(v.internalFormat,we,Ce,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,R=le.__version===void 0||K===!0,C=j.dataReady;let L=b(v,fe);De(r.TEXTURE_CUBE_MAP,v);let H;if(he){B&&R&&t.texStorage2D(r.TEXTURE_CUBE_MAP,L,Fe,fe.width,fe.height);for(let O=0;O<6;O++){H=de[O].mipmaps;for(let J=0;J<H.length;J++){const ee=H[J];v.format!==1023?we!==null?B?C&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J,0,0,ee.width,ee.height,we,ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J,Fe,ee.width,ee.height,0,ee.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J,0,0,ee.width,ee.height,we,Ce,ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J,Fe,ee.width,ee.height,0,we,Ce,ee.data)}}}else{if(H=v.mipmaps,B&&R){H.length>0&&L++;const O=Qe(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,L,Fe,O.width,O.height)}for(let O=0;O<6;O++)if(Ae){B?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,de[O].width,de[O].height,we,Ce,de[O].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Fe,de[O].width,de[O].height,0,we,Ce,de[O].data);for(let J=0;J<H.length;J++){const ue=H[J].image[O].image;B?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J+1,0,0,ue.width,ue.height,we,Ce,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J+1,Fe,ue.width,ue.height,0,we,Ce,ue.data)}}else{B?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,we,Ce,de[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Fe,we,Ce,de[O]);for(let J=0;J<H.length;J++){const ee=H[J];B?C&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J+1,0,0,we,Ce,ee.image[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,J+1,Fe,we,Ce,ee.image[O])}}}p(v)&&T(r.TEXTURE_CUBE_MAP),le.__version=j.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function xe(P,v,V,K,j,le){const ce=s.convert(V.format,V.colorSpace),ne=s.convert(V.type),ie=S(V.internalFormat,ce,ne,V.normalized,V.colorSpace),he=n.get(v),Ae=n.get(V);if(Ae.__renderTarget=v,!he.__hasExternalTextures){const de=Math.max(1,v.width>>le),fe=Math.max(1,v.height>>le);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,le,ie,de,fe,v.depth,0,ce,ne,null):t.texImage2D(j,le,ie,de,fe,0,ce,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),pt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,j,Ae.__webglTexture,0,at(v)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,j,Ae.__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(P,v,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),v.depthBuffer){const K=v.depthTexture,j=K&&K.isDepthTexture?K.type:null,le=M(v.stencilBuffer,j),ce=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at(v),le,v.width,v.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,at(v),le,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,le,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,P)}else{const K=v.textures;for(let j=0;j<K.length;j++){const le=K[j],ce=s.convert(le.format,le.colorSpace),ne=s.convert(le.type),ie=S(le.internalFormat,ce,ne,le.normalized,le.colorSpace);pt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at(v),ie,v.width,v.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,at(v),ie,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ie,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(P,v,V){const K=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),De(r.TEXTURE_CUBE_MAP,v.depthTexture);const he=s.convert(v.depthTexture.format),Ae=s.convert(v.depthTexture.type);let de;v.depthTexture.format===1026?de=r.DEPTH_COMPONENT24:v.depthTexture.format===1027&&(de=r.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,de,v.width,v.height,0,he,Ae,null)}}else ae(v.depthTexture,0);const le=j.__webglTexture,ce=at(v),ne=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,ie=v.depthTexture.format===1027?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===1026)pt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ne,le,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ne,le,0);else if(v.depthTexture.format===1027)pt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ne,le,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ne,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(P){const v=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=K}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let K=0;K<6;K++)St(v.__webglFramebuffer[K],P,K);else{const K=P.texture.mipmaps;K&&K.length>0?St(v.__webglFramebuffer[0],P,0):St(v.__webglFramebuffer,P,0)}else if(V){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),Ne(v.__webglDepthbuffer[K],P,!1);else{const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,le)}}else{const K=P.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ne(v.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,le)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(P,v,V){const K=n.get(P);v!==void 0&&xe(K.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ke(P)}function tt(P){const v=P.texture,V=n.get(P),K=n.get(v);P.addEventListener("dispose",x);const j=P.textures,le=P.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,a.memory.textures++),le){V.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[ne]=[];for(let ie=0;ie<v.mipmaps.length;ie++)V.__webglFramebuffer[ne][ie]=r.createFramebuffer()}else V.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)V.__webglFramebuffer[ne]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ce)for(let ne=0,ie=j.length;ne<ie;ne++){const he=n.get(j[ne]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&pt(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ne=0;ne<j.length;ne++){const ie=j[ne];V.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ne]);const he=s.convert(ie.format,ie.colorSpace),Ae=s.convert(ie.type),de=S(ie.internalFormat,he,Ae,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),fe=at(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,de,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,V.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),De(r.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)xe(V.__webglFramebuffer[ne][ie],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else xe(V.__webglFramebuffer[ne],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(v)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ne=0,ie=j.length;ne<ie;ne++){const he=j[ne],Ae=n.get(he);let de=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Ae.__webglTexture),De(de,he),xe(V.__webglFramebuffer,P,he,r.COLOR_ATTACHMENT0+ne,de,0),p(he)&&T(de)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),De(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)xe(V.__webglFramebuffer[ie],P,v,r.COLOR_ATTACHMENT0,ne,ie);else xe(V.__webglFramebuffer,P,v,r.COLOR_ATTACHMENT0,ne,0);p(v)&&T(ne),t.unbindTexture()}P.depthBuffer&&ke(P)}function Ve(P){const v=P.textures;for(let V=0,K=v.length;V<K;V++){const j=v[V];if(p(j)){const le=w(P),ce=n.get(j).__webglTexture;t.bindTexture(le,ce),T(le),t.unbindTexture()}}}const st=[],Mt=[];function Ft(P){if(P.samples>0){if(pt(P)===!1){const v=P.textures,V=P.width,K=P.height;let j=r.COLOR_BUFFER_BIT;const le=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(P),ne=v.length>1;if(ne)for(let he=0;he<v.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ie=P.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<v.length;he++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ae=n.get(v[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,V,K,0,0,V,K,j,r.NEAREST),l===!0&&(st.length=0,Mt.length=0,st.push(r.COLOR_ATTACHMENT0+he),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(st.push(le),Mt.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Mt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<v.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const Ae=n.get(v[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const v=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function at(P){return Math.min(i.maxSamples,P.samples)}function pt(P){const v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function G(P){const v=a.render.frame;u.get(P)!==v&&(u.set(P,v),P.update())}function Tt(P,v){const V=P.colorSpace,K=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==ws&&V!==ii&&(Ke.getTransfer(V)===nt?(K!==1023||j!==1009)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",V)),v}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=z,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=ae,this.setTexture2DArray=Q,this.setTexture3D=re,this.setTextureCube=oe,this.rebindTextures=Ye,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function f_(r,e){function t(n,i=ii){let s;const a=Ke.getTransfer(i);if(n===1009)return r.UNSIGNED_BYTE;if(n===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===1012)return r.UNSIGNED_SHORT;if(n===1013)return r.INT;if(n===1014)return r.UNSIGNED_INT;if(n===1015)return r.FLOAT;if(n===1016)return r.HALF_FLOAT;if(n===1021)return r.ALPHA;if(n===1022)return r.RGB;if(n===1023)return r.RGBA;if(n===1026)return r.DEPTH_COMPONENT;if(n===1027)return r.DEPTH_STENCIL;if(n===1028)return r.RED;if(n===1029)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===1031)return r.RG_INTEGER;if(n===1033)return r.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:d_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class __ extends Pi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new m_,p={},T=t.getContextAttributes();let w=null,S=null;const M=[],b=[],A=new Ue;let x=null,E=null;const D=new mn;D.viewport=new gt;const I=new mn;I.viewport=new gt;const F=[D,I],z=new Mh;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let se=M[te];return se===void 0&&(se=new js,M[te]=se),se.getTargetRaySpace()},this.getControllerGrip=function(te){let se=M[te];return se===void 0&&(se=new js,M[te]=se),se.getGripSpace()},this.getHand=function(te){let se=M[te];return se===void 0&&(se=new js,M[te]=se),se.getHandSpace()};function Z(te){const se=b.indexOf(te.inputSource);if(se===-1)return;const Se=M[se];Se!==void 0&&(Se.update(te.inputSource,te.frame,c||a),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ae);for(let te=0;te<M.length;te++){const se=b[te];se!==null&&(b[te]=null,M[te].disconnect(se))}U=null,k=null,m.reset();for(const te in p)delete p[te];if(e.setRenderTarget(w),d=null,h=null,f=null,i=null,S=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),E!==null){const te=E.camera;te.fov=E.fov,te.zoom=E.zoom,te.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ae),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Le=null,xe=null;T.depth&&(xe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=T.stencil?1027:1026,Le=T.stencil?1020:1014);const Ne={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ne),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Tn(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new Or(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Tn(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(te){for(let se=0;se<te.removed.length;se++){const Se=te.removed[se],Le=b.indexOf(Se);Le>=0&&(b[Le]=null,M[Le].disconnect(Se))}for(let se=0;se<te.added.length;se++){const Se=te.added[se];let Le=b.indexOf(Se);if(Le===-1){for(let Ne=0;Ne<M.length;Ne++)if(Ne>=b.length){b.push(Se),Le=Ne;break}else if(b[Ne]===null){b[Ne]=Se,Le=Ne;break}if(Le===-1)break}const xe=M[Le];xe&&xe.connect(Se)}}const Q=new X,re=new X;function oe(te,se,Se){Q.setFromMatrixPosition(se.matrixWorld),re.setFromMatrixPosition(Se.matrixWorld);const Le=Q.distanceTo(re),xe=se.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,St=xe[14]/(xe[10]-1),ke=xe[14]/(xe[10]+1),Ye=(xe[9]+1)/xe[5],tt=(xe[9]-1)/xe[5],Ve=(xe[8]-1)/xe[0],st=(Ne[8]+1)/Ne[0],Mt=St*Ve,Ft=St*st,at=Le/(-Ve+st),pt=at*-Ve;if(se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(pt),te.translateZ(at),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),xe[10]===-1)te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const G=St+at,Tt=ke+at,Qe=Mt-pt,P=Ft+(Le-pt),v=Ye*ke/Tt*G,V=tt*ke/Tt*G;te.projectionMatrix.makePerspective(Qe,P,v,V,G,Tt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ye(te,se){se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let se=te.near,Se=te.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),z.near=I.near=D.near=se,z.far=I.far=D.far=Se,(U!==z.near||k!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),U=z.near,k=z.far),z.layers.mask=te.layers.mask|6,D.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const Le=te.parent,xe=z.cameras;ye(z,Le);for(let Ne=0;Ne<xe.length;Ne++)ye(xe[Ne],Le);xe.length===2?oe(z,D,I):z.projectionMatrix.copy(D.projectionMatrix),E===null&&te.isPerspectiveCamera&&(E={camera:te,fov:te.fov,zoom:te.zoom}),be(te,z,Le)};function be(te,se,Se){Se===null?te.matrix.copy(se.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Nr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(te){return p[te]};let ze=null;function De(te,se){if(u=se.getViewerPose(c||a),g=se,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Le=!1;Se.length!==z.cameras.length&&(z.cameras.length=0,Le=!0);for(let ke=0;ke<Se.length;ke++){const Ye=Se[ke];let tt=null;if(d!==null)tt=d.getViewport(Ye);else{const st=f.getViewSubImage(h,Ye);tt=st.viewport,ke===0&&(e.setRenderTargetTextures(S,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(S))}let Ve=F[ke];Ve===void 0&&(Ve=new mn,Ve.layers.enable(ke),Ve.viewport=new gt,F[ke]=Ve),Ve.matrix.fromArray(Ye.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ye.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),ke===0&&(z.matrix.copy(Ve.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Le===!0&&z.cameras.push(Ve)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const ke=f.getDepthInformation(Se[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,i.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let ke=0;ke<Se.length;ke++){const Ye=Se[ke].camera;if(Ye){let tt=p[Ye];tt||(tt=new nc,p[Ye]=tt);const Ve=f.getCameraImage(Ye);tt.sourceTexture=Ve}}}}for(let Se=0;Se<M.length;Se++){const Le=b[Se],xe=M[Se];Le!==null&&xe!==void 0&&xe.update(Le,se,c||a)}ze&&ze(te,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const Je=new ac;Je.setAnimationLoop(De),this.setAnimationLoop=function(te){ze=te},this.dispose=function(){}}}const g_=new dt,dc=new Ie;dc.set(-1,0,0,0,1,0,0,0,1);function x_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ic(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),w=T.envMap,S=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function v_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const b=M.program;n.uniformBlockBinding(S,b)}function c(S,M){let b=i[S.id];b===void 0&&(m(S),b=u(S),i[S.id]=b,S.addEventListener("dispose",T));const A=M.program;n.updateUBOMapping(S,A);const x=e.render.frame;s[S.id]!==x&&(h(S),s[S.id]=x)}function u(S){const M=f();S.__bindingPointIndex=M;const b=r.createBuffer(),A=S.__size,x=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,b),b}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const M=i[S.id],b=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let x=0,E=b.length;x<E;x++){const D=b[x];if(Array.isArray(D))for(let I=0,F=D.length;I<F;I++)d(D[I],x,I,A);else d(D,x,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,M,b,A){if(_(S,M,b,A)===!0){const x=S.__offset,E=S.value;if(Array.isArray(E)){let D=0;for(let I=0;I<E.length;I++){const F=E[I],z=p(F);g(F,S.__data,D),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,S.__data)}}function g(S,M,b){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,b)}function _(S,M,b,A){const x=S.value,E=M+"_"+b;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const D=A[E];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(S){const M=S.uniforms;let b=0;const A=16;for(let E=0,D=M.length;E<D;E++){const I=Array.isArray(M[E])?M[E]:[M[E]];for(let F=0,z=I.length;F<z;F++){const U=I[F],k=Array.isArray(U.value)?U.value:[U.value];for(let Z=0,W=k.length;Z<W;Z++){const ae=k[Z],Q=p(ae),re=b%A,oe=re%Q.boundary,ye=re+oe;b+=oe,ye!==0&&A-ye<Q.storage&&(b+=A-ye),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=Q.storage}}}const x=b%A;return x>0&&(b+=A-x),S.__size=b,S.__cache={},this}function p(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",S),M}function T(S){const M=S.target;M.removeEventListener("dispose",T);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function w(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:w}}const S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function M_(){return Cn===null&&(Cn=new sh(S_,16,16,1030,1016),Cn.name="DFG_LUT",Cn.minFilter=1006,Cn.magFilter=1006,Cn.wrapS=1001,Cn.wrapT=1001,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class y_{constructor(e={}){const{canvas:t=_u(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=1009}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=d,m=new Set([1033,1031,1029]),p=new Set([1009,1014,1012,1020,1017,1018]),T=new Uint32Array(4),w=new Int32Array(4),S=new X;let M=null,b=null;const A=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1,F=null,z=null,U=null,k=null;this._outputColorSpace=Yt;let Z=0,W=0,ae=null,Q=-1,re=null;const oe=new gt,ye=new gt;let be=null;const ze=new He(0);let De=0,Je=t.width,te=t.height,se=1,Se=null,Le=null;const xe=new gt(0,0,Je,te),Ne=new gt(0,0,Je,te);let St=!1;const ke=new to;let Ye=!1,tt=!1;const Ve=new dt,st=new X,Mt=new gt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function pt(){return ae===null?se:1}let G=n;function Tt(y,N){return t.getContext(y,N)}let Qe,P,v,V,K,j,le,ce,ne,ie,he,Ae,de,fe,we,Ce,Fe,B,R,C,L,H,O;try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),G===null){const N="webgl2";if(G=Tt(N,y),G===null)throw Tt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}J()}catch(y){throw t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),$e("WebGLRenderer: "+y.message),y}function J(){Qe=new Mp(G),Qe.init(),L=new f_(G,Qe),P=new hp(G,Qe,e,L),v=new u_(G,Qe),P.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),z=G.createFramebuffer(),U=G.createFramebuffer(),k=G.createFramebuffer(),V=new Tp(G),K=new $m,j=new h_(G,Qe,v,K,P,L,V),le=new Sp(D),ce=new bh(G),H=new cp(G,ce),ne=new yp(G,ce,V,H),ie=new Ap(G,ne,ce,H,V),B=new bp(G,P,j),we=new fp(K),he=new Zm(D,le,Qe,P,H,we),Ae=new x_(D,K),de=new Qm,fe=new r_(Qe),Fe=new lp(D,le,v,ie,g,l),Ce=new c_(D,ie,P),O=new v_(G,V,P,v),R=new up(G,Qe,V),C=new Ep(G,Qe,V),V.programs=he.programs,D.capabilities=P,D.extensions=Qe,D.properties=K,D.renderLists=de,D.shadowMap=Ce,D.state=v,D.info=V}_!==1009&&(E=new wp(_,t.width,t.height,o,i,s));const ee=new __(D,G);this.xr=ee,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const y=Qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(y){y!==void 0&&(se=y,this.setSize(Je,te,!1))},this.getSize=function(y){return y.set(Je,te)},this.setSize=function(y,N,$=!0){if(ee.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=y,te=N,t.width=Math.floor(y*se),t.height=Math.floor(N*se),$===!0&&(t.style.width=y+"px",t.style.height=N+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Je*se,te*se).floor()},this.setDrawingBufferSize=function(y,N,$){Je=y,te=N,se=$,t.width=Math.floor(y*$),t.height=Math.floor(N*$),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(_===1009){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(oe)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,N,$,q){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,N,$,q),v.viewport(oe.copy(xe).multiplyScalar(se).round())},this.getScissor=function(y){return y.copy(Ne)},this.setScissor=function(y,N,$,q){y.isVector4?Ne.set(y.x,y.y,y.z,y.w):Ne.set(y,N,$,q),v.scissor(ye.copy(Ne).multiplyScalar(se).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(y){v.setScissorTest(St=y)},this.setOpaqueSort=function(y){Se=y},this.setTransparentSort=function(y){Le=y},this.getClearColor=function(y){return y.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,$=!0){let q=0;if(y){let Y=!1;if(ae!==null){const ge=ae.texture.format;Y=m.has(ge)}if(Y){const ge=ae.texture.type,Me=p.has(ge),_e=Fe.getClearColor(),Ee=Fe.getClearAlpha(),Re=_e.r,Be=_e.g,Xe=_e.b;Me?(T[0]=Re,T[1]=Be,T[2]=Xe,T[3]=Ee,G.clearBufferuiv(G.COLOR,0,T)):(w[0]=Re,w[1]=Be,w[2]=Xe,w[3]=Ee,G.clearBufferiv(G.COLOR,0,w))}else q|=G.COLOR_BUFFER_BIT}N&&(q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&G.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Fe.dispose(),de.dispose(),fe.dispose(),K.dispose(),le.dispose(),ie.dispose(),H.dispose(),O.dispose(),he.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",$r),ee.removeEventListener("sessionend",Jr),vn.stop()};function ue(y){y.preventDefault(),Ds("WebGLRenderer: Context Lost."),I=!0}function pe(){Ds("WebGLRenderer: Context Restored."),I=!1;const y=V.autoReset,N=Ce.enabled,$=Ce.autoUpdate,q=Ce.needsUpdate,Y=Ce.type;J(),V.autoReset=y,Ce.enabled=N,Ce.autoUpdate=$,Ce.needsUpdate=q,Ce.type=Y}function Oe(y){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function We(y){const N=y.target;N.removeEventListener("dispose",We),Nt(N)}function Nt(y){Ht(y),K.remove(y)}function Ht(y){const N=K.get(y).programs;N!==void 0&&(N.forEach(function($){he.releaseProgram($)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,$,q,Y,ge){N===null&&(N=Ft);const Me=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,_e=fu(y,N,$,q,Y);v.setMaterial(q,Me);let Ee=$.index,Re=1;if(q.wireframe===!0){if(Ee=ne.getWireframeAttribute($),Ee===void 0)return;Re=2}const Be=$.drawRange,Xe=$.attributes.position;let Te=Be.start*Re,et=(Be.start+Be.count)*Re;ge!==null&&(Te=Math.max(Te,ge.start*Re),et=Math.min(et,(ge.start+ge.count)*Re)),Ee!==null?(Te=Math.max(Te,0),et=Math.min(et,Ee.count)):Xe!=null&&(Te=Math.max(Te,0),et=Math.min(et,Xe.count));const bt=et-Te;if(bt<0||bt===1/0)return;H.setup(Y,q,_e,$,Ee);let ht,ot=R;if(Ee!==null&&(ht=ce.get(Ee),ot=C,ot.setIndex(ht)),Y.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*pt()),ot.setMode(G.LINES)):ot.setMode(G.TRIANGLES);else if(Y.isLine){let Ot=q.linewidth;Ot===void 0&&(Ot=1),v.setLineWidth(Ot*pt()),Y.isLineSegments?ot.setMode(G.LINES):Y.isLineLoop?ot.setMode(G.LINE_LOOP):ot.setMode(G.LINE_STRIP)}else Y.isPoints?ot.setMode(G.POINTS):Y.isSprite&&ot.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))ot.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ot=Y._multiDrawStarts,ve=Y._multiDrawCounts,Wt=Y._multiDrawCount,je=Ee?ce.get(Ee).bytesPerElement:1,fn=K.get(q).currentProgram.getUniforms();for(let Rn=0;Rn<Wt;Rn++)fn.setValue(G,"_gl_DrawID",Rn),ot.render(Ot[Rn]/je,ve[Rn])}else if(Y.isInstancedMesh)ot.renderInstances(Te,bt,Y.count);else if($.isInstancedBufferGeometry){const Ot=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ve=Math.min($.instanceCount,Ot);ot.renderInstances(Te,bt,ve)}else ot.render(Te,bt)};function An(y,N,$,q){F!==null&&y.isNodeMaterial&&F.setObject(q,y),Ye===!0&&we.setState(y,$,!1),y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,Ii(y,N,q),y.side=0,y.needsUpdate=!0,Ii(y,N,q),y.side=2):Ii(y,N,q)}this.compile=function(y,N,$=null){$===null&&($=y),F!==null&&F.renderStart(y,N,$),b=fe.get($),b.init(N),x.push(b),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),y!==$&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),tt=this.localClippingEnabled,Ye=we.init(this.clippingPlanes,tt),Ye===!0&&we.setGlobalState(this.clippingPlanes,N),F!==null&&Ce.render(b.state.shadowsArray,$,N);const q=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){const _e=ge[Me];An(_e,$,N,Y),q.add(_e)}else An(ge,$,N,Y),q.add(ge)}),b=x.pop(),F!==null&&F.renderEnd(),q},this.compileAsync=function(y,N,$=null){const q=this.compile(y,N,$);return new Promise(Y=>{function ge(){if(q.forEach(function(Me){const Ee=K.get(Me).currentProgram;(Ee===void 0||Ee.isReady())&&q.delete(Me)}),q.size===0){Y(y);return}setTimeout(ge,10)}Qe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Li=null;function Ys(y){Li&&Li(y)}function $r(){vn.stop()}function Jr(){vn.start()}const vn=new ac;vn.setAnimationLoop(Ys),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(y){Li=y,ee.setAnimationLoop(y),y===null?vn.stop():vn.start()},ee.addEventListener("sessionstart",$r),ee.addEventListener("sessionend",Jr),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(y,N);const $=ee.enabled===!0&&ee.isPresenting===!0,q=E!==null&&(ae===null||$)&&E.begin(D,ae);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,N,ae),b=fe.get(y,x.length),b.init(N),b.state.textureUnits=j.getTextureUnits(),x.push(b),Ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ke.setFromProjectionMatrix(Ve,2e3,N.reversedDepth),tt=this.localClippingEnabled,Ye=we.init(this.clippingPlanes,tt),M=de.get(y,A.length),M.init(),A.push(M),ee.enabled===!0&&ee.isPresenting===!0){const Me=D.xr.getDepthSensingMesh();Me!==null&&mi(Me,N,-1/0,D.sortObjects)}mi(y,N,0,D.sortObjects),M.finish(),F!==null&&F.updateLights(b.state.lightsArray),D.sortObjects===!0&&M.sort(Se,Le),at=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,at&&Fe.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&we.beginShadows();const Y=b.state.shadowsArray;if(Ce.render(Y,y,N),Ye===!0&&we.endShadows(),(q&&E.hasRenderPass())===!1){const Me=M.opaque,_e=M.transmissive;if(b.setupLights(),N.isArrayCamera){const Ee=N.cameras;if(_e.length>0)for(let Re=0,Be=Ee.length;Re<Be;Re++){const Xe=Ee[Re];_i(Me,_e,y,Xe)}at&&Fe.render(y);for(let Re=0,Be=Ee.length;Re<Be;Re++){const Xe=Ee[Re];gr(M,y,Xe,Xe.viewport)}}else _e.length>0&&_i(Me,_e,y,N),at&&Fe.render(y),gr(M,y,N)}ae!==null&&W===0&&(j.updateMultisampleRenderTarget(ae),j.updateRenderTargetMipmap(ae)),q&&E.end(D),y.isScene===!0&&y.onAfterRender(D,y,N),H.resetDefaultState(),Q=-1,re=null,x.pop(),x.length>0?(b=x[x.length-1],j.setTextureUnits(b.state.textureUnits),Ye===!0&&we.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,F!==null&&F.renderEnd()};function mi(y,N,$,q){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(ke)){q&&Mt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ve);const Me=ie.update(y),_e=y.material;_e.visible&&M.push(y,Me,_e,$,Mt.z,null,N)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(ke))){const Me=ie.update(y),_e=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Mt.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Mt.copy(Me.boundingSphere.center)),Mt.applyMatrix4(y.matrixWorld).applyMatrix4(Ve)),Array.isArray(_e)){const Ee=Me.groups;for(let Re=0,Be=Ee.length;Re<Be;Re++){const Xe=Ee[Re],Te=_e[Xe.materialIndex];Te&&Te.visible&&M.push(y,Me,Te,$,Mt.z,Xe,N)}}else _e.visible&&M.push(y,Me,_e,$,Mt.z,null,N)}}const ge=y.children;for(let Me=0,_e=ge.length;Me<_e;Me++)mi(ge[Me],N,$,q)}function gr(y,N,$,q){const{opaque:Y,transmissive:ge,transparent:Me}=y;b.setupLightsView($),Ye===!0&&we.setGlobalState(D.clippingPlanes,$),q&&v.viewport(oe.copy(q)),Y.length>0&&Nn(Y,N,$),ge.length>0&&Nn(ge,N,$),Me.length>0&&Nn(Me,N,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function _i(y,N,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const Te=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new Tn(1,1,{generateMipmaps:!0,type:Te?1016:1009,minFilter:1008,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ge=b.state.transmissionRenderTarget[q.id],Me=q.viewport||oe;ge.setSize(Me.z*D.transmissionResolutionScale,Me.w*D.transmissionResolutionScale);const _e=D.getRenderTarget(),Ee=D.getActiveCubeFace(),Re=D.getActiveMipmapLevel();D.setRenderTarget(ge),D.getClearColor(ze),De=D.getClearAlpha(),De<1&&D.setClearColor(16777215,.5),D.clear(),at&&Fe.render($);const Be=D.toneMapping;D.toneMapping=0;const Xe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),Ye===!0&&we.setGlobalState(D.clippingPlanes,q),Nn(y,$,q),j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let et=0,bt=N.length;et<bt;et++){const ht=N[et],{object:ot,geometry:Ot,material:ve,group:Wt}=ht;if(ve.side===2&&ot.layers.test(q.layers)){const je=ve.side;ve.side=1,ve.needsUpdate=!0,Qr(ot,$,q,Ot,ve,Wt),ve.side=je,ve.needsUpdate=!0,Te=!0}}Te===!0&&(j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge))}D.setRenderTarget(_e,Ee,Re),D.setClearColor(ze,De),Xe!==void 0&&(q.viewport=Xe),D.toneMapping=Be}function Nn(y,N,$){const q=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,ge=y.length;Y<ge;Y++){const Me=y[Y],{object:_e,geometry:Ee,group:Re}=Me;let Be=Me.material;Be.allowOverride===!0&&q!==null&&(Be=q),_e.layers.test($.layers)&&Qr(_e,N,$,Ee,Be,Re)}}function Qr(y,N,$,q,Y,ge){F!==null&&Y.isNodeMaterial&&F.setObject(y,Y),y.onBeforeRender(D,N,$,q,Y,ge),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(D,N,$,q,y,ge),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1?(Y.side=1,Y.needsUpdate=!0,D.renderBufferDirect($,N,q,Y,y,ge),Y.side=0,Y.needsUpdate=!0,D.renderBufferDirect($,N,q,Y,y,ge),Y.side=2):D.renderBufferDirect($,N,q,Y,y,ge),y.onAfterRender(D,N,$,q,Y,ge)}function Ii(y,N,$){N.isScene!==!0&&(N=Ft);const q=K.get(y),Y=b.state.lights,ge=b.state.shadowsArray,Me=Y.state.version,_e=he.getParameters(y,Y.state,ge,N,$,b.state.lightProbeGridArray),Ee=he.getProgramCacheKey(_e);let Re=q.programs;q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,q.fog=N.fog;const Be=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;q.envMap=le.get(y.envMap||q.environment,Be),q.envMapRotation=q.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",We),Re=new Map,q.programs=Re);let Xe=Re.get(Ee);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===Me)return Po(y,_e),Xe}else _e.uniforms=he.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,$,_e),y.onBeforeCompile(_e,D),Xe=he.acquireProgram(_e,Ee),Re.set(Ee,Xe),q.uniforms=_e.uniforms;const Te=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=we.uniform),Po(y,_e),q.needsLights=pu(y),q.lightsStateVersion=Me,q.needsLights&&(Te.ambientLightColor.value=Y.state.ambient,Te.lightProbe.value=Y.state.probe,Te.sunLights.value=Y.state.sun,Te.sunLightShadows.value=Y.state.sunShadow,Te.directionalLights.value=Y.state.directional,Te.directionalLightShadows.value=Y.state.directionalShadow,Te.spotLights.value=Y.state.spot,Te.spotLightShadows.value=Y.state.spotShadow,Te.rectAreaLights.value=Y.state.rectArea,Te.ltc_1.value=Y.state.rectAreaLTC1,Te.ltc_2.value=Y.state.rectAreaLTC2,Te.pointLights.value=Y.state.point,Te.pointLightShadows.value=Y.state.pointShadow,Te.hemisphereLights.value=Y.state.hemi,Te.sunShadowMatrix.value=Y.state.sunShadowMatrix,Te.sunShadowCascade.value=Y.state.sunShadowCascade,Te.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Te.spotLightMatrix.value=Y.state.spotLightMatrix,Te.spotLightMap.value=Y.state.spotLightMap,Te.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=Xe,q.uniformsList=null,Xe}function Co(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Ts.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Po(y,N){const $=K.get(y);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function hu(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let $=0,q=y.length;$<q;$++){const Y=y[$];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function fu(y,N,$,q,Y){N.isScene!==!0&&(N=Ft),j.resetTextureUnits();const ge=N.fog,Me=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?N.environment:null,_e=ae===null?D.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ke.workingColorSpace,Ee=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Re=le.get(q.envMap||Me,Ee),Be=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Te=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,bt=!!$.morphAttributes.color;let ht=0;q.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ht=D.toneMapping);const ot=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ot=ot!==void 0?ot.length:0,ve=K.get(q),Wt=b.state.lights;if(Ye===!0&&(tt===!0||y!==re)){const ut=y===re&&q.id===Q;we.setState(q,y,ut)}let je=!1;q.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Wt.state.version||ve.outputColorSpace!==_e||Y.isBatchedMesh&&ve.batching===!1||!Y.isBatchedMesh&&ve.batching===!0||Y.isBatchedMesh&&ve.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&ve.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&ve.instancing===!1||!Y.isInstancedMesh&&ve.instancing===!0||Y.isSkinnedMesh&&ve.skinning===!1||!Y.isSkinnedMesh&&ve.skinning===!0||Y.isInstancedMesh&&ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ve.instancingMorph===!1&&Y.morphTexture!==null||ve.envMap!==Re||q.fog===!0&&ve.fog!==ge||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==we.numPlanes||ve.numIntersection!==we.numIntersection)||ve.vertexAlphas!==Be||ve.vertexTangents!==Xe||ve.morphTargets!==Te||ve.morphNormals!==et||ve.morphColors!==bt||ve.toneMapping!==ht||ve.morphTargetsCount!==Ot||!!ve.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,ve.__version=q.version);let fn=ve.currentProgram;je===!0&&(fn=Ii(q,N,Y),F&&q.isNodeMaterial&&F.onUpdateProgram(q,fn,ve));let Rn=!1,Kn=!1,Ui=!1;const rt=fn.getUniforms(),yt=ve.uniforms;if(v.useProgram(fn.program)&&(Rn=!0,Kn=!0,Ui=!0),q.id!==Q&&(Q=q.id,Kn=!0),ve.needsLights){const ut=hu(b.state.lightProbeGridArray,Y);ve.lightProbeGrid!==ut&&(ve.lightProbeGrid=ut,Kn=!0)}if(Rn||re!==y){v.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),rt.setValue(G,"projectionMatrix",y.projectionMatrix),rt.setValue(G,"viewMatrix",y.matrixWorldInverse);const $n=rt.map.cameraPosition;$n!==void 0&&$n.setValue(G,st.setFromMatrixPosition(y.matrixWorld)),P.logarithmicDepthBuffer&&rt.setValue(G,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&rt.setValue(G,"isOrthographic",y.isOrthographicCamera===!0),re!==y&&(re=y,Kn=!0,Ui=!0)}if(ve.needsLights&&(Wt.state.sunShadowMap.length>0&&rt.setValue(G,"sunShadowMap",Wt.state.sunShadowMap,j),Wt.state.directionalShadowMap.length>0&&rt.setValue(G,"directionalShadowMap",Wt.state.directionalShadowMap,j),Wt.state.spotShadowMap.length>0&&rt.setValue(G,"spotShadowMap",Wt.state.spotShadowMap,j),Wt.state.pointShadowMap.length>0&&rt.setValue(G,"pointShadowMap",Wt.state.pointShadowMap,j)),Y.isSkinnedMesh){rt.setOptional(G,Y,"bindMatrix"),rt.setOptional(G,Y,"bindMatrixInverse");const ut=Y.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),rt.setValue(G,"boneTexture",ut.boneTexture,j))}Y.isBatchedMesh&&(rt.setOptional(G,Y,"batchingTexture"),rt.setValue(G,"batchingTexture",Y._matricesTexture,j),rt.setOptional(G,Y,"batchingIdTexture"),rt.setValue(G,"batchingIdTexture",Y._indirectTexture,j),rt.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&rt.setValue(G,"batchingColorTexture",Y._colorsTexture,j));const Zn=$.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&B.update(Y,$,fn),(Kn||ve.receiveShadow!==Y.receiveShadow)&&(ve.receiveShadow=Y.receiveShadow,rt.setValue(G,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&N.environment!==null&&(yt.envMapIntensity.value=N.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=M_()),Kn){if(rt.setValue(G,"toneMappingExposure",D.toneMappingExposure),ve.needsLights&&du(yt,Ui),ge&&q.fog===!0&&Ae.refreshFogUniforms(yt,ge),Ae.refreshMaterialUniforms(yt,q,se,te,b.state.transmissionRenderTarget[y.id]),ve.needsLights&&ve.lightProbeGrid){const ut=ve.lightProbeGrid;yt.probesSH.value=ut.texture,yt.probesMin.value.copy(ut.boundingBox.min),yt.probesMax.value.copy(ut.boundingBox.max),yt.probesResolution.value.copy(ut.resolution)}Ts.upload(G,Co(ve),yt,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ts.upload(G,Co(ve),yt,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&rt.setValue(G,"center",Y.center),rt.setValue(G,"modelViewMatrix",Y.modelViewMatrix),rt.setValue(G,"normalMatrix",Y.normalMatrix),rt.setValue(G,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const ut=q.uniformsGroups;for(let $n=0,Fi=ut.length;$n<Fi;$n++){const Lo=ut[$n];O.update(Lo,fn),O.bind(Lo,fn)}}return fn}function du(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function pu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(y,N,$){const q=K.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),K.get(y.texture).__webglTexture=N,K.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const $=K.get(y);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,$=0){ae=y,Z=N,W=$;let q=null,Y=!1,ge=!1;if(y){const _e=K.get(y);if(_e.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(G.FRAMEBUFFER,_e.__webglFramebuffer),oe.copy(y.viewport),ye.copy(y.scissor),be=y.scissorTest,v.viewport(oe),v.scissor(ye),v.setScissorTest(be),Q=-1;return}else if(_e.__webglFramebuffer===void 0)j.setupRenderTarget(y);else if(_e.__hasExternalTextures)j.rebindTextures(y,K.get(y.texture).__webglTexture,K.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Be=y.depthTexture;if(_e.__boundDepthTexture!==Be){if(Be!==null&&K.has(Be)&&(y.width!==Be.image.width||y.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(y)}}const Ee=y.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const Re=K.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[N])?q=Re[N][$]:q=Re[N],Y=!0):y.samples>0&&j.useMultisampledRTT(y)===!1?q=K.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?q=Re[$]:q=Re,oe.copy(y.viewport),ye.copy(y.scissor),be=y.scissorTest}else oe.copy(xe).multiplyScalar(se).floor(),ye.copy(Ne).multiplyScalar(se).floor(),be=St;if($!==0&&(q=z),v.bindFramebuffer(G.FRAMEBUFFER,q)&&v.drawBuffers(y,q),v.viewport(oe),v.scissor(ye),v.setScissorTest(be),Y){const _e=K.get(y.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,$)}else if(ge){const _e=N;for(let Ee=0;Ee<y.textures.length;Ee++){const Re=K.get(y.textures[Ee]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,$,_e)}}else if(y!==null&&$!==0){const _e=K.get(y.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_e.__webglTexture,$)}Q=-1};function Do(y){const N=K.get(y);return(N.__readFormat!==y.format||N.__readType!==y.type)&&(N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=P.textureFormatReadable(y.format),N.__typeReadable=P.textureTypeReadable(y.type)),N}this.readRenderTargetPixels=function(y,N,$,q,Y,ge,Me,_e=0){if(!(y&&y.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){v.bindFramebuffer(G.FRAMEBUFFER,Ee);try{const Re=y.textures[_e],Be=Re.format,Xe=Re.type;y.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_e);const Te=Do(Re);if(Te.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-q&&$>=0&&$<=y.height-Y&&G.readPixels(N,$,q,Y,L.convert(Be),L.convert(Xe),ge)}finally{const Re=ae!==null?K.get(ae).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,N,$,q,Y,ge,Me,_e=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee)if(N>=0&&N<=y.width-q&&$>=0&&$<=y.height-Y){v.bindFramebuffer(G.FRAMEBUFFER,Ee);const Re=y.textures[_e],Be=Re.format,Xe=Re.type;y.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_e);const Te=Do(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,ge.byteLength,G.STREAM_READ),G.readPixels(N,$,q,Y,L.convert(Be),L.convert(Xe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const bt=ae!==null?K.get(ae).__webglFramebuffer:null;v.bindFramebuffer(G.FRAMEBUFFER,bt);const ht=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await gu(G,ht,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ge),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(et),G.deleteSync(ht),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,$=0){const q=Math.pow(2,-$),Y=Math.floor(y.image.width*q),ge=Math.floor(y.image.height*q),Me=N!==null?N.x:0,_e=N!==null?N.y:0;j.setTexture2D(y,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,Me,_e,Y,ge),v.unbindTexture()},this.copyTextureToTexture=function(y,N,$=null,q=null,Y=0,ge=0){let Me,_e,Ee,Re,Be,Xe,Te,et,bt;const ht=y.isCompressedTexture?y.mipmaps[ge]:y.image;if($!==null)Me=$.max.x-$.min.x,_e=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,Be=$.min.y,Xe=$.isBox3?$.min.z:0;else{const yt=Math.pow(2,-Y);Me=Math.floor(ht.width*yt),_e=Math.floor(ht.height*yt),y.isDataArrayTexture?Ee=ht.depth:y.isData3DTexture?Ee=Math.floor(ht.depth*yt):Ee=1,Re=0,Be=0,Xe=0}q!==null?(Te=q.x,et=q.y,bt=q.z):(Te=0,et=0,bt=0);const ot=L.convert(N.format),Ot=L.convert(N.type);let ve;N.isData3DTexture?(j.setTexture3D(N,0),ve=G.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(j.setTexture2DArray(N,0),ve=G.TEXTURE_2D_ARRAY):(j.setTexture2D(N,0),ve=G.TEXTURE_2D),v.activeTexture(G.TEXTURE0),v.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(G.UNPACK_ALIGNMENT,N.unpackAlignment);const Wt=v.getParameter(G.UNPACK_ROW_LENGTH),je=v.getParameter(G.UNPACK_IMAGE_HEIGHT),fn=v.getParameter(G.UNPACK_SKIP_PIXELS),Rn=v.getParameter(G.UNPACK_SKIP_ROWS),Kn=v.getParameter(G.UNPACK_SKIP_IMAGES);v.pixelStorei(G.UNPACK_ROW_LENGTH,ht.width),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ht.height),v.pixelStorei(G.UNPACK_SKIP_PIXELS,Re),v.pixelStorei(G.UNPACK_SKIP_ROWS,Be),v.pixelStorei(G.UNPACK_SKIP_IMAGES,Xe);const Ui=y.isDataArrayTexture||y.isData3DTexture,rt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const yt=K.get(y),Zn=K.get(N),ut=K.get(yt.__renderTarget),$n=K.get(Zn.__renderTarget);v.bindFramebuffer(G.READ_FRAMEBUFFER,ut.__webglFramebuffer),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Fi=0;Fi<Ee;Fi++)Ui&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(y).__webglTexture,Y,Xe+Fi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(N).__webglTexture,ge,bt+Fi)),G.blitFramebuffer(Re,Be,Me,_e,Te,et,Me,_e,G.DEPTH_BUFFER_BIT,G.NEAREST);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||K.has(y)){const yt=K.get(y),Zn=K.get(N);v.bindFramebuffer(G.READ_FRAMEBUFFER,U),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,k);for(let ut=0;ut<Ee;ut++)Ui?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yt.__webglTexture,Y,Xe+ut):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yt.__webglTexture,Y),rt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zn.__webglTexture,ge,bt+ut):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Zn.__webglTexture,ge),Y!==0?G.blitFramebuffer(Re,Be,Me,_e,Te,et,Me,_e,G.COLOR_BUFFER_BIT,G.NEAREST):rt?G.copyTexSubImage3D(ve,ge,Te,et,bt+ut,Re,Be,Me,_e):G.copyTexSubImage2D(ve,ge,Te,et,Re,Be,Me,_e);v.bindFramebuffer(G.READ_FRAMEBUFFER,null),v.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else rt?y.isDataTexture||y.isData3DTexture?G.texSubImage3D(ve,ge,Te,et,bt,Me,_e,Ee,ot,Ot,ht.data):N.isCompressedArrayTexture?G.compressedTexSubImage3D(ve,ge,Te,et,bt,Me,_e,Ee,ot,ht.data):G.texSubImage3D(ve,ge,Te,et,bt,Me,_e,Ee,ot,Ot,ht):y.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ge,Te,et,Me,_e,ot,Ot,ht.data):y.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ge,Te,et,ht.width,ht.height,ot,ht.data):G.texSubImage2D(G.TEXTURE_2D,ge,Te,et,Me,_e,ot,Ot,ht);v.pixelStorei(G.UNPACK_ROW_LENGTH,Wt),v.pixelStorei(G.UNPACK_IMAGE_HEIGHT,je),v.pixelStorei(G.UNPACK_SKIP_PIXELS,fn),v.pixelStorei(G.UNPACK_SKIP_ROWS,Rn),v.pixelStorei(G.UNPACK_SKIP_IMAGES,Kn),ge===0&&N.generateMipmaps&&G.generateMipmap(ve),v.unbindTexture()},this.initRenderTarget=function(y){K.get(y).__webglFramebuffer===void 0&&j.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?j.setTextureCube(y,0):y.isData3DTexture?j.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?j.setTexture2DArray(y,0):j.setTexture2D(y,0),v.unbindTexture()},this.resetState=function(){Z=0,W=0,ae=null,v.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function Vn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function pc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Br={duration:.5,overwrite:!1,delay:0},so,Ut,ft,gn=1e8,ct=1/gn,Fa=Math.PI*2,E_=Fa/4,T_=0,mc=Math.sqrt,b_=Math.cos,A_=Math.sin,It=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},qn=function(e){return typeof e=="number"},ao=function(e){return typeof e>"u"},Fn=function(e){return typeof e=="object"},$t=function(e){return e!==!1},oo=function(){return typeof window<"u"},Es=function(e){return vt(e)||It(e)},_c=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,R_=/random\([^)]+\)/g,w_=/,\s*/g,Cl=/(?:-?\.?\d|\.)+/gi,gc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,tr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ea=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xc=/[+-]=-?[.\d]+/,C_=/[^,'"\[\]\s]+/gi,P_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,Pn,Na,lo,cn={},Us={},vc,Sc=function(e){return(Us=cr(e,cn))&&en},co=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gr=function(e,t){return!t&&console.warn(e)},Mc=function(e,t){return e&&(cn[e]=t)&&Us&&(Us[e]=t)||cn},zr=function(){return 0},D_={suppressEvents:!0,isStart:!0,kill:!1},bs={suppressEvents:!0,kill:!1},L_={suppressEvents:!0},uo={},li=[],Oa={},yc,rn={},Ta={},Pl=30,As=[],ho="",fo=function(e){var t=e[0],n,i;if(Fn(t)||vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=As.length;i--&&!As[i].targetTest(t););n=As[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Wc(e[i],n)))||e.splice(i,1);return e},Ai=function(e){return e._gsap||fo(xn(e))[0]._gsap},Ec=function(e,t,n){return(n=e[t])&&vt(n)?e[t]():ao(n)&&e.getAttribute&&e.getAttribute(t)||n},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},mt=function(e){return Math.round(e*1e7)/1e7||0},sr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},I_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Fs=function(){var e=li.length,t=li.slice(0),n,i;for(Oa={},li.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},po=function(e){return!!(e._initted||e._startAt||e.add)},Tc=function(e,t,n,i){li.length&&!Ut&&Fs(),e.render(t,n,i||!!(Ut&&t<0&&po(e))),li.length&&!Ut&&Fs()},bc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(C_).length<2?t:It(e)?e.trim():e},Ac=function(e){return e},un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},U_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},cr=function(e,t){for(var n in t)e[n]=t[n];return e},Dl=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ns=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ir=function(e){var t=e.parent||_t,n=e.keyframes?U_(Vt(e.keyframes)):un;if($t(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},F_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Rc=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ws=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},hi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ri=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},N_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ba=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(bs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},O_=function r(e){return!e||e._ts&&r(e.parent)},Ll=function(e){return e._repeat?ur(e._tTime,e=e.duration()+e._rDelay)*e:0},ur=function(e,t){var n=Math.floor(e=mt(e/t));return e&&n===e?n-1:n},Os=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xs=function(e){return e._end=mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ct)||0))},qs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xs(e),n._dirty||Ri(n,e)),e},wc=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Os(e.rawTime(),t),(!t._dur||Zr(0,t.totalDuration(),n)-t._tTime>ct)&&t.render(n,!0)),Ri(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ct}},Ln=function(e,t,n,i){return t.parent&&hi(t),t._start=mt((qn(n)?n:n||e!==_t?pn(e,n,t):e._time)+t._delay),t._end=mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rc(e,t,"_first","_last",e._sort?"_start":0),Ga(t)||(e._recent=t),i||wc(e,t),e._ts<0&&qs(e,e._tTime),e},Cc=function(e,t){return(cn.ScrollTrigger||co("scrollTrigger",t))&&cn.ScrollTrigger.create(t,e)},Pc=function(e,t,n,i,s){if(_o(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&yc!==sn.frame)return li.push(e),e._lazy=[s,i],1},B_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ga=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},G_=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&B_(e)&&!(!e._initted&&Ga(e))||(e._ts<0||e._dp._ts<0)&&!Ga(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Zr(0,e._tDur,t),u=ur(l,o),e._yoyo&&u&1&&(a=1-a),u!==ur(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||i||e._zTime===ct||!t&&e._zTime){if(!e._initted&&Pc(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ct:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ba(e,t,n,!0),e._onUpdate&&!n&&an(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&an(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&hi(e,1),!n&&!Ut&&(an(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},z_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},hr=function(e,t,n,i){var s=e._repeat,a=mt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:mt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&qs(e,e._tTime=e._tDur*o),e.parent&&Xs(e),n||Ri(e.parent,e),e},Il=function(e){return e instanceof Zt?Ri(e):hr(e,e._dur)},k_={_start:0,endTime:zr,totalDuration:zr},pn=function r(e,t,n){var i=e.labels,s=e._recent||k_,a=e.duration()>=gn?s.endTime(!1):e._dur,o,l,c;return It(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Vt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ur=function(e,t,n){var i=qn(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$t(l.vars.inherit)&&l.parent;a.immediateRender=$t(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Rt(t[0],a,t[s+1])},pi=function(e,t){return e||e===0?t(e):t},Zr=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!It(e)||!(t=P_.exec(e))?"":t[1]},V_=function(e,t,n){return pi(n,function(i){return Zr(e,t,i)})},za=[].slice,Dc=function(e,t){return e&&Fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fn(e[0]))&&!e.nodeType&&e!==Pn},H_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return It(i)&&!t||Dc(i,1)?(s=n).push.apply(s,xn(i)):n.push(i)})||n},xn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):It(e)&&!n&&(Na||!fr())?za.call((t||lo).querySelectorAll(e),0):Vt(e)?H_(e,n):Dc(e)?za.call(e,0):e?[e]:[]},ka=function(e){return e=xn(e)[0]||Gr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xn(t,n.querySelectorAll?n:n===e?Gr("Invalid scope")||lo.createElement("div"):e)}},Lc=function(e){return e.sort(function(){return .5-Math.random()})},Ic=function(e){if(vt(e))return e;var t=Fn(e)?e:{each:e},n=wi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return It(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,m=a[_],p,T,w,S,M,b,A,x,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,gn])[1],!E){for(A=-gn;A<(A=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=a[_]=[],p=l?Math.min(E,_)*u-.5:i%E,T=E===gn?0:l?_*f/E-.5:i/E|0,A=0,x=gn,b=0;b<_;b++)w=b%E-p,S=T-(b/E|0),m[b]=M=c?Math.abs(c==="y"?S:w):mc(w*w+S*S),M>A&&(A=M),M<x&&(x=M);i==="random"&&Lc(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=zt(t.amount||t.each)||0,n=n&&_<0?n0(n):n}return _=(m[h]-m.min)/m.max||0,mt(m.b+(n?n(_):_)*m.v)+m.u}},Va=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=mt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(qn(n)?0:zt(n))}},Uc=function(e,t){var n=Vt(e),i,s;return!n&&Fn(e)&&(i=n=e.radius||gn,e.values?(e=xn(e.values),(s=!qn(e[0]))&&(i*=i)):e=Va(e.increment)),pi(t,n?vt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||qn(a)?u:u+zt(a)}:Va(e))},Fc=function(e,t,n,i){return pi(Vt(e)?!t:n===!0?!!(n=0):!i,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},W_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},X_=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},q_=function(e,t,n){return Oc(e,t,0,1,n)},Nc=function(e,t,n){return pi(n,function(i){return e[~~t(i)]})},Y_=function r(e,t,n){var i=t-e;return Vt(e)?Nc(e,r(0,e.length),t):pi(n,function(s){return(i+(s-e)%i)%i+e})},K_=function r(e,t,n){var i=t-e,s=i*2;return Vt(e)?Nc(e,r(0,e.length-1),t):pi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},kr=function(e){return e.replace(R_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(w_);return Fc(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Oc=function(e,t,n,i,s){var a=t-e,o=i-n;return pi(s,function(l){return n+((l-e)/a*o||0)})},Z_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=It(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=cr(Vt(e)?[]:{},e));if(!u){for(l in t)mo.call(o,e,l,"get",t[l]);s=function(g){return vo(g,o)||(a?e.p:e)}}}return pi(n,s)},Ul=function(e,t,n){var i=e.labels,s=gn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},an=function(e,t,n){var i=e.vars,s=i[t],a=ft,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&li.length&&Fs(),o&&(ft=o),u=l?s.apply(c,l):s.call(c),ft=a,u},Cr=function(e){return hi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&an(e,"onInterrupt"),e},nr,Bc=[],Gc=function(e){if(e)if(e=!e.name&&e.default||e,oo()||e.headless){var t=e.name,n=vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:zr,render:vo,add:mo,kill:f0,modifier:h0,rawVars:0},a={targetTest:0,get:0,getSetter:xo,aliases:{},register:0};if(fr(),e!==i){if(rn[t])return;un(i,un(Ns(e,s),a)),cr(i.prototype,cr(s,Ns(e,a))),rn[i.prop=t]=i,e.targetTest&&(As.push(i),uo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Mc(t,i),e.register&&e.register(en,i,Qt)}else Bc.push(e)},lt=255,Pr={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},ba=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*lt+.5|0},zc=function(e,t,n){var i=e?qn(e)?[e>>16,e>>8&lt,e&lt]:0:Pr.black,s,a,o,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pr[e])i=Pr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&lt,i&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Cl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ba(l+1/3,s,a),i[1]=ba(l,s,a),i[2]=ba(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(gc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cl)||Pr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/lt,a=i[1]/lt,o=i[2]/lt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},kc=function(e){var t=[],n=[],i=-1;return e.split(ci).forEach(function(s){var a=s.match(tr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Fl=function(e,t,n){var i="",s=(e+i).match(ci),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=zc(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=kc(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ci,"1").split(tr),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ci),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},ci=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),$_=/hsl[a]?\(/,Vc=function(e){var t=e.join(" "),n;if(ci.lastIndex=0,ci.test(t))return n=$_.test(t),e[1]=Fl(e[1],n),e[0]=Fl(e[0],n,kc(e[1])),!0},Vr,sn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(m){var p=r()-i,T=m===!0,w,S,M,b;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,w=M-a,(w>0||T)&&(b=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,a+=w+(w>=s?4:s-w),S=1),T||(l=c(_)),S)for(d=0;d<o.length;d++)o[d](M,h,b,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){vc&&(!Na&&oo()&&(Pn=Na=window,lo=Pn.document||{},cn.gsap=en,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(en.version),Sc(Us||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),Bc.forEach(Gc)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Vr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Vr=0,c=zr},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,T){var w=p?function(S,M,b,A){m(S,M,b,A),f.remove(w)}:m;return f.remove(m),o[T?"unshift":"push"](w),fr(),w},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),fr=function(){return!Vr&&sn.wake()},Ze={},J_=/^[\d.\-M][\d.\-,\s]/,Q_=/["']/g,j_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Q_,"").trim():+c,i=l.substr(o+1).trim();return t},e0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},t0=function(e){var t=(e+"").split("("),n=Ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[j_(t[1])]:e0(e).split(",").map(bc)):Ze._CE&&J_.test(e)?Ze._CE("",e):n},n0=function(e){return function(t){return 1-e(1-t)}},wi=function(e,t){return e&&(vt(e)?e:Ze[e]||t0(e))||t},Di=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Jt(e,function(o){Ze[o]=cn[o]=s,Ze[a=o.toLowerCase()]=n;for(var l in s)Ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[o+"."+l]=s[l]}),s},Hc=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Aa=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Fa*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*A_((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Hc(o);return s=Fa/s,l.config=function(c,u){return r(e,c,u)},l},Ra=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Hc(n);return i.config=function(s){return r(e,s)},i};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Di(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;Di("Elastic",Aa("in"),Aa("out"),Aa());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Di("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Di("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Di("Circ",function(r){return-(mc(1-r*r)-1)});Di("Sine",function(r){return r===1?1:-b_(r*E_)+1});Di("Back",Ra("in"),Ra("out"),Ra());Ze.SteppedEase=Ze.steps=cn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ct;return function(o){return((i*Zr(0,a,o)|0)+s)*n}}};Br.ease=Ze["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ho+=r+","+r+"Params,"});var Wc=function(e,t){this.id=T_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ec,this.set=t?t.getSetter:xo},Hr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,hr(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),Vr||sn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,hr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(qs(this,n),!s._dp||s.parent||wc(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ct||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Tc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ll(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ll(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ur(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-ct?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Os(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ct?0:this._rts,this.totalTime(Zr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Xs(this),N_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ct&&(this._tTime-=ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=mt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ln(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($t(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Os(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=L_);var i=Ut;return Ut=n,po(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Il(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Il(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pn(this,n),$t(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$t(i)),this._dur||(this._zTime=-ct),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ct)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=vt(n)?n:Ac,l=function(){var u=i.then;i.then=null,s&&s(),vt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Cr(this)},r}();un(Hr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ct,_prom:0,_ps:!1,_rts:1});var Zt=function(r){pc(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$t(n.sortChildren),_t&&Ln(n.parent||_t,Vn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Cc(Vn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ur(0,arguments,this),this},t.from=function(i,s,a){return Ur(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ur(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ir(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(i,s,pn(this,a),1),this},t.call=function(i,s,a){return Ln(this,Rt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Rt(i,a,pn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ir(a).immediateRender=$t(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Ir(o).immediateRender=$t(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:mt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,T,w,S,M,b,A;if(this!==_t&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,S=this._start,w=this._ts,p=!w,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=mt(u%m),u===l?(_=this._repeat,h=c):(M=mt(u/m),_=~~M,_&&_===M&&(h=c,_--),h>c&&(h=c)),M=ur(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),b&&_&1&&(h=c-h,A=1),_!==M&&!this._lock){var x=b&&M&1,E=x===(b&&_&1);if(_<M&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:mt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=z_(this,mt(o),mt(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!M&&(an(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-ct);break}}d=g}else{d=this._last;for(var D=i<0?i:h;d;){if(g=d._prev,(d._act||D<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(D-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(D-d._start)*d._ts,s,a||Ut&&po(d)),h!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=D?-ct:ct);break}}d=g}}if(T&&!s&&(this.pause(),T.render(h>=o?0:-ct)._zTime=h>=o?1:-1,this._ts))return this._start=S,Xs(this),this.render(i,s,a);this._onUpdate&&!s&&an(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hi(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(an(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(qn(s)||(s=pn(this,s,i)),!(i instanceof Hr)){if(Vt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(It(i))return this.addLabel(i,s);if(vt(i))i=Rt.delayedCall(0,i);else return this}return this!==i?Ln(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Rt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return It(i)?this.removeLabel(i):vt(i)?this.killTweensOf(i):(i.parent===this&&Ws(this,i),i===this._recent&&(this._recent=this._last),Ri(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=mt(sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Rt.delayedCall(0,s||zr,a);return o.data="isPause",this._hasPause=1,Ln(this,o,pn(this,i))},t.removePause=function(i){var s=this._first;for(i=pn(this,i);s;)s._start===i&&s.data==="isPause"&&hi(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)si!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=xn(i),l=this._first,c=qn(s),u;l;)l instanceof Rt?I_(l._targets,o)&&(c?(!si||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=pn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Rt.to(a,un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ct,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&hr(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,un({startAt:{time:pn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ul(this,pn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ul(this,pn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ct)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=mt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ri(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ri(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=gn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ln(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=mt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;hr(a,a===_t&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(_t._ts&&(Tc(_t,Os(i,_t)),yc=sn.frame),sn.frame>=Pl){Pl+=ln.autoSleep||120;var s=_t._first;if((!s||!s._ts)&&ln.autoSleep&&sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||sn.sleep()}}},e}(Hr);un(Zt.prototype,{_lock:0,_hasPause:0,_forcing:0});var i0=function(e,t,n,i,s,a,o){var l=new Qt(this._pt,e,t,0,1,$c,null,s),c=0,u=0,f,h,d,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=kr(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),h=n.match(Ea)||[];f=Ea.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?sr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Ea.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(xc.test(i)||p)&&(l.e=0),this._pt=l,l},mo=function(e,t,n,i,s,a,o,l,c,u){vt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:vt(f)?c?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=vt(f)?c?l0:Kc:go,g;if(It(i)&&(~i.indexOf("random(")&&(i=kr(i)),i.charAt(1)==="="&&(g=sr(h,i)+(zt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Ha)return!isNaN(h*i)&&i!==""?(g=new Qt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?u0:Zc,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&co(t,i),i0.call(this,e,t,h,i,d,l||ln.stringFilter,c))},r0=function(e,t,n,i,s){if(vt(e)&&(e=Fr(e,s,t,n,i)),!Fn(e)||e.style&&e.nodeType||Vt(e)||_c(e))return It(e)?Fr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Fr(e[o],s,t,n,i);return a},Xc=function(e,t,n,i,s,a){var o,l,c,u;if(rn[e]&&(o=new rn[e]).init(s,o.rawVars?t[e]:r0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Qt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==nr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},si,Ha,_o=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,w=e._overwrite==="auto"&&!so,S=e.timeline,M=i.easeReverse||f,b,A,x,E,D,I,F,z,U,k,Z,W,ae;if(S&&(!h||!s)&&(s="none"),e._ease=wi(s,Br.ease),e._rEase=M&&(wi(M)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||h&&!i.stagger){if(z=m[0]?Ai(m[0]).harness:0,W=z&&i[z.prop],b=Ns(i,uo),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?bs:D_),_._lazy=0),a){if(hi(e._startAt=Rt.set(m,un({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&$t(l),startAt:null,delay:0,onUpdate:c&&function(){return an(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!d)&&e._startAt.revert(bs),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),x=un({overwrite:!1,data:"isFromStart",lazy:o&&!_&&$t(l),immediateRender:o,stagger:0,parent:p},b),W&&(x[z.prop]=W),hi(e._startAt=Rt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(bs):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ct,ct);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&$t(l)||l&&!g,A=0;A<m.length;A++){if(D=m[A],F=D._gsap||fo(m)[A]._gsap,e._ptLookup[A]=k={},Oa[F.id]&&li.length&&Fs(),Z=T===m?A:T.indexOf(D),z&&(U=new z).init(D,W||b,e,Z,T)!==!1&&(e._pt=E=new Qt(e._pt,D,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(Q){k[Q]=E}),U.priority&&(I=1)),!z||W)for(x in b)rn[x]&&(U=Xc(x,b,e,Z,D,T))?U.priority&&(I=1):k[x]=E=mo.call(e,D,x,"get",b[x],Z,T,0,i.stringFilter);e._op&&e._op[A]&&e.kill(D,e._op[A]),w&&e._pt&&(si=e,_t.killTweensOf(D,k,e.globalTime(t)),ae=!e.parent,si=0),e._pt&&l&&(Oa[F.id]=1)}I&&Jc(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ae,h&&t<=0&&S.render(gn,!0,!0)},s0=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ha=1,e.vars[t]="+=0",_o(e,o),Ha=0,l?Gr(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Et(n)+zt(f.e)),f.b&&(f.b=u.s+zt(f.b))},a0=function(e,t){var n=e[0]?Ai(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=cr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},o0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Vt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Fr=function(e,t,n,i,s){return vt(e)?e.call(t,n,i,s):It(e)&&~e.indexOf("random(")?kr(e):e},qc=ho+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Yc={};Jt(qc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yc[r]=1});var Rt=function(r){pc(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ir(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||_t,T=(Vt(n)||_c(n)?qn(n[0]):"length"in i)?[n]:xn(n),w,S,M,b,A,x,E,D;if(o._targets=T.length?fo(T):Gr("GSAP target "+n+" not found. https://gsap.com",!ln.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||Es(c)||Es(u)){i=o.vars;var I=i.easeReverse||i.yoyoEase;if(w=o.timeline=new Zt({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:T}),w.kill(),w.parent=w._dp=Vn(o),w._start=0,h||Es(c)||Es(u)){if(b=T.length,E=h&&Ic(h),Fn(h))for(A in h)~qc.indexOf(A)&&(D||(D={}),D[A]=h[A]);for(S=0;S<b;S++)M=Ns(i,Yc),M.stagger=0,I&&(M.easeReverse=I),D&&cr(M,D),x=T[S],M.duration=+Fr(c,Vn(o),S,x,T),M.delay=(+Fr(u,Vn(o),S,x,T)||0)-o._delay,!h&&b===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),w.to(x,M,E?E(S,x,T):0),w._ease=Ze.none;w.duration()?c=u=0:o.timeline=0}else if(g){Ir(un(w.vars.defaults,{ease:"none"})),w._ease=wi(g.ease||i.ease||"none");var F=0,z,U,k;if(Vt(g))g.forEach(function(Z){return w.to(T,Z,">")}),w.duration();else{M={};for(A in g)A==="ease"||A==="easeEach"||o0(A,g[A],M,g.easeEach);for(A in M)for(z=M[A].sort(function(Z,W){return Z.t-W.t}),F=0,S=0;S<z.length;S++)U=z[S],k={ease:U.e,duration:(U.t-(S?z[S-1].t:0))/100*c},k[A]=U.v,w.to(T,k,F),F+=k.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return d===!0&&!so&&(si=Vn(o),_t.killTweensOf(T),si=0),Ln(p,Vn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===mt(p._time)&&$t(f)&&O_(Vn(o))&&p.data!=="nested")&&(o._tTime=-ct,o.render(Math.max(0,-u)||0)),m&&Cc(Vn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ct&&!u?l:i<ct?0:i,h,d,g,_,m,p,T,w;if(!c)G_(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=mt(f%_),f===l?(g=this._repeat,h=c):(m=mt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=ur(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(mt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Pc(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=h<o;if(S!==this._inv){var M=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(S?-1:1)/M:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(h/c);if(this._from&&(this.ratio=T=1-T),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!m&&(an(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;w&&w.render(i<0?i:w._dur*w._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ba(this,i,s,a),an(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ba(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&hi(this,1),!s&&!(u&&!o)&&(f||o||p)&&(an(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Vr||sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||_o(this,c),u=this._ease(c/this._dur),s0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(qs(this,0),this.parent||Rc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,si&&si.vars.overwrite!==!0)._first||Cr(this),this.parent&&a!==this.timeline.totalDuration()&&hr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?xn(i):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&F_(o,l))return s==="all"&&(this._pt=0),Cr(this);for(f=this._op=this._op||[],s!=="all"&&(It(s)&&(_={},Jt(s,function(T){return _[T]=1}),s=_),s=a0(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ws(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Cr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ur(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ur(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return _t.killTweensOf(i,s,a)},e}(Hr);un(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(r){Rt[r]=function(){var e=new Zt,t=za.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var go=function(e,t,n){return e[t]=n},Kc=function(e,t,n){return e[t](n)},l0=function(e,t,n,i){return e[t](i.fp,n)},c0=function(e,t,n){return e.setAttribute(t,n)},xo=function(e,t){return vt(e[t])?Kc:ao(e[t])&&e.setAttribute?c0:go},Zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},u0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$c=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},vo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},h0=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},f0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ws(this,t,"_pt"):t.dep||(n=1),t=i;return!n},d0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Jc=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Qt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Zc,this.d=l||this,this.set=c||go,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=d0,this.m=n,this.mt=s,this.tween=i},r}();Jt(ho+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return uo[r]=1});cn.TweenMax=cn.TweenLite=Rt;cn.TimelineLite=cn.TimelineMax=Zt;_t=new Zt({sortChildren:!1,defaults:Br,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=Vc;var Ci=[],Rs={},p0=[],Nl=0,m0=0,wa=function(e){return(Rs[e]||p0).map(function(t){return t()})},Wa=function(){var e=Date.now(),t=[];e-Nl>2&&(wa("matchMediaInit"),Ci.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Pn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Nl=e,wa("matchMedia"))},Qc=function(){function r(t,n){this.selector=n&&ka(n),this.data=[],this._r=[],this.isReverted=!1,this.id=m0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){vt(n)&&(s=i,i=n,n=vt);var a=this,o=function(){var c=ft,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ka(s)),ft=a,f=i.apply(a,arguments),vt(f)&&a._r.push(f),ft=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===vt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=ft;ft=null,n(this),ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Rt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Zt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Rt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ci.length;a--;)Ci[a].id===this.id&&Ci.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),_0=function(){function r(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Fn(n)||(n={matches:n});var a=new Qc(0,s||this.scope),o=a.conditions={},l,c,u;ft&&!a.selector&&(a.selector=ft.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Pn.matchMedia(n[c]),l&&(Ci.indexOf(a)<0&&Ci.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Wa):l.addEventListener("change",Wa)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Bs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Gc(i)})},timeline:function(e){return new Zt(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,i){It(e)&&(e=xn(e)[0]);var s=Ai(e||{}).get,a=n?Ac:bc;return n==="native"&&(n=""),e&&(t?a((rn[t]&&rn[t].get||s)(e,t,n,i)):function(o,l,c){return a((rn[o]&&rn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=xn(e),e.length>1){var i=e.map(function(u){return en.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=rn[t],o=Ai(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;nr._pt=0,f.init(e,n?u+n:u,nr,0,[e]),f.render(1,f),nr._pt&&vo(1,nr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=en.to(e,un((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wi(e.ease,Br.ease)),Dl(Br,e||{})},config:function(e){return Dl(ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!rn[o]&&!cn[o]&&Gr(t+" effect requires "+o+" plugin.")}),Ta[t]=function(o,l,c){return n(xn(o),un(l||{},s),c)},a&&(Zt.prototype[t]=function(o,l,c){return this.add(Ta[t](o,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=wi(t)},parseEase:function(e,t){return arguments.length?wi(e,t):Ze},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Zt(e),i,s;for(n.smoothChildTiming=$t(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,i=_t._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Rt&&i.vars.onComplete===i._targets[0]))&&Ln(n,i,i._start-i._delay),i=s;return Ln(_t,n,0),n},context:function(e,t){return e?new Qc(e,t):ft},matchMedia:function(e){return new _0(e)},matchMediaRefresh:function(){return Ci.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wa()},addEventListener:function(e,t){var n=Rs[e]||(Rs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Rs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Y_,wrapYoyo:K_,distribute:Ic,random:Fc,snap:Uc,normalize:q_,getUnit:zt,clamp:V_,splitColor:zc,toArray:xn,selector:ka,mapRange:Oc,pipe:W_,unitize:X_,interpolate:Z_,shuffle:Lc},install:Sc,effects:Ta,ticker:sn,updateRoot:Zt.updateRoot,plugins:rn,globalTimeline:_t,core:{PropTween:Qt,globals:Mc,Tween:Rt,Timeline:Zt,Animation:Hr,getCache:Ai,_removeLinkedListItem:Ws,reverting:function(){return Ut},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return so=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Bs[r]=Rt[r]});sn.add(Zt.updateRoot);nr=Bs.to({},{duration:0});var g0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},x0=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=g0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ca=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(It(s)&&(l={},Jt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}x0(o,s)}}}},en=Bs.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ca("roundProps",Va),Ca("modifiers"),Ca("snap",Uc))||Bs;Rt.version=Zt.version=en.version="3.15.0";vc=1;oo()&&fr();Ze.Power0;Ze.Power1;Ze.Power2;Ze.Power3;Ze.Power4;Ze.Linear;Ze.Quad;Ze.Cubic;Ze.Quart;Ze.Quint;Ze.Strong;Ze.Elastic;Ze.Back;Ze.SteppedEase;Ze.Bounce;Ze.Sine;Ze.Expo;Ze.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ol,ai,ar,So,bi,Bl,Mo,v0=function(){return typeof window<"u"},Yn={},Ti=180/Math.PI,or=Math.PI/180,ji=Math.atan2,Gl=1e8,yo=/([A-Z])/g,S0=/(left|right|width|margin|padding|x)/i,M0=/[\s,\(]\S/,In={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},y0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},T0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},b0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jc=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},eu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},A0=function(e,t,n){return e.style[t]=n},R0=function(e,t,n){return e.style.setProperty(t,n)},w0=function(e,t,n){return e._gsap[t]=n},C0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},P0=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},D0=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},xt="transform",jt=xt+"Origin",L0=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Yn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=In[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Hn(i,o)}):this.tfm[e]=a.x?a[e]:Hn(i,e),e===jt&&(this.tfm.zOrigin=a.zOrigin);else return In.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(xt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jt,t,"")),e=xt}(s||t)&&this.props.push(e,t,s[e])},tu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},I0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Mo(),(!s||!s.isStart)&&!n[xt]&&(tu(n),i.zOrigin&&n[jt]&&(n[jt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},nu=function(e,t){var n={target:e,props:[],revert:I0,save:L0};return e._gsap||en.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},iu,qa=function(e,t){var n=ai.createElementNS?ai.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ai.createElement(e);return n&&n.style?n:ai.createElement(e)},on=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,dr(t)||t,1)||""},zl="O,Moz,ms,Ms,Webkit".split(","),dr=function(e,t,n){var i=t||bi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(zl[a]+e in s););return a<0?null:(a===3?"ms":a>=0?zl[a]:"")+e},Ya=function(){v0()&&window.document&&(Ol=window,ai=Ol.document,ar=ai.documentElement,bi=qa("div")||{style:{}},qa("div"),xt=dr(xt),jt=xt+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",iu=!!dr("perspective"),Mo=en.core.reverting,So=1)},kl=function(e){var t=e.ownerSVGElement,n=qa("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ar.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ar.removeChild(n),s},Vl=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ru=function(e){var t,n;try{t=e.getBBox()}catch{t=kl(e),n=1}return t&&(t.width||t.height)||n||(t=kl(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vl(e,["x","cx","x1"])||0,y:+Vl(e,["y","cy","y1"])||0,width:0,height:0}:t},su=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ru(e))},fi=function(e,t){if(t){var n=e.style,i;t in Yn&&t!==jt&&(t=xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(yo,"-$1").toLowerCase())):n.removeAttribute(t)}},oi=function(e,t,n,i,s,a){var o=new Qt(e._pt,t,n,0,1,a?eu:jc);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Hl={deg:1,rad:1,turn:1},U0={grid:1,flex:1},di=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=bi.style,l=S0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;if(i===a||!s||Hl[i]||Hl[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&su(e),(d||a==="%")&&(Yn[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Et(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ai||!_.appendChild)&&(_=ai.body),m=_._gsap,m&&d&&m.width&&l&&m.time===sn.time&&!m.uncache)return Et(s/m.width*f);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+i,g=e[u],T?e.style[t]=T:fi(e,t)}else(d||a==="%")&&!U0[on(_,"display")]&&(o.position=on(e,"position")),_===e&&(o.position="static"),_.appendChild(bi),g=bi[u],_.removeChild(bi),o.position="absolute";return l&&d&&(m=Ai(_),m.time=sn.time,m.width=_[u]),Et(h?g*s/f:g&&s?f/g*s:0)},Hn=function(e,t,n,i){var s;return So||Ya(),t in In&&t!=="transform"&&(t=In[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yn[t]&&t!=="transform"?(s=Xr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zs(on(e,jt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gs[t]&&Gs[t](e,t,n)||on(e,t)||Ec(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?di(e,t,s,n)+n:s},F0=function(e,t,n,i){if(!n||n==="none"){var s=dr(t,e,1),a=s&&on(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=on(e,"borderTopColor"))}var o=new Qt(this._pt,e.style,t,0,1,$c),l=0,c=0,u,f,h,d,g,_,m,p,T,w,S,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=on(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=on(e,t)||i,_?e.style[t]=_:fi(e,t)),u=[n,i],Vc(u),n=u[0],i=u[1],h=n.match(tr)||[],M=i.match(tr)||[],M.length){for(;f=tr.exec(i);)m=f[0],T=i.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=sr(d,m)+S),p=parseFloat(m),w=m.substr((p+"").length),l=tr.lastIndex-w.length,w||(w=w||ln.units[t]||S,l===i.length&&(i+=w,o.e+=w)),S!==w&&(d=di(e,t,_,w)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?eu:jc;return xc.test(i)&&(o.e=0),this._pt=o,o},Wl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},N0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wl[n]||n,t[1]=Wl[i]||i,t.join(" ")},O0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Yn[o]&&(l=1,o=o==="transformOrigin"?jt:xt),fi(n,o);l&&(fi(n,xt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xr(n,1),a.uncache=1,tu(i)))}},Gs={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Qt(e._pt,t,n,0,0,O0);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Wr=[1,0,0,1,0,0],au={},ou=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xl=function(e){var t=on(e,xt);return ou(t)?Wr:t.substr(7).match(gc).map(Et)},Eo=function(e,t){var n=e._gsap||Ai(e),i=e.style,s=Xl(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wr:s):(s===Wr&&!e.offsetParent&&e!==ar&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ar.appendChild(e)),s=Xl(e),l?i.display=l:fi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ar.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ka=function(e,t,n,i,s,a){var o=e._gsap,l=s||Eo(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],w=t.split(" "),S=parseFloat(w[0])||0,M=parseFloat(w[1])||0,b,A,x,E;n?l!==Wr&&(A=d*m-g*_)&&(x=S*(m/A)+M*(-_/A)+(_*T-m*p)/A,E=S*(-g/A)+M*(d/A)-(d*T-g*p)/A,S=x,M=E):(b=ru(e),S=b.x+(~w[0].indexOf("%")?S/100*b.width:S),M=b.y+(~(w[1]||w[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&o.smooth?(p=S-c,T=M-u,o.xOffset=f+(p*d+T*_)-p,o.yOffset=h+(p*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[jt]="0px 0px",a&&(oi(a,o,"xOrigin",c,S),oi(a,o,"yOrigin",u,M),oi(a,o,"xOffset",f,o.xOffset),oi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},Xr=function(e,t){var n=e._gsap||new Wc(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=on(e,jt)||"0",u,f,h,d,g,_,m,p,T,w,S,M,b,A,x,E,D,I,F,z,U,k,Z,W,ae,Q,re,oe,ye,be,ze,De;return u=f=h=_=m=p=T=w=S=0,d=g=1,n.svg=!!(e.getCTM&&su(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),i.scale=i.rotate=i.translate="none"),A=Eo(e,n.svg),n.svg&&(n.uncache?(ae=e.getBBox(),c=n.xOrigin-ae.x+"px "+(n.yOrigin-ae.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Ka(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,b=n.yOrigin||0,A!==Wr&&(I=A[0],F=A[1],z=A[2],U=A[3],u=k=A[4],f=Z=A[5],A.length===6?(d=Math.sqrt(I*I+F*F),g=Math.sqrt(U*U+z*z),_=I||F?ji(F,I)*Ti:0,T=z||U?ji(z,U)*Ti+_:0,T&&(g*=Math.abs(Math.cos(T*or))),n.svg&&(u-=M-(M*I+b*z),f-=b-(M*F+b*U))):(De=A[6],be=A[7],re=A[8],oe=A[9],ye=A[10],ze=A[11],u=A[12],f=A[13],h=A[14],x=ji(De,ye),m=x*Ti,x&&(E=Math.cos(-x),D=Math.sin(-x),W=k*E+re*D,ae=Z*E+oe*D,Q=De*E+ye*D,re=k*-D+re*E,oe=Z*-D+oe*E,ye=De*-D+ye*E,ze=be*-D+ze*E,k=W,Z=ae,De=Q),x=ji(-z,ye),p=x*Ti,x&&(E=Math.cos(-x),D=Math.sin(-x),W=I*E-re*D,ae=F*E-oe*D,Q=z*E-ye*D,ze=U*D+ze*E,I=W,F=ae,z=Q),x=ji(F,I),_=x*Ti,x&&(E=Math.cos(x),D=Math.sin(x),W=I*E+F*D,ae=k*E+Z*D,F=F*E-I*D,Z=Z*E-k*D,I=W,k=ae),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Et(Math.sqrt(I*I+F*F+z*z)),g=Et(Math.sqrt(Z*Z+De*De)),x=ji(k,Z),T=Math.abs(x)>2e-4?x*Ti:0,S=ze?1/(ze<0?-ze:ze):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ou(on(e,xt)),W&&e.setAttribute("transform",W))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Et(d),n.scaleY=Et(g),n.rotation=Et(_)+o,n.rotationX=Et(m)+o,n.rotationY=Et(p)+o,n.skewX=T+o,n.skewY=w+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jt]=zs(c)),n.xOffset=n.yOffset=0,n.force3D=ln.force3D,n.renderTransform=n.svg?G0:iu?lu:B0,n.uncache=0,n},zs=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pa=function(e,t,n){var i=zt(t);return Et(parseFloat(t)+parseFloat(di(e,"x",n+"px",i)))+i},B0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lu(e,t)},yi="0deg",Rr="0px",Ei=") ",lu=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,w=n.zOrigin,S="",M=p==="auto"&&e&&e!==1||p===!0;if(w&&(f!==yi||u!==yi)){var b=parseFloat(u)*or,A=Math.sin(b),x=Math.cos(b),E;b=parseFloat(f)*or,E=Math.cos(b),a=Pa(T,a,A*E*-w),o=Pa(T,o,-Math.sin(b)*-w),l=Pa(T,l,x*E*-w+w)}m!==Rr&&(S+="perspective("+m+Ei),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(M||a!==Rr||o!==Rr||l!==Rr)&&(S+=l!==Rr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==yi&&(S+="rotate("+c+Ei),u!==yi&&(S+="rotateY("+u+Ei),f!==yi&&(S+="rotateX("+f+Ei),(h!==yi||d!==yi)&&(S+="skew("+h+", "+d+Ei),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Ei),T.style[xt]=S||"translate(0, 0)"},G0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,w=parseFloat(a),S=parseFloat(o),M,b,A,x,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=or,c*=or,M=Math.cos(l)*f,b=Math.sin(l)*f,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=or,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,x*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),M*=E,b*=E)),M=Et(M),b=Et(b),A=Et(A),x=Et(x)):(M=f,x=h,b=A=0),(w&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(w=di(d,"x",a,"px"),S=di(d,"y",o,"px")),(g||_||m||p)&&(w=Et(w+g-(g*M+_*A)+m),S=Et(S+_-(g*b+_*x)+p)),(i||s)&&(E=d.getBBox(),w=Et(w+i/100*E.width),S=Et(S+s/100*E.height)),E="matrix("+M+","+b+","+A+","+x+","+w+","+S+")",d.setAttribute("transform",E),T&&(d.style[xt]=E)},z0=function(e,t,n,i,s){var a=360,o=It(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ti:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Gl)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Gl)%a-~~(c/a)*a)),e._pt=h=new Qt(e._pt,t,n,i,c,y0),h.e=u,h.u="deg",e._props.push(n),h},ql=function(e,t){for(var n in t)e[n]=t[n];return e},k0=function(e,t,n){var i=ql({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[xt]=t,o=Xr(n,1),fi(n,xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xt],a[xt]=t,o=Xr(n,1),a[xt]=c);for(l in Yn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=zt(c),g=zt(u),f=d!==g?di(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Qt(e._pt,o,l,f,h-f,Xa),e._pt.u=g||0,e._props.push(l));ql(o,i)};Jt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Gs[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return Hn(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var cu={name:"css",register:Ya,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,T,w,S,M,b,A,x,E;So||Ya(),this.styles=this.styles||nu(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(rn[_]&&Xc(_,t,n,i,e,s)))){if(d=typeof u,g=Gs[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=kr(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ci.lastIndex=0,ci.test(c)||(m=zt(c),p=zt(u),p?m!==p&&(c=di(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],It(c)&&~c.indexOf("random(")&&(c=kr(c)),zt(c+"")||c==="auto"||(c+=ln.units[_]||zt(Hn(e,_))||""),(c+"").charAt(1)==="="&&(c=Hn(e,_))):c=Hn(e,_),h=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),_ in In&&(_==="autoAlpha"&&(h===1&&Hn(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,o.visibility),oi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=In[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in Yn,w){if(this.styles.save(_),E=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=on(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=on(e,"perspective"),D?e.style.perspective=D:fi(e,"perspective")}f=parseFloat(u)}if(S||(M=e._gsap,M.renderTransform&&!t.parseTransform||Xr(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new Qt(this._pt,o,xt,0,1,M.renderTransform,M,0,-1),S.dep=1),_==="scale")this._pt=new Qt(this._pt,M,"scaleY",M.scaleY,(T?sr(M.scaleY,T+f):f)-M.scaleY||0,Xa),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(jt,0,o[jt]),u=N0(u),M.svg?Ka(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&oi(this,M,"zOrigin",M.zOrigin,p),oi(this,o,_,zs(c),zs(u)));continue}else if(_==="svgOrigin"){Ka(e,u,1,b,0,this);continue}else if(_ in au){z0(this,M,_,h,T?sr(h,T+u):u);continue}else if(_==="smoothOrigin"){oi(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){k0(this,u,e);continue}}else _ in o||(_=dr(_)||_);if(w||(f||f===0)&&(h||h===0)&&!M0.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),p=zt(u)||(_ in ln.units?ln.units[_]:m),m!==p&&(h=di(e,_,c,p)),this._pt=new Qt(this._pt,w?M:o,_,h,(T?sr(h,T+f):f)-h,!w&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?b0:Xa),this._pt.u=p||0,w&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=T0):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=E0);else if(_ in o)F0.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,i,s);else if(_!=="parseTransform"){co(_,u);continue}w||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}A&&Jc(this)},render:function(e,t){if(t.tween._time||!Mo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Hn,aliases:In,getSetter:function(e,t,n){var i=In[t];return i&&i.indexOf(",")<0&&(t=i),t in Yn&&t!==jt&&(e._gsap.x||Hn(e,"x"))?n&&Bl===n?t==="scale"?C0:w0:(Bl=n||{})&&(t==="scale"?P0:D0):e.style&&!ao(e.style[t])?A0:~t.indexOf("-")?R0:xo(e,t)},core:{_removeProperty:fi,_getMatrix:Eo}};en.utils.checkPrefix=dr;en.core.getStyleSaver=nu;(function(r,e,t,n){var i=Jt(r+","+e+","+t,function(s){Yn[s]=1});Jt(e,function(s){ln.units[s]="deg",au[s]=1}),In[i[13]]=r+","+e,Jt(n,function(s){var a=s.split(":");In[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ln.units[r]="px"});en.registerPlugin(cu);var uu=en.registerPlugin(cu)||en;uu.core.Tween;(function(){let t=11;const n=()=>(t=t*16807%2147483647,(t-1)/2147483646),i=(R,C)=>{const L=Math.sin(R*127.1+C*311.7)*43758.5453;return L-Math.floor(L)};function s(R,C){const L=Math.floor(R),H=Math.floor(C),O=R-L,J=C-H,ee=O*O*(3-2*O),ue=J*J*(3-2*J),pe=i(L,H),Oe=i(L+1,H),We=i(L,H+1),Nt=i(L+1,H+1);return pe+(Oe-pe)*ee+(We-pe)*ue+(pe-Oe-We+Nt)*ee*ue}const a=(R,C)=>s(R,C)*.55+s(R*2.1,C*2.1)*.3+s(R*4.3,C*4.3)*.15,o=(R,C,L)=>Math.min(L,Math.max(C,R)),l=(R,C,L)=>[R[0]+(C[0]-R[0])*L,R[1]+(C[1]-R[1])*L,R[2]+(C[2]-R[2])*L],c=R=>{const C=[18,66,24],L=[60,138,38],H=[150,205,72],O=[208,236,122];return R<.4?l(C,L,R/.4):R<.8?l(L,H,(R-.4)/.4):l(H,O,(R-.8)/.2)},u=(R,C,L)=>Math.exp(-(((R-C)/L)**2)),f=R=>{const C=document.getElementById(R);return C?(C.width=1920,C.height=1080,C.getContext("2d")):null},h=(R,C)=>{R.beginPath(),R.moveTo(0,1080);for(let L=0;L<=1920;L+=8)R.lineTo(L,C(L/1920));R.lineTo(1920,1080),R.closePath()};function d(R,C,L,H,O,J){const ee=R.createRadialGradient(C,L,0,C,L,H);ee.addColorStop(0,`rgba(${O},${J})`),ee.addColorStop(.6,`rgba(${O},${J*.55})`),ee.addColorStop(1,`rgba(${O},0)`),R.fillStyle=ee,R.beginPath(),R.arc(C,L,H,0,7),R.fill()}function g(R,C,L,H,O,J){const ee=[];for(let ue=0;ue<70;ue++){const pe=n()*Math.PI*2,Oe=Math.sqrt(n()),We=C+Math.cos(pe)*Oe*H/2,Nt=L+Math.sin(pe)*Oe*O/2*(Math.sin(pe)>0?.55:1);ee.push([We,Nt,(.1+n()*.22)*O*(1-Oe*.5)])}ee.sort((ue,pe)=>ue[1]-pe[1]);for(const[ue,pe,Oe]of ee)d(R,ue,pe+Oe*.3,Oe*1.05,"165,182,232",J*.5);for(const[ue,pe,Oe]of ee)d(R,ue,pe-Oe*.1,Oe,"255,255,255",J)}function _(R,C,L,H){d(R,C,L,H*.8,"255,255,255",.9),[0,Math.PI/2].forEach(O=>{R.save(),R.translate(C,L),R.rotate(O);const J=R.createLinearGradient(-H,0,H,0);J.addColorStop(0,"rgba(255,255,255,0)"),J.addColorStop(.5,"rgba(255,255,255,0.95)"),J.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=J,R.fillRect(-H,-2,H*2,4),R.restore()})}const m=f("sky");if(m){const R=m,C=R.createLinearGradient(0,0,0,1080*.72);C.addColorStop(0,"#3a8ad4"),C.addColorStop(.5,"#79bbee"),C.addColorStop(1,"#dcf0fb"),R.fillStyle=C,R.fillRect(0,0,1920,1080);const L=R.createRadialGradient(1920*.9,0,0,1920*.9,0,1920*.5);L.addColorStop(0,"rgba(255,255,255,0.8)"),L.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=L,R.fillRect(0,0,1920,1080),g(R,1920*.1,1080*.5,760,340,.9),g(R,1920*.7,1080*.42,980,380,.85),g(R,1920*.45,1080*.62,700,200,.7),g(R,1920*.32,1080*.12,520,130,.45),g(R,1920*.95,1080*.2,420,120,.5),_(R,1920*.1,1080*.13,70),_(R,1920*.94,1080*.52,38)}const p=R=>1080*(.53-.05*Math.sin(R*4.2+.8)-.035*Math.sin(R*9.5+2)-.02*Math.sin(R*21)),T=f("far");if(T){const R=T,C=R.createLinearGradient(0,1080*.4,0,1080*.85);C.addColorStop(0,"#aedab9"),C.addColorStop(1,"#5da35b"),h(R,p),R.fillStyle=C,R.fill(),R.lineCap="round";for(let H=0;H<3e4;H++){const O=n()*1920,J=p(O/1920),ee=J+Math.pow(n(),1.3)*1080*.4,ue=o(.25+a(O/200,ee/140)*.6+Math.exp(-(ee-J)/70)*.25,0,1),pe=l(c(ue),[165,212,196],.42);R.strokeStyle=`rgb(${pe[0]|0},${pe[1]|0},${pe[2]|0})`,R.lineWidth=1;const Oe=4+n()*4;R.beginPath(),R.moveTo(O,ee),R.lineTo(O+(n()-.5)*2,ee-Oe),R.stroke()}R.globalCompositeOperation="source-atop";const L=R.createLinearGradient(0,1080*.35,0,1080*.7);L.addColorStop(0,"rgba(235,248,255,0.5)"),L.addColorStop(1,"rgba(235,248,255,0)"),R.fillStyle=L,R.fillRect(0,0,1920,1080)}const w=R=>1080*(.84-.25*u(R,.27,.2)-.31*u(R,.74,.21)-.2*u(R,-.02,.17)-.2*u(R,1.03,.14)+.012*Math.sin(R*31)+.006*Math.sin(R*77+1)),S=f("mid");if(S){let L=function(ee,ue,pe){for(let Oe=0;Oe<ee;Oe++){const We=n()*1920,Nt=w(We/1920),Ht=Nt+Math.pow(n(),.9)*(1080-Nt),An=(w((We+8)/1920)-w((We-8)/1920))/16,Li=o(.5+An*2.2,0,1),Ys=Math.exp(-(Ht-Nt)/90),$r=a(We/240,Ht/170),Jr=Math.max(0,.45-a(We/620+5,Ht/420+2))*1.3;let vn=.28+.32*Li+.3*$r+.35*Ys-.5*Jr+(n()-.5)*.12;vn=o(vn,0,1)*ue;const mi=c(vn),gr=.5+Ht/1080*1.3,_i=(8+n()*10)*gr*pe,Nn=-Math.PI/2+(n()-.5)*.7+(Li-.5)*.3,Qr=Math.cos(Nn-.22)*_i*.55,Ii=Math.sin(Nn-.22)*_i*.55;R.strokeStyle=`rgb(${mi[0]|0},${mi[1]|0},${mi[2]|0})`,R.lineWidth=1.1*Math.pow(gr,.8),R.beginPath(),R.moveTo(We,Ht),R.quadraticCurveTo(We+Qr,Ht+Ii,We+Math.cos(Nn)*_i,Ht+Math.sin(Nn)*_i),R.stroke()}},H=function(ee,ue,pe,Oe){R.fillStyle="rgba(0,30,0,.25)",R.beginPath(),R.ellipse(ee,ue+pe*.5,pe*.9,pe*.35,0,0,7),R.fill(),R.fillStyle=Oe;for(let We=0;We<5;We++){const Nt=We/5*Math.PI*2+n();R.beginPath(),R.arc(ee+Math.cos(Nt)*pe*.55,ue+Math.sin(Nt)*pe*.5,pe*.46,0,7),R.fill()}R.fillStyle="#ffe36a",R.beginPath(),R.arc(ee,ue,pe*.26,0,7),R.fill()};var we=L,Ce=H;const R=S;R.lineCap="round";const C=R.createLinearGradient(0,1080*.45,0,1080);C.addColorStop(0,"#2c6e1f"),C.addColorStop(1,"#14430f"),h(R,w),R.fillStyle=C,R.fill(),L(35e3,.65,1.3),L(8e4,1,1);for(let ee=0;ee<38;ee++){const ue=n()*1920,pe=w(ue/1920),Oe=pe+40+n()*(1080-pe-80),We=.5+Oe/1080*1.3,Nt=5+(n()*10|0);for(let Ht=0;Ht<Nt;Ht++){const An=n()<.7?"#ffffff":"#cfe4ff";H(ue+(n()-.5)*90*We,Oe+(n()-.5)*40*We,(3.2+n()*3)*We,An)}}R.globalCompositeOperation="source-atop";const O=R.createRadialGradient(1920*.5,1080*.78,0,1920*.5,1080*.78,1920*.3);O.addColorStop(0,"rgba(6,40,24,.5)"),O.addColorStop(1,"rgba(6,40,24,0)"),R.fillStyle=O,R.fillRect(0,0,1920,1080);const J=R.createLinearGradient(1920,0,0,1080);J.addColorStop(0,"rgba(255,240,150,.16)"),J.addColorStop(.6,"rgba(255,240,150,0)"),R.fillStyle=J,R.fillRect(0,0,1920,1080)}const M=f("front");if(M){let C=function(O,J,ee,ue){R.fillStyle=`rgba(255,255,225,${ue})`,R.beginPath(),R.arc(O,J,ee,0,7),R.fill(),R.strokeStyle=`rgba(255,255,255,${ue*1.6})`,R.lineWidth=2,R.stroke()},L=function(O,J,ee,ue,pe,Oe,We){const Nt=O+pe,Ht=J-ee,An=R.createLinearGradient(0,J,0,Ht);An.addColorStop(0,Oe),An.addColorStop(1,We),R.fillStyle=An,R.beginPath(),R.moveTo(O-ue,J),R.quadraticCurveTo(O-ue*.6+pe*.1,J-ee*.55,Nt,Ht),R.quadraticCurveTo(O+ue*.6+pe*.5,J-ee*.5,O+ue,J),R.closePath(),R.fill()};var Fe=C,B=L;const R=M;for(let O=0;O<16;O++)C(n()*1920,1080*(.55+n()*.4),12+n()*38,.1+n()*.08);const H=["#7fd04a","#a8e05a","#5fba3a","#c4ec6a"];for(let O=0;O<340;O++){const ee=n()<.7?1920*(n()<.5?Math.pow(n(),1.6)*.5:1-Math.pow(n(),1.6)*.5):n()*1920,ue=(110+n()*300)*(.4+1.1*Math.abs(ee/1920-.5)*2);L(ee,1080+20,ue,12+n()*16,(n()-.5)*90,"#12480f",H[n()*H.length|0])}for(let O=0;O<9;O++){const J=n()<.5?n()*1920*.3:1920*(.7+n()*.3),ee=1080*(.86+n()*.1),ue=16+n()*14;R.fillStyle="rgba(255,255,255,.95)";for(let pe=0;pe<5;pe++){const Oe=pe/5*Math.PI*2;R.beginPath(),R.arc(J+Math.cos(Oe)*ue*.55,ee+Math.sin(Oe)*ue*.55,ue*.5,0,7),R.fill()}R.fillStyle="#ffe36a",R.beginPath(),R.arc(J,ee,ue*.28,0,7),R.fill()}}document.body.classList.add("ready");const b={ctx:null,on:!0,pop(){if(this.on)try{this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext),this.ctx.state==="suspended"&&this.ctx.resume();const R=this.ctx.createOscillator(),C=this.ctx.createGain(),L=this.ctx.currentTime;R.type="sine",R.frequency.setValueAtTime(450,L),R.frequency.exponentialRampToValueAtTime(900,L+.08),C.gain.setValueAtTime(.32,L),C.gain.exponentialRampToValueAtTime(.01,L+.09),R.connect(C),C.connect(this.ctx.destination),R.start(L),R.stop(L+.09)}catch{}},chime(){if(this.on)try{this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),[523.25,659.25,783.99,1046.5].forEach((C,L)=>{const H=this.ctx.createOscillator(),O=this.ctx.createGain(),J=this.ctx.currentTime+L*.04;H.type="triangle",H.frequency.setValueAtTime(C,J),O.gain.setValueAtTime(.12,J),O.gain.exponentialRampToValueAtTime(.001,J+.3),H.connect(O),O.connect(this.ctx.destination),H.start(J),H.stop(J+.3)})}catch{}}},A=document.getElementById("sfx-toggle")||document.getElementById("sfx");A&&A.addEventListener("click",()=>{b.on=!b.on,A.classList.toggle("active",b.on),A.setAttribute("aria-pressed",String(b.on)),A.innerHTML=b.on?'<i class="fa-solid fa-volume-high"></i>':'<i class="fa-solid fa-volume-xmark"></i>',b.on&&b.chime()});const x=document.getElementById("gl");if(!x)return;const E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,D=E?.25:1,I=window.innerWidth<768,F=new y_({canvas:x,alpha:!0,antialias:!0,powerPreference:"high-performance"});F.setClearColor(0,0),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.outputColorSpace=Yt;const z=new Zu,U=14,k=40,Z=new mn(k,window.innerWidth/window.innerHeight,.1,100);Z.position.set(0,0,U),z.add(new _h(14938879,8038474,.85));const W=new vh(16773327,1);W.position.set(4,6,8),z.add(W);function ae(){F.setSize(window.innerWidth,window.innerHeight,!1),Z.aspect=window.innerWidth/window.innerHeight,Z.updateProjectionMatrix()}ae(),window.addEventListener("resize",ae);function Q(R,C,L,H){const O=Math.tan(Fu.degToRad(k/2))*(U-H);R.position.set(C*O*Z.aspect,L*O,H)}function re(){const R=document.createElement("canvas");R.width=R.height=1024;const C=R.getContext("2d");C.fillStyle="#ffd500",C.fillRect(0,0,1024,1024),C.fillStyle="#ffd500",C.beginPath(),C.arc(512,512,500,0,7),C.fill(),C.fillStyle="#f0b400";for(let O=0;O<380;O++){const J=Math.random()*6.283,ee=445+Math.random()*45;C.beginPath(),C.arc(512+Math.cos(J)*ee,512+Math.sin(J)*ee,1.6,0,7),C.fill()}C.fillStyle="#fffdf0",C.beginPath(),C.arc(512,512,436,0,7),C.fill(),C.fillStyle="#ffb300",C.beginPath(),C.arc(512,512,398,0,7),C.fill();const L=10;for(let O=0;O<L;O++){const J=O/L*6.283+.05,ee=(O+1)/L*6.283-.05;C.save(),C.beginPath(),C.moveTo(512,512),C.arc(512,512,384,J,ee),C.closePath();const ue=C.createRadialGradient(512,512,20,512,512,384);ue.addColorStop(0,"#fff3a0"),ue.addColorStop(.55,"#ffd21a"),ue.addColorStop(1,"#ffb800"),C.fillStyle=ue,C.fill(),C.lineWidth=9,C.strokeStyle="#fffbe6",C.stroke(),C.clip(),C.fillStyle="rgba(255,246,170,.7)";for(let pe=0;pe<55;pe++)C.beginPath(),C.ellipse(512+(Math.random()-.5)*360,512+(Math.random()-.5)*360,6,2.5,Math.random()*3,0,7),C.fill();C.restore()}C.fillStyle="#fffdf0",C.beginPath(),C.arc(512,512,40,0,7),C.fill();const H=new ma(R);return H.colorSpace=Yt,H.anisotropy=4,H}const oe=re(),ye=new Is(.55,.55,.1,64),be=new dh({map:oe,roughness:.35,clearcoat:.5,clearcoatRoughness:.25}),ze=new Da({color:16106496,roughness:.5}),De=[];[[-.8,.18,-1,1.45],[-.9,-.42,1,1],[.84,.22,-1,1.35],[.72,-.46,1,1.1],[-.52,.8,-2,.8]].forEach(([R,C,L,H],O)=>{const J=new ri,ee=new Kt(ye,[ze,be,ze]);ee.rotation.x=Math.PI/2,J.add(ee),J.scale.setScalar(H),z.add(J),De.push({pivot:J,nx:R,ny:C,z:L,ph:O*1.7,dir:O%2?1:-1})});const Je=new io(1,48,48),te=new bn({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:1}},vertexShader:`
    varying vec3 vN; varying vec3 vV;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    varying vec3 vN; varying vec3 vV; uniform float uTime; uniform float uOpacity;
    void main() {
      vec3 n = normalize(vN), v = normalize(vV);
      float f = 1.0 - abs(dot(n, v));
      float rim = pow(f, 2.4);
      vec3 film = 0.5 + 0.5 * cos(6.2831 * (f * 1.3 + vec3(0.0, 0.33, 0.67) + uTime * 0.04));
      vec3 col = mix(vec3(0.86, 0.95, 1.0), film, 0.7);
      float spec = pow(max(dot(n, normalize(vec3(-0.5, 0.7, 0.6))), 0.0), 48.0);
      float spec2 = pow(max(dot(n, normalize(vec3(0.6, -0.5, 0.5))), 0.0), 30.0) * 0.35;
      float a = clamp(rim * 0.8 + 0.05 + spec + spec2, 0.0, 1.0) * uOpacity;
      gl_FragColor = vec4(col + spec + spec2, a);
    }`}),se=[],Se=I?12:22;for(let R=0;R<Se;R++){const C=new Kt(Je,te.clone()),L=.28+Math.random()*.5;se.push(C),C.userData={s:L,x:Math.random()*2-1,y:Math.random()*2.4-1.2,z:Math.random()*4-2,v:.025+Math.random()*.05,ph:Math.random()*6.28,state:"live",k:0,fade:1},z.add(C)}function Le(){const R=document.createElement("canvas");R.width=R.height=64;const C=R.getContext("2d"),L=C.createRadialGradient(32,32,0,32,32,30);return L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(.35,"rgba(255,238,140,.85)"),L.addColorStop(1,"rgba(255,210,60,0)"),C.fillStyle=L,C.fillRect(0,0,64,64),new ma(R)}const xe=Le(),Ne=[];for(let R=0;R<60;R++){const C=new ih(new Ql({map:xe,transparent:!0,depthWrite:!1,blending:2,opacity:0}));C.visible=!1,z.add(C),Ne.push({sp:C,vel:new X,life:0})}function St(R){let C=0;for(const L of Ne)if(!(L.life>0)&&(L.life=.5+Math.random()*.5,L.sp.visible=!0,L.sp.position.copy(R),L.vel.set((Math.random()-.5)*3,Math.random()*2.2+.4,(Math.random()-.5)*1.2),L.sp.scale.setScalar(.2+Math.random()*.2),++C>=14))break}function ke(){const R=document.createElement("canvas");R.width=R.height=512;const C=R.getContext("2d");C.translate(0,256);const L=new Path2D;L.moveTo(0,0),L.bezierCurveTo(60,-230,400,-250,500,-120),L.bezierCurveTo(520,-40,330,-20,0,0);const H=new Path2D;H.moveTo(0,0),H.bezierCurveTo(280,10,430,60,380,170),H.bezierCurveTo(330,240,120,200,0,0);const O=C.createLinearGradient(0,0,500,0);O.addColorStop(0,"#ff7eb0"),O.addColorStop(.6,"#ff9ec4"),O.addColorStop(1,"#ffe0ee"),C.fillStyle=O,C.strokeStyle="rgba(255,255,255,.95)",C.lineWidth=8,[L,H].forEach(ee=>{C.fill(ee),C.stroke(ee)}),C.strokeStyle="rgba(190,70,120,.35)",C.lineWidth=2;for(let ee=0;ee<6;ee++)C.beginPath(),C.moveTo(0,0),C.quadraticCurveTo(200,-150+ee*55,440,-120+ee*55),C.stroke();C.fillStyle="rgba(255,255,255,.9)";for(let ee=0;ee<7;ee++)C.beginPath(),C.arc(380+Math.cos(ee)*40,-90+ee*34,6,0,7),C.fill();const J=new ma(R);return J.colorSpace=Yt,J.anisotropy=4,J}const Ye=new Kr(1,1);Ye.translate(.5,0,0);const tt=new eo({map:ke(),transparent:!0,alphaTest:.05,side:2,toneMapped:!1}),Ve=new no(.035,.55,4,8),st=new Da({color:4858936,roughness:.7}),Mt=new Is(.008,.008,.28,5);Mt.translate(0,.14,0);function Ft(){const R=new ri,C=new ri,L=new ri,H=new Kt(Ye,tt);H.scale.x=-1;const O=new Kt(Ye,tt);C.add(H),L.add(O);const J=new Kt(Ve,st);return[-.35,.35].forEach(ee=>{const ue=new Kt(Mt,st);ue.position.y=.3,ue.rotation.z=ee,J.add(ue)}),R.add(C,L,J),{root:R,lp:C,rp:L}}const at=[];[[-.7,.62],[.78,.55],[.9,-.18],[-.9,-.55],[.62,.86]].slice(0,I?3:5).forEach(([R,C],L)=>{const H=Ft(),O=.55+Math.random()*.25;H.root.scale.setScalar(O),z.add(H.root),at.push({...H,cx:R,cy:C,ph:Math.random()*10,sp:11+Math.random()*4,z:.5+L%3*.6})});const pt=new yh,G=new Ue;let Tt=0,Qe=0,P=0,v=0,V=0,K=0,j=0,le=null;function ce(R){const C=R.touches?R.touches[0].clientX:R.clientX,L=R.touches?R.touches[0].clientY:R.clientY;Tt=C/window.innerWidth*2-1,Qe=L/window.innerHeight*2-1,K=Tt,j=-Qe}function ne(R,C){const L=[];De.forEach(J=>{const ee=J._attrX!==void 0?J._attrX:J.nx,ue=J._attrY!==void 0?J._attrY:J.ny;L.push({obj:J,type:"lemon",nx:ee,ny:ue})}),at.forEach(J=>{const ee=J._attrX!==void 0?J._attrX:J.cx,ue=J._attrY!==void 0?J._attrY:J.cy;L.push({obj:J,type:"butterfly",nx:ee,ny:ue})});let H=null,O=1/0;return L.forEach(J=>{const ee=(J.nx-R)**2+(J.ny-C)**2;ee<O&&(O=ee,H=J)}),H}window.addEventListener("pointermove",R=>{ce(R)}),window.addEventListener("touchmove",R=>{ce(R),R.preventDefault()},{passive:!1});function ie(){if(le){const R=le.obj;R._attrX!==void 0&&(le.type==="lemon"?(R.nx=R._attrX,R.ny=R._attrY):(R.cx=R._attrX,R.cy=R._attrY))}le=null}function he(R){if(R.target.closest("a, button, input, textarea, .navbar-custom, .glass-box, .project-card, .skill-card-group, .modal-glass-content"))return;ce(R),G.set((R.touches?R.touches[0].clientX:R.clientX)/window.innerWidth*2-1,-((R.touches?R.touches[0].clientY:R.clientY)/window.innerHeight)*2+1),pt.setFromCamera(G,Z);const C=se.filter(H=>H.userData.state==="live"),L=pt.intersectObjects(C)[0];if(L){const H=L.object;H.userData.state="pop",H.userData.k=0,St(H.position),b.pop(),V++;const O=document.getElementById("score");O&&(O.textContent=V),le=null;return}le=ne(K,j)}window.addEventListener("pointerdown",he),window.addEventListener("touchstart",R=>he(R),{passive:!0}),window.addEventListener("pointerup",ie),window.addEventListener("pointercancel",ie),window.addEventListener("touchend",ie),window.addEventListener("touchcancel",ie);const Ae=[...document.querySelectorAll(".layer")],de=new Eh;function fe(){requestAnimationFrame(fe);const R=Math.min(de.getDelta(),.05),C=de.elapsedTime;if(P+=(Tt-P)*.05,v+=(Qe-v)*.05,!E){const L=Math.min(1,window.innerWidth/1400);Ae.forEach(H=>{const O=+H.dataset.k*L;H.style.transform=`translate3d(${-P*O}px,${-v*O*.6}px,0)`})}Z.position.x=P*.35,Z.position.y=-v*.2,Z.lookAt(0,0,0),te.uniforms.uTime.value=C,De.forEach(L=>{const H=L.ny+Math.sin(C*1.3*D+L.ph)*.025,O=L.nx;le&&le.obj===L?(L._attrX=L._attrX!==void 0?L._attrX:O,L._attrY=L._attrY!==void 0?L._attrY:H,L._attrX+=(K-L._attrX)*.28,L._attrY+=(j-L._attrY)*.28):(L._attrX=O,L._attrY=H),Q(L.pivot,L._attrX!==void 0?L._attrX:O,L._attrY!==void 0?L._attrY:H,L.z),L.pivot.rotation.set(Math.sin(C*.6*D+L.ph)*.4,Math.sin(C*.5*D+L.ph*1.3)*.5,L.dir*C*.12*D+L.ph)}),se.forEach(L=>{const H=L.userData;L.material.uniforms.uTime.value=C;let O=H.s;H.state==="pop"?(H.k+=R/.16,O=H.s*(1+.35*H.k),L.material.uniforms.uOpacity.value=Math.max(0,1-H.k),H.k>=1&&(H.state="live",H.y=-1.3,H.x=Math.random()*2-1,H.fade=0)):(H.y+=H.v*R*D,H.y>1.3&&(H.y=-1.3,H.x=Math.random()*2-1),H.fade<1&&(H.fade=Math.min(1,H.fade+R*1.5)),L.material.uniforms.uOpacity.value=H.fade),Q(L,H.x+Math.sin(C*.9*D+H.ph)*.02,H.y,H.z);const J=1+Math.sin(C*2.2+H.ph)*.02;L.scale.set(O*J,O/J,O*J)}),at.forEach(L=>{const H=C*.5*D+L.ph,O=Math.sin(C*L.sp*D+L.ph),J=Math.cos(H),ee=Math.cos(H*1.6),ue=L.cx+Math.sin(H)*.1,pe=L.cy+Math.sin(H*1.6)*.07+O*.004;le&&le.obj===L?(L._attrX=L._attrX!==void 0?L._attrX:ue,L._attrY=L._attrY!==void 0?L._attrY:pe,L._attrX+=(K-L._attrX)*.25,L._attrY+=(j-L._attrY)*.25):(L._attrX=ue,L._attrY=pe),Q(L.root,L._attrX!==void 0?L._attrX:ue,L._attrY!==void 0?L._attrY:pe,L.z);const We=.35+(O*.5+.5)*.75;L.rp.rotation.y=We,L.lp.rotation.y=-We,L.root.rotation.set(.35+ee*.12,J*.3,-J*.3)}),Ne.forEach(L=>{L.life<=0||(L.life-=R,L.vel.y-=2.2*R,L.sp.position.addScaledVector(L.vel,R),L.sp.material.opacity=Math.max(0,L.life*1.6),L.life<=0&&(L.sp.visible=!1))}),F.render(z,Z)}fe()})();document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".filter-pill"),e=document.querySelectorAll(".project-card");r.forEach(d=>{d.addEventListener("click",()=>{sfx.chime(),r.forEach(_=>_.classList.remove("active")),d.classList.add("active");const g=d.getAttribute("data-category");e.forEach(_=>{const m=_.getAttribute("data-category");g==="all"||m===g?(_.style.display="flex",uu.fromTo(_,{opacity:0,y:20,scale:.95},{opacity:1,y:0,scale:1,duration:.4,ease:"back.out(1.4)"})):_.style.display="none"})})});const t=document.getElementById("project-modal"),n=document.getElementById("modal-title"),i=document.getElementById("modal-category"),s=document.getElementById("modal-description"),a=document.getElementById("modal-img"),o=document.getElementById("close-modal");document.querySelectorAll(".btn-view-project").forEach(d=>{d.addEventListener("click",g=>{var S,M,b,A;g.preventDefault(),sfx.chime();const _=d.closest(".project-card"),m=((S=_.querySelector(".project-title"))==null?void 0:S.innerText)||"",p=((M=_.querySelector(".project-category-tag"))==null?void 0:M.innerText)||"",T=((b=_.querySelector(".project-description"))==null?void 0:b.innerText)||"",w=((A=_.querySelector(".project-thumb-img"))==null?void 0:A.src)||"";n&&(n.innerText=m),i&&(i.innerText=p),s&&(s.innerText=T),a&&(a.src=w),t&&t.classList.add("active")})}),o&&t&&o.addEventListener("click",()=>{t.classList.remove("active")}),t&&t.addEventListener("click",d=>{d.target===t&&t.classList.remove("active")});const l=document.querySelector(".hero-glass-card");l&&window.addEventListener("mousemove",d=>{const g=(window.innerWidth/2-d.clientX)/55,_=(window.innerHeight/2-d.clientY)/55;l.style.transform=`rotateY(${g}deg) rotateX(${_}deg)`});const c=document.getElementById("cert-popup"),u=document.getElementById("cert-popup-pdf"),f=document.getElementById("cert-popup-img"),h=document.getElementById("cert-popup-placeholder");window.openCertificate=function(d){if(!d)return;let g=d;!g.includes(".")&&!g.endsWith("/")&&(g+=".pdf");const _=g.toLowerCase().endsWith(".pdf");u&&(u.style.display="none",u.src=""),f&&(f.style.display="none",f.src=""),h&&(h.style.display="none"),_?u&&(u.src=g,u.style.display="block"):f&&(f.style.display="block",f.onerror=()=>{f.style.display="none",h&&(h.style.display="block")},f.src=g),c&&(c.style.display="flex")},document.querySelectorAll(".btn-view-cert").forEach(d=>{d.addEventListener("click",g=>{g.preventDefault();const _=d.dataset.certFile||d.dataset.certImg||"";window.openCertificate(_)})})});
