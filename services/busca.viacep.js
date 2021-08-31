const axios = require('axios');

module.exports = function(cep){

    const api = axios.create({
        baseURL: "https://viacep.com.br/ws/" + cep + "/json",
      });

      return api;
}


