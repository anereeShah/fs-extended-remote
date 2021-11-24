const request = require("request");
const deasync = require("deasync");
const { Readable, Writable } = require("stream");
const { Stats } = require("fs");
function vm(apiEndPoint = "http://localhost:3001/") {
  function callToServer(url, body, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + url,
        body: JSON.stringify(body),
      },
      (e, response, body) => {
        if (e) {
          cb(e, null);
        }
        let res = JSON.parse(body);
        if(url === "stat"){
           res.data= new Stats(res.data)
        }
        if (e) {
          cb(e, null);
        } else {
          cb(null, res.data);
        }
      }
    );
  }
  function readFile(fileName, options, cb) {
    callToServer(
      "readFile",
      {
        path: fileName,
        options: options,
      },
      cb
    );
  }
  function readdir(fileName, cb) {
    callToServer(
      "readdir",
      {
        path: fileName,
      },
      cb
    );
  }
  function mkdir(fileName, cb) {
    callToServer("mkdir", { path: fileName }, cb);
  }
  function writeFile(path, data, cb) {
    callToServer(
      "writeFile",
      {
        path: path,
        data: data
      },
      cb
    );
  }
  function exists(path, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "exists",
        body: JSON.stringify({ path: path }),
      },
      (e, response, body) => {
        let res = JSON.parse(body);
        if (e) {
          cb(e);
        } else {
          cb(res.data);
        }
      }
    );
  }
  function rmdir(path) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "rmdir",
        body: JSON.stringify({ path: path }),
      },
      (e, response, body) => {
        console.error(e);
      }
    );
  }
  function unlink(path, cb) {
    callToServer(
      "unlink",
      {
        path: path,
        encoding: encoding,
      },
      cb
    );
  }
  function stat(path, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "stat",
        body: JSON.stringify({
          path: path,
        }),
      },
      (e, response, body) => {
        if (e) {
          cb(e, null);
        }
        let res = JSON.parse(body);
        if (e) {
          cb(e, null);
        } else {
          cb(null, new Stats(res.data));
        }
      }
    );
  }
  function lstat(path, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "lstat",
        body: JSON.stringify({
          path: path,
        }),
      },
      (e, response, body) => {
        if (e) {
          cb(e, null);
        }
        let res = JSON.parse(body);
        if (e) {
          cb(e, null);
        } else {
          cb(null, new Stats(res.data));
        }
      }
    );
  }
  function ensureDir(path, cb) {
    callToServer(
      "ensureDir",
      {
        path: path,
      },
      cb
    );
  }
  function appendFile(path, data, cb) {
    callToServer(
      "appendFile",
      {
        path: path,
        data: data,
      },
      cb
    );
  }
  function open(path, flags, cb) {
    callToServer(
      "open",
      {
        path: path,
        flags: flags,
      },
      cb
    );
  }
  function fstat(fd, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "stat",
        body: JSON.stringify({
          fd,
        }),
      },
      (e, response, body) => {
        if (e) {
          cb(e, null);
        }
        let res = JSON.parse(body);
        if (e) {
          cb(e, null);
        } else {
          cb(null, new Stats(res.data));
        }
      }
    );
  }
  function read(fd, buffer, offset, length, position, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "read",
        body: JSON.stringify({
          fd,
          buffer,
          offset,
          length,
          position,
        }),
      },
      (e, response, body) => {
        if (e) {
          cb(e, null);
        }
        let res = JSON.parse(body);
        if (e) {
          cb(e, null);
        } else {
          cb(null, res.bytesRead, res.buffer);
        }
      }
    );
  }
  function rename(oldpath, newpath, cb) {
    callToServer(
      "rename",
      {
        oldpath,
        newpath,
      },
      cb
    );
  }
  function access(path, cb) {
    callToServer(
      "access",
      {
        path: path,
      },
      cb
    );
  }
  function copyFile(src, dest, cb) {
    callToServer(
      "copyFile",
      {
        src,
        dest,
      },
      cb
    );
  }
  function close(fd, cb) {
    callToServer(
      "close",
      {
        fd,
      },
      cb
    );
  }

  //async

  function mkdirp(path) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "mkdirp",
        body: JSON.stringify({ path: path }),
      },
      (e, response, body) => {
        console.error(e);
      }
    );
  }

  function createWriteStream(path, options) {
    let val = deasync(createWriteStreamAsync);
    return val(path, options);
  }

  function createWriteStreamAsync(path, options, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "createWriteStream",
        body: JSON.stringify({ path: path, options: options }),
      },
      (e, response, body) => {
        if (e) {
          cb(e, null);
        }
        let res = JSON.parse(body);
        if (res.status) {
          const writableStream = new Writable();
          writableStream._write = (chunk, encoding, next) => {
            writeFile(path, chunk.toString(), encoding, () => {
              next();
            });
          };
          cb(null, writableStream);
        } else {
          cb(res.error, null);
        }
      }
    );
  }

  function createReadStream(path, options) {
    let val = deasync(createReadStreamAsync);
    return val(path, options);
  }

  function createReadStreamAsync(path, options, cb) {
    request.post(
      {
        headers: {
          "content-type": "application/json",
        },
        url: apiEndPoint + "createReadStream",
        body: JSON.stringify({ path: path, options: options }),
      },
      (e, response, body) => {
        if (e) {
          cb(e, null);
        }
        let res = JSON.parse(body);
        if (res.status) {
          //const buf = Buffer.from(new String(res.data), "utf8");
          const readable = new Readable();
          readable._read = () => {};
          readable.push(res.data);
          readable.push(null);
          cb(null, readable);
        } else {
          cb(res.error, null);
        }
      }
    );
  }
  return {
    readFile,
    readdir,
    mkdir,
    ensureDir,
    mkdirp,
    writeFile,
    appendFile,
    exists,
    unlink,
    stat,
    rmdir,
    lstat,
    createWriteStream,
    createReadStream,
    open,
    fstat,
    read,
    rename,
    access,
    copyFile,
    close,
  };
}
module.exports = vm;
