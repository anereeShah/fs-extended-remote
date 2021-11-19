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
  function writeFile(path, detailsToWrite, options, cb) {
    try {
      const connection = fsConnector.identify(constant);
      connection.writeFile(path, detailsToWrite, options, (err, data) => {
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
  };
}
//async

//mkdirSync('trial')
module.exports = externalFs;
