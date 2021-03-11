const mongoose=require('mongoose')
const { Schema } = mongoose;

const personSchema=new Schema({
 name:{type:String,required:true},
 age:{type:String},
 favoriteFood:{type:[String]},
})
const person = mongoose.model('person', personSchema );

module.exports=person