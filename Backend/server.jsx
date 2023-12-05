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
    const password = req.body.password;
    const cPassword = req.body.cpassword;
    let numOfRows;
    
    console.log(userName,password,cPassword);
    

    db.query("SELECT * FROM users WHERE user_username = ?", [userName], (err,result)=>{
        numOfRows = result.length;
        if(err) {
            return (res.json("Error")) ;
        } 
        else if(numOfRows>0){
            console.log("Username Already Exists")
        }
        else if (password!=cPassword){
            console.log("Passwords do not match");
        }
        else{
           
            db.query("INSERT INTO users (user_username, user_password) VALUES (?,?)",[userName,password], (err,result)=>{
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


    app.post('/login', (req,res)=> {

        const userName = req.body.userName;
        const password = req.body.password;
        let numOfRows;
        
        console.log(userName,password);
        
    
        db.query("SELECT * FROM users WHERE user_username = ? AND user_password = ?", [userName,password], (err,result)=>{
            numOfRows = result.length;
            if(err) {
                return (res.json("Error")) ;
            } 
            else if(numOfRows==1){
                console.log("Logged In");
            }
            else {
                console.log("Incorrect info");
            }
            
            console.log(numOfRows);
        }
        )    
        
        })
    




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})