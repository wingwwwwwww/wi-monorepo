const axios = require("axios");
const title = require("@wi/utils");

async function main() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log(title(res.data));
}

main();
