const path = require('path');
const { mkdirp } = require('mkdirp');
const Models = require('../models');
const SequelizeDb = require('../sequelize-db');

/**
 * Whenever possible db should be read from the app req object.
 * Sometimes this isn't possible or convenient at the moment however.
 * For those cases, this module provides access by caching the db instance.
 * Safety measures have been added to ensure only 1 instance of db can be initialized per alias
 */

const initDb = (config) =>{
  const dbPath = config.get('dbPath');
  mkdirp.sync(path.join(dbPath, '/cache'));

  const sequelizeDb = new SequelizeDb(config);
  const models = new Models(sequelizeDb, config);

  return { models, sequelizeDb };
}

class DatabaseConnection {
  constructor(instances = {}) {
    this.instances = instances
    this.initDb = initDb.bind(this)
  }

  async getDb(instanceAlias = 'default') {
    const instancePromise = this.instances[instanceAlias];
    if (!instancePromise) {
      throw new Error('db instance must be created first');
    }
    // already be a promise -- this just makes it explicit
    const { models, sequelizeDb } = await instancePromise;
    return { models, sequelizeDb };
  }

  makeDb(config, instanceAlias = 'default') {
    // makeDb should only be called once for a given alias
    if (this.instances && this.instances[instanceAlias]) {
      throw new Error(`db instance ${instanceAlias} already made`);
    }
    const dbPromise = this.initDb(config);
    this.instances[instanceAlias] = dbPromise;
    return true;
  }
}

module.exports = DatabaseConnection;
