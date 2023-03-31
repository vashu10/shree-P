const mongoose =require("mongoose")

const PostSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    city:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    sub_cat1:{
        type:String,
        required:true,
        
    },
    sub_cat2:{
        type:String,
        required:true,
        
    },
    sub_cat3:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true,
    },
    
    basic_price:{
        type:Number,
        
    },
    basic_time:{
        type:String,
        
    },
    standard_price:{
        type:Number,
    },
    standard_time:{
        type:String,
    },
    
    pre_price:{
        type:Number,
    },
    pre_time:{
        type:String,
    },
    gig_title:{
        type:String,
    },
    gig_desc:{
         type:String,
    },
    photo:{
        type:String,
        // required:true
    },
    collect_img:{
        type:String,
        // required:false
    },
   
 
  

},{timestamps:true});

module.exports=mongoose.model("VendorPost",PostSchema)
