const db = require('../models');
const axios = require('axios');
const Social = db.social;

// Criando uma nova rede social
exports.create = (req, res) => {

    // populando a entidade
    const social = {
       label: req.body.label,
       icon: req.body.icon,
       link: req.body.link,
    };

    // salvando a entidade populada
    Social.create(social).then(data => {
        res.send(data);
    })
    .catch(err => {

    });
        
},

exports.findAll = (req, res) =>{
    Social.findAll().then(data => {
        res.send(data);
    })
}