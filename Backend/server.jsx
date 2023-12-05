const express = require('express');
const db = require('./config/db.jsx');
const cors = require('cors');

const app = express();

const PORT = 3002;

app.use(cors());
app.use(express.json());


//Queries

//signup user
app.post('/signup', (req,res)=> {

    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const password = req.body.password;
    const cPassword = req.body.cpassword;
    let numOfRows;
    
    console.log(userName,password,cPassword,userEmail);
    

    db.query("SELECT * FROM users WHERE user_email = ?", [userEmail], (err,result)=>{
        numOfRows = result.length;
        if(err) {
            return (res.json("Error")) ;
        } 
        else if(numOfRows>0){
            return res.json("Email is already registered")
        }
        else if (password!=cPassword){
            return res.json("Passwords do not match");
        }
        else{
            db.query("INSERT INTO users (user_username, user_password, user_email) VALUES (?,?,?)",[userName,password,userEmail], (err,result)=>{
                if(err) {
                    return res.json("Error");
                } 
                console.log("Registered Successfully");
                return res.json(result);
             }
             );   
        }
        console.log(numOfRows);
    }
    )    
    
    })

//login user
app.post('/login', (req,res)=> {

    const userEmail = req.body.userEmail;
    const password = req.body.password;
    let numOfRows;
    
    console.log(userEmail,password);
    

    db.query("SELECT * FROM users WHERE user_email = ? AND user_password = ?", [userEmail,password], (err,result)=>{
        numOfRows = result.length;
        if(err) {
            return (res.json("Error")) ;
        } 
        else if(numOfRows==1){
            console.log("Logged In");
            res.json({data : result});
        }
        else {
           return res.json("Incorrect Email or Password")
        }console.log(numOfRows);
    }
    )    
    
    })
    




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})