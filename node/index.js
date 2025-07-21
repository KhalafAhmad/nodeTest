const express = require('express');
let json_file= require('fs');
const app = express();
const json_content=json_file.readFileSync('file.json','utf8');
app.get('/',(req,res)=> {
	res.send(json_content);
});
app.listen(8001,() =>{
console.log("Server Running Now.....");
});
