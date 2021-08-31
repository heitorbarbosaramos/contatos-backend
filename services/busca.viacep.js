const axios = require('axios');

module.exports = function(){
    
    const api = axios.create({
        baseURL: "https://api.github.com",
      });

      return api;
}


