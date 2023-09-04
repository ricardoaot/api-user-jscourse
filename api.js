const express = require('express');
const user = require('./user.controller');
const app = express();
const port = 3000;


app.get('/', user.list)
app.get('/:id', user.get)
app.post('/', user.create)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)

app.get('*',(req,res)=>{
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => {
    console.log('arrancando una aplicacion')
})

/*
Get 	/users/:id 	Get list or specific user
Post 	/users 		Insert a user
Put 	/users/:id 	Replace an item
Patch 	/users/:id 	Replace an specific attribute
Delete 	/users/:id 	Delete user

200	ok 	object
201	ok	creado id
204	ok	no content

*/