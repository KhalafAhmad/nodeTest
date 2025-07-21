const app = require('axios')
async function fetchData(){
const result = await app.get('http://localhost:8001');
	
	if (result.data.Name == "Ali Mahmoud"){
          console.log("Test pass.......");
	}
	else
console.log("Test fail.......");
}
fetchData();
