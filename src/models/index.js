import Sequelize from 'sequelize';

import user from './user';
import message from './message';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: '10.0.0.6',
    dialect: 'postgres',
  },
);

const models = {
  User: user(sequelize, Sequelize.DataTypes),
  Message: message(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;