const CarroServices = require('../services/CarroService');

module.exports = {
    buscarTodos: async (req,res) => {
        let json = {error:'', result:[]};

        let carros = await CarroServices.buscarTodos();

        for(let i in carros){
            json .result.push({
                codigo: carros[i].codigo,
                descrição: carros[i].modelo
            });
        }

        res.json(json);
    }
}