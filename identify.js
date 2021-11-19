module.exports = {
  identify,
};

function identify(obj = {}) {
  let connection = null;
  if (obj.fsType === "remote_server") {
    connection = require("./remote_server.js")(obj.apiEndPoint);
  } else {
    connection = require("fs");
  }
  return connection;
}
