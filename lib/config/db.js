import Sequelize from 'sequelize';
import config from '../config';
import programs from '../app/models/programs';
import keyboardShortcuts from '../app/models/keyboardShortcuts';
import comments from '../app/models/comments';

const { database, db_username, db_password, db_options } = config;
const sequelize = new Sequelize(database, db_username, db_password, db_options);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.keyboard_shortcuts = keyboardShortcuts(sequelize, Sequelize);
db.programs = programs(sequelize, Sequelize);
db.comments = comments(sequelize, Sequelize);

db.keyboard_shortcuts.belongsTo(db.programs, {foreignKey: 'program_id', targetKey: 'id'});
db.comments.belongsTo(db.keyboard_shortcuts, {foreignKey: 'key_id', targetKey: 'id'});

export default db;
