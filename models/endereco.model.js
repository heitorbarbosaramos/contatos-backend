module.exports = (sequelize, Sequelize) => {
    const Endereco = sequelize.define("endereco", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        cep: Sequelize.STRING(10),
        logradouro: Sequelize.STRING,
        complemento: Sequelize.STRING,
        bairro: Sequelize.STRING,
        localidade: Sequelize.STRING,
        uf: Sequelize.STRING(2),
        ibge: Sequelize.STRING,
        gia: Sequelize.STRING,
        ddd: Sequelize.STRING(2),
        siafi: Sequelize.STRING,
    });
    return Endereco;
}