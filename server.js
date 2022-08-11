const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();

app.listen(5000)
app.use(express.json())


const users = [
  {
    id:1,
    username: "mohamed",
    password : "1234",
    isAdmin : false,

  },
  {
    id:2,
    username : "ahmed",
    password : "1234",
    isAdmin : true
  }
]

app.post("/api/login" , (req,res) => {
  const {username , password} = req.body
  const user = users.find((u)=> {
    return u.username === username && u.password === password;

  });

  if(user) {
    const accessToken = jwt.sign({id: user.id , isAdmin : user.isAdmin } , "hashSecretKey") 
    res.json({
      username:user.username,
      isAdmin:user.isAdmin,
      accessToken
    })
  }else{
    //error in username or pass
    res.status(400).json("username incorrect")
    
  }
})

const  verify = (req , res , next)=> {
  const authHeader = req.headers.authorization;
  if(authHeader) {
    const token = authHeader.split(" ")[1]
  }else {
    res.status(401).json("not authorized")
  }
}

