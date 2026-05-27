"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  // UP: Executa as alterações quando você roda a migration
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID, // Define o tipo como ID Universal (letras e números aleatórios)
        allowNull: false,
        primaryKey: true, // Identificador principal e único da tabela
        defaultValue: Sequelize.UUIDV4, // Gera o ID aleatório automaticamente no cadastro
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE, // Tipo data/hora
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, // Tipo data/hora
        allowNull: false,
      },
    });
  },

  // DOWN: Desfaz o que o comando 'up' fez (o Ctrl+Z da migration)
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users"); // Exclui a tabela 'users' inteira
  },
};
