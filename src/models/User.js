import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

export default User;