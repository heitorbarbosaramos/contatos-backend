const db = require('../models');

const Endereco = db.endereco;
const op = db.Sequelize.Op;

// Crie e salve um novo endereco
exports.create = (req, res) => {
    console.log("Criando e salvando um novo endereco");
    // Validando requisicao
    if (!req.body.cep) {
      res.status(400).send({
        message: "O conteúdo não pode estar vazio!"
      });
      return;
    }
  
    // Criando um novo endereco
    const endereco = {
      cep: req.body.cep,
      logradouro: req.body.logradouro,
      complemento: req.body.complemento,
      bairro: req.body.bairro,
      localidade: req.body.localidade,
      uf: req.body.uf,
      ibge: req.body.ibge,
      gia: req.body.gia,
      ddd: req.body.ddd,
      siafi: req.body.siafi,
      published: req.body.published ? req.body.published : false
    };
  
    // Salvando um novo endereco
    Endereco.create(endereco)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || " Ocorreu algum erro ao criar o endereco."
        });
      });
  };


//Recupere todos os enderecos do banco de dados.
exports.findAll = (req, res) => {
    console.log("entrou");
    const cep = req.query.cep;
    var condition = cep ? { cep: { [Op.like]: `%${cep}%` } } : null;
  
    Endereco.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || " Ocorreu algum erro ao recuperar os enderecos."
        });
      });
  };



  
// Encontre um único endereco com um id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Endereco.findByPk(id)
      .then(data => {
        if(data == null){
          res.status(500).send({
            message: "Erro ao recuperar o endereco com id=" + id
          });
        }
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao recuperar o endereco com id=" + id
        });
      });
  };



  // Atualize um endereco pelo id
  exports.update = (req, res) => {
  const id = req.params.id;

  Endereco.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "O Endereco foi atualizado com sucesso."
        });
      } else {
        res.send({
          message: `Não é possível atualizar o endereco com id=${id}. Talvez Endereco não tenha sido encontrado ou o corpo da requisicao está vazio!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar o endereco com id=" + id
      });
    });
};


// Exclui um endereco com o id especificado
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Endereco.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Endereco excluído com sucesso!"
          });
        } else {
          res.send({
            message: `Não é possível excluir o endereco com id=${id}.Talvez o endereco não tenha sido encontrado!
            `
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Não foi possível excluir o endereco com id=" + id
        });
      });
  };


  
// Exclua todos os enderecos do banco de dados.
exports.deleteAll = (req, res) => {
    Endereco.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} enderecos foram excluídos com sucesso!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao remover todos os enderecos."
        });
      });
  };



  // encontre todos os enderecos publicados
  exports.findAllPublished = (req, res) => {
    Endereco.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu algum erro ao recuperar os endererecos."
        });
      });
  };