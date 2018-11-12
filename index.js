function d(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.F = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.C = function(a, c, h) {
    for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) {
      e[f - 2] = arguments[f];
    }
    return b.prototype[c].apply(a, e);
  };
}
;function g(a, b) {
  a.sort(b || k);
}
function k(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function l(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = a[e];
  }
  return b;
}
;function m(a, b) {
  this.f = a;
  this.l = b.name;
  this.o = !!b.i;
  this.m = b.a;
}
m.prototype.getName = function() {
  return this.l;
};
function n(a, b) {
  this.l = a.name || null;
  this.h = {};
  for (var c = 0; c < b.length; c++) {
    var e = b[c];
    this.h[e.f] = e;
  }
}
n.prototype.getName = function() {
  return this.l;
};
function r(a) {
  a = l(a.h);
  g(a, function(a, c) {
    return a.f - c.f;
  });
  return a;
}
;function t() {
  this.g = {};
  this.h = this.c().h;
  this.b = this.s = null;
}
t.prototype.has = function(a) {
  return null != this.g[a.f];
};
t.prototype.get = function(a, b) {
  return u(this, a.f, b);
};
t.prototype.set = function(a, b) {
  v(this, a.f, b);
};
t.prototype.add = function(a, b) {
  w(this, a.f, b);
};
t.prototype.clear = function(a) {
  a = a.f;
  delete this.g[a];
  this.b && delete this.b[a];
};
function x(a, b) {
  for (var c = r(a.c()), e = 0; e < c.length; e++) {
    var f = c[e], h = f.f;
    if (null != b.g[h]) {
      a.b && delete a.b[f.f];
      var p = 11 == f.m || 10 == f.m;
      if (f.o) {
        f = y(b, h) || [];
        for (var q = 0; q < f.length; q++) {
          w(a, h, p ? f[q].clone() : f[q]);
        }
      } else {
        f = y(b, h), p ? (p = y(a, h)) ? x(p, f) : v(a, h, f.clone()) : v(a, h, f);
      }
    }
  }
}
t.prototype.clone = function() {
  var a = new this.constructor;
  a != this && (a.g = {}, a.b && (a.b = {}), x(a, this));
  return a;
};
function y(a, b) {
  var c = a.g[b];
  return null == c ? null : a.s ? b in a.b ? a.b[b] : (c = a.s.D(a, a.h[b], c), a.b[b] = c) : c;
}
function u(a, b, c) {
  var e = y(a, b);
  return a.h[b].o ? e[c || 0] : e;
}
function v(a, b, c) {
  a.g[b] = c;
  a.b && (a.b[b] = c);
}
function w(a, b, c) {
  a.g[b] || (a.g[b] = []);
  a.g[b].push(c);
  a.b && delete a.b[b];
}
function z(a) {
  var b = [], c = a[0], e;
  for (e in a) {
    0 != e && b.push(new m(e, a[e]));
  }
  return new n(c, b);
}
;/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function A() {
  t.call(this);
}
d(A, t);
var B = null;
function C() {
  t.call(this);
}
d(C, t);
var D = null;
function E() {
  t.call(this);
}
d(E, t);
var F = null;
A.prototype.c = function() {
  var a = B;
  a || (B = a = z({0:{name:"NumberFormat", j:"i18n.phonenumbers.NumberFormat"}, 1:{name:"pattern", required:!0, a:9, type:String}, 2:{name:"format", required:!0, a:9, type:String}, 3:{name:"leading_digits_pattern", i:!0, a:9, type:String}, 4:{name:"national_prefix_formatting_rule", a:9, type:String}, 6:{name:"national_prefix_optional_when_formatting", a:8, defaultValue:!1, type:Boolean}, 5:{name:"domestic_carrier_code_formatting_rule", a:9, type:String}}));
  return a;
};
A.c = A.prototype.c;
C.prototype.c = function() {
  var a = D;
  a || (D = a = z({0:{name:"PhoneNumberDesc", j:"i18n.phonenumbers.PhoneNumberDesc"}, 2:{name:"national_number_pattern", a:9, type:String}, 9:{name:"possible_length", i:!0, a:5, type:Number}, 10:{name:"possible_length_local_only", i:!0, a:5, type:Number}, 6:{name:"example_number", a:9, type:String}}));
  return a;
};
C.c = C.prototype.c;
E.prototype.c = function() {
  var a = F;
  a || (F = a = z({0:{name:"PhoneMetadata", j:"i18n.phonenumbers.PhoneMetadata"}, 1:{name:"general_desc", a:11, type:C}, 2:{name:"fixed_line", a:11, type:C}, 3:{name:"mobile", a:11, type:C}, 4:{name:"toll_free", a:11, type:C}, 5:{name:"premium_rate", a:11, type:C}, 6:{name:"shared_cost", a:11, type:C}, 7:{name:"personal_number", a:11, type:C}, 8:{name:"voip", a:11, type:C}, 21:{name:"pager", a:11, type:C}, 25:{name:"uan", a:11, type:C}, 27:{name:"emergency", a:11, type:C}, 28:{name:"voicemail", a:11,
  type:C}, 29:{name:"short_code", a:11, type:C}, 30:{name:"standard_rate", a:11, type:C}, 31:{name:"carrier_specific", a:11, type:C}, 33:{name:"sms_services", a:11, type:C}, 24:{name:"no_international_dialling", a:11, type:C}, 9:{name:"id", required:!0, a:9, type:String}, 10:{name:"country_code", a:5, type:Number}, 11:{name:"international_prefix", a:9, type:String}, 17:{name:"preferred_international_prefix", a:9, type:String}, 12:{name:"national_prefix", a:9, type:String}, 13:{name:"preferred_extn_prefix",
  a:9, type:String}, 15:{name:"national_prefix_for_parsing", a:9, type:String}, 16:{name:"national_prefix_transform_rule", a:9, type:String}, 18:{name:"same_mobile_and_fixed_line_pattern", a:8, defaultValue:!1, type:Boolean}, 19:{name:"number_format", i:!0, a:11, type:A}, 20:{name:"intl_number_format", i:!0, a:11, type:A}, 22:{name:"main_country_for_code", a:8, defaultValue:!1, type:Boolean}, 23:{name:"leading_digits", a:9, type:String}, 26:{name:"leading_zero_possible", a:8, defaultValue:!1, type:Boolean}}));
  return a;
};
E.c = E.prototype.c;
function G() {
  t.call(this);
}
d(G, t);
var H = null;
G.prototype.getExtension = function() {
  return u(this, 3);
};
var I = {B:0, A:1, w:5, v:10, u:20};
G.prototype.c = function() {
  var a = H;
  a || (H = a = z({0:{name:"PhoneNumber", j:"i18n.phonenumbers.PhoneNumber"}, 1:{name:"country_code", required:!0, a:5, type:Number}, 2:{name:"national_number", required:!0, a:4, type:Number}, 3:{name:"extension", a:9, type:String}, 4:{name:"italian_leading_zero", a:8, type:Boolean}, 8:{name:"number_of_leading_zeros", a:5, defaultValue:1, type:Number}, 5:{name:"raw_input", a:9, type:String}, 6:{name:"country_code_source", a:14, defaultValue:0, type:I}, 7:{name:"preferred_domestic_carrier_code", a:9,
  type:String}}));
  return a;
};
G.ctor = G;
G.ctor.c = G.prototype.c;
/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var J = new E;
v(J, 11, "NA");
/*

 Copyright (C) 2011 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/