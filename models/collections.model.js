module.exports = (sequelize, { DataTypes }) => {
  const Collection = sequelize.define("collections", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        min: 3,
        max: 255,
      }
    }
  });

  Collection.associate = ({ books }) => {
    Collection.belongsToMany(books, { through: "book_collections" });
  }
  
  return Collection;
}