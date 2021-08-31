module.exports = app => {
    const endereco = require("../controllers/endereco.controller");

    var router = require("express").Router();

    // Criando novo endereco
    router.post("/", endereco.create);

    // Recuperando todos os enderecos
    router.get("/", endereco.findAll);

    // Recuperando endereco pelo id
    router.get("/:id", endereco.findOne);

    // Atualizando endereco pelo id
    router.put("/:id", endereco.update);

    // Deletando endereco pelo id
    router.delete("/:id", endereco.delete);

    router.get("/teste",  (req, res) => {
        res.json({ message: "TESTE, MENSAGEM, OK" });
      });

    router.get("/buscaporcep/cep/:cep", endereco.buscaPorCep);


    app.use('/api/endereco', router);

    
}