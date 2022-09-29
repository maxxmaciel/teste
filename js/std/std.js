var std = {};

std.isNull = function (o) {
  return o == null || o == undefined;
};

std.ifNull = function (o, def) {
  return !std.isNull(o) ? o : def;
};

std.projection = function (o, field_name) {
  var result = {};

  for (nm in o) {
    var node = o[nm];

    result[nm] = node[field_name];
  }

  return result;
};
