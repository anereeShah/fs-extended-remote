const fsConnector = require("./identify");
function externalFs(stringObj) {
  let constant = stringObj ? JSON.parse(stringObj) : {};
  function segregateArgumentsAndCb(arguments) {
    let args = [...arguments];
    let cb = args.pop();
    if (typeof cb !== "function") {
      throw "Callback is not a function";
    }
    return [cb, args];
  }
  function readFile(...arguments) {
    try {
      let [cb,[path, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.readFile(path, options, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function writeFile(...arguments) {
    try {
      let [cb,[path, data, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.writeFile(path, data, options, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function readdir(...arguments) {
    try {
      let [cb,[path, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.readdir(path, options, (e, res) => {
        cb(e, res);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function mkdir(...arguments) {
    try {
      let [cb,[path, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.mkdir(path, options, (e, res) => {
        cb(e, res);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function appendFile(...arguments) {
    try {
      let [cb,[path, detailsToWrite, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.appendFile(path, detailsToWrite, options, (err, data) => {
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
  function stat(...arguments) {
    try {
      let [cb,[path, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.stat(path, options, (e, res) => {
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
  function rmdir(...arguments) {
    try {
      let [cb,[path, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      return connection.rmdir(path, options, (e) => {
        cb(e);
      });
    } catch (e) {
      console.error(e);
    }
  }
  function lstat(...arguments) {
    try {
      let [cb,[path, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.lstat(path, options, (e, res) => {
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
  function open(...arguments) {
    try {
      let [cb,[path, flags, mode]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.open(path, flags, mode, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function fstat(...arguments) {
    try {
      let [cb,[fd, options]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.fstat(fd, options, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function read(...arguments) {
    try {
      let [cb,[fd, buffer, offset, length, position]] = segregateArgumentsAndCb(arguments);
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
  function access(...arguments) {
    try {
      let [cb,[path, mode]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.access(path, mode, (err, data) => {
        cb(err, data);
      });
    } catch (e) {
      console.error(e);
      cb(e, null);
    }
  }
  function copyFile(...arguments) {
    try {
      let [cb,[src, dest, mode]] = segregateArgumentsAndCb(arguments);
      const connection = fsConnector.identify(constant);
      connection.copyFile(src, dest, mode, (err, data) => {
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


  /////////////////////////////////////////////////// sync Methods ///////////////////////////////////

  function readFileSync(path, options) {
    const connection = fsConnector.identify(constant);
    return connection.readFileSync(path, options);
  }
  function writeFileSync(path, data, options) {
    const connection = fsConnector.identify(constant);
    return connection.writeFileSync(path, data, options);
  }
  function readdirSync(path, options) {
    const connection = fsConnector.identify(constant);
    return connection.readdirSync(path, options);
  }
  function mkdirSync(path, options) {
    const connection = fsConnector.identify(constant);
    return connection.mkdirSync(path, options);
  }
  function appendFileSync(path, detailsToWrite, options) {
    const connection = fsConnector.identify(constant);
    return connection.appendFileSync(path, detailsToWrite, options);
  }
  function existsSync(path) {
    const connection = fsConnector.identify(constant);
    return connection.existsSync(path);
  }
  function unlinkSync(path) {
    const connection = fsConnector.identify(constant);
    return connection.unlinkSync(path);
  }
  function statSync(path, options) {
    const connection = fsConnector.identify(constant);
    return connection.statSync(path, options);
  }
  function ensureDirSync(path) {
    const connection = fsConnector.identify(constant);
    return connection.ensureDirSync(path);
  }
  function rmdirSync(path, options) {
    const connection = fsConnector.identify(constant);
    return connection.rmdirSync(path, options);
  }
  function lstatSync(path, options) {
    const connection = fsConnector.identify(constant);
    return connection.lstatSync(path, options);
  }

  function openSync(path, flags, mode) {
    const connection = fsConnector.identify(constant);
    return connection.openSync(path, flags, mode);
  }
  function fstatSync(fd, options) {
    const connection = fsConnector.identify(constant);
    return connection.fstatSync(fd, options);
  }
  function readSync(fd, buffer, offset, length, position) {
    const connection = fsConnector.identify(constant);
    return connection.readSync(fd, buffer, offset, length, position);
  }
  function renameSync(oldpath, newpath) {
    const connection = fsConnector.identify(constant);
    return connection.renameSync(oldpath, newpath);
  }
  function accessSync(path, mode) {
    const connection = fsConnector.identify(constant);
    return connection.accessSync(path, mode);
  }
  function copyFileSync(src, dest, mode) {
    const connection = fsConnector.identify(constant);
    return connection.copyFileSync(src, dest, mode);
  }
  function closeSync(fd) {
    const connection = fsConnector.identify(constant);
    return connection.closeSync(fd);
  }

  // const readFileSync = deasync(readFile);
  // const existsSync = deasync(exists);
  // const mkdirSync = deasync(mkdir);
  // const writeFileSync = deasync(writeFile);
  // const appendFileSync = deasync(appendFile);
  // const unlinkSync = deasync(unlink);
  // const statSync = deasync(stat);
  // const ensureDirSync = deasync(ensureDir);
  // const readdirSync = deasync(readdir);
  // const rmdirSync = deasync(rmdir);
  // const lstatSync = deasync(lstat);
  // const openSync = deasync(open);
  // const fstatSync = deasync(fstat);
  // const readSync = deasync(read);
  // const closeSync = deasync(close);
  // const renameSync = deasync(rename);
  // const accessSync = deasync(access);
  // const copyFileSync = deasync(copyFile);
  return {
    readFile,
    readFileSync,
    mkdir,
    mkdirSync,
    readdir,
    readdirSync,
    exists,
    existsSync,
    stat,
    statSync,
    ensureDir,
    ensureDirSync,
    writeFile,
    writeFileSync,
    unlink,
    unlinkSync,
    appendFile,
    appendFileSync,
    rmdir,
    rmdirSync,
    lstat,
    lstatSync,
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
    copyFile,
    copyFileSync,
    mkdirp,
    createWriteStream,
    createReadStream,
  };
}
//async

//mkdirSync('trial')
module.exports = externalFs;
