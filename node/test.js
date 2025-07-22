const app = require('axios')
async function fetchData(){
const result = await app.get('http://localhost:8001');
	
	if (result.data.Name == "Ahmad Khalaf"){
          console.log("pass");
	}
	else
console.log("fail");
}
fetchData();
