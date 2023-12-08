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
    

//Give all products
app.get('/products', (req,res)=> {

    let numOfRows;
    
    db.query("SELECT * FROM products", (err,result)=>{
        numOfRows = result.length;
        console.log(numOfRows);
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })


//get one product for order
app.get('/products/:product_id', (req,res)=> {

    const product_id = req.params.product_id;
    
    db.query("SELECT * FROM products WHERE product_id = ?",[product_id], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })


app.post('/addToCart', (req,res)=> {

    const product_id = req.body.id;
    const product_quantity = req.body.Quantity;
    const userEmail = req.body.userEmail;
  
    db.query("INSERT INTO orders(order_user_email,order_product_id,order_quantity,status,order_date_time) VALUES(?,?,?,?,CURRENT_TIMESTAMP)",[userEmail,product_id,product_quantity,"cart"], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })

// Fetching Cart Items
app.post('/cartItems', (req,res)=> {

    const userEmail = req.body.userEmail;
  
    db.query("SELECT `products`.*, `orders`.`order_id` FROM `products`,`orders` WHERE order_user_email = ? AND order_product_id = products.product_id AND orders.status = 'cart'",[userEmail], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })

//Removing Cart Item
app.post('/removeCartItem', (req,res)=> {

    const userEmail = req.body.userEmail;
    const product_id = req.body.product_id;
  
    db.query("DELETE FROM orders WHERE order_user_email = ? AND order_product_id = ? AND status = 'cart'",[userEmail,product_id], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
    }
    )    
    
    })

//checking out
app.post('/checkout', (req,res)=> {

    const userEmail = req.body.userEmail;

    db.query("UPDATE orders SET status = 'paid' WHERE order_user_email = ? AND status = 'cart'",[userEmail], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
    }
    )
     
    
    })

//order history
app.post('/orderHistory', (req,res)=> {

    const userEmail = req.body.userEmail;
    
    db.query("SELECT `products`.*, `orders`.* FROM `products`,`orders` WHERE order_user_email = ? AND order_product_id = products.product_id AND orders.status != 'cart'",[userEmail], (err,result)=>{
        if(err) {
            return (res.json("Error")) ;
        } 
        else {
            return res.json({data : result});
        }
    }
    )    
    
    })
    


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})