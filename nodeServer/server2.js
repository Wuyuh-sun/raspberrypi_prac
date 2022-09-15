const express = require('express');
const app = express();

app.use(express.static('sub'));

app.get("/", (req,res)=>{
  res.redirect("/home.html");
})

app.listen(3003, ()=>{
  console.log(`Server running at http://localhost:3003`);
})