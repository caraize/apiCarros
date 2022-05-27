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
    },

    buscarUm: async (req,res) => {
        let json = {error:'', result:[]};

        let codigo = req.params.codigo; //pegar o parametro e armazenar na variavel codigo
        let carro = await CarroServices.buscarUm(codigo);

        if(carro){
            json.result=carro; //verificar se tem carro, se tiver joga no json 
        }

        res.json(json);
    },

    
    inserir: async (req,res) => {
        let json = {error:'', result:[]};

        let modelo = req.body.modelo
        let placa = req.body.placa
     
        if(modelo && placa){
            let carroCodigo = await CarroServices.inserir(modelo, placa);
            json.result={
                codigo:carroCodigo,
                modelo,
                placa
            }
        }else {
            json.error = 'Campos nao encontrados';
        }
    
        res.json(json);
    }
    
}