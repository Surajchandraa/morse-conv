# morse-conv
- Encode or Decode morse data and text.

## Installation:
- `npm i morse-conv`

## Features:
1. convert morse code into text.
2. convert text into morsecode.
3. Directly read file data and convert it into morse or text.
4. Directly save output into desired file.

## Functions available:

1. **text_to_morse("text");**

- ```js
    let morse=require('morse-conv');
    let code=morse.text_to_morse("hi suraj");
    console.log(code);
    ```
2. **morse_to_text("morse code");**

- ```js
    let data=morse.morse_to_text(".... .. / - .... .. ... / .. ... / ... ..- .-. .- .--- -.-. .... .- -. -.. .-. .- .--- --- ... .... ..");
    console.log(data)
    ```
3. **readfile(path,callback);**

- ```js
    readfile('/home/suraj/Desktop/bigger-packages/morse-conv/LICENCE.md',(err,res)=>{
        if(err){
            console.log(err);
        }
        else{
            // convert a file's text data into morse code and display it.
            // NOTE: it don't change origin file.
            console.log(text_to_morse(res));
        }
    })
    ```

4. **save_to_file(path,data);**

- ```js
    let data=morse_to_text(".... .. / - .... .. ... / .. ... / ... ..- .-. .- .--- -.-. .... .- -. -.. .-. .- .--- --- ... .... ..");
    save_to_file('/home/suraj/Desktop/output.txt',data);

    // if file not exist it will create one.
    ```
    