const mongoose = require('mongoose');

 const connectToDb =  () =>{


    mongoose.connect('mongodb://localhost:27017/subadmins').then(()=>{
        console.log('connected to db')
    }).catch((err)=>{

        console.log(err);
    })
    

}


module.exports = connectToDb;