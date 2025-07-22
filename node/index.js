const express = require('express');
let json_file= require('fs');
const app = express();
const json_content=json_file.readFileSync('file.json','utf8');
app.get('/',(req,res)=> {
// add this comment file
//another commint
//thired comment
//fourth comment
// add fifth comment
// add six comment
// add comment number 7
// add comment number 8
//add comment 9
//add comment 10
//add comment 11
//add comment 12
//add comment 13
// add comment 14
// add comment 15
// add comment 16
// add comment 17
	res.send(json_content);
});
app.listen(8001,() =>{
console.log("Server Running Now.....");
});
