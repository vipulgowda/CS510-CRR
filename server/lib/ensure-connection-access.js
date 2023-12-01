const appLog = require('./app-log');
const connectionDetails = require('./connection-details');

/**
 * Ensure admin email is a user if provided
 * If password is provided, update password
 * @param {*} sequelizeDb
 * @param {import('./config')} config
 */
async function ensureConnectionAccess(sequelizeDb, config) {
  if (config.get('allowConnectionAccessToEveryone')) {
    const existing = await sequelizeDb.ConnectionAccesses.findOne({
      where: {
        connectionId: connectionDetails.EVERY_CONNECTION_ID,
        userId: connectionDetails.EVERYONE_ID,
      },
    });
    if (!existing) {
      appLog.info('Creating access on every connection to every user...');
      await sequelizeDb.ConnectionAccesses.create({
        connectionId: connectionDetails.EVERY_CONNECTION_ID,
        connectionName: connectionDetails.EVERY_CONNECTION_NAME,
        userId: connectionDetails.EVERYONE_ID,
        userEmail: connectionDetails.EVERYONE_EMAIL,
        duration: 0,
        expiryDate: new Date(new Date().setFullYear(2099)),
      });
    }
  }
}

module.exports = ensureConnectionAccess;
