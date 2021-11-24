const deasync = require("deasync");
const fsConnector = require("./identify");
function externalFs(stringObj) {
  let constant = stringObj ? JSON.parse(stringObj) : {};
  function readFile(path, options, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.readFile(path, options, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function writeFile(path, detailsToWrite, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.writeFile(path, detailsToWrite, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function readdir(path, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.readdir(path, (e, res) => {
        cb(e, res);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function mkdir(path, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.mkdir(path, (e, res) => {
        cb(e, res);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function appendFile(path, detailsToWrite, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.appendFile(path, detailsToWrite, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function exists(path, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.exists(path, (res) => {
        cb(null, res);
      });
    } catch (e) {
      console.error(e);
      cb(false);
    }
  }
  function unlink(path, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.unlink(path, (e, res) => {
        cb(e, res);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function stat(path, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.stat(path, (e, res) => {
        cb(e, res);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function ensureDir(path) {
    try {
      const connection = fsConnector.identify(constant);
      return connection.ensureDir(path);
    } catch (e) {
      console.error(e);
    }
  }
  function rmdir(path) {
    try {
      const connection = fsConnector.identify(constant);
      return connection.rmdir(path);
    } catch (e) {
      console.error(e);
    }
  }
  function lstat(path) {
    try {
      const connection = fsConnector.identify(constant);
      connection.lstat(path, (e, res) => {
        cb(e, res);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }

  function createWriteStream(path, options) {
    try {
      const connection = fsConnector.identify(constant);
      return connection.createWriteStream(path, options);
    } catch (e) {
      console.error(e);
      return e;
    }
  }
  function createReadStream(path, options) {
    try {
      const connection = fsConnector.identify(constant);
      return connection.createReadStream(path, options);
    } catch (e) {
      console.error(e);
      return e;
    }
  }
  function open(path, flags, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.open(path, flags, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function fstat(fd, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.fstat(fd, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function read(fd, buffer, offset, length, position, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.read(fd, buffer, offset, length, position, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function rename(oldpath, newpath, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.rename(oldpath, newpath, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function access(path, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.access(path, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function copyFile(src, dest, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.copyFile(src, dest, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function close(fd, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.close(fd, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }

  //sync
  function mkdirp(path) {
    try {
      const connection = fsConnector.identify(constant);
      connection.mkdirp(path);
    } catch (e) {
      console.error(e);
    }
  }
  const readFileSync = deasync(readFile);
  const existsSync = deasync(exists);
  const mkdirSync = deasync(mkdir);
  const writeFileSync = deasync(writeFile);
  const appendFileSync = deasync(appendFile);
  const unlinkSync = deasync(unlink);
  const statSync = deasync(stat);
  const ensureDirSync = deasync(ensureDir);
  const readdirSync = deasync(readdir);
  const rmdirSync = deasync(rmdir);
  const lstatSync = deasync(lstat);
  const openSync = deasync(open);
  const fstatSync = deasync(fstat);
  const readSync = deasync(read);
  const closeSync = deasync(close);
  const renameSync = deasync(rename);
  const accessSync = deasync(access);
  const copyFileSync = deasync(copyFile);
  return {
    readFile,
    readFile,
    mkdirSync,
    readdir,
    readdirSync,
    existsSync,
    statSync,
    readFileSync,
    writeFileSync,
    ensureDir,
    ensureDirSync,
    mkdirp,
    writeFile,
    unlinkSync,
    appendFile,
    appendFileSync,
    exists,
    unlink,
    stat,
    rmdir,
    rmdirSync,
    lstat,
    lstatSync,
    createWriteStream,
    createReadStream,
    open,
    openSync,
    fstat,
    fstatSync,
    read,
    readSync,
    close,
    closeSync,
    rename,
    renameSync,
    access,
    accessSync,
    mkdir,
    copyFile,
    copyFileSync,
  };
}
//async

//mkdirSync('trial')
module.exports = externalFs;
