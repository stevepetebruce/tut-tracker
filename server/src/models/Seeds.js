

module.exports = (sequelize, DataTypes) =>  {
  const Seed = sequelize.define('Seed', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    category: {
      type: DataTypes.STRING,
    },
    onlineDescription: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    sow: {
      type: DataTypes.STRING,
    },
    harvest: {
      type: DataTypes.STRING,
    },
    tips: {
      type: DataTypes.TEXT,
    }
  });

  return User;
};