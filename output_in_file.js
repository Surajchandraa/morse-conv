const fs = require("fs");
const path = require("path");

function save_to_file(path,data){
   
        fs.writeFile(path,data,(err)=>{
            if(err){
                console.log("an error occured", err);
                return;
            }
            else{
                console.log("file written sucessful");
            }
        })
    
}

module.exports=save_to_file;