const db_config = {
    connectTimeout: 10000,      //The milliseconds before a timeout occurs during the initial connection to the MySQL server.
    connectionLimit: 5,       // maximum simultaneous connections, connection #26 will have to wait until on currently in-use connection is released back to the pool.
    multipleStatements: true,  // allows us to run multiple sql statements together in one query. if not set to true, an error will occur when chaining statements.
    host: 'localhost',
    user: 'root',
    database: 'learn01'
};

module.exports = db_config;