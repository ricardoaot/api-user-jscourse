const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ricardoaot:qhDAwZQ1RAUFzWkF@cluster.pw2eeja.mongodb.net/?retryWrites=true&w=majority')
// mongo pwd qhDAwZQ1RAUFzWkF

const User = mongoose.model('User',{
    userName:String,
    edad:Number
})

const crear = async () =>{
    const user = new User({
        userName:'Chanchito Triste',
        edad:15
    })
    const savedUser = await user.save()
    console.log(savedUser)
}

//crear()

const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

const buscar = async ()=>{
    const user = await User.find({
        userName:'Chanchito'
    })
    console.log(user)

}
//buscar();

//find return an array []
//findOne return an object {}

const buscarUno = async () => {
    const user = await User.findOne({
        userName:'Chanchito'
    })

    console.log(user)
}

buscarUno();