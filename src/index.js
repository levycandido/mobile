const express = require('express'); //importa o módulo express dentro da constante express

// O express será executado na constante app. 
// app será um objeto de servidor que será usado para fazer várias coisas como 
// por exemplo ligar o servidor.
const app = express();

app.get('/', (request, response) => {
    return response.json([{
        name: 'levy',
        cpf: '088.754.745-54'},
       { name: 'Amanda',
        cpf: '222.754.999-00'}]);
})

// liga o servidor
app.listen(3333); // ouve a porta 3333