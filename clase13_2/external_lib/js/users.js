"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/es.function.name.js");
$.get("/api/users", function (users, status) {
  users.forEach(function (user) {
    $("#table_body").append("<tr>\n        <th scope=\"row\">" + user.id + "</th>\n        <td>" + user.name + "</td>\n        <td>" + user.username + "</td>\n        <td>" + user.email + "</td>\n    </tr>");
  });
});