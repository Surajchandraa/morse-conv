const morse = require("./index");
let data=morse.text_to_morse("suraj chandra");
console.log(data);

morse.readfile('/home/suraj/Desktop/bigger-packages/morse-conv/morse.txt',(err,res)=>{
    morse.save_to_file('/home/suraj/Desktop/bigger-packages/morse-conv/o.txt',morse.text_to_morse(res));
})
