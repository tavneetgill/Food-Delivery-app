const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    category :{
        types:String,
        require:true,
    },
    rating : [],
    prices : [],
    image:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        require:true,
    }
},{timestamp:true}
);

const foodModel=mongoose.model('food',foodSchema);
module.exports = foodModel;