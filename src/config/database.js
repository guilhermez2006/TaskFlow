export default {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'CrudDockerPostgres',
    database: 'usersdb',
    // Define: Configurações globais que serão aplicadas automaticamente em todos os modelos (tabelas) do projeto
    define: {
        timestamps: true,     // Cria 'created_at' e 'updated_at' automáticos
        underscored: true,    // JS em camelCase -> Banco em snake_case
        underscoredAll: true  // Padroniza tabelas e chaves em snake_case
    }
}