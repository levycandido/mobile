const express = require('express'); //importa o módulo express dentro da constante express
const documentClient = require('./dynamodbClient')
const {ScanCommand, PutCommand} = require('@aws-sdk/lib-dynamodb')

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

// O express será executado na constante app. 
// app será um objeto de servidor que será usado para fazer várias coisas como 
// por exemplo ligar o servidor
const app = express();
app.use(express.json())

app.get('/', async (request, response) => {
        const req = await documentClient.send(
            new ScanCommand ({
            TableName: 'user',
        }))
        return response.json(req.Items)
    }
)

app.post('/',  urlencodedParser, async function(req, res) {
    console.log('request', req.body)

    try{

        const command = new PutCommand({
            TableName: "user",
            Item: {
                userId: Math.floor(Math.random() * 100) + 1,
                name: req.body.name,
                cpf: req.body.cpf,
                createDate: '30/12/2023'
            },
          });
          const resp = await documentClient.send(command);
          return res.json(req.Items);

    } catch(e) {
        console.log(e)
    }
    
    
})




// liga o servidor
app.listen(3333); // ouve a porta 3333