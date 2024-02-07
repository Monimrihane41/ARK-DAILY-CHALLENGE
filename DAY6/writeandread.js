const { rejects } = require("assert")
const { isUtf8 } = require("buffer")
const fs = require("fs")
const { resolve } = require("path")

function readFileAsync(filePath){
    return new Promise((resolve,reject)=>{ 
        fs.readFile(filePath,'utf-8',(err, data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFileAsync(filePath,content){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,content,(err)=>{
            if (err) {
                reject(err);
            }else{
                resolve("done");
            }
        })
    }
    )
    
}


async function processFiles(filePaths) {
    
    try{
        for (let filePath of filePaths) {
            let content = await readFileAsync(filePath)
            content = content.toUpperCase()
            content = content.split(" ").reverse().join(" ")
            let newFilePath = `${filePath.split(".")[0]}_new.txt`
            content = `${new Date().toISOString()} : ${content}`
            let result = await writeFileAsync(newFilePath, content)
            console.log(result)
        }
    } catch (err){
        console.log(err)
    }
}
module.exports = {processFiles,readFileAsync,writeFileAsync}  